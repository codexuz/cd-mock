// ============================
// AUDIO MERGER - STATE
// ============================
let tracks = []; // { id, file, name, duration, buffer, blob }
let trackIdCounter = 0;
let mergedBlob = null;
let currentlyPlaying = null; // AudioBufferSourceNode

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// ============================
// INIT
// ============================
document.addEventListener('DOMContentLoaded', () => {
    setupAudioDropzone();
});

// ============================
// DROPZONE
// ============================
function setupAudioDropzone() {
    const dz = document.getElementById('audioDropzone');
    const input = document.getElementById('audioFileInput');

    dz.addEventListener('click', () => input.click());

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
            addFiles(e.dataTransfer.files);
        }
    });

    input.addEventListener('change', e => {
        if (e.target.files.length > 0) {
            addFiles(e.target.files);
            input.value = '';
        }
    });
}

// ============================
// ADD FILES
// ============================
async function addFiles(fileList) {
    const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp4', 'audio/webm', 'audio/x-m4a', 'audio/mp3', 'audio/wave', 'audio/x-wav'];

    for (const file of fileList) {
        // Check extension as fallback
        const ext = file.name.split('.').pop().toLowerCase();
        const allowedExts = ['mp3', 'wav', 'ogg', 'm4a', 'webm', 'flac', 'aac'];

        if (!allowedTypes.includes(file.type) && !allowedExts.includes(ext)) {
            showError(`Unsupported format: ${file.name}`);
            continue;
        }

        try {
            const arrayBuffer = await file.arrayBuffer();
            const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

            const track = {
                id: ++trackIdCounter,
                file: file,
                name: file.name,
                duration: audioBuffer.duration,
                buffer: audioBuffer,
                size: file.size
            };

            tracks.push(track);
        } catch (err) {
            showError(`Failed to decode: ${file.name}`);
            console.error('Decode error:', err);
        }
    }

    renderTracks();
    updateUI();
}

// ============================
// RENDER TRACKS
// ============================
function renderTracks() {
    const list = document.getElementById('trackList');
    const empty = document.getElementById('trackEmpty');

    if (tracks.length === 0) {
        list.innerHTML = '';
        list.appendChild(createEmptyState());
        return;
    }

    let html = '';
    tracks.forEach((track, index) => {
        const waveform = generateWaveformBars(track.buffer);
        html += `
        <div class="track-item" draggable="true" data-id="${track.id}"
            ondragstart="trackDragStart(event, ${index})"
            ondragover="trackDragOver(event)"
            ondragenter="trackDragEnter(event)"
            ondragleave="trackDragLeave(event)"
            ondrop="trackDrop(event, ${index})"
            ondragend="trackDragEnd(event)">
            <span class="track-num">${index + 1}</span>
            <div class="track-info">
                <div class="track-name">${track.name}</div>
                <div class="track-meta">
                    <span>${formatDuration(track.duration)}</span>
                    <span>•</span>
                    <span>${formatSize(track.size)}</span>
                </div>
            </div>
            <div class="track-waveform">${waveform}</div>
            <button class="track-play-btn" onclick="playTrack(${track.id})" title="Preview">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            </button>
            <button class="track-remove" onclick="removeTrack(${track.id})" title="Remove">✕</button>
        </div>`;
    });

    list.innerHTML = html;
}

function createEmptyState() {
    const div = document.createElement('div');
    div.className = 'track-list empty';
    div.id = 'trackEmpty';
    div.textContent = 'No tracks added yet. Upload audio files to get started.';
    return div;
}

function generateWaveformBars(buffer) {
    const data = buffer.getChannelData(0);
    const bars = 40;
    const step = Math.floor(data.length / bars);
    let html = '';

    for (let i = 0; i < bars; i++) {
        let sum = 0;
        for (let j = 0; j < step; j++) {
            sum += Math.abs(data[i * step + j] || 0);
        }
        const avg = sum / step;
        const height = Math.max(3, Math.min(28, avg * 120));
        html += `<div class="waveform-bar" style="height:${height}px"></div>`;
    }

    return html;
}

// ============================
// DRAG & DROP REORDER
// ============================
let dragIndex = null;

function trackDragStart(e, index) {
    dragIndex = index;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function trackDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function trackDragEnter(e) {
    e.preventDefault();
    const item = e.target.closest('.track-item');
    if (item) item.classList.add('drag-over');
}

function trackDragLeave(e) {
    const item = e.target.closest('.track-item');
    if (item) item.classList.remove('drag-over');
}

function trackDrop(e, dropIndex) {
    e.preventDefault();
    const item = e.target.closest('.track-item');
    if (item) item.classList.remove('drag-over');

    if (dragIndex !== null && dragIndex !== dropIndex) {
        const moved = tracks.splice(dragIndex, 1)[0];
        tracks.splice(dropIndex, 0, moved);
        renderTracks();
    }
}

function trackDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('drag-over'));
    dragIndex = null;
}

// ============================
// PLAYBACK
// ============================
function playTrack(id) {
    // Stop any currently playing
    if (currentlyPlaying) {
        try { currentlyPlaying.stop(); } catch (e) { }
        currentlyPlaying = null;
    }

    const track = tracks.find(t => t.id === id);
    if (!track) return;

    const source = audioCtx.createBufferSource();
    source.buffer = track.buffer;
    source.connect(audioCtx.destination);
    source.start();
    currentlyPlaying = source;

    source.onended = () => {
        currentlyPlaying = null;
    };
}

function removeTrack(id) {
    tracks = tracks.filter(t => t.id !== id);
    renderTracks();
    updateUI();
}

function clearAll() {
    tracks = [];
    mergedBlob = null;
    if (currentlyPlaying) {
        try { currentlyPlaying.stop(); } catch (e) { }
        currentlyPlaying = null;
    }
    renderTracks();
    updateUI();
    document.getElementById('mergeResult').classList.remove('show');
    document.getElementById('mergeProgress').classList.remove('show');
}

// ============================
// UPDATE UI
// ============================
function updateUI() {
    const hasTracts = tracks.length > 0;
    document.getElementById('gapConfig').style.display = hasTracts ? '' : 'none';
    document.getElementById('mergerActions').style.display = hasTracts ? '' : 'none';

    if (hasTracts) {
        const gapSec = parseFloat(document.getElementById('gapSeconds').value) || 0;
        const totalSec = tracks.reduce((sum, t) => sum + t.duration, 0) + (tracks.length - 1) * gapSec;
        document.getElementById('totalDuration').innerHTML =
            `Total: <strong>${formatDuration(totalSec)}</strong> (${tracks.length} tracks)`;
    }

    document.getElementById('btnMerge').disabled = tracks.length < 2;
}

// ============================
// MERGE
// ============================
async function mergeAudio() {
    if (tracks.length < 2) {
        showError('Add at least 2 audio files to merge.');
        return;
    }

    // Stop playback
    if (currentlyPlaying) {
        try { currentlyPlaying.stop(); } catch (e) { }
        currentlyPlaying = null;
    }

    const gapSec = parseFloat(document.getElementById('gapSeconds').value) || 0;
    const sampleRate = tracks[0].buffer.sampleRate;
    const numChannels = Math.max(...tracks.map(t => t.buffer.numberOfChannels));

    // Calculate total length
    let totalLength = 0;
    tracks.forEach((t, i) => {
        // Resample if needed
        totalLength += Math.round(t.buffer.duration * sampleRate);
        if (i < tracks.length - 1) {
            totalLength += Math.round(gapSec * sampleRate);
        }
    });

    // Show progress
    const progress = document.getElementById('mergeProgress');
    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');
    progress.classList.add('show');
    document.getElementById('mergeResult').classList.remove('show');

    fill.style.width = '10%';
    text.textContent = 'Preparing audio buffers...';

    await sleep(200);

    // Create output buffer
    const outputBuffer = audioCtx.createBuffer(numChannels, totalLength, sampleRate);

    let offset = 0;
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        const pct = 10 + (i / tracks.length) * 70;
        fill.style.width = pct + '%';
        text.textContent = `Merging track ${i + 1} of ${tracks.length}: ${track.name}`;

        // Copy each channel
        for (let ch = 0; ch < numChannels; ch++) {
            const outData = outputBuffer.getChannelData(ch);
            const srcCh = Math.min(ch, track.buffer.numberOfChannels - 1);
            const srcData = track.buffer.getChannelData(srcCh);

            // Resample if sample rates differ
            if (track.buffer.sampleRate !== sampleRate) {
                const ratio = track.buffer.sampleRate / sampleRate;
                const resampledLen = Math.round(srcData.length / ratio);
                for (let j = 0; j < resampledLen; j++) {
                    const srcIdx = Math.min(Math.floor(j * ratio), srcData.length - 1);
                    outData[offset + j] = srcData[srcIdx];
                }
            } else {
                outData.set(srcData, offset);
            }
        }

        offset += Math.round(track.buffer.duration * sampleRate);

        // Add gap silence (already zeros in the buffer)
        if (i < tracks.length - 1) {
            offset += Math.round(gapSec * sampleRate);
        }

        await sleep(50); // Allow UI updates
    }

    fill.style.width = '85%';
    text.textContent = 'Encoding WAV file...';
    await sleep(200);

    // Encode to WAV
    mergedBlob = encodeWAV(outputBuffer);

    fill.style.width = '100%';
    text.textContent = 'Done!';
    await sleep(500);

    progress.classList.remove('show');
    showMergeResult(outputBuffer.duration);
}

// ============================
// WAV ENCODER
// ============================
function encodeWAV(buffer) {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitsPerSample = 16;

    const dataLength = buffer.length * numChannels * (bitsPerSample / 8);
    const headerLength = 44;
    const totalLength = headerLength + dataLength;

    const arrayBuffer = new ArrayBuffer(totalLength);
    const view = new DataView(arrayBuffer);

    // WAV header
    writeString(view, 0, 'RIFF');
    view.setUint32(4, totalLength - 8, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // chunk size
    view.setUint16(20, format, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * (bitsPerSample / 8), true);
    view.setUint16(32, numChannels * (bitsPerSample / 8), true);
    view.setUint16(34, bitsPerSample, true);
    writeString(view, 36, 'data');
    view.setUint32(40, dataLength, true);

    // Interleave channels and convert to 16-bit PCM
    let offset = 44;
    const channels = [];
    for (let ch = 0; ch < numChannels; ch++) {
        channels.push(buffer.getChannelData(ch));
    }

    for (let i = 0; i < buffer.length; i++) {
        for (let ch = 0; ch < numChannels; ch++) {
            const sample = Math.max(-1, Math.min(1, channels[ch][i]));
            view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
            offset += 2;
        }
    }

    return new Blob([arrayBuffer], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

// ============================
// RESULT
// ============================
function showMergeResult(duration) {
    const result = document.getElementById('mergeResult');
    result.classList.add('show');

    const gapSec = parseFloat(document.getElementById('gapSeconds').value) || 0;
    document.getElementById('mergeResultInfo').textContent =
        `${tracks.length} tracks merged • ${formatDuration(duration)} total • ${gapSec}s gaps`;

    // Create audio player for preview
    const player = document.getElementById('mergedPlayer');
    const url = URL.createObjectURL(mergedBlob);
    player.innerHTML = `<audio controls src="${url}" style="width:100%;border-radius:8px;"></audio>`;
}

function downloadMerged() {
    if (!mergedBlob) return;

    const url = URL.createObjectURL(mergedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ielts-listening-merged.wav';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function resetMerger() {
    mergedBlob = null;
    document.getElementById('mergeResult').classList.remove('show');
    document.getElementById('mergeProgress').classList.remove('show');
    // Keep existing tracks for re-edit
}

// ============================
// UTILS
// ============================
function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function showError(msg) {
    const toast = document.getElementById('errorToast');
    document.getElementById('errorMsg').textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Listen for gap change
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gapSeconds').addEventListener('input', updateUI);
});
