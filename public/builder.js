// ============================
// STATE
// ============================
let selectedType = 'reading';
let selectedFile = null;
let generatedTestData = null;
let generatedHtml = null;

// ============================
// INIT
// ============================
document.addEventListener('DOMContentLoaded', () => {
    setupDropzone();
    setupFileInput();
});

// ============================
// TYPE SELECTION
// ============================
function selectType(type) {
    selectedType = type;
    document.querySelectorAll('.type-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.type === type);
    });
}

// ============================
// TYPE SELECTION
// ============================

// ============================
// DROPZONE
// ============================
function setupDropzone() {
    const dz = document.getElementById('dropzone');

    dz.addEventListener('dragenter', e => {
        e.preventDefault();
        dz.classList.add('dragover');
    });

    dz.addEventListener('dragover', e => {
        e.preventDefault();
        dz.classList.add('dragover');
    });

    dz.addEventListener('dragleave', e => {
        e.preventDefault();
        dz.classList.remove('dragover');
    });

    dz.addEventListener('drop', e => {
        e.preventDefault();
        dz.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });
}

function setupFileInput() {
    document.getElementById('fileInput').addEventListener('change', e => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });
}

function handleFile(file) {
    const allowed = ['.pdf', '.docx', '.html', '.htm', '.txt'];
    const ext = '.' + file.name.split('.').pop().toLowerCase();

    if (!allowed.includes(ext)) {
        showError(`Unsupported file: ${ext}. Use PDF, DOCX, HTML, or TXT.`);
        return;
    }

    if (file.size > 20 * 1024 * 1024) {
        showError('File too large. Maximum 20MB.');
        return;
    }

    selectedFile = file;

    // Show file info
    document.getElementById('dropzone').style.display = 'none';
    document.getElementById('fileInfo').style.display = 'flex';
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileSize').textContent = formatSize(file.size);
}

function removeFile() {
    selectedFile = null;
    document.getElementById('fileInput').value = '';
    document.getElementById('dropzone').style.display = '';
    document.getElementById('fileInfo').style.display = 'none';
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

// ============================
// GENERATION
// ============================
async function startGeneration() {
    // Validate
    if (!selectedFile) {
        showError('Please upload a test file first.');
        return;
    }

    // Show progress
    showProgress();

    try {
        // Step 1: Upload & extract
        updateProgress(1, 'Extracting text from document...');

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('testType', selectedType);

        const uploadRes = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        if (!uploadRes.ok) {
            const err = await uploadRes.json();
            throw new Error(err.error || 'Upload failed');
        }

        const uploadData = await uploadRes.json();

        // Step 2: AI analysis complete
        updateProgress(2, 'AI analysis complete. Building test...');
        generatedTestData = uploadData.testData;

        // Small delay for UX
        await sleep(800);

        // Step 3: Generate HTML
        updateProgress(3, 'Generating interactive HTML test...');

        const genRes = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testData: generatedTestData,
                testType: selectedType
            })
        });

        if (!genRes.ok) {
            const err = await genRes.json();
            throw new Error(err.error || 'Generation failed');
        }

        generatedHtml = await genRes.text();

        await sleep(600);
        hideProgress();
        showResult();

    } catch (err) {
        hideProgress();
        showError(err.message || 'Something went wrong. Please try again.');
        console.error('Generation error:', err);
    }
}

// ============================
// PROGRESS UI
// ============================
function showProgress() {
    document.getElementById('progressOverlay').classList.add('show');
    document.getElementById('builderCard').classList.add('hidden');
    resetProgressSteps();
}

function hideProgress() {
    document.getElementById('progressOverlay').classList.remove('show');
}

function updateProgress(step, detail) {
    document.getElementById('progressDetail').textContent = detail;

    // Mark previous steps as done
    for (let i = 1; i < step; i++) {
        const el = document.getElementById(`pStep${i}`);
        el.classList.remove('active');
        el.classList.add('done');
    }

    // Mark current step as active
    const current = document.getElementById(`pStep${step}`);
    current.classList.add('active');
    current.classList.remove('done');
}

function resetProgressSteps() {
    for (let i = 1; i <= 3; i++) {
        const el = document.getElementById(`pStep${i}`);
        el.classList.remove('active', 'done');
    }
    document.getElementById('pStep1').classList.add('active');
}

// ============================
// RESULT UI
// ============================
function showResult() {
    document.getElementById('builderCard').classList.add('hidden');
    const resultCard = document.getElementById('resultCard');
    resultCard.style.display = '';

    // Update description
    const typeLabel = selectedType === 'reading' ? 'Reading' : 'Listening';
    document.getElementById('resultDesc').textContent =
        `Your IELTS ${typeLabel} test is ready for download.`;

    // Render preview
    renderPreview();
}

function renderPreview() {
    const parts = document.getElementById('previewParts');
    const numParts = selectedType === 'reading' ? 3 : 4;
    let html = '';

    for (let i = 1; i <= numParts; i++) {
        const partData = generatedTestData[String(i)] || generatedTestData[i];
        if (!partData) continue;

        const qCount = countQuestions(partData.questions);
        const types = getQuestionTypes(partData.questions);

        html += `
      <div class="preview-part">
        <span class="preview-part-num">Part ${i}</span>
        <span class="preview-part-info">${partData.instruction}</span>
        <span class="preview-part-badge">${qCount} Qs • ${types}</span>
      </div>`;
    }

    parts.innerHTML = html;
}

function countQuestions(questions) {
    let count = 0;
    questions.forEach(section => {
        if (section.items) count += section.items.length;
        else if (section.nums) count += section.nums.length;
        else if (section.answers && typeof section.answers === 'object') {
            count += Object.keys(section.answers).length;
        }
    });
    return count;
}

function getQuestionTypes(questions) {
    const typeMap = {
        'tfng': 'T/F/NG',
        'ynnng': 'Y/N/NG',
        'fill': 'Fill',
        'mcq': 'MCQ',
        'select': 'Select',
        'multi': 'Multi',
        'match': 'Match'
    };
    const types = [...new Set(questions.map(q => typeMap[q.type] || q.type))];
    return types.join(', ');
}

// ============================
// DOWNLOAD
// ============================
function downloadTest() {
    if (!generatedHtml) return;

    const blob = new Blob([generatedHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ielts-${selectedType}-test.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================
// RESET
// ============================
function resetBuilder() {
    generatedTestData = null;
    generatedHtml = null;
    selectedFile = null;

    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('builderCard').classList.remove('hidden');
    document.getElementById('fileInput').value = '';
    document.getElementById('dropzone').style.display = '';
    document.getElementById('fileInfo').style.display = 'none';
}

// ============================
// ERROR TOAST
// ============================
function showError(msg) {
    const toast = document.getElementById('errorToast');
    document.getElementById('errorMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
}

// ============================
// UTILS
// ============================
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
