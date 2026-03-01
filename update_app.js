const fs = require('fs');

const data = fs.readFileSync('app.js', 'utf8');

let updated = data.replace(/type: "tfng"/g, 'type: "TRUE_FALSE_NOT_GIVEN"');
updated = updated.replace(/type: "fill"/g, 'type: "SENTENCE_COMPLETION"');
updated = updated.replace(/type: "mcq"/g, 'type: "MULTIPLE_CHOICE"');
updated = updated.replace(/type: "select"/g, 'type: "MATCHING_HEADINGS"');
updated = updated.replace(/items:/g, 'questions:');
updated = updated.replace(/num:/g, 'questionNumber:');
updated = updated.replace(/text:/g, 'questionText:');
updated = updated.replace(/answer:/g, 'correctAnswer:');
updated = updated.replace(/instructions:/g, 'instruction:');
updated = updated.replace(/options:\s*\[([\s\S]*?)\]/g, (match, p1) => {
  let opts = p1.replace(/label:/g, 'optionKey:').replace(/text:/g, 'optionText:');
  // Need to add isCorrect
  // The correct answer is at the parent level currently, wait, we can just let it be and the new submitTest will handle things. But unified data requires isCorrect.
  return `options: [${opts}]`;
});

// For fill type (now SENTENCE_COMPLETION) which has before and after, we need to adapt it. 
// Actually, it's easier to just do a precise regex or write it by hand.
fs.writeFileSync('app.js.tmp', updated);
console.log('App.js updated');
