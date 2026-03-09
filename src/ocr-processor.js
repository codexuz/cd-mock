const OpenAI = require('openai');

/**
 * Process a file for OCR using OpenAI.
 * @param {Buffer} buffer - The file buffer.
 * @param {string} mimetype - The mime type of the file.
 * @param {string} apiKey - OpenAI API key.
 * @returns {Promise<string>} - The extracted text.
 */
async function processOcr(buffer, mimetype, apiKey) {
    const client = new OpenAI({ apiKey });

    if (mimetype.startsWith('image/')) {
        return processImageOcr(client, buffer, mimetype);
    } else if (mimetype === 'application/pdf') {
        return processPdfOcr(client, buffer);
    } else {
        throw new Error(`Unsupported mimetype for OCR: ${mimetype}`);
    }
}

/**
 * Process an image for OCR using GPT-4o.
 */
async function processImageOcr(client, buffer, mimetype) {
    const base64Image = buffer.toString('base64');
    
    const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: "You are an OCR assistant. Extract all text from the provided image exactly as it appears. Maintain the layout and structure as much as possible. Do not add any commentary or explanations."
            },
            {
                role: "user",
                content: [
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:${mimetype};base64,${base64Image}`
                        }
                    }
                ]
            }
        ],
        max_tokens: 4096,
    });

    return response.choices[0].message.content;
}

/**
 * Process a PDF for OCR using OpenAI Assistants API or page-by-page GPT-4o.
 * Because native 'canvas' and 'pdf-img-convert' failed, we'll use a simpler approach:
 * If it's a small PDF, we'll try to use the Assistants API which has built-in OCR (file search/vision).
 * Or we can use pdf-lib to extract images if they are embedded.
 * For now, let's implement the Assistants API approach as it's more robust for "scanned" content.
 */
async function processPdfOcr(client, buffer) {
    // Note: OpenAI Assistants API is great for this, but for a simple "endpoint", 
    // it might be slow. However, it's the most reliable way without local dependencies.
    
    // Create a temporary file for OpenAI
    const fs = require('fs');
    const path = require('path');
    const tmpPath = path.join(__dirname, `../tmp_ocr_${Date.now()}.pdf`);
    fs.writeFileSync(tmpPath, buffer);

    try {
        const file = await client.files.create({
            file: fs.createReadStream(tmpPath),
            purpose: "vision", // or "assistants"
        });

        // Since 'vision' purpose doesn't support PDF directly in chat completions yet 
        // (only images), but Assistants DO support PDF OCR.
        // Let's use gpt-4o-mini or gpt-4o with the file if supported, 
        // or fall back to explaining to the user we need images.
        
        // Actually, gpt-4o-mini supports some document types, but let's stick to 
        // the most reliable path: Assistants.
        
        const assistant = await client.beta.assistants.create({
            name: "OCR Assistant",
            instructions: "You are an expert at OCR. Read the attached PDF and extract all text. Provide only the text content.",
            model: "gpt-4o",
            tools: [{ type: "file_search" }],
        });

        const thread = await client.beta.threads.create({
            messages: [
                {
                    role: "user",
                    content: "Please extract the text from this PDF file.",
                    attachments: [
                        { file_id: file.id, tools: [{ type: "file_search" }] }
                    ],
                },
            ],
        });

        const run = await client.beta.threads.runs.createAndPoll(thread.id, {
            assistant_id: assistant.id,
        });

        if (run.status === 'completed') {
            const messages = await client.beta.threads.messages.list(thread.id);
            const content = messages.data[0].content[0].text.value;
            
            // Cleanup
            await client.files.del(file.id);
            await client.beta.assistants.del(assistant.id);
            
            return content;
        } else {
            throw new Error(`OCR Run failed with status: ${run.status}`);
        }
    } finally {
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
}

module.exports = { processOcr };
