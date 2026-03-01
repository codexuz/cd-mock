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
      <p>The births of Marie's two daughters, Irène and Ève, in 1897 and 1904 failed to interrupt her scientific work. She was appointed lecturer in physics at the École Normale Supérieure for girls in Sèvres, France (1900), and introduced a method of teaching based on experimental demonstrations. In 1906 Pierre Curie was killed by a horse-drawn cart in Paris. Marie was devastated by this, but resolved to go on with their work. She was given Pierre's teaching post at the Sorbonne, thus becoming the university's first female professor.</p>
      <p>In 1911, Marie Curie received the Nobel Prize for Chemistry, for the isolation of pure radium. During World War I, Marie Curie, with the help of her daughter Irène, devoted herself to the development of the use of X-radiography, including the mobile units which came to be known as 'petites Curies', used for treating wounded soldiers. In 1918, the Curie Institute was founded with the aim of promoting research in physics, chemistry and biology. Marie Curie, now combating fatigue and ill-health, continued to work on radioactive materials, researching the medical uses of these elements.</p>
      <p>Marie Curie saw the importance of collecting radioactive material both for research and for cases of diseases which could be treated with radioactivity. The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the neutron and of what was known as artificial radioactivity. Shortly after these discoveries, Marie Curie died of leukaemia, which was caused by the radiation to which she had been exposed over many years.</p>
    `,
    questions: [
      {
        section: "Questions 1-6",
        instruction: 'Choose <strong>TRUE</strong> if the statement agrees with the information given in the text, choose <strong>FALSE</strong> if the statement contradicts the information, or choose <strong>NOT GIVEN</strong> if there is no information on this.',
        type: "TRUE_FALSE_NOT_GIVEN",
        questions: [
          { questionNumber: 1, questionText: "Marie Curie's husband was a joint winner of both Marie's Nobel Prizes.", correctAnswer: "FALSE" },
          { questionNumber: 2, questionText: "Marie became interested in science when she was a child.", correctAnswer: "NOT GIVEN" },
          { questionNumber: 3, questionText: "Marie was able to attend the Sorbonne because of her sister's financial contribution.", correctAnswer: "FALSE" },
          { questionNumber: 4, questionText: "Marie stopped doing research for several years when her children were born.", correctAnswer: "FALSE" },
          { questionNumber: 5, questionText: "Marie took over the teaching position her husband had held.", correctAnswer: "TRUE" },
          { questionNumber: 6, questionText: "Marie's sister Bronia studied the medical uses of radioactivity.", correctAnswer: "NOT GIVEN" }
        ]
      },
      {
        section: "Questions 7-13",
        instruction: 'Complete the notes below. Choose <strong>ONE WORD</strong> from the passage for each answer.',
        type: "NOTE_COMPLETION",
        questionText: `
          <h4>Marie Curie's research on radioactivity</h4>
          <ul>
            <li>When uranium was discovered to be radioactive, Marie Curie found that the element called {7} had the same property.</li>
            <li>Marie and Pierre Curie's research into the radioactivity of the mineral known as {8} led to the discovery of two new elements.</li>
            <li>In 1__(year)__, Marie Curie received recognition for her work on the element {9}.</li>
            <li>Marie and Irène Curie developed X-radiography which was used as a medical technique for {10}.</li>
            <li>Marie Curie saw the importance of collecting radioactive material both for research and for cases of {11}.</li>
            <li>The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the {12} and of what was known as artificial radioactivity.</li>
            <li>During her research, Marie Curie was exposed to radiation and as a result she suffered from {13}.</li>
          </ul>`,
        questions: [
          { questionNumber: 7, correctAnswer: "thorium" },
          { questionNumber: 8, correctAnswer: "pitchblende" },
          { questionNumber: 9, correctAnswer: "radium" },
          { questionNumber: 10, correctAnswer: "soldiers" },
          { questionNumber: 11, correctAnswer: "diseases" },
          { questionNumber: 12, correctAnswer: "neutron" },
          { questionNumber: 13, correctAnswer: "leukaemia" }
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
        instruction: 'The reading passage has seven paragraphs, <strong>A-G</strong>. Choose the correct heading for each paragraph from the list below.',
        type: "MATCHING_HEADINGS",
        headingOptions: {
          "i": "A response to environmental concerns",
          "ii": "Buildings that divided opinion",
          "iii": "Rejecting simplicity in favour of fun",
          "iv": "The origins of a new approach to building",
          "v": "Technology transforms the profession",
          "vi": "A worldwide architectural language",
          "vii": "Architecture as controlled disorder",
          "viii": "Early experiments with concrete",
          "ix": "Form follows function"
        },
        questions: [
          { questionNumber: 14, questionText: "Paragraph A", correctAnswer: "iv" },
          { questionNumber: 15, questionText: "Paragraph B", correctAnswer: "vi" },
          { questionNumber: 16, questionText: "Paragraph C", correctAnswer: "ii" },
          { questionNumber: 17, questionText: "Paragraph D", correctAnswer: "iii" },
          { questionNumber: 18, questionText: "Paragraph E", correctAnswer: "vii" },
          { questionNumber: 19, questionText: "Paragraph F", correctAnswer: "i" }
        ]
      },
      {
        section: "Questions 20-26",
        instruction: 'Complete the sentences below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.',
        type: "SENTENCE_COMPLETION",
        questionText: `
          <h4>Key concepts in modern architecture</h4>
          <div class="sentence-item">Le Corbusier compared a house to a {20}.</div>
          <div class="sentence-item">The International Style was characterised by clean lines and the rejection of applied {21}.</div>
          <div class="sentence-item">Brutalist architecture gets its name from the French term for raw {22}.</div>
          <div class="sentence-item">Robert Venturi declared that 'Less is a {23}'.</div>
          <div class="sentence-item">The Guggenheim Museum in Bilbao demonstrated architecture's role as a cultural symbol and economic {24}.</div>
          <div class="sentence-item">Architects combat climate change through energy-efficient design and use of renewable {25}.</div>
          <div class="sentence-item">3D printing and robotic fabrication may lead to structures built with minimal {26}.</div>
        `,
        questions: [
          { questionNumber: 20, correctAnswer: "machine" },
          { questionNumber: 21, correctAnswer: "ornament" },
          { questionNumber: 22, correctAnswer: "concrete" },
          { questionNumber: 23, correctAnswer: "bore" },
          { questionNumber: 24, correctAnswer: "catalyst" },
          { questionNumber: 25, correctAnswer: "materials" },
          { questionNumber: 26, correctAnswer: "waste" }
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
        instruction: 'Choose the correct letter, <strong>A, B, C or D</strong>.',
        type: "MULTIPLE_CHOICE",
        questions: [
          {
            questionNumber: 27,
            questionText: "According to the Oxford University study, which types of jobs are most at risk from automation?",
            options: [
              { optionKey: "A", optionText: "Those requiring creativity and social skills", isCorrect: false },
              { optionKey: "B", optionText: "Those involving routine, repetitive tasks", isCorrect: true },
              { optionKey: "C", optionText: "Those in the healthcare sector", isCorrect: false },
              { optionKey: "D", optionText: "Those requiring complex problem-solving", isCorrect: false }
            ],
            correctAnswer: "B"
          },
          {
            questionNumber: 28,
            questionText: "What does the McKinsey report suggest about the impact of AI on jobs?",
            options: [
              { optionKey: "A", optionText: "Most jobs will be entirely replaced by AI", isCorrect: false },
              { optionKey: "B", optionText: "AI will have little impact on existing jobs", isCorrect: false },
              { optionKey: "C", optionText: "AI will mainly change tasks within jobs rather than eliminate them", isCorrect: true },
              { optionKey: "D", optionText: "Only 5% of jobs will be affected by AI", isCorrect: false }
            ],
            correctAnswer: "C"
          },
          {
            questionNumber: 29,
            questionText: "How has AI affected the customer service industry?",
            options: [
              { optionKey: "A", optionText: "It has completely replaced customer service workers", isCorrect: false },
              { optionKey: "B", optionText: "It has had no significant impact", isCorrect: false },
              { optionKey: "C", optionText: "It has reduced some roles but created new ones", isCorrect: true },
              { optionKey: "D", optionText: "It has only been used for scheduling appointments", isCorrect: false }
            ],
            correctAnswer: "C"
          },
          {
            questionNumber: 30,
            questionText: "What is the writer's view of AI in healthcare?",
            options: [
              { optionKey: "A", optionText: "It will eventually replace doctors entirely", isCorrect: false },
              { optionKey: "B", optionText: "It is best seen as enhancing rather than replacing human professionals", isCorrect: true },
              { optionKey: "C", optionText: "It is not accurate enough for medical use", isCorrect: false },
              { optionKey: "D", text: "It is only useful for administrative tasks", isCorrect: false }
            ],
            correctAnswer: "B"
          },
          {
            questionNumber: 31,
            questionText: "What does the passage suggest about AI in creative industries?",
            options: [
              { optionKey: "A", optionText: "AI will soon replace human artists completely", isCorrect: false },
              { optionKey: "B", optionText: "AI-generated art has more emotional depth than human art", isCorrect: false },
              { optionKey: "C", optionText: "The best use of AI is as a collaborative tool for human creators", isCorrect: true },
              { optionKey: "D", optionText: "AI cannot produce any form of creative work", isCorrect: false }
            ],
            correctAnswer: "C"
          },
          {
            questionNumber: 32,
            questionText: "According to the passage, what skills should education focus on?",
            options: [
              { optionKey: "A", optionText: "Programming and data science", isCorrect: false },
              { optionKey: "B", optionText: "Routine, repetitive tasks", isCorrect: false },
              { optionKey: "C", optionText: "Critical thinking, emotional intelligence and ethical reasoning", isCorrect: true },
              { optionKey: "D", optionText: "Operating AI systems", isCorrect: false }
            ],
            correctAnswer: "C"
          }
        ]
      },
      {
        section: "Questions 33-40",
        instruction: 'Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.',
        type: "SUMMARY_COMPLETION",
        questionText: `
          <h4>The impact of AI on employment</h4>
          <p>A 2013 study estimated that 47% of US jobs were at risk of being {33} within 20 years. McKinsey found that about 60% of occupations have at least 30% of their {34} that could be automated. In customer service, AI chatbots now handle millions of customer {35} daily. In healthcare, machine learning can analyse medical {36} with high accuracy. Clinical {37} remains the domain of human doctors. AI-generated creative work is said to lack emotional depth and cultural {38}. Experts recommend developing skills related to critical thinking and emotional {39}. Some policymakers have proposed a universal basic {40} for displaced workers.</p>
        `,
        questions: [
          { questionNumber: 33, correctAnswer: "automated" },
          { questionNumber: 34, correctAnswer: "activities" },
          { questionNumber: 35, correctAnswer: "interactions" },
          { questionNumber: 36, correctAnswer: "images" },
          { questionNumber: 37, correctAnswer: "judgment" },
          { questionNumber: 38, correctAnswer: "context" },
          { questionNumber: 39, correctAnswer: "intelligence" },
          { questionNumber: 40, correctAnswer: "income" }
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
    "<h2>" + data.title + "</h2><p>" + data.instruction + "</p>";

  // Passage
  document.getElementById("passagePanel").innerHTML = data.passage;

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
        section.questions.forEach(q => {
          const saved = answers[`q${q.questionNumber}`] || "";
          html += `<div class="question" id="question-${q.questionNumber}">
            <div class="question-label"><span class="q-num">${q.questionNumber}</span> ${q.questionText}</div>
            <div class="options">
              ${(q.options || []).map(opt => `
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

  // Highlight active
  document.querySelectorAll(".part-nav button").forEach(b => b.classList.remove("active"));
  document.getElementById(`btnPart${partNum}`).classList.add("active");
  updateReviewCounts();
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
  stopTimer();

  let totalCorrect = 0;
  let partScores = { 1: 0, 2: 0, 3: 0 };
  let reviewItems = [];

  for (let p = 1; p <= 3; p++) {
    const data = TEST_DATA[p];
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

  let band = 0;
  if (totalCorrect >= 39) band = 9.0;
  else if (totalCorrect >= 37) band = 8.5;
  else if (totalCorrect >= 35) band = 8.0;
  else if (totalCorrect >= 33) band = 7.5;
  else if (totalCorrect >= 30) band = 7.0;
  else if (totalCorrect >= 27) band = 6.5;
  else if (totalCorrect >= 23) band = 6.0;
  else if (totalCorrect >= 19) band = 5.5;
  else if (totalCorrect >= 15) band = 5.0;
  else if (totalCorrect >= 13) band = 4.5;
  else if (totalCorrect >= 10) band = 4.0;
  else if (totalCorrect >= 8) band = 3.5;
  else if (totalCorrect >= 6) band = 3.0;
  else if (totalCorrect >= 4) band = 2.5;
  else if (totalCorrect >= 2) band = 2.0;

  document.getElementById("scoreNum").textContent = totalCorrect;
  document.getElementById("bandScore").textContent = band.toFixed(1);

  const circumference = 326.73;
  const offset = circumference - (totalCorrect / 40) * circumference;
  const circle = document.getElementById("scoreCircle");
  circle.style.strokeDashoffset = offset;

  let breakdownHtml = "";
  for (let p = 1; p <= 3; p++) {
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
  timerSeconds = 3600;
  document.getElementById("timer").textContent = "60:00";
  document.getElementById("timer").classList.remove("warning");
  document.getElementById("btnStart").textContent = "Start";
  renderPart(1);
}

// ============================
// DRAG AND DROP HANDLERS
// ============================
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  // Extract just the optionKey or text to transfer
  const text = ev.target.innerText.split(':')[0].trim();
  ev.dataTransfer.setData("text", text);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (ev.target.tagName === "INPUT") {
    ev.target.value = data;
    // trigger oninput manually
    const event = new Event('input', { bubbles: true });
    ev.target.dispatchEvent(event);
  }
}
