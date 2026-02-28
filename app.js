// ============================
// TEST DATA
// ============================
const TEST_DATA = {
  1: {
    title: "Part 1",
    instruction: "Read the text and answer questions 1-13.",
    passage: `
      <h3>The life and work of Marie Curie</h3>
      <p>Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry. She was the first woman to win a Nobel Prize.</p>
      <p>From childhood, Marie was remarkable for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education. Because her father lost his savings through bad investment, she then had to take work as a teacher. From her earnings she was able to finance her sister Bronia's medical studies in Paris, on the understanding that Bronia would, in turn, later help her to get an education.</p>
      <p>In 1891 this promise was fulfilled and Marie went to Paris and began to study at the Sorbonne (the University of Paris). She often worked far into the night and lived on little more than bread and butter and tea. She came first in the examination in the physical sciences in 1893, and in 1894 was placed second in the examination in mathematical sciences. It was not until the spring of that year that she was introduced to Pierre Curie.</p>
      <p>Their marriage in 1895 marked the start of a partnership that was soon to achieve results of world significance. Following Henri Becquerel's discovery in 1896 of a new phenomenon, which Marie later called 'radioactivity', Marie Curie decided to find out if the radioactivity discovered in uranium was to be found in other elements. She discovered that this was true for thorium.</p>
      <p>Turning her attention to minerals, she found her interest drawn to pitchblende, a mineral whose radioactivity, superior to that of pure uranium, could be explained only by the presence in the ore of small quantities of an unknown substance of very high activity. Pierre Curie joined in the work that she had undertaken to resolve this problem, and that led to the discovery of the new elements, polonium and radium. While Pierre Curie devoted himself chiefly to the physical study of the new radiations, Marie Curie struggled to obtain pure radium in the metallic state. This was achieved with the help of the chemist André Louis Debierne, one of Pierre Curie's pupils. Based on the results of this research, Marie Curie received her Doctorate of Science, and in 1903 Marie and Pierre shared with Becquerel the Nobel Prize for Physics for the discovery of radioactivity.</p>
      <p>The게births of Marie's two daughters, Irène and Ève, in 1897 and 1904 failed to interrupt her scientific work. She was appointed lecturer in physics at the École Normale Supérieure for girls in Sèvres, France (1900), and introduced a method of teaching based on experimental demonstrations. In 1906 ثPierre Curie was killed by a horse-drawn cart in Paris. Marie was devastated by this, but resolved to go on with their work. She was given Pierre's teaching post at the Sorbonne, thus becoming the university's first female professor.</p>
      <p>In 1911, Marie Curie received the Nobel Prize for Chemistry, for the isolation of pure radium. During World War I, Marie Curie, with the help of her daughter Irène, devoted herself to the development of the use of X-radiography, including the mobile units which came to be known as 'petites Curies', used for treating wounded soldiers. In 1918, the Curie Institute was founded with the aim of promoting research in physics, chemistry and biology. Marie Curie, now combating fatigue and ill-health, continued to work on radioactive materials, researching the medical uses of these elements.</p>
      <p>Marie Curie saw the importance of collecting radioactive material both for research and for cases of diseases which could be treated with radioactivity. The게 게radioactive material stocked in Paris contributed to the discoveries in the 1930s of the neutron and of what was known as artificial radioactivity. Shortly after these discoveries, Marie Curie died of leukaemia, which was caused by the radiation to which she had been exposed over many years.</p>
    `,
    questions: [
      {
        section: "Questions 1-6",
        instructions: 'Choose <strong>TRUE</strong> if the statement agrees with the information given in the text, choose <strong>FALSE</strong> if the statement contradicts the information, or choose <strong>NOT GIVEN</strong> if there is no information on this.',
        type: "tfng",
        items: [
          { num: 1, text: "Marie Curie's husband was a joint winner of both Marie's Nobel Prizes.", answer: "FALSE" },
          { num: 2, text: "Marie became interested in science when she was a child.", answer: "NOT GIVEN" },
          { num: 3, text: "Marie was able to attend the Sorbonne because of her sister's financial contribution.", answer: "FALSE" },
          { num: 4, text: "Marie stopped doing research for several years when her children were born.", answer: "FALSE" },
          { num: 5, text: "Marie took over the teaching position her husband had held.", answer: "TRUE" },
          { num: 6, text: "Marie's sister Bronia studied the medical uses of radioactivity.", answer: "NOT GIVEN" }
        ]
      },
      {
        section: "Questions 7-13",
        instructions: 'Complete the notes below. Choose <strong>ONE WORD</strong> from the passage for each answer.',
        type: "fill",
        title: "Marie Curie's research on radioactivity",
        items: [
          { num: 7, before: "When uranium was discovered to be radioactive, Marie Curie found that the element called", after: "had the same property.", answer: "thorium" },
          { num: 8, before: "Marie and Pierre Curie's research into the radioactivity of the mineral known as", after: "led to the discovery of two new elements.", answer: "pitchblende" },
          { num: 9, before: "In 1__(year)__, Marie Curie received recognition for her work on the element", after: ".", answer: "radium" },
          { num: 10, before: "Marie and Irène Curie developed X-radiography which was used as a medical technique for", after: ".", answer: "soldiers" },
          { num: 11, before: "Marie Curie saw the importance of collecting radioactive material both for research and for cases of", after: ".", answer: "diseases" },
          { num: 12, before: "The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the", after: "and of what was known as artificial radioactivity.", answer: "neutron" },
          { num: 13, before: "During her research, Marie Curie was exposed to radiation and as a result she suffered from", after: ".", answer: "leukaemia" }
        ]
      }
    ]
  },
  2: {
    title: "Part 2",
    instruction: "Read the text and answer questions 14-26.",
    passage: `
      <h3>The Development of Modern Architecture</h3>
      <p>The history of modern architecture is a story of innovation, creative vision and bold departures from tradition. In the late 19th century, the industrial revolution brought new building materials — principally iron, steel, and reinforced concrete — that enabled architects to design structures that had previously been impossible. These materials allowed for taller buildings, wider spans, and more open interior spaces, fundamentally changing the relationship between form and function in architecture.</p>
      <p><strong>A. The Birth of Modernism</strong><br>The modern movement in architecture emerged in the early 20th century, primarily in Europe and the United States. Pioneers such as Le Corbusier, Ludwig Mies van der Rohe, and Frank Lloyd Wright championed the idea that buildings should reflect their function and take advantage of modern materials and construction techniques. Le Corbusier famously described a house as 'a machine for living in', emphasizing efficiency and rationality over decorative excess.</p>
      <p><strong>B. The International Style</strong><br>By the 1930s, a distinct architectural language had emerged, known as the International Style. Characterized by clean lines, open floor plans, glass curtain walls, and a rejection of applied ornament, the International Style spread rapidly across the globe. Its proponents believed that architecture should be universal, transcending national and cultural boundaries. The style reached its peak in post-war America, where corporations and government agencies embraced it for prestigious headquarters and civic buildings.</p>
      <p><strong>C. Brutalism and its Legacy</strong><br>In the 1950s and 1960s, a reaction against the perceived coldness and uniformity of the International Style gave rise to Brutalism. Named from the French term 'béton brut' (raw concrete), Brutalist architecture celebrated the raw, unfinished surfaces of concrete. Buildings in this style were often massive, fortress-like structures that divided public opinion. While some praised their honesty and sculptural quality, others found them oppressive and unwelcoming.</p>
      <p><strong>D. Postmodernism</strong><br>By the 1970s and 1980s, architects began to rebel against the austerity of modernism. Postmodern architecture reintroduced colour, decoration, and historical references that modernists had rejected. Architects such as Robert Venturi a Michael Graves incorporated playful elements, ironic quotations of classical forms, and bold use of colour. Venturi's famous declaration that 'Less is a bore' was a direct challenge to the modernist mantra 'Less is more'.</p>
      <p><strong>E. Deconstructivism</strong><br>Emerging in the late 1980s, Deconstructivism challenged conventional notions of architectural form. Architects such as Frank Gehry, Zaha Hadid, and Daniel Libeskind created buildings that appeared fragmented, distorted, or in a state of controlled chaos. The Guggenheim Museum in Bilbao, designed by Gehry, became one of the most celebrated buildings of the late 20th century, demonstrating how architecture could serve as a powerful cultural symbol and economic catalyst.</p>
      <p><strong>F. Sustainable Design</strong><br>In the 21st century, the most pressing challenge in architecture has become sustainability. Architects are increasingly focused on reducing the environmental impact of buildings through energy-efficient design, the use of renewable materials, and integration with natural systems. Green roofs, solar panels, rainwater harvesting, and passive cooling are becoming standard features of new buildings, as the profession responds to the urgent threat of climate change.</p>
      <p><strong>G. The Digital Revolution</strong><br>Digital technology has transformed every aspect of architectural practice, from design and visualization to fabrication and construction. Computer-aided design (CAD) and building information modelling (BIM) have made it possible to create and analyse complex forms that would have been impossible to design by hand. 3D printing and robotic fabrication are beginning to change how buildings are constructed, raising the prospect of structures that are customized, efficient, and built with minimal waste.</p>
    `,
    questions: [
      {
        section: "Questions 14-19",
        instructions: 'The reading passage has seven paragraphs, <strong>A-G</strong>. Choose the correct heading for each paragraph from the list below.',
        type: "select",
        headings: [
          "i. A response to environmental concerns",
          "ii. Buildings that divided opinion",
          "iii. Rejecting simplicity in favour of fun",
          "iv. The origins of a new approach to building",
          "v. Technology transforms the profession",
          "vi. A worldwide architectural language",
          "vii. Architecture as controlled disorder",
          "viii. Early experiments with concrete",
          "ix. Form follows function"
        ],
        items: [
          { num: 14, text: "Paragraph A", answer: "iv" },
          { num: 15, text: "Paragraph B", answer: "vi" },
          { num: 16, text: "Paragraph C", answer: "ii" },
          { num: 17, text: "Paragraph D", answer: "iii" },
          { num: 18, text: "Paragraph E", answer: "vii" },
          { num: 19, text: "Paragraph F", answer: "i" }
        ]
      },
      {
        section: "Questions 20-26",
        instructions: 'Complete the sentences below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.',
        type: "fill",
        title: "Key concepts in modern architecture",
        items: [
          { num: 20, before: "Le Corbusier compared a house to a", after: ".", answer: "machine" },
          { num: 21, before: "The International Style was characterised by clean lines and the rejection of applied", after: ".", answer: "ornament" },
          { num: 22, before: "Brutalist architecture gets its name from the French term for raw", after: ".", answer: "concrete" },
          { num: 23, before: "Robert Venturi declared that 'Less is a", after: "'.", answer: "bore" },
          { num: 24, before: "The Guggenheim Museum in Bilbao demonstrated architecture's role as a cultural symbol and economic", after: ".", answer: "catalyst" },
          { num: 25, before: "Architects combat climate change through energy-efficient design and use of renewable", after: ".", answer: "materials" },
          { num: 26, before: "3D printing and robotic fabrication may lead to structures built with minimal", after: ".", answer: "waste" }
        ]
      }
    ]
  },
  3: {
    title: "Part 3",
    instruction: "Read the text and answer questions 27-40.",
    passage: `
      <h3>Artificial Intelligence and the Future of Work</h3>
      <p>Artificial intelligence (AI) is no longer the stuff of science fiction. Over the past decade, rapid advances in machine learning, natural language processing, and computer vision have brought AI into the mainstream, transforming industries from healthcare to finance and raising fundamental questions about the future of human work. As AI systems become increasingly capable, the debate over whether they will create more jobs than they destroy — or vice versa — has become one of the most important economic discussions of our time.</p>
      <p>A landmark study by researchers at Oxford University, published in 2013, estimated that 47% of jobs in the United States were at high risk of being automated within the next two decades. The occupations most vulnerable to automation were those involving routine, repetitive tasks — data entry, assembly-line work, and basic bookkeeping, for instance. However, the study also noted that jobs requiring creativity, social intelligence, and complex problem-solving were much less susceptible to automation.</p>
      <p>Since then, a more nuanced understanding has emerged. Rather than replacing entire occupations, AI is more likely to automate specific tasks within jobs. A McKinsey Global Institute report estimated that while fewer than 5% of occupations could be entirely automated using current technology, about 60% of occupations have at least 30% of their activities that could be automated. This suggests that the impact of AI on employment will be less about wholesale job losses and more about the transformation of existing roles.</p>
      <p>One of the most visible effects of AI has been in the field of customer service. Chatbots and virtual assistants now handle millions of customer interactions daily, from answering basic queries to processing returns and scheduling appointments. While this has reduced the demand for some types of customer-service workers, it has also created new roles in areas such as chatbot design, conversational AI training, and customer experience management.</p>
      <p>In healthcare, AI is proving to be a powerful tool rather than a replacement for human professionals. Machine learning algorithms can now analyse medical images with a level of accuracy that matches or exceeds that of experienced radiologists. However, the interpretation of results, communication with patients, and the exercise of clinical judgment remain firmly in the domain of human doctors. AI in healthcare is best understood as an augmentation of human capability, not a substitute for it.</p>
      <p>The creative industries present a particularly interesting case. AI systems can now generate music, write poetry, create visual art, and even produce journalism. Yet many experts argue that these outputs lack the emotional depth, cultural context, and intentionality that characterize truly creative human work. The most promising applications of AI in the creative sector appear to be collaborative ones, where AI serves as a tool that enhances human creativity rather than replacing it.</p>
      <p>Education and training will be crucial in preparing the workforce for an AI-driven economy. Many experts advocate for a shift away from rote learning towards the development of skills that are difficult for AI to replicate: critical thinking, emotional intelligence, ethical reasoning, and the ability to work with complex, ambiguous information. Lifelong learning programmes and flexible retraining schemes will be essential for workers whose roles are transformed or displaced by automation.</p>
      <p>Governments and policymakers are also grappling with the societal implications of AI-driven automation. Some have proposed a universal basic income (UBI) to provide a safety net for workers displaced by technology. Others focus on investing in education, infrastructure, and research to ensure that the benefits of AI are widely shared. The challenge is to build an economic framework that promotes innovation while protecting the most vulnerable members of society.</p>
    `,
    questions: [
      {
        section: "Questions 27-32",
        instructions: 'Choose the correct letter, <strong>A, B, C or D</strong>.',
        type: "mcq",
        items: [
          {
            num: 27,
            text: "According to the Oxford University study, which types of jobs are most at risk from automation?",
            options: [
              { label: "A", text: "Those requiring creativity and social skills" },
              { label: "B", text: "Those involving routine, repetitive tasks" },
              { label: "C", text: "Those in the healthcare sector" },
              { label: "D", text: "Those requiring complex problem-solving" }
            ],
            answer: "B"
          },
          {
            num: 28,
            text: "What does the McKinsey report suggest about the impact of AI on jobs?",
            options: [
              { label: "A", text: "Most jobs will be entirely replaced by AI" },
              { label: "B", text: "AI will have little impact on existing jobs" },
              { label: "C", text: "AI will mainly change tasks within jobs rather than eliminate them" },
              { label: "D", text: "Only 5% of jobs will be affected by AI" }
            ],
            answer: "C"
          },
          {
            num: 29,
            text: "How has AI affected the customer service industry?",
            options: [
              { label: "A", text: "It has completely replaced customer service workers" },
              { label: "B", text: "It has had no significant impact" },
              { label: "C", text: "It has reduced some roles but created new ones" },
              { label: "D", text: "It has only been used for scheduling appointments" }
            ],
            answer: "C"
          },
          {
            num: 30,
            text: "What is the writer's view of AI in healthcare?",
            options: [
              { label: "A", text: "It will eventually replace doctors entirely" },
              { label: "B", text: "It is best seen as enhancing rather than replacing human professionals" },
              { label: "C", text: "It is not accurate enough for medical use" },
              { label: "D", text: "It is only useful for administrative tasks" }
            ],
            answer: "B"
          },
          {
            num: 31,
            text: "What does the passage suggest about AI in creative industries?",
            options: [
              { label: "A", text: "AI will soon replace human artists completely" },
              { label: "B", text: "AI-generated art has more emotional depth than human art" },
              { label: "C", text: "The best use of AI is as a collaborative tool for human creators" },
              { label: "D", text: "AI cannot produce any form of creative work" }
            ],
            answer: "C"
          },
          {
            num: 32,
            text: "According to the passage, what skills should education focus on?",
            options: [
              { label: "A", text: "Programming and data science" },
              { label: "B", text: "Routine, repetitive tasks" },
              { label: "C", text: "Critical thinking, emotional intelligence and ethical reasoning" },
              { label: "D", text: "Operating AI systems" }
            ],
            answer: "C"
          }
        ]
      },
      {
        section: "Questions 33-40",
        instructions: 'Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.',
        type: "fill",
        title: "The impact of AI on employment",
        items: [
          { num: 33, before: "A 2013 study estimated that 47% of US jobs were at risk of being", after: "within 20 years.", answer: "automated" },
          { num: 34, before: "McKinsey found that about 60% of occupations have at least 30% of their", after: "that could be automated.", answer: "activities" },
          { num: 35, before: "In customer service, AI chatbots now handle millions of customer", after: "daily.", answer: "interactions" },
          { num: 36, before: "In healthcare, machine learning can analyse medical", after: "with high accuracy.", answer: "images" },
          { num: 37, before: "Clinical", after: "remains the domain of human doctors.", answer: "judgment" },
          { num: 38, before: "AI-generated creative work is said to lack emotional depth and cultural", after: ".", answer: "context" },
          { num: 39, before: "Experts recommend developing skills related to critical thinking and emotional", after: ".", answer: "intelligence" },
          { num: 40, before: "Some policymakers have proposed a universal basic", after: "for displaced workers.", answer: "income" }
        ]
      }
    ]
  }
};

// ============================
// STATE
// ============================
let currentPart = 1;
let timerRunning = false;
let timerSeconds = 3600; // 60 minutes
let timerInterval = null;
let answers = {}; // { "q1": "TRUE", "q7": "thorium", ... }

// Part → question ranges
const PART_RANGES = { 1: [1, 13], 2: [14, 26], 3: [27, 40] };

// ============================
// INIT
// ============================
document.addEventListener("DOMContentLoaded", () => {
  renderPart(1);
  setupDivider();
});

// ============================
// RENDER
// ============================
function renderPart(partNum) {
  currentPart = partNum;
  const data = TEST_DATA[partNum];

  // Part header
  document.getElementById("partHeader").innerHTML =
    `<h2>${data.title}</h2><p>${data.instruction}</p>`;

  // Passage
  document.getElementById("passagePanel").innerHTML = data.passage;

  // Questions
  let html = "";
  data.questions.forEach(section => {
    html += `<div class="q-section">`;
    html += `<div class="q-section-title">${section.section}</div>`;
    html += `<div class="q-section-instructions">${section.instructions}</div>`;

    // ── TRUE / FALSE / NOT GIVEN ──
    if (section.type === "tfng") {
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="question" id="question-${q.num}">
          <div class="question-label"><span class="q-num">${q.num}</span> ${q.text}</div>
          <div class="options">
            ${["TRUE", "FALSE", "NOT GIVEN"].map(opt => `
              <label class="option-label">
                <input type="radio" name="q${q.num}" value="${opt}" ${saved === opt ? "checked" : ""}
                  onchange="saveAnswer(${q.num}, '${opt}')">
                ${opt}
              </label>
            `).join("")}
          </div>
        </div>`;
      });
    }

    // ── YES / NO / NOT GIVEN ──
    if (section.type === "ynnng") {
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="question" id="question-${q.num}">
          <div class="question-label"><span class="q-num">${q.num}</span> ${q.text}</div>
          <div class="options">
            ${["YES", "NO", "NOT GIVEN"].map(opt => `
              <label class="option-label">
                <input type="radio" name="q${q.num}" value="${opt}" ${saved === opt ? "checked" : ""}
                  onchange="saveAnswer(${q.num}, '${opt}')">
                ${opt}
              </label>
            `).join("")}
          </div>
        </div>`;
      });
    }

    // ── FILL / SENTENCE COMPLETION ──
    if (section.type === "fill") {
      if (section.title) {
        html += `<div class="note-completion"><h4>${section.title}</h4>`;
      }
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="input-question" id="question-${q.num}">
          <div class="input-row">
            <span class="q-num">${q.num}</span>
            ${q.before}
            <input type="text" id="input-${q.num}" value="${saved}"
              placeholder="..." oninput="saveAnswer(${q.num}, this.value)">
            ${q.after}
          </div>
        </div>`;
      });
      if (section.title) html += `</div>`;
    }

    // ── NOTE COMPLETION (HTML template with {N} blanks) ──
    if (section.type === "note") {
      let content = section.content || "";
      const regex = /\{(\d+)\}/g;
      content = content.replace(regex, (_, num) => {
        const saved = answers[`q${num}`] || "";
        return `<input class="inline-input" type="text" id="question-${num}" data-q="${num}"
          placeholder="${num}" value="${saved}"
          oninput="saveAnswer(${num}, this.value)" autocomplete="off">`;
      });
      html += `<div class="note-completion">${content}</div>`;
    }

    // ── MULTIPLE CHOICE (single answer, radio) ──
    if (section.type === "mcq") {
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="question" id="question-${q.num}">
          <div class="question-label"><span class="q-num">${q.num}</span> ${q.text}</div>
          <div class="options">
            ${q.options.map(opt => `
              <label class="option-label">
                <input type="radio" name="q${q.num}" value="${opt.label}" ${saved === opt.label ? "checked" : ""}
                  onchange="saveAnswer(${q.num}, '${opt.label}')">
                <strong>${opt.label}</strong>&nbsp; ${opt.text}
              </label>
            `).join("")}
          </div>
        </div>`;
      });
    }

    // ── MULTIPLE ANSWER (checkboxes) ──
    if (section.type === "multi") {
      if (section.prompt) {
        html += `<div class="question" id="question-${section.nums[0]}">
          <div class="question-label">${section.prompt}</div>
          <div class="options">
            ${section.items.map(opt => {
          const isChecked = section.nums.some(n => answers[`q${n}`] === opt.label);
          return `<label class="option-label">
                <input type="checkbox" value="${opt.label}"
                  ${isChecked ? "checked" : ""}
                  onchange="saveMulti(this, [${section.nums}])">
                <strong>${opt.label}</strong>&nbsp; ${opt.text}
              </label>`;
        }).join("")}
          </div>
        </div>`;
      }
    }

    // ── MATCHING HEADINGS (select dropdown with roman numerals) ──
    if (section.type === "select") {
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="match-row" id="question-${q.num}">
          <span class="q-num">${q.num}</span>
          <span class="match-text">${q.text}</span>
          <select onchange="saveAnswer(${q.num}, this.value)">
            <option value="">-- Select --</option>
            ${section.headings.map((h, i) => {
          const val = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"][i] || String(i + 1);
          return `<option value="${val}" ${saved === val ? "selected" : ""}>${val}. ${h}</option>`;
        }).join("")}
          </select>
        </div>`;
      });
    }

    // ── MATCHING INFORMATION (dropdown per statement with paragraph letters) ──
    if (section.type === "matchinfo") {
      const paras = section.paragraphs || ["A", "B", "C", "D", "E", "F", "G", "H"];
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="match-row" id="question-${q.num}">
          <span class="q-num">${q.num}</span>
          <span class="match-text">${q.text}</span>
          <select onchange="saveAnswer(${q.num}, this.value)">
            <option value="">-- Select --</option>
            ${paras.map(p => `<option value="${p}" ${saved === p ? "selected" : ""}>${p}</option>`).join("")}
          </select>
        </div>`;
      });
    }

    // ── MATCHING FEATURES (dropdown per statement, options from list) ──
    if (section.type === "matchfeat") {
      if (section.optionsList) {
        html += `<div class="match-options-panel"><strong>Options:</strong> ${section.optionsList.map(o =>
          `<span class="match-option-chip"><strong>${o.label}</strong> ${o.text}</span>`).join("")}</div>`;
      }
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="match-row" id="question-${q.num}">
          <span class="q-num">${q.num}</span>
          <span class="match-text">${q.text}</span>
          <select onchange="saveAnswer(${q.num}, this.value)">
            <option value="">-- Select --</option>
            ${(section.optionsList || []).map(o =>
          `<option value="${o.label}" ${saved === o.label ? "selected" : ""}>${o.label}. ${o.text}</option>`).join("")}
          </select>
        </div>`;
      });
    }

    // ── MATCHING SENTENCE ENDINGS (dropdown from endings list) ──
    if (section.type === "matchend") {
      if (section.endings) {
        html += `<div class="match-options-panel"><strong>Endings:</strong><ul>${section.endings.map(e =>
          `<li><strong>${e.label}</strong> ${e.text}</li>`).join("")}</ul></div>`;
      }
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="match-row" id="question-${q.num}">
          <span class="q-num">${q.num}</span>
          <span class="match-text">${q.text}</span>
          <select onchange="saveAnswer(${q.num}, this.value)">
            <option value="">-- Select --</option>
            ${(section.endings || []).map(e =>
          `<option value="${e.label}" ${saved === e.label ? "selected" : ""}>${e.label}</option>`).join("")}
          </select>
        </div>`;
      });
    }

    // ── SUMMARY COMPLETION (paragraph with inline blanks) ──
    if (section.type === "summary") {
      let content = section.content || "";
      const regex = /\{(\d+)\}/g;
      content = content.replace(regex, (_, num) => {
        const saved = answers[`q${num}`] || "";
        return `<input class="inline-input" type="text" id="question-${num}" data-q="${num}"
          placeholder="${num}" value="${saved}"
          oninput="saveAnswer(${num}, this.value)" autocomplete="off">`;
      });
      html += `<div class="summary-section">${content}</div>`;
    }

    // ── SUMMARY COMPLETION DRAG & DROP (word bank + drop zones) ──
    if (section.type === "dragdrop") {
      html += `<div class="dragdrop-section">`;
      // Word bank
      if (section.wordBank) {
        html += `<div class="word-bank"><strong>Word Bank:</strong><div class="word-bank-chips">`;
        section.wordBank.forEach(w => {
          html += `<span class="word-chip" draggable="true" ondragstart="dragWord(event, '${w.label}')"
            data-label="${w.label}"><strong>${w.label}</strong> ${w.text}</span>`;
        });
        html += `</div></div>`;
      }
      // Drop zones (inline in content)
      let content = section.content || "";
      const ddRegex = /\{(\d+)\}/g;
      content = content.replace(ddRegex, (_, num) => {
        const saved = answers[`q${num}`] || "";
        const savedText = saved && section.wordBank ? (section.wordBank.find(w => w.label === saved) || {}).text || saved : saved;
        return `<span class="drop-zone ${saved ? 'filled' : ''}" id="question-${num}" data-q="${num}"
          ondrop="dropWord(event, ${num})" ondragover="event.preventDefault()" onclick="clearDrop(${num})">
          ${saved ? `<strong>${saved}</strong> ${savedText}` : num}</span>`;
      });
      html += `<div class="dragdrop-content">${content}</div>`;
      html += `</div>`;
    }

    // ── SHORT ANSWER ──
    if (section.type === "short") {
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="input-question" id="question-${q.num}">
          <div class="input-row">
            <span class="q-num">${q.num}</span>
            <span class="short-q-text">${q.text}</span>
          </div>
          <input type="text" class="short-answer-input" id="input-${q.num}" value="${saved}"
            placeholder="Your answer..." oninput="saveAnswer(${q.num}, this.value)">
        </div>`;
      });
    }

    // ── TABLE COMPLETION ──
    if (section.type === "table") {
      html += `<div class="table-completion" id="question-${section.items ? section.items[0].num : ''}">`;
      if (section.tableData) {
        html += `<table class="ielts-table"><thead><tr>`;
        section.tableData.headers.forEach(h => { html += `<th>${h}</th>`; });
        html += `</tr></thead><tbody>`;
        let blankIdx = 0;
        section.tableData.rows.forEach(row => {
          html += `<tr>`;
          row.forEach(cell => {
            if (cell === "____" && section.items && section.items[blankIdx]) {
              const q = section.items[blankIdx];
              const saved = answers[`q${q.num}`] || "";
              html += `<td><input class="table-input" type="text" id="question-${q.num}" value="${saved}"
                placeholder="${q.num}" oninput="saveAnswer(${q.num}, this.value)"></td>`;
              blankIdx++;
            } else {
              html += `<td>${cell}</td>`;
            }
          });
          html += `</tr>`;
        });
        html += `</tbody></table>`;
      }
      html += `</div>`;
    }

    // ── FLOW CHART COMPLETION ──
    if (section.type === "flowchart") {
      let content = section.content || "";
      const fcRegex = /\{(\d+)\}/g;
      content = content.replace(fcRegex, (_, num) => {
        const saved = answers[`q${num}`] || "";
        return `<input class="inline-input" type="text" id="question-${num}" data-q="${num}"
          placeholder="${num}" value="${saved}"
          oninput="saveAnswer(${num}, this.value)" autocomplete="off">`;
      });
      html += `<div class="flowchart-section">${content}</div>`;
    }

    // ── DIAGRAM LABELLING ──
    if (section.type === "diagram") {
      if (section.image) {
        html += `<div class="diagram-section"><img src="${section.image}" alt="Diagram" class="diagram-img"></div>`;
      }
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="input-question" id="question-${q.num}">
          <div class="input-row">
            <span class="q-num">${q.num}</span>
            <span class="short-q-text">${q.text}</span>
          </div>
          <input type="text" class="short-answer-input" id="input-${q.num}" value="${saved}"
            placeholder="Your answer..." oninput="saveAnswer(${q.num}, this.value)">
        </div>`;
      });
    }

    // ── PLAN / MAP LABELLING (dropdown from options) ──
    if (section.type === "planmap") {
      if (section.image) {
        html += `<div class="diagram-section"><img src="${section.image}" alt="Map/Plan" class="diagram-img"></div>`;
      }
      if (section.optionsList) {
        html += `<div class="match-options-panel"><strong>Options:</strong> ${section.optionsList.map(o =>
          `<span class="match-option-chip"><strong>${o.label}</strong> ${o.text}</span>`).join("")}</div>`;
      }
      section.items.forEach(q => {
        const saved = answers[`q${q.num}`] || "";
        html += `<div class="match-row" id="question-${q.num}">
          <span class="q-num">${q.num}</span>
          <span class="match-text">${q.text}</span>
          <select onchange="saveAnswer(${q.num}, this.value)">
            <option value="">-- Select --</option>
            ${(section.optionsList || []).map(o =>
          `<option value="${o.label}" ${saved === o.label ? "selected" : ""}>${o.label}. ${o.text}</option>`).join("")}
          </select>
        </div>`;
      });
    }

    html += `</div>`;
  });
  document.getElementById("questionsPanel").innerHTML = html;

  // Update bottom bar
  updatePartTabs();
  renderQNumbers();
  updateAnswerCount();

  // Scroll to top
  document.getElementById("passagePanel").scrollTop = 0;
  document.getElementById("questionsPanel").scrollTop = 0;
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

// ============================
// NAVIGATION
// ============================
function switchPart(partNum) {
  if (partNum === currentPart) return;
  renderPart(partNum);
}

function scrollToQ(num) {
  const el = document.getElementById(`question-${num}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    // brief highlight
    document.querySelectorAll(".question.active, .input-question.active, .match-row.active")
      .forEach(e => e.classList.remove("active"));
    el.classList.add("active");
    setTimeout(() => el.classList.remove("active"), 1500);
  }
}

function navPrev() {
  const [start] = PART_RANGES[currentPart];
  // Find last answered or just go to previous question
  if (currentPart > 1) switchPart(currentPart - 1);
}
function navNext() {
  if (currentPart < 3) switchPart(currentPart + 1);
}

// ============================
// TIMER
// ============================
function toggleTimer() {
  const btn = document.getElementById("btnStart");
  if (!timerRunning) {
    timerRunning = true;
    btn.textContent = "Pause";
    btn.classList.add("running");
    timerInterval = setInterval(tick, 1000);
  } else {
    timerRunning = false;
    btn.textContent = "Start";
    btn.classList.remove("running");
    clearInterval(timerInterval);
  }
}

function tick() {
  if (timerSeconds <= 0) {
    clearInterval(timerInterval);
    timerRunning = false;
    document.getElementById("btnStart").textContent = "Done";
    confirmSubmit();
    return;
  }
  timerSeconds--;
  const min = Math.floor(timerSeconds / 60);
  const sec = timerSeconds % 60;
  const display = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  const el = document.getElementById("timer");
  el.textContent = display;
  el.classList.toggle("warning", timerSeconds < 300);
}

// ============================
// DIVIDER (resize)
// ============================
function setupDivider() {
  const divider = document.getElementById("divider");
  const passage = document.getElementById("passagePanel");
  const questions = document.getElementById("questionsPanel");
  let isDragging = false;

  divider.addEventListener("mousedown", e => {
    isDragging = true;
    divider.classList.add("active");
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    e.preventDefault();
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const container = document.querySelector(".main-split");
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const total = rect.width;
    const pct = (x / total) * 100;
    if (pct > 20 && pct < 80) {
      passage.style.flex = `0 0 ${pct}%`;
      questions.style.flex = `0 0 ${100 - pct}%`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      divider.classList.remove("active");
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  });
}

// ============================
// FULLSCREEN
// ============================
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// ============================
// NOTES & HIGHLIGHT SYSTEM
// ============================
let highlights = { 1: [], 2: [], 3: [] }; // per-part highlights
let hlIdCounter = 0;
let savedSelection = null;
let activeHlId = null;

function toggleNotes() {
  document.getElementById("notesPanel").classList.toggle("open");
}

function switchNotesTab(tab) {
  document.querySelectorAll(".notes-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".notes-tab-content").forEach(t => t.classList.remove("active"));
  if (tab === "notes") {
    document.querySelector('.notes-tab:first-child').classList.add("active");
    document.getElementById("notesTabContent").classList.add("active");
  } else {
    document.querySelector('.notes-tab:last-child').classList.add("active");
    document.getElementById("highlightsTabContent").classList.add("active");
    renderHighlightsList();
  }
}

// --- Selection & toolbar ---
document.addEventListener("mouseup", e => {
  const toolbar = document.getElementById("hlToolbar");
  const passage = document.getElementById("passagePanel");

  // If clicking inside toolbar, do nothing
  if (toolbar.contains(e.target)) return;

  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || !sel.rangeCount) {
    setTimeout(() => {
      if (!toolbar.matches(":hover")) toolbar.classList.remove("show");
    }, 150);
    return;
  }

  // Check if selection is inside passage panel
  const range = sel.getRangeAt(0);
  if (!passage.contains(range.commonAncestorContainer)) {
    toolbar.classList.remove("show");
    return;
  }

  const text = sel.toString().trim();
  if (!text) { toolbar.classList.remove("show"); return; }

  // Position toolbar above selection
  const rect = range.getBoundingClientRect();
  toolbar.style.left = `${rect.left + rect.width / 2 - 90}px`;
  toolbar.style.top = `${rect.top - 44}px`;
  toolbar.classList.add("show");
  savedSelection = { range: range.cloneRange(), text };
});

// Hide toolbar when clicking elsewhere
document.addEventListener("mousedown", e => {
  const toolbar = document.getElementById("hlToolbar");
  if (!toolbar.contains(e.target)) {
    toolbar.classList.remove("show");
  }
});

// --- Apply highlight ---
function applyHighlight(color) {
  if (!savedSelection) return;
  const toolbar = document.getElementById("hlToolbar");
  toolbar.classList.remove("show");

  const range = savedSelection.range;
  const text = savedSelection.text;

  // Wrap selection in a span
  const span = document.createElement("span");
  span.className = `hl-${color}`;
  const id = `hl-${++hlIdCounter}`;
  span.dataset.hlId = id;
  span.title = "Click to edit highlight";

  span.addEventListener("click", () => showToolbarOnHighlight(span));

  try {
    range.surroundContents(span);
  } catch {
    // If range crosses element boundaries, use extractContents
    const frag = range.extractContents();
    span.appendChild(frag);
    range.insertNode(span);
  }

  // Save highlight data
  highlights[currentPart].push({
    id,
    color,
    text: text.substring(0, 200),
    note: ""
  });

  window.getSelection().removeAllRanges();
  savedSelection = null;
  renderHighlightsList();
}

function showToolbarOnHighlight(span) {
  const toolbar = document.getElementById("hlToolbar");
  const rect = span.getBoundingClientRect();
  toolbar.style.left = `${rect.left + rect.width / 2 - 90}px`;
  toolbar.style.top = `${rect.top - 44}px`;
  toolbar.classList.add("show");
  activeHlId = span.dataset.hlId;
  savedSelection = null; // not a new selection, but editing existing
}

function eraseHighlight() {
  const toolbar = document.getElementById("hlToolbar");
  toolbar.classList.remove("show");

  if (activeHlId) {
    // Remove from DOM
    const span = document.querySelector(`[data-hl-id="${activeHlId}"]`);
    if (span) {
      const parent = span.parentNode;
      while (span.firstChild) parent.insertBefore(span.firstChild, span);
      parent.removeChild(span);
      parent.normalize();
    }
    // Remove from data
    highlights[currentPart] = highlights[currentPart].filter(h => h.id !== activeHlId);
    activeHlId = null;
    renderHighlightsList();
    return;
  }

  // If we have a saved selection that's inside a highlight span
  if (savedSelection) {
    const container = savedSelection.range.commonAncestorContainer;
    const hlSpan = container.closest ? container.closest("[data-hl-id]") :
      container.parentElement ? container.parentElement.closest("[data-hl-id]") : null;
    if (hlSpan) {
      const id = hlSpan.dataset.hlId;
      const parent = hlSpan.parentNode;
      while (hlSpan.firstChild) parent.insertBefore(hlSpan.firstChild, hlSpan);
      parent.removeChild(hlSpan);
      parent.normalize();
      highlights[currentPart] = highlights[currentPart].filter(h => h.id !== id);
      renderHighlightsList();
    }
    savedSelection = null;
  }
}

function addNoteToHighlight() {
  const toolbar = document.getElementById("hlToolbar");
  toolbar.classList.remove("show");

  let targetId = activeHlId;

  // If no active highlight, check if saved selection is inside one
  if (!targetId && savedSelection) {
    const container = savedSelection.range.commonAncestorContainer;
    const hlSpan = container.closest ? container.closest("[data-hl-id]") :
      container.parentElement ? container.parentElement.closest("[data-hl-id]") : null;
    if (hlSpan) targetId = hlSpan.dataset.hlId;
  }

  // If still no target, apply yellow highlight first
  if (!targetId && savedSelection) {
    applyHighlight("yellow");
    targetId = `hl-${hlIdCounter}`;
  }

  if (!targetId) return;

  const hl = highlights[currentPart].find(h => h.id === targetId);
  if (!hl) return;

  const note = prompt("Add a note to this highlight:", hl.note || "");
  if (note !== null) {
    hl.note = note;
    // Add/remove note badge
    const span = document.querySelector(`[data-hl-id="${targetId}"]`);
    if (span) {
      span.classList.toggle("hl-has-note", !!note);
    }
    renderHighlightsList();
    // Open notes panel to highlights tab
    document.getElementById("notesPanel").classList.add("open");
    switchNotesTab("highlights");
  }
  activeHlId = null;
}

// --- Highlights list in notes panel ---
function renderHighlightsList() {
  const list = document.getElementById("hlNotesList");
  if (!list) return;

  // Gather all highlights across all parts
  let allHl = [];
  for (let p = 1; p <= 3; p++) {
    highlights[p].forEach(h => allHl.push({ ...h, part: p }));
  }

  if (allHl.length === 0) {
    list.innerHTML = '<div class="hl-empty">No highlights yet. Select text in the passage and choose a color to highlight.</div>';
    return;
  }

  let html = "";
  allHl.forEach(h => {
    const colorClass = h.color === "yellow" ? "" : h.color;
    html += `<div class="hl-note-item ${colorClass}" onclick="goToHighlight('${h.id}', ${h.part})">
      <div class="hl-note-text">"${escapeHtml(h.text)}"</div>
      ${h.note ? `<div class="hl-note-comment">${escapeHtml(h.note)}</div>` : ""}
      <div class="hl-note-actions">
        <button onclick="event.stopPropagation();editHighlightNote('${h.id}', ${h.part})">✏️ Note</button>
        <button onclick="event.stopPropagation();deleteHighlight('${h.id}', ${h.part})">🗑️ Delete</button>
        <span style="margin-left:auto;font-size:11px;color:var(--text-light)">Part ${h.part}</span>
      </div>
    </div>`;
  });
  list.innerHTML = html;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function goToHighlight(id, part) {
  if (part !== currentPart) {
    switchPart(part);
    // Need to wait for render
    setTimeout(() => {
      const el = document.querySelector(`[data-hl-id="${id}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  } else {
    const el = document.querySelector(`[data-hl-id="${id}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function editHighlightNote(id, part) {
  const hl = highlights[part].find(h => h.id === id);
  if (!hl) return;
  const note = prompt("Edit note:", hl.note || "");
  if (note !== null) {
    hl.note = note;
    const span = document.querySelector(`[data-hl-id="${id}"]`);
    if (span) span.classList.toggle("hl-has-note", !!note);
    renderHighlightsList();
  }
}

function deleteHighlight(id, part) {
  // Remove from DOM if on current part
  if (part === currentPart) {
    const span = document.querySelector(`[data-hl-id="${id}"]`);
    if (span) {
      const parent = span.parentNode;
      while (span.firstChild) parent.insertBefore(span.firstChild, span);
      parent.removeChild(span);
      parent.normalize();
    }
  }
  highlights[part] = highlights[part].filter(h => h.id !== id);
  renderHighlightsList();
}

// ============================
// SUBMIT
// ============================
function confirmSubmit() {
  const total = 40;
  let answered = 0;
  for (let i = 1; i <= 40; i++) {
    if (answers[`q${i}`]) answered++;
  }
  document.getElementById("confirmMsg").innerHTML =
    `You have answered <strong>${answered}</strong> out of <strong>${total}</strong> questions. Are you sure you want to submit?`;
  document.getElementById("confirmOverlay").classList.add("show");
}

function closeConfirm() {
  document.getElementById("confirmOverlay").classList.remove("show");
}

function submitTest() {
  closeConfirm();
  // Stop timer
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById("btnStart").textContent = "Done";

  // Calculate score
  let totalCorrect = 0;
  const partScores = { 1: 0, 2: 0, 3: 0 };
  const reviewItems = [];

  for (let p = 1; p <= 3; p++) {
    TEST_DATA[p].questions.forEach(section => {
      section.items.forEach(q => {
        const userAns = (answers[`q${q.num}`] || "").toLowerCase().trim();
        const correct = q.answer.toLowerCase().trim();
        const isCorrect = userAns === correct;
        if (isCorrect) {
          totalCorrect++;
          partScores[p]++;
        }
        reviewItems.push({
          num: q.num,
          correct: q.answer,
          user: answers[`q${q.num}`] || "—",
          isCorrect
        });
      });
    });
  }

  // Band score estimation (rough IELTS scale)
  const bandMap = [
    [40, 9.0], [39, 8.5], [37, 8.0], [35, 7.5], [33, 7.0],
    [30, 6.5], [27, 6.0], [23, 5.5], [19, 5.0], [15, 4.5],
    [13, 4.0], [10, 3.5], [6, 3.0], [0, 2.0]
  ];
  let band = 2.0;
  for (const [threshold, score] of bandMap) {
    if (totalCorrect >= threshold) { band = score; break; }
  }

  // Populate modal
  document.getElementById("scoreNum").textContent = totalCorrect;
  document.getElementById("bandScore").textContent = band.toFixed(1);

  // Score ring animation
  const circumference = 326.73;
  const offset = circumference - (totalCorrect / 40) * circumference;
  const circle = document.getElementById("scoreCircle");
  circle.style.strokeDashoffset = circumference; // reset
  setTimeout(() => { circle.style.strokeDashoffset = offset; }, 50);

  // Part breakdown
  let breakdownHtml = "";
  for (let p = 1; p <= 3; p++) {
    const [s, e] = PART_RANGES[p];
    const total = e - s + 1;
    breakdownHtml += `<div class="row"><span class="label">Part ${p}</span><span class="value">${partScores[p]} / ${total}</span></div>`;
  }
  document.getElementById("partBreakdown").innerHTML = breakdownHtml;

  // Review list
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

  // Show modal
  document.getElementById("resultsModal").classList.add("show");
}

function closeResults() {
  document.getElementById("resultsModal").classList.remove("show");
}

function retakeTest() {
  closeResults();
  answers = {};
  timerSeconds = 3600;
  document.getElementById("timer").textContent = "60:00";
  document.getElementById("timer").classList.remove("warning");
  document.getElementById("btnStart").textContent = "Start";
  renderPart(1);
}
