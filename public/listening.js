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
        instruction: 'Complete the notes below. Write <strong>NO MORE THAN ONE WORD AND/OR NUMBER</strong> for each answer.',
        type: "NOTE_COMPLETION",
        questionText: `
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
        questions: [
          { questionNumber: 1, correctAnswer: "Harrison" },
          { questionNumber: 2, correctAnswer: "fan" },
          { questionNumber: 3, correctAnswer: "mirror" },
          { questionNumber: 4, correctAnswer: "colour" },
          { questionNumber: 5, correctAnswer: "fence" },
          { questionNumber: 6, correctAnswer: "lock" },
          { questionNumber: 7, correctAnswer: "storm" },
          { questionNumber: 8, correctAnswer: "copper" },
          { questionNumber: 9, correctAnswer: "Wednesday" },
          { questionNumber: 10, correctAnswer: "4729" }
        ]
      }
    ]
  },
  2: {
    title: "Part 2",
    instruction: "Listen and answer questions 11-20.",
    questions: [
      {
        section: "Questions 11-17",
        instruction: 'Choose the correct answer.',
        type: "MULTIPLE_CHOICE",
        questions: [
          {
            questionNumber: 11, questionText: "The speaker's job requires",
            options: [
              { optionKey: "A", optionText: "a great deal of walking", isCorrect: false },
              { optionKey: "B", optionText: "extensive travel", isCorrect: true },
              { optionKey: "C", optionText: "clean water", isCorrect: false }
            ],
            correctAnswer: "B"
          },
          {
            questionNumber: 12, questionText: "Why is this story being told?",
            options: [
              { optionKey: "A", optionText: "to promote Charity-Water", isCorrect: true },
              { optionKey: "B", optionText: "for entertainment purposes", isCorrect: false },
              { optionKey: "C", optionText: "to encourage Helen", isCorrect: false }
            ],
            correctAnswer: "A"
          },
          {
            questionNumber: 13, questionText: "Why do the charity workers usually surprise communities?",
            options: [
              { optionKey: "A", optionText: "It makes people happy", isCorrect: false },
              { optionKey: "B", optionText: "It is difficult to spread news.", isCorrect: true },
              { optionKey: "C", optionText: "It makes their work easier.", isCorrect: false }
            ],
            correctAnswer: "B"
          },
          {
            questionNumber: 14, questionText: "When villagers heard of the charity worker's arrival, they",
            options: [
              { optionKey: "A", optionText: "had a party", isCorrect: true },
              { optionKey: "B", optionText: "were suspicious", isCorrect: false },
              { optionKey: "C", optionText: "took no notice.", isCorrect: false }
            ],
            correctAnswer: "A"
          },
          {
            questionNumber: 15, questionText: "Helen is feeling",
            options: [
              { optionKey: "A", optionText: "ecstatic about her new life", isCorrect: true },
              { optionKey: "B", optionText: "curious about the charity workers.", isCorrect: false },
              { optionKey: "C", optionText: "nostalgic about her old life", isCorrect: false }
            ],
            correctAnswer: "A"
          },
          {
            questionNumber: 16, questionText: "What did the speaker notice about Helen?",
            options: [
              { optionKey: "A", optionText: "she had bathed recently", isCorrect: false },
              { optionKey: "B", optionText: "the care she took with her appearance", isCorrect: true },
              { optionKey: "C", optionText: "she was wearing a green uniform", isCorrect: false }
            ],
            correctAnswer: "B"
          },
          {
            questionNumber: 17, questionText: "Making someone feel beautiful was",
            options: [
              { optionKey: "A", optionText: "part of the speaker's job description.", isCorrect: false },
              { optionKey: "B", optionText: "an unexpected bonus for the speaker.", isCorrect: true },
              { optionKey: "C", optionText: "of little importance to the speaker", isCorrect: false }
            ],
            correctAnswer: "B"
          }
        ]
      },
      {
        section: "Questions 18-20",
        instruction: 'Choose <strong>THREE</strong> correct answers.',
        type: "MULTIPLE_ANSWER",
        // The prompt applies to all three numbers. 
        // We will just duplicate the prompt in the first question to satisfy our unified structure
        options: [
          { optionKey: "A", optionText: "her children enjoyed better health", isCorrect: true },
          { optionKey: "B", optionText: "it increased her household income", isCorrect: false },
          { optionKey: "C", optionText: "it gave her more free time", isCorrect: true },
          { optionKey: "D", optionText: "she got a leadership position", isCorrect: false },
          { optionKey: "E", optionText: "she had more choices and options", isCorrect: true },
          { optionKey: "F", optionText: "she made new friends in her village", isCorrect: false },
          { optionKey: "G", optionText: "it allowed her to go to school", isCorrect: false }
        ],
        questions: [
          { questionNumber: 18, questionText: "Which THREE ways did the new well improve Helen's life?", correctAnswer: "A" },
          { questionNumber: 19, questionText: "", correctAnswer: "C" },
          { questionNumber: 20, questionText: "", correctAnswer: "E" }
        ]
      }
    ]
  },
  3: {
    title: "Part 3",
    instruction: "Listen and answer questions 21-30.",
    questions: [
      {
        section: "Questions 21-25",
        instruction: 'Choose the correct answer.',
        type: "MULTIPLE_CHOICE",
        questions: [
          {
            questionNumber: 21, questionText: "What problem is Lorna having with her report?",
            options: [
              { optionKey: "A", optionText: "listing the references", isCorrect: false },
              { optionKey: "B", optionText: "keeping to the word limit", isCorrect: true },
              { optionKey: "C", optionText: "writing the evaluation", isCorrect: false }
            ],
            correctAnswer: "B"
          },
          {
            questionNumber: 22, questionText: "Why did Charles take the song-writing course?",
            options: [
              { optionKey: "A", optionText: "to improve his job prospects", isCorrect: false },
              { optionKey: "B", optionText: "to increase his self-confidence", isCorrect: false },
              { optionKey: "C", optionText: "to develop his self-expression", isCorrect: true }
            ],
            correctAnswer: "C"
          },
          {
            questionNumber: 23, questionText: "Which type of work did Lorna most enjoy?",
            options: [
              { optionKey: "A", optionText: "individual work", isCorrect: false },
              { optionKey: "B", optionText: "pair work", isCorrect: false },
              { optionKey: "C", optionText: "group work", isCorrect: true }
            ],
            correctAnswer: "C"
          },
          {
            questionNumber: 24, questionText: "Which aspect of the course content did both students find interesting?",
            options: [
              { optionKey: "A", optionText: "song structure", isCorrect: true },
              { optionKey: "B", optionText: "writing a chorus", isCorrect: false },
              { optionKey: "C", optionText: "lyrical styles and forms", isCorrect: false }
            ],
            correctAnswer: "A"
          },
          {
            questionNumber: 25, questionText: "Lorna found writing a song",
            options: [
              { optionKey: "A", optionText: "impossible", isCorrect: false },
              { optionKey: "B", optionText: "tiring", isCorrect: false },
              { optionKey: "C", optionText: "amusing", isCorrect: true }
            ],
            correctAnswer: "C"
          }
        ]
      },
      {
        section: "Questions 26-30",
        instruction: 'What is the focus of the drama workshop run by each of the following teachers?',
        type: "MATCHING_FEATURES",
        options: [
          { optionKey: "A", optionText: "use of own memories" },
          { optionKey: "B", optionText: "full use of the stage" },
          { optionKey: "C", optionText: "relaxation techniques" },
          { optionKey: "D", optionText: "physical expression of character" },
          { optionKey: "E", optionText: "play readings" },
          { optionKey: "F", optionText: "acting without preparation" },
          { optionKey: "G", optionText: "using a range of accents" },
          { optionKey: "H", optionText: "following instructions" }
        ],
        questions: [
          { questionNumber: 26, questionText: "Bob Lacey", correctAnswer: "F" },
          { questionNumber: 27, questionText: "Evelyn Chance", correctAnswer: "A" },
          { questionNumber: 28, questionText: "Ted Winter", correctAnswer: "B" },
          { questionNumber: 29, questionText: "Kevin Gray", correctAnswer: "D" },
          { questionNumber: 30, questionText: "Dorothy Thomas", correctAnswer: "C" }
        ]
      }
    ]
  },
  4: {
    title: "Part 4",
    instruction: "Listen and answer questions 31-40.",
    questions: [
      {
        section: "Questions 31-40",
        instruction: 'Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.',
        type: "NOTE_COMPLETION",
        questionText: `
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
        questions: [
          { questionNumber: 31, correctAnswer: "melon" },
          { questionNumber: 32, correctAnswer: "pegs" },
          { questionNumber: 33, correctAnswer: "belt" },
          { questionNumber: 34, correctAnswer: "alcoholic" },
          { questionNumber: 35, correctAnswer: "cakes" },
          { questionNumber: 36, correctAnswer: "fencing" },
          { questionNumber: 37, correctAnswer: "wedding" },
          { questionNumber: 38, correctAnswer: "violin" },
          { questionNumber: 39, correctAnswer: "furniture" },
          { questionNumber: 40, correctAnswer: "houses" }
        ]
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
let audioElement = null;

function startListening() {
  document.getElementById("audioOverlay").classList.add("hidden");
  audioStarted = true;
  document.getElementById("audioProgressBar").classList.add("show");

  // Attempt real audio playback
  const audioSrc = "audio.mp3"; // Place your audio file next to the HTML named 'audio.mp3'
  audioElement = new Audio(audioSrc);

  audioElement.addEventListener("timeupdate", () => {
    if (!isNaN(audioElement.duration)) {
      const pct = (audioElement.currentTime / audioElement.duration) * 100;
      document.getElementById("audioFill").style.width = pct + "%";
      document.getElementById("audioCurrentTime").textContent = formatTime(Math.floor(audioElement.currentTime));
      audioElapsed = Math.floor(audioElement.currentTime);
    }
  });

  audioElement.addEventListener("loadedmetadata", () => {
    document.getElementById("audioDuration").textContent = formatTime(Math.floor(audioElement.duration));
  });

  audioElement.play().catch(e => {
    console.warn("Real audio playback failed, falling back to simulated timer:", e);
    // Simulate audio playback with a timer if file doesn't exist
    audioTimer = setInterval(tickAudio, 1000);
  });
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

  // Part header
  document.getElementById("partHeader").innerHTML =
    "<h2>" + data.title + "</h2><p>" + data.instruction + "</p>";

  // Questions
  let html = "";
  data.questions.forEach((section) => {
    html += '<div class="q-section">';
    html += '<div class="q-section-title">' + section.section + '</div>';
    html += '<div class="q-section-instructions">' + section.instruction + '</div>';

    // Helper for input questions (fill-in-the-blank style)
    const renderInlineInputs = (content) => {
      const regex = /\{(\d+)\}/g;
      return content.replace(regex, (_, num) => {
        const saved = answers[`q${num}`] || "";
        return `<input class="inline-input" type="text" id="question-${num}" data-q="${num}"
          placeholder="${num}" value="${saved}"
          oninput="saveAnswer(${num}, this.value)" autocomplete="off">`;
      });
    };

    switch (section.type) {
      case "TRUE_FALSE_NOT_GIVEN":
      case "YES_NO_NOT_GIVEN": {
        const options = section.type === "TRUE_FALSE_NOT_GIVEN" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"];
        section.questions.forEach(q => {
          const saved = answers[`q${q.questionNumber}`] || "";
          html += `<div class="question" id="question-${q.questionNumber}">
            <div class="question-label"><span class="q-num">${q.questionNumber}</span> ${q.questionText}</div>
            <div class="options">
              ${options.map(opt => `
                <label class="option-label">
                  <input type="radio" name="q${q.questionNumber}" value="${opt}" ${saved === opt ? "checked" : ""}
                    onchange="saveAnswer(${q.questionNumber}, '${opt}')">
                  ${opt}
                </label>
              `).join("")}
            </div>
          </div>`;
        });
        break;
      }
      case "MULTIPLE_CHOICE": {
        // Fallback to section options if individual question misses options
        const parseOptions = (q) => {
          if (q.options && q.options.length > 0) return q.options;
          if (section.options && section.options.length > 0) return section.options;
          return [];
        };

        section.questions.forEach(q => {
          const saved = answers[`q${q.questionNumber}`] || "";
          const opts = parseOptions(q);
          html += `<div class="question" id="question-${q.questionNumber}">
            <div class="question-label"><span class="q-num">${q.questionNumber}</span> ${q.questionText}</div>
            <div class="options">
              ${opts.map(opt => `
                <label class="option-label">
                  <input type="radio" name="q${q.questionNumber}" value="${opt.optionKey}" ${saved === opt.optionKey ? "checked" : ""}
                    onchange="saveAnswer(${q.questionNumber}, '${opt.optionKey}')">
                  <strong>${opt.optionKey}</strong>&nbsp; ${opt.optionText}
                </label>
              `).join("")}
            </div>
          </div>`;
        });
        break;
      }
      case "MULTIPLE_ANSWER": {
        const qNumEnd = section.questions[section.questions.length - 1].questionNumber;
        const qNumStart = section.questions[0].questionNumber;
        const nums = Array.from({ length: qNumEnd - qNumStart + 1 }, (_, i) => qNumStart + i);

        html += `<div class="question" id="question-${qNumStart}">
          <div class="options">`;
        (section.options || []).forEach(opt => {
          const isChecked = nums.some(n => answers[`q${n}`] === opt.optionKey) ||
            (answers[`multi_${qNumStart}`] || []).includes(opt.optionKey);
          html += `<label class="option-label">
                <input type="checkbox" value="${opt.optionKey}"
                  ${isChecked ? "checked" : ""}
                  onchange="saveMulti(this, [${nums.join(',')}])">
                <strong>${opt.optionKey}</strong>&nbsp; ${opt.optionText}
              </label>`;
        });
        html += `</div></div>`;
        break;
      }
      case "MATCHING_HEADINGS":
      case "MATCHING_INFORMATION":
      case "MATCHING_FEATURES":
      case "MATCHING_SENTENCE_ENDINGS": {
        const optDict = section.options || (section.headingOptions ? Object.keys(section.headingOptions).map(k => ({ optionKey: k, optionText: section.headingOptions[k] })) : []);
        if (optDict.length && !section.options) {
          html += `<div class="match-options-panel"><strong>Options:</strong> ${optDict.map(o =>
            `<span class="match-option-chip"><strong>${o.optionKey}</strong> ${o.optionText || ""}</span>`).join("")}</div>`;
        } else if (section.options) {
          html += `<div class="match-options-panel"><strong>Options:</strong> ${section.options.map(o =>
            `<span class="match-option-chip"><strong>${o.optionKey}</strong> ${o.optionText || ""}</span>`).join("")}</div>`;
        }

        section.questions.forEach(q => {
          const saved = answers[`q${q.questionNumber}`] || "";
          html += `<div class="match-row" id="question-${q.questionNumber}">
            <span class="q-num">${q.questionNumber}</span>
            <span class="match-text">${q.questionText}</span>
            <select onchange="saveAnswer(${q.questionNumber}, this.value)">
              <option value="">-- Select --</option>
              ${optDict.map(o => `<option value="${o.optionKey}" ${saved === o.optionKey ? "selected" : ""}>${o.optionKey} ${o.optionText ? '- ' + o.optionText : ''}</option>`).join("")}
            </select>
          </div>`;
        });
        break;
      }
      case "SENTENCE_COMPLETION":
      case "NOTE_COMPLETION":
      case "SUMMARY_COMPLETION":
      case "FLOW_CHART_COMPLETION":
      case "TABLE_COMPLETION": {
        html += `<div class="completion-section">`;
        if (section.questionText) {
          html += renderInlineInputs(section.questionText);
        } else {
          section.questions.forEach(q => {
            const saved = answers[`q${q.questionNumber}`] || "";
            html += `<div class="input-question" id="question-${q.questionNumber}">
              <div class="input-row">
                <span class="q-num">${q.questionNumber}</span>
                <span class="short-q-text">${q.questionText || ""}</span>
                <input type="text" class="short-answer-input" id="input-${q.questionNumber}" value="${saved}"
                  placeholder="..." oninput="saveAnswer(${q.questionNumber}, this.value)">
              </div>
            </div>`;
          });
        }
        html += `</div>`;
        break;
      }
      case "SUMMARY_COMPLETION_DRAG_DROP": {
        html += `<div class="dragdrop-section">`;
        if (section.options) {
          html += `<div class="word-bank"><strong>Word Bank:</strong><div class="word-bank-chips">`;
          section.options.forEach(o => {
            html += `<div class="draggable-chip" draggable="true" ondragstart="drag(event)" id="drag-${o.optionKey}">${o.optionKey}: ${o.optionText || ""}</div>`;
          });
          html += `</div></div>`;
        }
        html += `<div class="summary-drop-area">${renderInlineInputs(section.questionText)}</div>`;
        html += `</div>`;
        break;
      }
      case "DIAGRAM_LABELLING":
      case "PLAN_MAP_LABELLING":
      case "SHORT_ANSWER": {
        if (section.image) {
          html += `<div class="diagram-section"><img src="${section.image}" alt="Diagram" class="diagram-img"></div>`;
        }
        section.questions.forEach(q => {
          const saved = answers[`q${q.questionNumber}`] || "";
          html += `<div class="input-question" id="question-${q.questionNumber}">
            <div class="input-row">
              <span class="q-num">${q.questionNumber}</span>
              <span class="short-q-text">${q.questionText || ""}</span>
            </div>
            <input type="text" class="short-answer-input" id="input-${q.questionNumber}" value="${saved}"
              placeholder="Your answer..." oninput="saveAnswer(${q.questionNumber}, this.value)">
          </div>`;
        });
        break;
      }
    }
    html += `</div>`;
  });
  document.getElementById("questionsPanel").innerHTML = html;

  updatePartTabs();
  renderQNumbers();
  updateAnswerCount();

  const body = document.querySelector(".listening-body");
  if (body) body.scrollTop = 0;
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
  if (audioElement) {
    audioElement.pause();
  }

  let totalCorrect = 0;
  let partScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
  let reviewItems = [];

  for (let p = 1; p <= 4; p++) {
    const data = LISTEN_DATA[p];
    if (!data) continue;

    data.questions.forEach(section => {
      let multiAnswers = [];
      if (section.type === "MULTIPLE_ANSWER") {
        section.questions.forEach(q => {
          multiAnswers.push(String(q.correctAnswer).trim().toUpperCase());
        });
      }

      section.questions.forEach(q => {
        const num = q.questionNumber;
        const correct = String(q.correctAnswer).trim().toUpperCase();
        let user = String(answers[`q${num}`] || "").trim().toUpperCase();
        let isCorrect = false;

        if (section.type === "MULTIPLE_ANSWER") {
          if (user && multiAnswers.includes(user)) {
            isCorrect = true;
            multiAnswers.splice(multiAnswers.indexOf(user), 1);
          }
        } else {
          isCorrect = (user === correct) || (user === String(q.correctAnswer).trim());
        }

        if (isCorrect) {
          totalCorrect++;
          partScores[p]++;
        }

        reviewItems.push({
          num: num,
          user: user || "(empty)",
          correct: String(q.correctAnswer),
          isCorrect: isCorrect
        });
      });
    });
  }

  // Listening Band Score Curve
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

  const circumference = 326.73;
  const offset = circumference - (totalCorrect / 40) * circumference;
  const circle = document.getElementById("scoreCircle");
  circle.style.strokeDashoffset = circumference;
  setTimeout(() => { circle.style.strokeDashoffset = offset; }, 50);

  let breakdownHtml = "";
  for (let p = 1; p <= 4; p++) {
    const range = PART_RANGES[p];
    if (range) {
      const [s, e] = range;
      const total = e - s + 1;
      breakdownHtml += `<div class="row"><span class="label">Part ${p}</span><span class="value">${partScores[p]} / ${total}</span></div>`;
    }
  }
  document.getElementById("partBreakdown").innerHTML = breakdownHtml;

  let reviewHtml = "";
  reviewItems.forEach(r => {
    const cls = r.isCorrect ? "ri-correct" : "ri-wrong";
    const icon = r.isCorrect ? "✓" : "✗";
    reviewHtml += `<div class="review-item">
      <span class="ri-num">${r.num}.</span>
      <span class="${cls}">${icon} ${r.correct}</span>
      <span class="ri-answer">Your answer: ${r.user}</span>
    </div>`;
  });
  document.getElementById("reviewList").innerHTML = reviewHtml;

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
  clearInterval(audioTimer);
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  document.getElementById("audioFill").style.width = "0%";
  document.getElementById("audioCurrentTime").textContent = "0:00";
  document.getElementById("audioProgressBar").classList.remove("show");
  document.getElementById("audioOverlay").classList.remove("hidden");
  renderPart(1);
}
