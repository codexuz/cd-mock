const OpenAI = require('openai');

// ============================
// READING TEST SYSTEM PROMPT
// (Outputs ielts-test-data.json format)
// ============================
const READING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Academic Reading test document and must output a JSON object matching the EXACT structure below.

The test has 3 parts with 40 questions total.
Each part has a passage (HTML) and question groups.

Output ONLY valid JSON in this exact format:

{
  "test": {
    "title": "Cambridge IELTS XX Academic Test Y",
    "mode": "mock",
    "status": "draft",
    "category": "cambridge books"
  },
  "reading": {
    "title": "Academic Reading",
    "test_id": "{{test_id}}"
  },
  "readingParts": [
    {
      "reading_id": "{{reading_id}}",
      "part": "PART_1",
      "mode": "mock",
      "title": "Passage Title Here",
      "content": "<h2>Title</h2><p>paragraph...</p>",
      "timeLimitMinutes": 20,
      "difficulty": "EASY",
      "isActive": true,
      "totalQuestions": 13,
      "questions": [
        {
          "questionNumber": 1,
          "type": "TRUE_FALSE_NOT_GIVEN",
          "instruction": "Do the following statements agree with...",
          "points": 6,
          "isActive": true,
          "questions": [
            {
              "questionNumber": 1,
              "questionText": "The statement to evaluate...",
              "correctAnswer": "TRUE",
              "points": 1,
              "explanation": "Brief explanation...",
              "fromPassage": "Paragraph 1",
              "order": 1
            }
          ]
        },
        {
          "questionNumber": 7,
          "type": "NOTE_COMPLETION",
          "instruction": "Complete the notes below...",
          "questionText": "<h4>Section Title</h4><ul><li>Item: ____ (7)</li></ul>",
          "points": 4,
          "isActive": true,
          "questions": [
            {
              "questionNumber": 7,
              "questionText": "Item: ____",
              "correctAnswer": "answer text",
              "points": 1,
              "fromPassage": "Paragraph 3",
              "order": 1
            }
          ]
        },
        {
          "questionNumber": 11,
          "type": "MULTIPLE_CHOICE",
          "instruction": "Choose the correct letter, A, B, C or D.",
          "questionText": "What is the main purpose?",
          "points": 1,
          "isActive": true,
          "options": [
            { "optionKey": "A", "optionText": "First option", "isCorrect": false, "orderIndex": 0 },
            { "optionKey": "B", "optionText": "Correct option", "isCorrect": true, "orderIndex": 1, "explanation": "...", "fromPassage": "Paragraph X" },
            { "optionKey": "C", "optionText": "Third option", "isCorrect": false, "orderIndex": 2 },
            { "optionKey": "D", "optionText": "Fourth option", "isCorrect": false, "orderIndex": 3 }
          ]
        }
      ]
    },
    {
      "reading_id": "{{reading_id}}",
      "part": "PART_2",
      "mode": "mock",
      "title": "...",
      "content": "...",
      "timeLimitMinutes": 20,
      "difficulty": "MEDIUM",
      "isActive": true,
      "totalQuestions": 13,
      "questions": [ ... ]
    },
    {
      "reading_id": "{{reading_id}}",
      "part": "PART_3",
      "mode": "mock",
      "title": "...",
      "content": "...",
      "timeLimitMinutes": 20,
      "difficulty": "HARD",
      "isActive": true,
      "totalQuestions": 14,
      "questions": [ ... ]
    }
  ],
  "answerSubmission": {
    "attempt": { "scope": "TEST", "test_id": "{{test_id}}" },
    "readingAnswers": {
      "attempt_id": "{{attempt_id}}",
      "answers": [
        { "part_id": "{{reading_part_1_id}}", "question_id": "{{q1_id}}", "question_number": "1", "answer": "TRUE" },
        { "part_id": "{{reading_part_1_id}}", "question_id": "{{q1_id}}", "question_number": "2", "answer": "FALSE" }
      ]
    }
  }
}

QUESTION GROUP STRUCTURE — each question group is an object in the part's "questions" array:
- "questionNumber": first question number in the group
- "type": one of the supported types
- "instruction": the instruction text
- "points": total points for the group
- "isActive": true
- For groups with sub-questions: "questions" array
- For MULTIPLE_CHOICE (single): "questionText", "options" array (NO questions sub-array, each is standalone)
- For MATCHING_HEADINGS: "headingOptions" object { "i": "text", "ii": "text" }
- For TABLE_COMPLETION: "tableData" object { "headers": [...], "rows": [...] }
- For NOTE_COMPLETION/SUMMARY_COMPLETION/FLOW_CHART_COMPLETION: "questionText" with ____ (N) placeholders
- For SUMMARY_COMPLETION_DRAG_DROP/MATCHING_FEATURES/MATCHING_SENTENCE_ENDINGS/PLAN_MAP_LABELLING/MULTIPLE_ANSWER: "options" array at group level

SUB-QUESTION STRUCTURE (inside "questions" array):
- "questionNumber": N
- "questionText": the question text (for completion types: "Item: ____")
- "correctAnswer": the answer string
- "points": 1
- "explanation": optional brief explanation
- "fromPassage": optional "Paragraph X" reference
- "order": sequential within the group (1, 2, 3...)

OPTION STRUCTURE (for MULTIPLE_CHOICE standalone questions):
- "optionKey": "A", "optionText": "...", "isCorrect": true/false, "orderIndex": 0
- The correct option gets additional "explanation" and "fromPassage" fields

SUPPORTED QUESTION TYPES (use exact string):
TRUE_FALSE_NOT_GIVEN, YES_NO_NOT_GIVEN, MULTIPLE_CHOICE, MULTIPLE_ANSWER,
MATCHING_HEADINGS, MATCHING_INFORMATION, MATCHING_FEATURES,
MATCHING_SENTENCE_ENDINGS, SENTENCE_COMPLETION, SUMMARY_COMPLETION,
SUMMARY_COMPLETION_DRAG_DROP, NOTE_COMPLETION, TABLE_COMPLETION,
FLOW_CHART_COMPLETION, DIAGRAM_LABELLING, PLAN_MAP_LABELLING, SHORT_ANSWER

RULES:
- Part difficulties: PART_1 = "EASY", PART_2 = "MEDIUM", PART_3 = "HARD"
- Questions number 1-40 across all 3 parts
- content field must have well-formatted HTML with <h2> title and <p> paragraphs
- For labeled paragraphs use <p><strong>A</strong> text...</p>
- MULTIPLE_CHOICE standalone (1 question): put questionText + options at group level, no "questions" sub-array
- MULTIPLE_CHOICE with sub-questions: put options INSIDE each sub-question
- For MULTIPLE_ANSWER: options at GROUP level with isCorrect flags, sub-questions have correctAnswer = optionKey, questionText = "----"
- For completion types: use ____ (N) in group questionText (where N = question number)
- answerSubmission.readingAnswers.answers: one entry per question (1-40), answer = correctAnswer value
- Use placeholder IDs: {{test_id}}, {{reading_id}}, {{attempt_id}}, {{reading_part_1_id}}, {{reading_part_2_id}}, {{reading_part_3_id}}, {{q1_id}} through {{qN_id}} for question group IDs
- Output ONLY JSON, no markdown.`;

// ============================
// LISTENING TEST SYSTEM PROMPT
// (Outputs ielts-test-data.json format)
// ============================
const LISTENING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Listening test document and must output a JSON object matching the EXACT structure below.

The test has 4 parts with 40 questions total.

Output ONLY valid JSON in this exact format:

{
  "test": {
    "title": "Cambridge IELTS XX Academic Test Y",
    "mode": "mock",
    "status": "draft",
    "category": "cambridge books"
  },
  "listening": {
    "title": "Academic Listening",
    "description": "Listening module for ...",
    "test_id": "{{test_id}}",
    "full_audio_url": "https://cdn.example.com/audio/full-listening.mp3",
    "is_active": true
  },
  "listeningParts": [
    {
      "listening_id": "{{listening_id}}",
      "part": "PART_1",
      "mode": "mock",
      "title": "Part Title Here",
      "audio": {
        "url": "https://cdn.example.com/audio/section1.mp3",
        "file_name": "section1.mp3",
        "duration": 240
      },
      "timeLimitMinutes": 7,
      "difficulty": "EASY",
      "isActive": true,
      "totalQuestions": 10,
      "questions": [
        {
          "questionNumber": 1,
          "type": "NOTE_COMPLETION",
          "instruction": "Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.",
          "questionText": "<h4>Form Title</h4><table><tr><td>Name:</td><td>____ (1)</td></tr></table>",
          "points": 5,
          "isActive": true,
          "questions": [
            { "questionNumber": 1, "questionText": "Name: ____", "correctAnswer": "Smith", "points": 1, "order": 1 }
          ]
        },
        {
          "questionNumber": 6,
          "type": "MULTIPLE_CHOICE",
          "instruction": "Choose the correct letter, A, B or C.",
          "questionText": "What time does the restaurant close?",
          "points": 1,
          "isActive": true,
          "options": [
            { "optionKey": "A", "optionText": "9 PM", "isCorrect": false, "orderIndex": 0 },
            { "optionKey": "B", "optionText": "10 PM", "isCorrect": true, "orderIndex": 1 },
            { "optionKey": "C", "optionText": "11 PM", "isCorrect": false, "orderIndex": 2 }
          ]
        }
      ]
    },
    {
      "listening_id": "{{listening_id}}",
      "part": "PART_2",
      "mode": "mock",
      "title": "...",
      "audio": { "url": "...", "file_name": "section2.mp3", "duration": 300 },
      "timeLimitMinutes": 8,
      "difficulty": "EASY",
      "isActive": true,
      "totalQuestions": 10,
      "questions": [ ... ]
    },
    {
      "listening_id": "{{listening_id}}",
      "part": "PART_3",
      "mode": "mock",
      "title": "...",
      "audio": { "url": "...", "file_name": "section3.mp3", "duration": 330 },
      "timeLimitMinutes": 8,
      "difficulty": "MEDIUM",
      "isActive": true,
      "totalQuestions": 10,
      "questions": [ ... ]
    },
    {
      "listening_id": "{{listening_id}}",
      "part": "PART_4",
      "mode": "mock",
      "title": "...",
      "audio": { "url": "...", "file_name": "section4.mp3", "duration": 360 },
      "timeLimitMinutes": 10,
      "difficulty": "HARD",
      "isActive": true,
      "totalQuestions": 10,
      "questions": [ ... ]
    }
  ],
  "answerSubmission": {
    "attempt": { "scope": "TEST", "test_id": "{{test_id}}" },
    "listeningAnswers": {
      "attempt_id": "{{attempt_id}}",
      "answers": [
        { "part_id": "{{listening_part_1_id}}", "question_id": "{{lq1_id}}", "question_number": "1", "answer": "Smith" }
      ]
    }
  }
}

QUESTION GROUP STRUCTURE — each group is an object in the part's "questions" array:
- "questionNumber": first question number in the group
- "type": one of the supported types
- "instruction": the instruction text
- "points": total points for the group
- "isActive": true
- MULTIPLE_CHOICE standalone (1 question): "questionText" + "options" array at group level (NO sub-questions array)
- MULTIPLE_CHOICE with sub-questions: "options" INSIDE each sub-question
- For NOTE_COMPLETION/SUMMARY_COMPLETION/FLOW_CHART_COMPLETION: "questionText" with ____ (N) placeholders
- For TABLE_COMPLETION: "tableData" object { "headers": [...], "rows": [...] }
- For PLAN_MAP_LABELLING/MATCHING_FEATURES/MATCHING_SENTENCE_ENDINGS/SUMMARY_COMPLETION_DRAG_DROP/MULTIPLE_ANSWER: "options" at group level

SUB-QUESTION STRUCTURE:
- "questionNumber": N
- "questionText": text (for completion: "Item: ____")
- "correctAnswer": answer string
- "points": 1
- "order": sequential within group (1, 2, 3...)

OPTION STRUCTURE:
- "optionKey": "A", "optionText": "...", "isCorrect": true/false, "orderIndex": 0

SUPPORTED QUESTION TYPES:
NOTE_COMPLETION, MULTIPLE_CHOICE, MULTIPLE_ANSWER, MATCHING_FEATURES,
MATCHING_SENTENCE_ENDINGS, SENTENCE_COMPLETION, SUMMARY_COMPLETION,
TABLE_COMPLETION, FLOW_CHART_COMPLETION, DIAGRAM_LABELLING,
PLAN_MAP_LABELLING, SHORT_ANSWER

RULES:
- Parts 1-4, questions 1-40 total (P1: 1-10, P2: 11-20, P3: 21-30, P4: 31-40)
- Difficulties: PART_1 = "EASY", PART_2 = "EASY", PART_3 = "MEDIUM", PART_4 = "HARD"
- MULTIPLE_CHOICE standalone: questionText + options at group level, no questions sub-array
- MULTIPLE_ANSWER: options at GROUP level with isCorrect flags, sub-questions questionText = "----"
- For completion types: ____ (N) in group questionText
- For NOTE_COMPLETION: use <h4>, <table>, <ul><li> to preserve form/notes structure
- answerSubmission.listeningAnswers.answers: one entry per question (1-40)
- Use placeholder IDs: {{test_id}}, {{listening_id}}, {{attempt_id}}, {{listening_part_1_id}}-{{listening_part_4_id}}, {{lq1_id}} through {{lqN_id}}
- Output ONLY JSON.`;

// ============================
// WRITING TEST SYSTEM PROMPT
// ============================
const WRITING_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from an IELTS Academic Writing test document and must output a JSON object matching the EXACT structure below.

Output ONLY valid JSON:

{
  "test": {
    "title": "Cambridge IELTS XX Academic Test Y",
    "mode": "mock",
    "status": "draft",
    "category": "cambridge books"
  },
  "writing": {
    "title": "Academic Writing",
    "description": "Writing module for ...",
    "test_id": "{{test_id}}",
    "is_active": true
  },
  "writingTasks": [
    {
      "writing_id": "{{writing_id}}",
      "task": "TASK_1",
      "mode": "mock",
      "prompt": "<p>The chart below shows...</p><p>Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p><p>Write at least 150 words.</p>",
      "image_url": "https://cdn.example.com/images/chart.png",
      "min_words": 150,
      "suggested_time": 20
    },
    {
      "writing_id": "{{writing_id}}",
      "task": "TASK_2",
      "mode": "mock",
      "prompt": "<p>Some people think that... Others believe...</p><p>Discuss both views and give your own opinion.</p><p>Write at least 250 words.</p>",
      "min_words": 250,
      "suggested_time": 40
    }
  ]
}

RULES:
- Task 1: min_words = 150, suggested_time = 20
- Task 2: min_words = 250, suggested_time = 40
- prompt must be HTML formatted with <p> tags
- If an image/chart description is found, include image_url (or placeholder URL)
- Extract the exact wording of the task prompts from the source document
- Use placeholder IDs: {{test_id}}, {{writing_id}}
- Output ONLY JSON.`;

// ============================
// FULL TEST SYSTEM PROMPT
// ============================
const FULL_TEST_SYSTEM_PROMPT = `You are an IELTS test data extractor. You receive raw text from a COMPLETE IELTS Academic test document (containing Reading, Listening, and/or Writing sections) and must output a JSON object that combines all sections found.

Output ONLY valid JSON combining the relevant sections. The output should have this top-level structure:

{
  "test": { "title": "...", "mode": "mock", "status": "draft", "category": "cambridge books" },
  "reading": { "title": "Academic Reading", "test_id": "{{test_id}}" },
  "listening": { "title": "Academic Listening", "description": "...", "test_id": "{{test_id}}", "full_audio_url": "...", "is_active": true },
  "writing": { "title": "Academic Writing", "description": "...", "test_id": "{{test_id}}", "is_active": true },
  "readingParts": [ ... ],
  "listeningParts": [ ... ],
  "writingTasks": [ ... ],
  "publishTest": { "status": "published" },
  "answerSubmission": { ... }
}

Only include sections that are present in the source material. Follow the same detailed structure rules as individual reading/listening/writing prompts. Use placeholder IDs throughout.
Output ONLY JSON.`;

// ============================
// PROCESS TEST FILE
// ============================
async function processTestFile(text, testType, apiKey) {
  const client = new OpenAI({ apiKey });

  const promptMap = {
    reading: READING_SYSTEM_PROMPT,
    listening: LISTENING_SYSTEM_PROMPT,
    writing: WRITING_SYSTEM_PROMPT,
    full: FULL_TEST_SYSTEM_PROMPT
  };
  const systemPrompt = promptMap[testType] || READING_SYSTEM_PROMPT;

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
  if (testType === 'writing') {
    if (!data.writingTasks || !Array.isArray(data.writingTasks)) {
      console.warn('Warning: writingTasks missing, creating placeholder');
      data.writingTasks = [];
    }
    if (!data.test) data.test = { title: 'IELTS Academic Test', mode: 'mock', status: 'draft', category: 'cambridge books' };
    if (!data.writing) data.writing = { title: 'Academic Writing', test_id: '{{test_id}}', is_active: true };
    return true;
  }

  if (testType === 'full') {
    // Minimal validation for full test
    if (!data.test) data.test = { title: 'IELTS Academic Test', mode: 'mock', status: 'draft', category: 'cambridge books' };
    return true;
  }

  // Reading or Listening
  const partsKey = testType === 'reading' ? 'readingParts' : 'listeningParts';
  const numParts = testType === 'reading' ? 3 : 4;

  // Handle old format (keys "1", "2", "3") — convert to new format
  if (!data[partsKey] && (data['1'] || data['part1'])) {
    data[partsKey] = [];
    for (let i = 1; i <= numParts; i++) {
      const part = data[String(i)] || data[`part${i}`] || data[`Part ${i}`] || data[`part_${i}`];
      if (part) {
        const idKey = testType === 'reading' ? 'reading_id' : 'listening_id';
        const difficulties = testType === 'reading' ? ['EASY', 'MEDIUM', 'HARD'] : ['EASY', 'EASY', 'MEDIUM', 'HARD'];
        const converted = {
          [idKey]: `{{${idKey}}}`,
          part: `PART_${i}`,
          mode: 'mock',
          title: part.title || `Part ${i}`,
          timeLimitMinutes: testType === 'reading' ? 20 : (i <= 2 ? 7 : (i === 3 ? 8 : 10)),
          difficulty: difficulties[i - 1],
          isActive: true,
          totalQuestions: 0,
          questions: part.questions || []
        };
        if (testType === 'reading') converted.content = part.passage || part.content || '';
        if (testType === 'listening') converted.audio = part.audio || { url: '', file_name: `section${i}.mp3`, duration: 0 };
        data[partsKey].push(converted);
        delete data[String(i)];
      }
    }
  }

  if (!data[partsKey] || !Array.isArray(data[partsKey])) {
    console.warn(`Warning: ${partsKey} missing, creating empty array`);
    data[partsKey] = [];
  }

  // Ensure metadata exists
  if (!data.test) data.test = { title: 'IELTS Academic Test', mode: 'mock', status: 'draft', category: 'cambridge books' };
  if (testType === 'reading' && !data.reading) data.reading = { title: 'Academic Reading', test_id: '{{test_id}}' };
  if (testType === 'listening' && !data.listening) data.listening = { title: 'Academic Listening', test_id: '{{test_id}}', is_active: true };

  // Validate each part
  for (let i = 0; i < data[partsKey].length; i++) {
    const part = data[partsKey][i];
    if (!part.title) part.title = `Part ${i + 1}`;
    if (!part.questions) part.questions = [];
    if (!Array.isArray(part.questions)) {
      part.questions = typeof part.questions === 'object' ? Object.values(part.questions) : [];
    }
    if (!part.part) part.part = `PART_${i + 1}`;
    if (part.isActive === undefined) part.isActive = true;
  }

  return true;
}

module.exports = { processTestFile };
