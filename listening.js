// ============================
// LISTENING TEST DATA (4 Parts, 40 Questions)
// ============================
const LISTEN_DATA = {
    1: {
        title: "Part 1",
        instruction: "Listen and answer questions 1-10.",
        questions: [
            {
                section: "Questions 1-10",
                instructions: 'Complete the notes below. Write <strong>NO MORE THAN ONE WORD AND/OR NUMBER</strong> for each answer.',
                type: "note",
                content: `
          <h3>Building Work</h3>
          <h4>Address: 15 Hill Street</h4>
          <h4>Contact Information</h4>
          <ul>
            <li><strong>Name</strong>: Sally {1}</li>
            <li><strong>Phone</strong>: 027 584 6613</li>
          </ul>
          <h4>Kitchen</h4>
          <ul>
            <li>Needs a bigger window</li>
            <li>The kitchen is too hot - fit a {2}</li>
          </ul>
          <h4>Bathroom</h4>
          <ul>
            <li>put a {3} on the back wall</li>
            <li>decide the {4} of the small tiles later.</li>
          </ul>
          <h4>Outside</h4>
          <ul>
            <li>put a higher {5} in the garden.</li>
            <li>put a new {6} on the garage door.</li>
            <li>fix the roof - it was damaged by a {7}</li>
            <li>fit a new rain gutter made of {8}</li>
          </ul>
          <h4>Other information</h4>
          <ul>
            <li><strong>Start date</strong>: {9}</li>
            <li><strong>Security code</strong>: {10}</li>
          </ul>
        `,
                answers: {
                    1: "Harrison", 2: "fan", 3: "mirror", 4: "colour",
                    5: "fence", 6: "lock", 7: "storm", 8: "copper",
                    9: "Wednesday", 10: "4729"
                }
            }
        ]
    },
    2: {
        title: "Part 2",
        instruction: "Listen and answer questions 11-20.",
        questions: [
            {
                section: "Questions 11-17",
                instructions: 'Choose the correct answer.',
                type: "mcq",
                items: [
                    {
                        num: 11, text: "The speaker's job requires",
                        options: [
                            { label: "A", text: "a great deal of walking" },
                            { label: "B", text: "extensive travel" },
                            { label: "C", text: "clean water" }
                        ],
                        answer: "B"
                    },
                    {
                        num: 12, text: "Why is this story being told?",
                        options: [
                            { label: "A", text: "to promote Charity-Water" },
                            { label: "B", text: "for entertainment purposes" },
                            { label: "C", text: "to encourage Helen" }
                        ],
                        answer: "A"
                    },
                    {
                        num: 13, text: "Why do the charity workers usually surprise communities?",
                        options: [
                            { label: "A", text: "It makes people happy" },
                            { label: "B", text: "It is difficult to spread news." },
                            { label: "C", text: "It makes their work easier." }
                        ],
                        answer: "B"
                    },
                    {
                        num: 14, text: "When villagers heard of the charity worker's arrival, they",
                        options: [
                            { label: "A", text: "had a party" },
                            { label: "B", text: "were suspicious" },
                            { label: "C", text: "took no notice." }
                        ],
                        answer: "A"
                    },
                    {
                        num: 15, text: "Helen is feeling",
                        options: [
                            { label: "A", text: "ecstatic about her new life" },
                            { label: "B", text: "curious about the charity workers." },
                            { label: "C", text: "nostalgic about her old life" }
                        ],
                        answer: "A"
                    },
                    {
                        num: 16, text: "What did the speaker notice about Helen?",
                        options: [
                            { label: "A", text: "she had bathed recently" },
                            { label: "B", text: "the care she took with her appearance" },
                            { label: "C", text: "she was wearing a green uniform" }
                        ],
                        answer: "B"
                    },
                    {
                        num: 17, text: "Making someone feel beautiful was",
                        options: [
                            { label: "A", text: "part of the speaker's job description." },
                            { label: "B", text: "an unexpected bonus for the speaker." },
                            { label: "C", text: "of little importance to the speaker" }
                        ],
                        answer: "B"
                    }
                ]
            },
            {
                section: "Questions 18-20",
                instructions: 'Choose <strong>THREE</strong> correct answers.',
                type: "multi",
                prompt: "Which THREE ways did the new well improve Helen's life?",
                items: [
                    { label: "A", text: "her children enjoyed better health" },
                    { label: "B", text: "it increased her household income" },
                    { label: "C", text: "it gave her more free time" },
                    { label: "D", text: "she got a leadership position" },
                    { label: "E", text: "she had more choices and options" },
                    { label: "F", text: "she made new friends in her village" },
                    { label: "G", text: "it allowed her to go to school" }
                ],
                nums: [18, 19, 20],
                answers: ["A", "C", "E"]
            }
        ]
    },
    3: {
        title: "Part 3",
        instruction: "Listen and answer questions 21-30.",
        questions: [
            {
                section: "Questions 21-25",
                instructions: 'Choose the correct answer.',
                type: "mcq",
                items: [
                    {
                        num: 21, text: "What problem is Lorna having with her report?",
                        options: [
                            { label: "A", text: "listing the references" },
                            { label: "B", text: "keeping to the word limit" },
                            { label: "C", text: "writing the evaluation" }
                        ],
                        answer: "B"
                    },
                    {
                        num: 22, text: "Why did Charles take the song-writing course?",
                        options: [
                            { label: "A", text: "to improve his job prospects" },
                            { label: "B", text: "to increase his self-confidence" },
                            { label: "C", text: "to develop his self-expression" }
                        ],
                        answer: "C"
                    },
                    {
                        num: 23, text: "Which type of work did Lorna most enjoy?",
                        options: [
                            { label: "A", text: "individual work" },
                            { label: "B", text: "pair work" },
                            { label: "C", text: "group work" }
                        ],
                        answer: "C"
                    },
                    {
                        num: 24, text: "Which aspect of the course content did both students find interesting?",
                        options: [
                            { label: "A", text: "song structure" },
                            { label: "B", text: "writing a chorus" },
                            { label: "C", text: "lyrical styles and forms" }
                        ],
                        answer: "A"
                    },
                    {
                        num: 25, text: "Lorna found writing a song",
                        options: [
                            { label: "A", text: "impossible" },
                            { label: "B", text: "tiring" },
                            { label: "C", text: "amusing" }
                        ],
                        answer: "C"
                    }
                ]
            },
            {
                section: "Questions 26-30",
                instructions: 'Choose the correct letter for each question.',
                type: "match",
                prompt: "What is the focus of the drama workshop run by each of the following teachers?",
                names: ["Bob Lacey", "Evelyn Chance", "Ted Winter", "Kevin Gray", "Dorothy Thomas"],
                nums: [26, 27, 28, 29, 30],
                options: [
                    "use of own memories",
                    "full use of the stage",
                    "relaxation techniques",
                    "physical expression of character",
                    "play readings",
                    "acting without preparation",
                    "using a range of accents",
                    "following instructions"
                ],
                answers: {
                    26: "acting without preparation",
                    27: "use of own memories",
                    28: "full use of the stage",
                    29: "physical expression of character",
                    30: "relaxation techniques"
                }
            }
        ]
    },
    4: {
        title: "Part 4",
        instruction: "Listen and answer questions 31-40.",
        questions: [
            {
                section: "Questions 31-40",
                instructions: 'Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.',
                type: "note",
                content: `
          <h3>The Lontar Palm</h3>
          <p><strong>The tree</strong></p>
          <ul>
            <li>grows on Roti, an Indonesian island</li>
            <li>is known as the 'tree of life'</li>
            <li>produces delicious juice</li>
            <li>has a fruit resembling a {31} (female trees only)</li>
          </ul>
          <p><strong>People climbing the trees</strong></p>
          <ul>
            <li>fix {32} to the tree trunks to help them climb</li>
            <li>keep their tools attached to a {33}</li>
            <li>often own particular trees</li>
            <li>contribute to the upkeep of the communal fence</li>
          </ul>
          <p><strong>Using the juice</strong></p>
          <ul>
            <li>It quickly becomes {34} if left unprocessed.</li>
            <li>A concentrated form of it is drunk in the rainy season.</li>
            <li>it can be made into sugary {35}</li>
          </ul>
          <h4>Using other parts</h4>
          <p><strong>The leaf is used:</strong></p>
          <ul>
            <li>to make containers, bags and roofing</li>
            <li>as garden {36}</li>
            <li>for brightly decorated hats worn at a {37}</li>
            <li>for a musical instrument which sounds like a {38}</li>
          </ul>
          <p>The stalk is used to make {39}</p>
          <p>The trunk is used in the construction of {40}</p>
        `,
                answers: {
                    31: "melon", 32: "pegs", 33: "belt", 34: "alcoholic",
                    35: "cakes", 36: "fencing", 37: "wedding", 38: "violin",
                    39: "furniture", 40: "houses"
                }
            }
        ]
    }
};

// ============================
// STATE
// ============================
let currentPart = 1;
let answers = {};
let audioStarted = false;
let audioTimer = null;
let audioElapsed = 0;
const AUDIO_DURATION = 30 * 60; // simulated 30min

const PART_RANGES = { 1: [1, 10], 2: [11, 20], 3: [21, 30], 4: [31, 40] };

// ============================
// INIT
// ============================
document.addEventListener("DOMContentLoaded", () => {
    renderPart(1);
});

// ============================
// AUDIO OVERLAY
// ============================
function startListening() {
    document.getElementById("audioOverlay").classList.add("hidden");
    audioStarted = true;
    document.getElementById("audioProgressBar").classList.add("show");
    // Simulate audio playback with a timer
    audioTimer = setInterval(tickAudio, 1000);
}

function tickAudio() {
    audioElapsed++;
    if (audioElapsed >= AUDIO_DURATION) {
        clearInterval(audioTimer);
    }
    const pct = (audioElapsed / AUDIO_DURATION) * 100;
    document.getElementById("audioFill").style.width = pct + "%";
    document.getElementById("audioCurrentTime").textContent = formatTime(audioElapsed);
    document.getElementById("audioDuration").textContent = formatTime(AUDIO_DURATION);
}

function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
}

// ============================
// RENDER
// ============================
function renderPart(partNum) {
    currentPart = partNum;
    const data = LISTEN_DATA[partNum];

    document.getElementById("partHeader").innerHTML =
        `<h2>${data.title}</h2><p>${data.instruction}</p>`;

    let html = "";
    data.questions.forEach(section => {
        html += `<div class="l-q-heading">${section.section}</div>`;
        html += `<div class="l-q-instruction">${section.instructions}</div>`;

        if (section.type === "note") {
            html += renderNoteSection(section);
        }
        if (section.type === "mcq") {
            html += renderMCQ(section);
        }
        if (section.type === "multi") {
            html += renderMulti(section);
        }
        if (section.type === "match") {
            html += renderMatch(section);
        }
    });

    document.getElementById("questionsPanel").innerHTML = html;
    updatePartTabs();
    renderQNumbers();
    updateAnswerCount();

    const body = document.querySelector(".listening-body");
    if (body) body.scrollTop = 0;
}

function renderNoteSection(section) {
    // Replace {N} with input fields
    let content = section.content;
    const regex = /\{(\d+)\}/g;
    content = content.replace(regex, (_, num) => {
        const saved = answers[`q${num}`] || "";
        return `<input class="l-input" type="text" id="question-${num}" data-q="${num}" 
      placeholder="${num}" value="${saved}" 
      oninput="saveAnswer(${num}, this.value)" autocomplete="off">`;
    });
    return `<div class="l-note-section">${content}</div>`;
}

function renderMCQ(section) {
    let html = "";
    section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="l-mcq" id="question-${q.num}">
      <div class="l-mcq-label"><span class="q-num">${q.num}</span> ${q.text}</div>
      <div class="l-mcq-options">
        ${q.options.map(opt => `
          <label class="l-mcq-opt">
            <input type="radio" name="q${q.num}" value="${opt.label}" 
              ${saved === opt.label ? "checked" : ""}
              onchange="saveAnswer(${q.num}, '${opt.label}')">
            ${opt.text}
          </label>
        `).join("")}
      </div>
    </div>`;
    });
    return html;
}

function renderMulti(section) {
    // Multiple-select (choose THREE)
    let html = `<div class="l-mcq" id="question-${section.nums[0]}">
    <div class="l-mcq-label">${section.prompt}</div>
    <div class="l-mcq-options">
      ${section.items.map(opt => {
        // Check if any of the nums have this answer saved
        const isChecked = section.nums.some(n => answers[`q${n}`] === opt.label);
        return `<label class="l-mcq-opt">
          <input type="checkbox" value="${opt.label}" 
            ${isChecked ? "checked" : ""}
            onchange="saveMulti(this, [${section.nums}])">
          <strong>${opt.label}</strong>&nbsp; ${opt.text}
        </label>`;
    }).join("")}
    </div>
  </div>`;
    return html;
}

function renderMatch(section) {
    let html = `<div class="l-mcq" id="question-${section.nums[0]}">
    <div class="l-mcq-label">${section.prompt}</div>
    <div class="l-match-grid" style="margin-top:12px">
      ${section.names.map((name, i) => {
        const num = section.nums[i];
        const saved = answers[`q${num}`] || "";
        return `
          <span class="l-match-name" id="question-${num}">${name}</span>
          <select class="l-match-select" onchange="saveAnswer(${num}, this.value)">
            <option value="">-- Select --</option>
            ${section.options.map(opt =>
            `<option value="${opt}" ${saved === opt ? "selected" : ""}>${opt}</option>`
        ).join("")}
          </select>`;
    }).join("")}
    </div>
  </div>`;
    return html;
}

// ============================
// ANSWERS
// ============================
function saveAnswer(num, value) {
    if (value && value.trim()) {
        answers[`q${num}`] = value.trim();
    } else {
        delete answers[`q${num}`];
    }
    renderQNumbers();
    updateAnswerCount();
}

function saveMulti(checkbox, nums) {
    // Gather all checked values
    const parent = checkbox.closest(".l-mcq-options");
    const checked = Array.from(parent.querySelectorAll("input:checked")).map(c => c.value);
    // Assign to nums in order
    nums.forEach((n, i) => {
        if (checked[i]) {
            answers[`q${n}`] = checked[i];
        } else {
            delete answers[`q${n}`];
        }
    });
    renderQNumbers();
    updateAnswerCount();
}

// ============================
// NAV
// ============================
function switchPart(partNum) {
    if (partNum === currentPart) return;
    renderPart(partNum);
}

function navPrev() {
    if (currentPart > 1) switchPart(currentPart - 1);
}
function navNext() {
    if (currentPart < 4) switchPart(currentPart + 1);
}

function scrollToQ(num) {
    const el = document.getElementById(`question-${num}`);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.boxShadow = "0 0 0 2px rgba(211,84,0,.3)";
        setTimeout(() => { el.style.boxShadow = ""; }, 1500);
    }
}

function updatePartTabs() {
    document.querySelectorAll(".part-tab").forEach(tab => {
        tab.classList.toggle("active", parseInt(tab.dataset.part) === currentPart);
    });
}

function renderQNumbers() {
    const [start, end] = PART_RANGES[currentPart];
    let html = "";
    for (let i = start; i <= end; i++) {
        const answered = answers[`q${i}`] ? "answered" : "";
        html += `<button class="q-num-btn ${answered}" data-q="${i}" onclick="scrollToQ(${i})">${i}</button>`;
    }
    document.getElementById("qNumbers").innerHTML = html;
}

function updateAnswerCount() {
    const [start, end] = PART_RANGES[currentPart];
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (answers[`q${i}`]) count++;
    }
    const total = end - start + 1;
    document.getElementById("answerCount").innerHTML = `Part ${currentPart} &nbsp; ${count}/${total}`;
}

// ============================
// UTILITIES
// ============================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function toggleNotes() {
    document.getElementById("notesPanel").classList.toggle("open");
}

// ============================
// SUBMIT
// ============================
function confirmSubmit() {
    let answered = 0;
    for (let i = 1; i <= 40; i++) {
        if (answers[`q${i}`]) answered++;
    }
    document.getElementById("confirmMsg").innerHTML =
        `You have answered <strong>${answered}</strong> out of <strong>40</strong> questions. Are you sure you want to submit?`;
    document.getElementById("confirmOverlay").classList.add("show");
}

function closeConfirm() {
    document.getElementById("confirmOverlay").classList.remove("show");
}

function submitTest() {
    closeConfirm();
    clearInterval(audioTimer);

    let totalCorrect = 0;
    const partScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
    const reviewItems = [];

    for (let p = 1; p <= 4; p++) {
        LISTEN_DATA[p].questions.forEach(section => {
            if (section.type === "note") {
                for (const [num, correct] of Object.entries(section.answers)) {
                    const userAns = (answers[`q${num}`] || "").toLowerCase().trim();
                    const isCorrect = userAns === correct.toLowerCase().trim();
                    if (isCorrect) { totalCorrect++; partScores[p]++; }
                    reviewItems.push({ num: parseInt(num), correct, user: answers[`q${num}`] || "—", isCorrect });
                }
            }
            if (section.type === "mcq") {
                section.items.forEach(q => {
                    const userAns = (answers[`q${q.num}`] || "").toUpperCase();
                    const isCorrect = userAns === q.answer;
                    if (isCorrect) { totalCorrect++; partScores[p]++; }
                    reviewItems.push({ num: q.num, correct: q.answer, user: userAns || "—", isCorrect });
                });
            }
            if (section.type === "multi") {
                section.nums.forEach((n, i) => {
                    const userAns = (answers[`q${n}`] || "").toUpperCase();
                    const correct = section.answers[i];
                    const isCorrect = section.answers.includes(userAns);
                    if (isCorrect) { totalCorrect++; partScores[p]++; }
                    reviewItems.push({ num: n, correct, user: userAns || "—", isCorrect });
                });
            }
            if (section.type === "match") {
                section.nums.forEach(n => {
                    const userAns = (answers[`q${n}`] || "").toLowerCase().trim();
                    const correct = section.answers[n].toLowerCase().trim();
                    const isCorrect = userAns === correct;
                    if (isCorrect) { totalCorrect++; partScores[p]++; }
                    reviewItems.push({ num: n, correct: section.answers[n], user: answers[`q${n}`] || "—", isCorrect });
                });
            }
        });
    }

    reviewItems.sort((a, b) => a.num - b.num);

    // Band score
    const bandMap = [
        [40, 9.0], [39, 8.5], [37, 8.0], [35, 7.5], [32, 7.0],
        [30, 6.5], [26, 6.0], [23, 5.5], [18, 5.0], [16, 4.5],
        [13, 4.0], [10, 3.5], [6, 3.0], [0, 2.0]
    ];
    let band = 2.0;
    for (const [thr, sc] of bandMap) {
        if (totalCorrect >= thr) { band = sc; break; }
    }

    document.getElementById("scoreNum").textContent = totalCorrect;
    document.getElementById("bandScore").textContent = band.toFixed(1);

    const circ = 326.73;
    const off = circ - (totalCorrect / 40) * circ;
    const circle = document.getElementById("scoreCircle");
    circle.style.strokeDashoffset = circ;
    setTimeout(() => { circle.style.strokeDashoffset = off; }, 50);

    let bdHtml = "";
    for (let p = 1; p <= 4; p++) {
        const [s, e] = PART_RANGES[p];
        bdHtml += `<div class="row"><span class="label">Part ${p}</span><span class="value">${partScores[p]} / ${e - s + 1}</span></div>`;
    }
    document.getElementById("partBreakdown").innerHTML = bdHtml;

    let rvHtml = "";
    reviewItems.forEach(r => {
        const cls = r.isCorrect ? "ri-correct" : "ri-wrong";
        const icon = r.isCorrect ? "✓" : "✗";
        rvHtml += `<div class="review-item">
      <span class="ri-num">${r.num}.</span>
      <span class="${cls}">${icon} ${r.correct}</span>
      <span class="ri-answer">Your answer: ${r.user}</span>
    </div>`;
    });
    document.getElementById("reviewList").innerHTML = rvHtml;
    document.getElementById("resultsModal").classList.add("show");
}

function closeResults() {
    document.getElementById("resultsModal").classList.remove("show");
}

function retakeTest() {
    closeResults();
    answers = {};
    audioElapsed = 0;
    audioStarted = false;
    document.getElementById("audioFill").style.width = "0%";
    document.getElementById("audioCurrentTime").textContent = "0:00";
    document.getElementById("audioProgressBar").classList.remove("show");
    document.getElementById("audioOverlay").classList.remove("hidden");
    renderPart(1);
}
