const fs = require('fs');
const path = require('path');

// ============================
// READ TEMPLATE FILES
// ============================
function readFile(filename) {
    return fs.readFileSync(path.join(__dirname, '../public', filename), 'utf-8');
}

// ============================
// GENERATE READING TEST
// ============================
function generateReadingTest(testData) {
    const indexHtml = readFile('index.html');
    const appJs = readFile('app.js');
    const styleCss = readFile('style.css');

    // Replace the TEST_DATA in app.js with user's data
    const dataJson = JSON.stringify(testData, null, 2);
    const modifiedJs = appJs.replace(
        /const TEST_DATA = \{[\s\S]*?\n\};/,
        `const TEST_DATA = ${dataJson};`
    );

    // Build self-contained HTML
    const html = buildSelfContainedHtml(indexHtml, modifiedJs, styleCss);
    return html;
}

// ============================
// GENERATE LISTENING TEST
// ============================
function generateListeningTest(testData) {
    const listenHtml = readFile('listening.html');
    const listenJs = readFile('listening.js');
    const styleCss = readFile('style.css');
    const listenCss = readFile('listening.css');

    // Replace the LISTEN_DATA in listening.js with user's data
    const dataJson = JSON.stringify(testData, null, 2);
    const modifiedJs = listenJs.replace(
        /const LISTEN_DATA = \{[\s\S]*?\n\};/,
        `const LISTEN_DATA = ${dataJson};`
    );

    // Combine both CSS files
    const combinedCss = styleCss + '\n\n/* === LISTENING CSS === */\n\n' + listenCss;

    // Build self-contained HTML
    const html = buildSelfContainedHtml(listenHtml, modifiedJs, combinedCss);
    return html;
}

// ============================
// BUILD SELF-CONTAINED HTML
// ============================
function buildSelfContainedHtml(htmlTemplate, jsContent, cssContent) {
    let html = htmlTemplate;

    // Remove external CSS links and replace with inline
    html = html.replace(/<link\s+rel="stylesheet"\s+href="[^"]*"[^>]*>/g, '');
    // Remove external JS script tags and replace with inline
    html = html.replace(/<script\s+src="[^"]*"[^>]*><\/script>/g, '');

    // Insert inline CSS before </head>
    const styleTag = `<style>\n${cssContent}\n</style>`;
    html = html.replace('</head>', `${styleTag}\n</head>`);

    // Insert inline JS before </body>
    const scriptTag = `<script>\n${jsContent}\n</script>`;
    html = html.replace('</body>', `${scriptTag}\n</body>`);

    return html;
}

module.exports = { generateReadingTest, generateListeningTest };
