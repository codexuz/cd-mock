const OpenAI = require('openai');

// ============================
// READING TEST SYSTEM PROMPT
// ============================
const READING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Academic Reading test document and must output a JSON object matching the exact UNIFIED data structure below.

The test has 3 parts with 40 questions total.
Each part has a passage (HTML formatted) and question sections.

Output ONLY valid JSON in this exact format, adopting the specified question types.

{
  "1": {
    "title": "Part 1",
    "instruction": "Read the text and answer questions 1-13.",
    "passage": "<h3>Title</h3><p>paragraph...</p>",
    "questions": [
      {
        "section": "Questions 1-6",
        "instruction": "Do the following statements agree with...",
        "type": "TRUE_FALSE_NOT_GIVEN",
        "questionText": "Optional shared context (such as HTML for note completion with {1}, {2} blanks)",
        "image": "data:image/png;base64,...",
        "options": [
           { "optionKey": "i", "optionText": "Heading 1" }
        ],
        "questions": [
          {
            "questionNumber": 1,
            "questionText": "The statement to evaluate...",
            "options": [
               { "optionKey": "A", "optionText": "Option A text" }
            ],
            "correctAnswer": "TRUE"
          }
        ]
      }
    ]
  },
  "2": { ... },
  "3": { ... }
}

SUPPORTED QUESTION TYPES (Choose exact string):
1. MULTIPLE_CHOICE
2. MULTIPLE_ANSWER
3. TRUE_FALSE_NOT_GIVEN
4. YES_NO_NOT_GIVEN
5. MATCHING_INFORMATION
6. MATCHING_HEADINGS
7. MATCHING_FEATURES
8. MATCHING_SENTENCE_ENDINGS
9. SENTENCE_COMPLETION
10. SUMMARY_COMPLETION
11. NOTE_COMPLETION
12. TABLE_COMPLETION
13. FLOW_CHART_COMPLETION
14. DIAGRAM_LABELLING
15. SHORT_ANSWER
16. SUMMARY_COMPLETION_DRAG_DROP

RULES:
- Ensure passage HTML is well-formatted. Use <p><strong>A.</strong> ...</p> for labeled paragraphs.
- For completion types, insert {N} in the questionText (where N is the question number) to represent blanks.
- If you find [IMAGE: data:image/...;base64,...] in the document, assign it to the "image" field of the relevant question section (especially for DIAGRAM_LABELLING).
- Ensure question numbers strictly progress 1 to 40.
- All answers must be a single string.
- Output ONLY JSON.`;

// ============================
// LISTENING TEST SYSTEM PROMPT
// ============================
const LISTENING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Listening test document and must output a JSON object matching the exact UNIFIED data structure below.

The test has 4 parts with 40 questions total.

Output ONLY valid JSON in this exact format.

{
  "1": {
    "title": "Part 1",
    "instruction": "Listen and answer questions 1-10.",
    "questions": [
      {
        "section": "Questions 1-5",
        "instruction": "Complete the form below.",
        "type": "NOTE_COMPLETION",
        "questionText": "<h4>Form Title</h4><ul><li>Name: {1}</li><li>Address: {2}</li></ul>",
        "image": "data:image/png;base64,...",
        "options": [],
        "questions": [
          { "questionNumber": 1, "correctAnswer": "Smith" },
          { "questionNumber": 2, "correctAnswer": "Road" }
        ]
      }
    ]
  },
  "2": { ... },
  "3": { ... },
  "4": { ... }
}

SUPPORTED QUESTION TYPES (Choose exact string):
1. MULTIPLE_CHOICE
2. MULTIPLE_ANSWER
3. TRUE_FALSE_NOT_GIVEN
4. MATCHING_INFORMATION
5. MATCHING_FEATURES
6. SENTENCE_COMPLETION
7. SUMMARY_COMPLETION
8. NOTE_COMPLETION
9. TABLE_COMPLETION
10. FLOW_CHART_COMPLETION
11. DIAGRAM_LABELLING
12. PLAN_MAP_LABELLING
13. SHORT_ANSWER

RULES:
- For completion types, use {N} placeholders in the questionText HTML.
- If you find [IMAGE: data:image/...;base64,...] in the document, assign it to the "image" field of the relevant question section (especially for PLAN_MAP_LABELLING or DIAGRAM_LABELLING).
- Ensure question numbers are sequential 1-40.
- Follow the exact structure: part -> questions -> section -> questions array -> questionNumber + correctAnswer.
- Output ONLY the JSON, no markdown, no explanation.`;

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
      { role: 'user', content: 'Extract the IELTS ' + testType + ' test data from the following text:\\n\\n' + text }
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
    const jsonMatch = content.match(/\`\`\`(?:json)?\\s*([\\s\\S]*?)\`\`\`/);
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
      throw new Error('Missing Part ' + i + ' in test data');
    }
    const part = data[String(i)] || data[i];
    if (!part.title || !part.instruction || !part.questions) {
      throw new Error('Part ' + i + ' is missing required fields (title, instruction, questions)');
    }
    if (!Array.isArray(part.questions) || part.questions.length === 0) {
      throw new Error('Part ' + i + ' has no question sections');
    }
  }

  return true;
}

module.exports = { processTestFile };
