require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const cheerio = require('cheerio');
const { processTestFile } = require('./ai-processor');
const { generateReadingTest, generateListeningTest } = require('./template-generator');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================
// MIDDLEWARE
// ============================
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files (builder assets + existing tests)
app.use(express.static(path.join(__dirname, '../public'), {
    // Only serve specific known asset types from root
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.css')) res.setHeader('Content-Type', 'text/css');
        if (filePath.endsWith('.js')) res.setHeader('Content-Type', 'application/javascript');
    }
}));
app.use('/tests', express.static(path.join(__dirname, '../public')));

// ============================
// FILE UPLOAD CONFIG
// ============================
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB max
    fileFilter: (req, file, cb) => {
        const allowed = ['.pdf', '.docx', '.html', '.htm', '.txt'];
        const ext = path.extname(file.originalname).toLowerCase();
        if (allowed.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error(`Unsupported file type: ${ext}. Accepted: ${allowed.join(', ')}`));
        }
    }
});

// ============================
// ROUTES
// ============================

// Serve builder UI
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/builder.html'));
});

// Upload & process file
app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return res.status(400).json({ error: 'OpenAI API key is required' });
        }

        const testType = req.body.testType || 'reading';
        if (!['reading', 'listening'].includes(testType)) {
            return res.status(400).json({ error: 'Invalid test type. Use "reading" or "listening".' });
        }

        // Extract text from file
        const ext = path.extname(req.file.originalname).toLowerCase();
        let extractedText;

        try {
            extractedText = await extractText(req.file.buffer, ext);
        } catch (extractErr) {
            return res.status(400).json({ error: `Failed to extract text: ${extractErr.message}` });
        }

        if (!extractedText || extractedText.trim().length < 100) {
            return res.status(400).json({ error: 'Extracted text is too short. Please upload a valid IELTS test document.' });
        }

        // Process with OpenAI
        const testData = await processTestFile(extractedText, testType, apiKey);

        res.json({
            success: true,
            testType,
            testData,
            message: 'Test data extracted successfully'
        });
    } catch (err) {
        console.error('Upload error:', err);
        res.status(500).json({ error: err.message || 'Failed to process file' });
    }
});

// Generate downloadable HTML
app.post('/api/generate', async (req, res) => {
    try {
        const { testData, testType } = req.body;

        if (!testData || !testType) {
            return res.status(400).json({ error: 'testData and testType are required' });
        }

        let html;
        if (testType === 'reading') {
            await embedImages(testData);
            html = generateReadingTest(testData);
        } else if (testType === 'listening') {
            await embedImages(testData);
            html = generateListeningTest(testData);
        } else {
            return res.status(400).json({ error: 'Invalid test type' });
        }

        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Disposition', `attachment; filename="ielts-${testType}-test.html"`);
        res.send(html);
    } catch (err) {
        console.error('Generate error:', err);
        res.status(500).json({ error: err.message || 'Failed to generate test' });
    }
});

// ============================
// TEXT EXTRACTION
// ============================
async function extractText(buffer, ext) {
    switch (ext) {
        case '.pdf':
            return extractFromPdf(buffer);
        case '.docx':
            return extractFromDocx(buffer);
        case '.html':
        case '.htm':
            return extractFromHtml(buffer);
        case '.txt':
            return buffer.toString('utf-8');
        default:
            throw new Error(`Unsupported file type: ${ext}`);
    }
}

async function extractFromPdf(buffer) {
    const data = await pdfParse(buffer);
    return data.text;
}

async function extractFromDocx(buffer) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
}

function extractFromHtml(buffer) {
    const htmlString = buffer.toString('utf-8');
    const $ = cheerio.load(htmlString);
    // Remove script and style elements
    $('script, style').remove();
    // Preserve image sources
    $('img').each(function () {
        const src = $(this).attr('src');
        if (src) {
            $(this).replaceWith(` [IMAGE: ${src}] `);
        }
    });
    return $.text().replace(/\s+/g, ' ').trim();
}

async function embedImages(testData) {
    for (const partKey in testData) {
        const part = testData[partKey];
        if (!part.questions) continue;
        for (const section of part.questions) {
            if (section.image && section.image.startsWith('http')) {
                try {
                    const response = await fetch(section.image);
                    const arrayBuffer = await response.arrayBuffer();
                    const b64 = Buffer.from(arrayBuffer).toString('base64');
                    const mime = response.headers.get('content-type') || 'image/png';
                    section.image = `data:${mime};base64,${b64}`;
                } catch (e) {
                    console.warn("Failed to fetch image:", section.image, e.message);
                }
            }
        }
    }
}

// ============================
// START SERVER
// ============================
app.listen(PORT, () => {
    console.log(`\n  🎓 IELTS CD Test Builder`);
    console.log(`  ━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`  Server running at: http://localhost:${PORT}`);
    console.log(`  Press Ctrl+C to stop\n`);
});
