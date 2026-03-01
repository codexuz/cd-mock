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
        "questionText": "",
        "headingOptions": null,
        "tableData": null,
        "options": [],
        "questions": [
          {
            "questionNumber": 1,
            "questionText": "The statement to evaluate...",
            "options": [],
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

1. TRUE_FALSE_NOT_GIVEN
   - Sub-questions only. correctAnswer = "TRUE" | "FALSE" | "NOT GIVEN"

2. YES_NO_NOT_GIVEN
   - Sub-questions only. correctAnswer = "YES" | "NO" | "NOT GIVEN"

3. MULTIPLE_CHOICE
   - Options INSIDE each sub-question (not at section level).
   - Each sub-question has: questionNumber, questionText, options[], correctAnswer (the optionKey).
   - options[]: { optionKey: "A", optionText: "...", isCorrect: true/false }

4. MULTIPLE_ANSWER
   - Options at SECTION level. Sub-questions have correctAnswer = optionKey.
   - section.options[]: { optionKey: "A", optionText: "...", isCorrect: true/false }
   - Multiple options can have isCorrect: true.

5. MATCHING_HEADINGS
   - Sub-questions + headingOptions JSON at section level.
   - headingOptions: { "i": "Heading text", "ii": "..." }
   - Sub-question correctAnswer = heading key (e.g. "iv").

6. MATCHING_INFORMATION
   - Sub-questions only. correctAnswer = paragraph letter (e.g. "A", "B").

7. MATCHING_FEATURES
   - Sub-questions + options[] at section level.
   - options[]: { optionKey: "A", optionText: "Dr. Smith" }
   - Sub-question correctAnswer = optionKey.

8. MATCHING_SENTENCE_ENDINGS
   - Sub-questions + options[] at section level.
   - options[]: { optionKey: "A", optionText: "sentence ending..." }
   - Sub-question correctAnswer = optionKey.

9. SENTENCE_COMPLETION
   - Two approaches supported:
     a) Section-level questionText with all sentences containing {N} placeholders.
     b) Individual sub-questions where each questionText contains {N} placeholder, e.g. "You need to have a {15} to buy a ticket."
   - correctAnswer = text from passage.
   - PREFERRED: Use approach (b) with {N} in each sub-question questionText.

10. SUMMARY_COMPLETION
    - Sub-questions only. Section questionText has {N} placeholders.
    - correctAnswer = text from passage.

11. SUMMARY_COMPLETION_DRAG_DROP
    - Sub-questions + options[] (word bank) at section level.
    - Section questionText has {N} placeholders.
    - options[]: { optionKey: "A", optionText: "word" }
    - Sub-question correctAnswer = optionKey.

12. NOTE_COMPLETION
    - Sub-questions only. Section questionText has {N} placeholders in HTML.
    - correctAnswer = text from passage.
    - IMPORTANT: Preserve bold section headers from the original document as <p><strong>Section Title</strong></p> or <h4>Title</h4> within questionText.
    - Use <ul><li> for bullet lists. Keep the hierarchical structure of the original form/notes.
    - Example: "<h4>The London Relocation Services</h4><p><strong>Customer's personal details</strong></p><ul><li>Current address: 118 {1} Park, Ballysillan</li><li>Postcode: BT149BJ</li></ul><p><strong>Other information</strong></p><ul><li>Anna is hoping to find work as a {3}</li></ul>"

13. TABLE_COMPLETION
    - Sub-questions + tableData JSON at section level.
    - tableData: { "headers": ["Col1", "Col2"], "rows": [["data", "____"], ...] }
    - "____" marks blanks. Sub-question correctAnswer = text.
    - If no structured table can be extracted, use questionText with {N} placeholders instead.

14. FLOW_CHART_COMPLETION
    - Sub-questions only. Section questionText has HTML with {N} placeholders.
    - correctAnswer = text from passage.

15. DIAGRAM_LABELLING
    - Sub-questions only. correctAnswer = text from passage.
    - If an image/diagram URL is present, embed it as: questionText: "<img src='URL' alt='Diagram' />"

16. PLAN_MAP_LABELLING
    - Sub-questions + options[] at section level.
    - If an image/map URL is present, embed it as: questionText: "<img src='URL' alt='Map' />"
    - options[]: { optionKey: "A", optionText: "Library" }
    - Sub-question correctAnswer = optionKey.

17. SHORT_ANSWER
    - Sub-questions only. correctAnswer = short text.

RULES:
- Ensure passage HTML is well-formatted. Use <p><strong>A.</strong> ...</p> for labeled paragraphs.
- For completion types (NOTE, SUMMARY, FLOW_CHART), insert {N} in the section-level questionText (where N is the question number) to represent blanks.
- For SENTENCE_COMPLETION, PREFER putting {N} in each sub-question's questionText (e.g. "The bus tour lasts {16} in total."). Alternatively, use section-level questionText.
- For TABLE_COMPLETION, prefer using tableData JSON when the source has a clear table structure.
- For MATCHING_HEADINGS, always include headingOptions as a JSON object { key: text }.
- For MULTIPLE_CHOICE, put options[] inside each individual question, NOT at section level.
- For MULTIPLE_ANSWER, MATCHING_FEATURES, MATCHING_SENTENCE_ENDINGS, PLAN_MAP_LABELLING, SUMMARY_COMPLETION_DRAG_DROP: put options[] at section level.
- For DIAGRAM_LABELLING/PLAN_MAP_LABELLING: if an image URL is found, embed as <img> in questionText.
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
        "options": [],
        "questions": [
          { "questionNumber": 1, "correctAnswer": "Smith" },
          { "questionNumber": 2, "correctAnswer": "Road" }
        ]
      }
    ]
  },
  "2": {
    "title": "Part 2",
    "instruction": "Listen and answer questions 11-20.",
    "questions": [
      {
        "section": "Questions 11-15",
        "instruction": "Choose the correct letter, A, B, or C.",
        "type": "MULTIPLE_CHOICE",
        "questions": [
          {
            "questionNumber": 11,
            "questionText": "What does the speaker say?",
            "options": [
              { "optionKey": "A", "optionText": "First option", "isCorrect": false },
              { "optionKey": "B", "optionText": "Second option", "isCorrect": true },
              { "optionKey": "C", "optionText": "Third option", "isCorrect": false }
            ],
            "correctAnswer": "B"
          }
        ]
      },
      {
        "section": "Questions 16-20",
        "instruction": "Label the map below.",
        "type": "PLAN_MAP_LABELLING",
        "questionText": "<img src='https://example.com/map.jpg' alt='Campus Map' />",
        "options": [
          { "optionKey": "A", "optionText": "Library" },
          { "optionKey": "B", "optionText": "Cafeteria" }
        ],
        "questions": [
          { "questionNumber": 16, "questionText": "Building 1", "correctAnswer": "A" }
        ]
      }
    ]
  },
  "3": { ... },
  "4": { ... }
}

SUPPORTED QUESTION TYPES (Choose exact string):

1. MULTIPLE_CHOICE
   - Options INSIDE each sub-question.
   - Each sub-question: questionNumber, questionText, options[], correctAnswer (optionKey).
   - options[]: { optionKey: "A", optionText: "...", isCorrect: true/false }

2. MULTIPLE_ANSWER
   - Options at SECTION level. Sub-questions have correctAnswer = optionKey.
   - section.options[]: { optionKey: "A", optionText: "...", isCorrect: true/false }
   - Multiple options can have isCorrect: true.

3. MATCHING_FEATURES
   - Sub-questions + options[] at section level.
   - Sub-question correctAnswer = optionKey.

4. MATCHING_SENTENCE_ENDINGS
   - Sub-questions + options[] at section level.
   - Sub-question correctAnswer = optionKey.

5. SENTENCE_COMPLETION
   - Two approaches supported:
     a) Section-level questionText with all sentences containing {N} placeholders.
     b) Individual sub-questions where each questionText contains {N} placeholder, e.g. "The bus tour lasts {16} in total."
   - correctAnswer = text.
   - PREFERRED: Use approach (b) with {N} in each sub-question questionText.

6. SUMMARY_COMPLETION
   - Sub-questions only. Section questionText has {N} placeholders.
   - correctAnswer = text.

7. NOTE_COMPLETION
   - Sub-questions only. Section questionText has {N} placeholders in HTML.
   - correctAnswer = text.
   - IMPORTANT: Preserve bold section headers from the original document as <p><strong>Section Title</strong></p> or <h4>Title</h4> within questionText.
   - Use <ul><li> for bullet lists. Keep the hierarchical structure of the original form/notes.
   - Example: "<h4>Form Title</h4><p><strong>Personal details</strong></p><ul><li>Name: {1}</li><li>Phone No: {2} (Mobile)</li></ul><p><strong>Other information</strong></p><ul><li>Prefers to work as a {3}</li></ul>"

8. TABLE_COMPLETION
   - Sub-questions + tableData JSON at section level.
   - tableData: { "headers": ["Col1", "Col2"], "rows": [["data", "____"], ...] }
   - "____" marks blanks. Sub-question correctAnswer = text.
   - If no structured table, use questionText with {N} placeholders instead.

9. FLOW_CHART_COMPLETION
   - Sub-questions only. Section questionText has HTML with {N} placeholders.
   - correctAnswer = text.

10. DIAGRAM_LABELLING
    - Sub-questions only. correctAnswer = text.
    - If an image URL is present, embed as: questionText: "<img src='URL' alt='Diagram' />"

11. PLAN_MAP_LABELLING
    - Sub-questions + options[] at section level.
    - If an image URL is present, embed as: questionText: "<img src='URL' alt='Map' />"
    - options[]: { optionKey: "A", optionText: "Library" }
    - Sub-question correctAnswer = optionKey.

12. SHORT_ANSWER
    - Sub-questions only. correctAnswer = text.

RULES:
- For completion types (NOTE, SUMMARY, FLOW_CHART), use {N} placeholders in the section-level questionText HTML.
- For SENTENCE_COMPLETION, PREFER putting {N} in each sub-question's questionText. Alternatively, use section-level questionText with all sentences.
- For MULTIPLE_CHOICE, put options[] INSIDE each individual question, NOT at section level.
- For MULTIPLE_ANSWER: put options[] at SECTION level, include isCorrect flags. Sub-questions have correctAnswer = optionKey.
- For TABLE_COMPLETION: prefer tableData JSON when source has a clear table. Otherwise use questionText with {N}.
- For DIAGRAM_LABELLING/PLAN_MAP_LABELLING: if an image URL or [IMAGE: src] is found, embed as <img> in questionText.
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
      { role: 'user', content: 'Extract the IELTS ' + testType + ' test data from the following text:\n\n' + text }
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

  // Normalize keys: some AI responses use "part1" or nested structures
  for (let i = 1; i <= numParts; i++) {
    if (!data[String(i)] && !data[i]) {
      // Check alternative keys
      const altKeys = [`part${i}`, `Part ${i}`, `part_${i}`];
      for (const key of altKeys) {
        if (data[key]) {
          data[String(i)] = data[key];
          break;
        }
      }
    }

    // If still missing, create a placeholder
    if (!data[String(i)] && !data[i]) {
      console.warn(`Warning: Part ${i} missing from AI response, creating placeholder`);
      data[String(i)] = {
        title: `Part ${i}`,
        instruction: `Answer questions for Part ${i}.`,
        questions: []
      };
      if (testType === 'reading') {
        data[String(i)].passage = '<p>Passage not available.</p>';
      }
      continue;
    }

    const part = data[String(i)] || data[i];

    // Auto-fix missing fields
    if (!part.title) part.title = `Part ${i}`;
    if (!part.instruction) part.instruction = `Answer the questions below.`;
    if (!part.questions) part.questions = [];
    if (!Array.isArray(part.questions)) {
      // Try to extract questions from nested structure
      if (part.questions && typeof part.questions === 'object') {
        part.questions = Object.values(part.questions);
      } else {
        part.questions = [];
      }
    }
  }

  return true;
}

module.exports = { processTestFile };
