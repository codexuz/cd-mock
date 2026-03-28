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

        // Step 3: Generate HTML (only for reading/listening)
        if (selectedType === 'reading' || selectedType === 'listening') {
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
        } else {
            updateProgress(3, 'JSON data ready for download...');
            generatedHtml = null;
        }

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
    const typeLabels = { reading: 'Reading', listening: 'Listening', writing: 'Writing', full: 'Full' };
    const typeLabel = typeLabels[selectedType] || selectedType;
    document.getElementById('resultDesc').textContent =
        `Your IELTS ${typeLabel} test data is ready for download.`;

    // Show/hide HTML download button (only for reading/listening)
    const btnHtml = document.getElementById('btnDownload');
    if (btnHtml) {
        btnHtml.style.display = (selectedType === 'reading' || selectedType === 'listening') ? '' : 'none';
    }

    // Render preview
    renderPreview();
}

function renderPreview() {
    const parts = document.getElementById('previewParts');
    let html = '';

    if (selectedType === 'reading' || selectedType === 'full') {
        const readingParts = generatedTestData.readingParts || [];
        readingParts.forEach((part, i) => {
            const qCount = countPartQuestions(part.questions);
            const types = getPartQuestionTypes(part.questions);
            html += `
      <div class="preview-part">
        <span class="preview-part-num">Reading ${i + 1}</span>
        <span class="preview-part-info">${part.title || ''}</span>
        <span class="preview-part-badge">${qCount} Qs • ${types}</span>
      </div>`;
        });
    }

    if (selectedType === 'listening' || selectedType === 'full') {
        const listeningParts = generatedTestData.listeningParts || [];
        listeningParts.forEach((part, i) => {
            const qCount = countPartQuestions(part.questions);
            const types = getPartQuestionTypes(part.questions);
            html += `
      <div class="preview-part">
        <span class="preview-part-num">Listening ${i + 1}</span>
        <span class="preview-part-info">${part.title || ''}</span>
        <span class="preview-part-badge">${qCount} Qs • ${types}</span>
      </div>`;
        });
    }

    if (selectedType === 'writing' || selectedType === 'full') {
        const tasks = generatedTestData.writingTasks || [];
        tasks.forEach((task, i) => {
            html += `
      <div class="preview-part">
        <span class="preview-part-num">Writing Task ${i + 1}</span>
        <span class="preview-part-info">${task.min_words || 150}+ words • ${task.suggested_time || 20} min</span>
      </div>`;
        });
    }

    // Fallback: try old format (keys "1", "2", etc.)
    if (!html) {
        const numParts = selectedType === 'reading' ? 3 : 4;
        for (let i = 1; i <= numParts; i++) {
            const partData = generatedTestData[String(i)] || generatedTestData[i];
            if (!partData) continue;
            const qCount = countPartQuestions(partData.questions || []);
            const types = getPartQuestionTypes(partData.questions || []);
            html += `
      <div class="preview-part">
        <span class="preview-part-num">Part ${i}</span>
        <span class="preview-part-info">${partData.title || partData.instruction || ''}</span>
        <span class="preview-part-badge">${qCount} Qs • ${types}</span>
      </div>`;
        }
    }

    parts.innerHTML = html || '<p style="color:#94a3b8;text-align:center;">Preview not available</p>';
}

function countPartQuestions(questions) {
    if (!questions || !Array.isArray(questions)) return 0;
    let count = 0;
    questions.forEach(group => {
        if (group.questions && Array.isArray(group.questions)) {
            count += group.questions.length;
        } else {
            count += 1; // standalone question (e.g. MULTIPLE_CHOICE)
        }
    });
    return count;
}

function getPartQuestionTypes(questions) {
    if (!questions || !Array.isArray(questions)) return '';
    const shortNames = {
        'TRUE_FALSE_NOT_GIVEN': 'T/F/NG',
        'YES_NO_NOT_GIVEN': 'Y/N/NG',
        'MULTIPLE_CHOICE': 'MCQ',
        'MULTIPLE_ANSWER': 'Multi',
        'MATCHING_HEADINGS': 'Headings',
        'MATCHING_INFORMATION': 'Info Match',
        'MATCHING_FEATURES': 'Features',
        'MATCHING_SENTENCE_ENDINGS': 'Sentence End',
        'SENTENCE_COMPLETION': 'Sentence',
        'SUMMARY_COMPLETION': 'Summary',
        'SUMMARY_COMPLETION_DRAG_DROP': 'Drag&Drop',
        'NOTE_COMPLETION': 'Notes',
        'TABLE_COMPLETION': 'Table',
        'FLOW_CHART_COMPLETION': 'Flow Chart',
        'DIAGRAM_LABELLING': 'Diagram',
        'PLAN_MAP_LABELLING': 'Map',
        'SHORT_ANSWER': 'Short Ans'
    };
    const types = [...new Set(questions.map(q => shortNames[q.type] || q.type || ''))].filter(Boolean);
    return types.join(', ') || 'Mixed';
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

function downloadJson() {
    if (!generatedTestData) return;

    const json = JSON.stringify(generatedTestData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ielts-${selectedType}-data.json`;
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
