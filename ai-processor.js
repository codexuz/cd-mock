const OpenAI = require('openai');

// ============================
// READING TEST SYSTEM PROMPT
// ============================
const READING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Academic Reading test document and must output a JSON object matching the exact structure below.

The test has 3 parts with 40 questions total:
- Part 1: Questions 1-13
- Part 2: Questions 14-26
- Part 3: Questions 27-40

Each part has a passage (HTML formatted) and question sections.

Question types you must identify and structure:
1. "tfng" — True/False/Not Given
   Items: { num, text, answer: "TRUE"|"FALSE"|"NOT GIVEN" }

2. "fill" — Fill in the blank / sentence completion
   Items: { num, before, after, answer }
   Optional: title (for note completion sections)

3. "mcq" — Multiple choice
   Items: { num, text, options: [{ label: "A"|"B"|"C"|"D", text }], answer: "A"|"B"|"C"|"D" }

4. "select" — Heading matching / dropdown
   Has headings array and items: { num, text, answer }

5. "ynnng" — Yes/No/Not Given
   Items: { num, text, answer: "YES"|"NO"|"NOT GIVEN" }

Output ONLY valid JSON in this exact format:
{
  "1": {
    "title": "Part 1",
    "instruction": "Read the text and answer questions 1-13.",
    "passage": "<h3>Title</h3><p>paragraph...</p>",
    "questions": [
      {
        "section": "Questions 1-6",
        "instructions": "Do the following statements agree with...",
        "type": "tfng",
        "items": [{ "num": 1, "text": "...", "answer": "TRUE" }]
      }
    ]
  },
  "2": { ... },
  "3": { ... }
}

IMPORTANT RULES:
- Wrap passage text in proper HTML tags (<h3> for titles, <p> for paragraphs)
- If a paragraph has a label like "A.", "B.", wrap it: <p><strong>A.</strong> text...</p>
- Ensure question numbers are sequential 1-40
- Ensure all answers are included and correct
- For fill type, split the sentence around the blank into "before" and "after"
- Output ONLY the JSON, no markdown, no explanation`;

// ============================
// LISTENING TEST SYSTEM PROMPT
// ============================
const LISTENING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Listening test document and must output a JSON object matching the exact structure below.

The test has 4 parts with 40 questions total:
- Part 1: Questions 1-10
- Part 2: Questions 11-20
- Part 3: Questions 21-30
- Part 4: Questions 31-40

Question types you must identify and structure:

1. "fill" — Form/note/table completion (most common in Parts 1 & 4)
   Has an HTML template with {num} placeholders and answers object:
   {
     "section": "Questions 1-10",
     "instructions": "Complete the form below.",
     "type": "fill",
     "template": "<h4>Title</h4><ul><li>Name: {1}</li>...</ul>",
     "answers": { "1": "answer1", "2": "answer2" }
   }

2. "mcq" — Multiple choice (common in Parts 2 & 3)
   {
     "section": "Questions 11-17",
     "instructions": "Choose the correct answer.",
     "type": "mcq",
     "items": [{ "num": 11, "text": "...", "options": [{ "label": "A", "text": "..." }], "answer": "A" }]
   }

3. "multi" — Choose multiple correct answers
   {
     "section": "Questions 18-20",
     "instructions": "Choose THREE correct answers.",
     "type": "multi",
     "options": [{ "label": "A", "text": "..." }],
     "nums": [18, 19, 20],
     "answers": ["A", "C", "E"]
   }

4. "match" — Matching (common in Part 3)
   {
     "section": "Questions 26-30",
     "instructions": "Choose the correct letter.",
     "type": "match",
     "matchOptions": [{ "label": "A", "text": "..." }],
     "items": { "26": "description for 26", "27": "..." },
     "answers": { "26": "C", "27": "A" }
   }

Output ONLY valid JSON in this exact format:
{
  "1": {
    "title": "Part 1",
    "instruction": "Listen and answer questions 1-10.",
    "questions": [{ ... }]
  },
  "2": { ... },
  "3": { ... },
  "4": { ... }
}

IMPORTANT RULES:
- Ensure question numbers are sequential 1-40
- For fill type, use {num} placeholders in the template HTML
- Ensure all answers are included and correct
- Output ONLY the JSON, no markdown, no explanation`;

// ============================
// PROCESS TEST FILE
// ============================
async function processTestFile(text, testType, apiKey) {
  const client = new OpenAI({ apiKey });

  const systemPrompt = testType === 'reading' ? READING_SYSTEM_PROMPT : LISTENING_SYSTEM_PROMPT;

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `Extract the IELTS ${testType} test data from the following text:\n\n${text}` }
    ],
    temperature: 0.1,
    max_tokens: 16000,
    response_format: { type: 'json_object' }
  });

  const content = response.choices[0].message.content;
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (e) {
    // Try to extract JSON from markdown code blocks
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      parsed = JSON.parse(jsonMatch[1].trim());
    } else {
      throw new Error('Failed to parse AI response as JSON');
    }
  }

  // Validate basic structure
  validateTestData(parsed, testType);

  return parsed;
}

// ============================
// VALIDATION
// ============================
function validateTestData(data, testType) {
  const numParts = testType === 'reading' ? 3 : 4;

  for (let i = 1; i <= numParts; i++) {
    if (!data[String(i)] && !data[i]) {
      throw new Error(`Missing Part ${i} in test data`);
    }
    const part = data[String(i)] || data[i];
    if (!part.title || !part.instruction || !part.questions) {
      throw new Error(`Part ${i} is missing required fields (title, instruction, questions)`);
    }
    if (!Array.isArray(part.questions) || part.questions.length === 0) {
      throw new Error(`Part ${i} has no question sections`);
    }
  }

  return true;
}

module.exports = { processTestFile };
