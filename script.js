// ==========================================
// KEYFLOW - FIXED TYPING PRACTICE
// 10 levels, 10 minutes per level
// ==========================================

"use strict";

// 1. LESSON DATA
const lessons = [
  {
    name: "Home row basics",
    tag: "HOME ROW",
    desc: "Build your foundation with the middle row.",
    keys: "asdfjkl;",
    passages: [
      "a sad lass asks dad; dad adds a salad. a flask falls; a lad asks.",
      "all lads fall; a dad asks a lass. a lass adds a salad; all lads laugh.",
      "dad asks; a lass adds salt. a sad lad falls; all laugh.",
      "a flask and a salad; a lad and a lass. all lads ask dad.",
      "a sad lass has a salad. dad asks a lad; a lad adds salt.",
      "all fall; all ask; all add. a lass has a flask; dad has a salad.",
      "a lad asks dad; dad asks a lass. all lads add a salad.",
      "salad falls; a flask falls. a sad lad asks dad; all laugh."
    ],
    tip: "Left hand: A S D F. Right hand: J K L ;."
  },
  {
    name: "Home row words",
    tag: "HOME ROW",
    desc: "Practice simple words using home row keys.",
    keys: "asdfjkl;",
    passages: [
      "ask dad; add a salad. fall and ask; all lads laugh.",
      "a lass has a flask; dad has a salad. all lads ask.",
      "dad adds salt; a lad adds a salad. all ask and laugh.",
      "a sad lad asks dad; a lass asks all lads. all fall and laugh.",
      "all dads ask; all lads add. a salad has salt; a flask falls.",
      "a lass falls; dad laughs. a lad asks; all lads ask.",
      "add a salad; add a flask. ask dad; ask a lass.",
      "a sad salad falls; a flask falls. all lads laugh and ask."
    ],
    tip: "Return every finger to its home position."
  },
  {
    name: "Top row reach",
    tag: "TOP ROW",
    desc: "Learn the upper keyboard row.",
    keys: "qwertyuiop",
    passages: [
      "we write quite well; we try to type. you type your quote; we read.",
      "write your words; type quite well. we try, we learn, we improve.",
      "you were quiet; we were ready. type your work; write your ideas.",
      "we require quiet time to write. you type quite quickly; we try too.",
      "the top row is new. we type, we write, and we learn.",
      "your query was quite easy. we wrote the answer; you read it.",
      "we use the upper row; you type with care. we are ready.",
      "quite a few words are here. write them well; type them slowly."
    ],
    tip: "Reach upward and return your fingers to home row."
  },
  {
    name: "Top and home row",
    tag: "TOP + HOME",
    desc: "Combine the first two rows.",
    keys: "qwertyuiopasdfjkl;",
    passages: [
      "we are ready to write; your great idea is quite useful. keep your focus.",
      "your work is great; we write every day. take your time and type well.",
      "we have a great idea. you are ready to create, write, and learn.",
      "read your words again; write them clearly. we are quite sure you can improve.",
      "the quiet writer types quickly. we keep our hands ready and our eyes on screen.",
      "you are ready; we are ready too. type each word with care and focus.",
      "write a review; read it again. great work grows with regular practice.",
      "we learn new skills when we try. keep writing and keep improving."
    ],
    tip: "Focus on accuracy before speed."
  },
  {
    name: "Bottom row reach",
    tag: "BOTTOM ROW",
    desc: "Practice the bottom row.",
    keys: "asdfghjkl;zxcvbnm",
    passages: [
      "my dad can mix; my dad can carry a box.",
      "many men can move boxes; my dad can move one.",
      "a man can carry many boxes; my dad can help.",
      "my dad can mix and move; many men can help.",
      "many boys can mix; many men can carry boxes.",
      "a man can move a box; my dad can move many.",
      "my dad can carry a box; many men can carry many.",
      "men can mix and move; my dad can help a man."
    ],
    tip: "Reach down without moving your whole hand."
  },
  {
    name: "Three-row words",
    tag: "ALL LETTERS",
    desc: "Practice the complete alphabet.",
    keys: "abcdefghijklmnopqrstuvwxyz",
    passages: [
      "the quick brown fox jumps over the lazy dog. practice makes typing easier.",
      "small steps build strong skills. keep your hands relaxed and your eyes ahead.",
      "every day is a new chance to learn. type carefully and improve your speed.",
      "good habits create better results. focus on each letter before typing faster.",
      "the keyboard is a useful tool. steady practice helps you use it with confidence.",
      "learn the correct finger positions. accuracy first, speed will follow with practice.",
      "take a short breath and begin again. each sentence makes your typing stronger.",
      "stay patient while learning. progress comes from regular and focused practice."
    ],
    tip: "Use the correct finger for every letter."
  },
  {
    name: "Capital letters",
    tag: "SHIFT",
    desc: "Practice capital letters and Shift.",
    keys: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    passages: [
      "My name is Alex. We Learn, Practice, Improve, and Grow Every Day.",
      "Today Is A Good Day To Learn. Keep Your Hands Relaxed And Your Mind Focused.",
      "Typing With Care Builds Confidence. Small Steps Create Better Habits.",
      "Practice Makes Progress. We Can Learn New Skills One Day At A Time.",
      "Read The Sentence First. Then Type Each Word With Care And Attention.",
      "Good Work Takes Time. Stay Patient, Stay Focused, And Keep Improving.",
      "Every Lesson Has A Purpose. Learn The Keys And Build Your Speed.",
      "Keep Your Eyes On The Screen. Let Your Fingers Find The Right Keys."
    ],
    tip: "Use the opposite hand's Shift key."
  },
  {
    name: "Numbers row",
    tag: "NUMBERS",
    desc: "Practice numbers and digits.",
    keys: "1234567890",
    passages: [
      "I have 2 books, 5 pens, 10 notes, and 3 goals for 2026.",
      "Our class has 25 students, 4 teachers, and 1 clear goal.",
      "Save 15 minutes each day for practice. In 30 days, you will see progress.",
      "The shop opens at 9:00 and closes at 8:30. It is open for 11 hours.",
      "I typed 42 words in 1 minute, then improved to 48 words per minute.",
      "My target is 60 WPM with 95% accuracy. I will practise every day.",
      "There are 7 days in a week and 12 months in a year.",
      "Room 204 has 18 desks, 36 chairs, and 2 large windows."
    ],
    tip: "Reach up to the number row."
  },
  {
    name: "Punctuation practice",
    tag: "PUNCTUATION",
    desc: "Practice punctuation and symbols.",
    keys: ",./;'[]-=",
    passages: [
      "Practice every day, and you will improve. Are you ready? Let's begin!",
      "Typing is a useful skill: stay calm, focus, and keep going.",
      "Can you type this sentence correctly? Take your time, and check each mark.",
      "Great work! You are improving; keep practising, and do not rush.",
      "Please read, type, and review your work. Accuracy matters more than speed.",
      "Where are you going? I am going to practise. What about you?",
      "Use commas, full stops, and question marks; they make writing clear.",
      "Well done! Keep your fingers ready. Can you reach your next goal?"
    ],
    tip: "Pay attention to commas, full stops and question marks."
  },
  {
    name: "Real-world typing",
    tag: "FULL KEYBOARD",
    desc: "Combine all your typing skills.",
    keys: "abcdefghijklmnopqrstuvwxyz1234567890,./;'[]-=",
    passages: [
      "Good typing is built through patience and practice. Start slowly, keep your fingers in the right position, and focus on accuracy.",
      "Clear communication begins with clear writing. Read each sentence carefully, type at a steady pace, and review your work before moving on.",
      "Technology helps us learn, work, and share ideas. A confident typist can complete daily tasks more quickly while making fewer mistakes.",
      "Set a small goal for every practice session. Work on accuracy first, then build speed through repetition and consistent effort.",
      "Learning a new skill takes time. If you make a mistake, correct it calmly and continue. Every attempt helps you become more confident.",
      "A good routine makes improvement easier. Practise for ten minutes, keep a comfortable posture, and give your hands short breaks when needed.",
      "Typing is useful in education and at work. Strong keyboard skills help you prepare notes, write emails, create reports, and organise information.",
      "Stay patient and keep practising. Measure your progress over time, celebrate small improvements, and challenge yourself with new sentences."
    ],
    tip: "Focus on accuracy and consistency."
  }
];

// 2. SETTINGS AND STATE
const LEVEL_DURATION = 10 * 60; // 10 minutes, in seconds

let current = 0;
let startedAt = null;
let timerId = null;
let timeLeft = LEVEL_DURATION;
let finished = false;
let passageIndex = 0;
let activePassage = "";

let totalCorrect = 0;
let totalTyped = 0;
let totalErrors = 0;

const $ = (id) => document.getElementById(id);

// Read saved progress safely
function readPassedLevels() {
  try {
    const saved = JSON.parse(localStorage.getItem("keyflowPassed") || "[]");
    return Array.isArray(saved)
      ? saved.filter(n => Number.isInteger(n) && n >= 0 && n < lessons.length)
      : [];
  } catch {
    return [];
  }
}

let passed = readPassedLevels();
let best = Number(localStorage.getItem("keyflowBest") || 0);

// 3. VERIFY REQUIRED HTML ELEMENTS
const requiredIds = [
  "levelList", "overallProgress", "completedCount", "bestWpm",
  "levelEyebrow", "lessonTitle", "lessonDescription", "typingInput",
  "timer", "wpm", "accuracy", "errors", "charCount", "resultTitle",
  "resultMessage", "typingHint", "passChip", "nextBtn", "prompt",
  "keyboard", "fingerNote", "restartBtn"
];

const missingIds = requiredIds.filter(id => !$(id));

if (missingIds.length) {
  console.error("KeyFlow cannot start. Missing HTML elements:", missingIds);
}

// 4. LEVEL SIDEBAR
function renderLevels() {
  const list = $("levelList");
  if (!list) return;

  list.innerHTML = "";

  lessons.forEach((lesson, i) => {
    const unlocked = i === 0 || passed.includes(i - 1);
    const button = document.createElement("button");

    button.type = "button";
    button.className =
      "level-item" +
      (i === current ? " active" : "") +
      (passed.includes(i) ? " done" : "") +
      (!unlocked ? " locked" : "");

    button.disabled = !unlocked;
    button.innerHTML = `
      <span class="level-number">${passed.includes(i) ? "✓" : String(i + 1).padStart(2, "0")}</span>
      <span class="level-copy">
        <b>${lesson.name}</b>
        <small>${lesson.tag}</small>
      </span>
      <span class="level-status">${passed.includes(i) ? "✓" : unlocked ? "›" : "🔒"}</span>
    `;

    button.addEventListener("click", () => loadLevel(i));
    list.appendChild(button);
  });

  $("overallProgress").textContent =
    Math.round((passed.length / lessons.length) * 100) + "%";
  $("completedCount").textContent = `${passed.length}/${lessons.length}`;
  $("bestWpm").textContent = best > 0 ? `${best} WPM` : "—";
}

// 5. LOAD OR RESTART A LEVEL
function loadLevel(index) {
  if (index < 0 || index >= lessons.length) return;

  clearInterval(timerId);
  timerId = null;

  current = index;
  startedAt = null;
  timeLeft = LEVEL_DURATION;
  finished = false;
  passageIndex = 0;
  activePassage = lessons[current].passages[passageIndex];

  totalCorrect = 0;
  totalTyped = 0;
  totalErrors = 0;

  const lesson = lessons[current];

  $("levelEyebrow").textContent =
    `LEVEL ${String(current + 1).padStart(2, "0")} · ${lesson.tag}`;
  $("lessonTitle").textContent = lesson.name;
  $("lessonDescription").textContent = lesson.desc;

  $("typingInput").value = "";
  $("typingInput").disabled = false;

  $("timer").textContent = "10:00";
  $("wpm").textContent = "0";
  $("accuracy").textContent = "100%";
  $("errors").textContent = "0";
  $("charCount").textContent = `0 / ${activePassage.length}`;

  $("resultTitle").textContent = "Ready when you are";
  $("resultMessage").textContent =
    "You have 10 minutes. Start typing when you are ready.";
  $("typingHint").textContent =
    "The 10-minute timer starts with your first keystroke.";
  $("passChip").textContent = "Pass: 90% accuracy";

  $("nextBtn").disabled = true;
  $("nextBtn").textContent =
    current === lessons.length - 1 ? "Course complete ✓" : "Next level →";

  renderPrompt();
  renderKeyboard();
  renderLevels();
}

// 6. DISPLAY PASSAGE WITH LIVE CHARACTER FEEDBACK
function renderPrompt() {
  const typed = $("typingInput").value;
  const target = activePassage;
  const prompt = $("prompt");

  prompt.innerHTML = "";

  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i];

    if (i < typed.length) {
      span.className = typed[i] === target[i] ? "correct" : "incorrect";
    } else if (i === typed.length) {
      span.className = "current";
    }

    prompt.appendChild(span);
  }

  $("charCount").textContent = `${typed.length} / ${target.length}`;
}

// 7. VIRTUAL KEYBOARD
const keyboardRows = [
  ["1","2","3","4","5","6","7","8","9","0","-","="],
  ["q","w","e","r","t","y","u","i","o","p"],
  ["a","s","d","f","g","h","j","k","l",";"],
  ["z","x","c","v","b","n","m",",",".","/"]
];

function renderKeyboard() {
  const keyboard = $("keyboard");
  if (!keyboard) return;

  keyboard.innerHTML = "";
  const activeKeys = lessons[current].keys.toLowerCase();

  keyboardRows.forEach(rowKeys => {
    const row = document.createElement("div");
    row.className = "key-row";

    rowKeys.forEach(character => {
      const key = document.createElement("div");
      key.className = "key";
      key.textContent = character.toUpperCase();

      if (activeKeys.includes(character)) {
        key.classList.add("focus");
      }
      if ("asdfjkl;".includes(character)) {
        key.classList.add("home");
      }

      row.appendChild(key);
    });

    keyboard.appendChild(row);
  });

  const bottomRow = document.createElement("div");
  bottomRow.className = "key-row";

  ["Shift", "Ctrl", "Alt", "SPACE", "Alt", "Ctrl", "Shift"].forEach(label => {
    const key = document.createElement("div");
    key.className = "key";

    if (label === "SPACE") {
      key.classList.add("space");
    } else {
      key.classList.add("wide");
    }

    key.textContent = label;
    bottomRow.appendChild(key);
  });

  keyboard.appendChild(bottomRow);
  $("fingerNote").textContent = lessons[current].tip;
}

// 8. TIMER DISPLAY
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  $("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// 9. COUNT CHARACTERS IN THE CURRENT PASSAGE
function countCurrentPassage(typed, target) {
  let correct = 0;
  let errors = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) correct++;
    else errors++;
  }

  return { correct, errors, typed: typed.length };
}

// 10. UPDATE LIVE PERFORMANCE
function calculateStats() {
  const typedNow = $("typingInput").value;
  const target = activePassage;
  const currentStats = countCurrentPassage(typedNow, target);

  const correct = totalCorrect + currentStats.correct;
  const characters = totalTyped + currentStats.typed;
  const errors = totalErrors + currentStats.errors;

  const elapsedMinutes = (LEVEL_DURATION - timeLeft) / 60;
  const wpm = elapsedMinutes > 0
    ? Math.round((correct / 5) / elapsedMinutes)
    : 0;

  const accuracy = characters > 0
    ? Math.round((correct / characters) * 100)
    : 100;

  $("wpm").textContent = wpm;
  $("accuracy").textContent = accuracy + "%";
  $("errors").textContent = errors;

  if (wpm > best) {
    best = wpm;
    localStorage.setItem("keyflowBest", String(best));
    $("bestWpm").textContent = `${best} WPM`;
  }
}

// 11. SAVE THE CURRENT PASSAGE AND START THE NEXT ONE
function finishPassage() {
  const typed = $("typingInput").value;
  const target = activePassage;
  const result = countCurrentPassage(typed, target);

  totalCorrect += result.correct;
  totalTyped += result.typed;
  totalErrors += result.errors;

  // Move to the next fresh passage for this level. After the last one,
  // start again at the first passage so the 10-minute session stays active.
  passageIndex = (passageIndex + 1) % lessons[current].passages.length;
  activePassage = lessons[current].passages[passageIndex];

  $("typingInput").value = "";
  renderPrompt();
  calculateStats();

  $("typingHint").textContent =
    `New passage ${passageIndex + 1} of ${lessons[current].passages.length}. Keep going until your 10 minutes are up.`;
}

// 12. END THE 10-MINUTE SESSION
function completeSession() {
  if (finished) return;

  finished = true;
  clearInterval(timerId);
  timerId = null;

  // Include any partially typed final passage in the final score.
  const finalTyped = $("typingInput").value;
  if (finalTyped.length > 0) {
    const finalResult = countCurrentPassage(
      finalTyped,
      activePassage
    );

    totalCorrect += finalResult.correct;
    totalTyped += finalResult.typed;
    totalErrors += finalResult.errors;
  }

  $("typingInput").disabled = true;

  const accuracy = totalTyped > 0
    ? Math.round((totalCorrect / totalTyped) * 100)
    : 0;

  const elapsedMinutes = Math.max(
    (LEVEL_DURATION - timeLeft) / 60,
    1 / 60
  );

  const wpm = Math.round((totalCorrect / 5) / elapsedMinutes);

  $("wpm").textContent = wpm;
  $("accuracy").textContent = accuracy + "%";
  $("errors").textContent = totalErrors;
  $("timer").textContent = "00:00";

  if (accuracy >= 90) {
    if (!passed.includes(current)) {
      passed.push(current);
      localStorage.setItem("keyflowPassed", JSON.stringify(passed));
    }

    $("resultTitle").textContent = "Level completed!";
    $("typingHint").textContent = "Congratulations! You passed this level.";
    $("nextBtn").disabled = false;
  } else {
    $("resultTitle").textContent = "Keep practising!";
    $("typingHint").textContent =
      "You need at least 90% accuracy. Restart this level to try again.";
    $("nextBtn").disabled = true;
  }

  $("resultMessage").textContent =
    `10-minute session finished | ${wpm} WPM | ${accuracy}% accuracy | ${totalErrors} errors`;

  renderLevels();
}

// 13. START TIMER ON FIRST KEYSTROKE
function startTimer() {
  if (startedAt !== null || finished) return;

  startedAt = Date.now();

  timerId = setInterval(() => {
    if (finished) return;

    timeLeft = Math.max(0, timeLeft - 1);
    updateTimerDisplay();
    calculateStats();

    if (timeLeft <= 0) {
      completeSession();
    }
  }, 1000);
}

// 14. TYPING INPUT
$("typingInput").addEventListener("input", () => {
  if (finished) return;

  startTimer();

  const target = activePassage;
  const typed = $("typingInput").value;

  // Do not allow typing beyond the current passage length.
  if (typed.length > target.length) {
    $("typingInput").value = typed.slice(0, target.length);
  }

  renderPrompt();
  calculateStats();

  if ($("typingInput").value.length === target.length) {
    finishPassage();
  }
});

// 15. RESTART BUTTON
$("restartBtn").addEventListener("click", () => {
  loadLevel(current);
});

// 16. NEXT LEVEL BUTTON
$("nextBtn").addEventListener("click", () => {
  if ($("nextBtn").disabled) return;

  if (current < lessons.length - 1) {
    loadLevel(current + 1);
  } else {
    $("resultTitle").textContent = "Congratulations!";
    $("resultMessage").textContent =
      "You have completed all 10 typing levels. Keep practising to improve your speed.";
    $("nextBtn").disabled = true;
  }
});


// ==========================================
// SSC EXAM SIMULATOR
// SSC-style practice passages are original practice material.
// ==========================================
const sscTests = {
  "chsl-en": {
    title: "SSC CHSL · LDC/JSA",
    subline: "English typing test · 10 minutes",
    duration: 10, targetWpm: 35, language: "English",
    info: "<strong>English typing test</strong>10 minutes · 35 words per minute target. The official CHSL notice states that typing speed is assessed from a given passage over 10 minutes.",
    passages: [
      "Education plays an important role in the development of every individual and society. It gives people the knowledge, confidence and practical skills required to make informed decisions. A good education also teaches discipline, patience and respect for others. Students should develop the habit of reading carefully, writing clearly and learning something new every day. Regular practice helps them improve their performance and prepare for future responsibilities.",
      "The Government of India works through many departments and public institutions to provide essential services to citizens. These offices maintain records, process applications and share information with the public. Employees are expected to work with accuracy, honesty and responsibility. Digital systems have made many services faster and more accessible. However, careful data entry and proper record management remain important for the smooth functioning of every department.",
      "Time management is an important part of success in examinations and professional life. Candidates should prepare a realistic study plan and follow it regularly. Short practice sessions, proper revision and enough rest can improve concentration. During a computer-based skill test, it is important to read the instructions, maintain a comfortable posture and avoid unnecessary corrections. Accuracy should remain the first priority while working to improve typing speed."
    ]
  },
  "chsl-hi": {
    title: "SSC CHSL · LDC/JSA",
    subline: "Hindi typing practice · 10 minutes",
    duration: 10, targetWpm: 30, language: "Hindi",
    info: "<strong>Hindi typing practice</strong>10 minutes · 30 words per minute reference target. This practice uses Unicode Hindi text. Your computer must have a suitable Hindi keyboard/input method enabled. The exact keyboard layout and evaluation rules should be checked in the current notice.",
    passages: [
      "शिक्षा व्यक्ति और समाज के विकास में महत्वपूर्ण भूमिका निभाती है। यह हमें ज्ञान, आत्मविश्वास और सही निर्णय लेने की क्षमता प्रदान करती है। प्रत्येक विद्यार्थी को नियमित अध्ययन करना चाहिए और समय का सही उपयोग करना चाहिए। अभ्यास से लेखन की गति और शुद्धता में सुधार होता है। सफलता प्राप्त करने के लिए धैर्य, अनुशासन और निरंतर प्रयास आवश्यक हैं।",
      "भारत सरकार के विभिन्न विभाग नागरिकों को आवश्यक सेवाएं प्रदान करते हैं। सरकारी कार्यालयों में अभिलेखों का रखरखाव, आवेदन की प्रक्रिया और सूचनाओं का आदान प्रदान किया जाता है। प्रत्येक कर्मचारी से अपेक्षा की जाती है कि वह अपने कार्य को ईमानदारी और सावधानी से पूरा करे। डिजिटल प्रणाली ने अनेक सेवाओं को सरल और तेज बनाया है।",
      "समय प्रबंधन परीक्षा की तैयारी का एक महत्वपूर्ण हिस्सा है। उम्मीदवार को नियमित अभ्यास, पुनरावृत्ति और पर्याप्त विश्राम के लिए समय निर्धारित करना चाहिए। कंप्यूटर पर टाइपिंग करते समय निर्देशों को ध्यान से पढ़ना चाहिए। सही मुद्रा में बैठना और अक्षरों की शुद्धता पर ध्यान देना आवश्यक है। निरंतर अभ्यास से आत्मविश्वास बढ़ता है।"
    ]
  },
  "cgl-dest": {
    title: "SSC CGL · DEST",
    subline: "Data Entry Speed Test · 15 minutes",
    duration: 15, targetWpm: 0, targetKph: 2000 / 15 * 60, language: "English",
    info: "<strong>Data Entry Speed Test (DEST)</strong>15 minutes · approximately 2,000 key depressions in the passage. The CGL 2025 notice describes DEST as mandatory and qualifying, with higher standards for certain posts. This simulator gives a practice benchmark, not an official result.",
    passages: [
      "The department maintains several important records relating to public administration, financial transactions and citizen services. Every entry must be checked carefully before it is saved in the computer system. Incorrect figures, missing details and spelling mistakes can create difficulties during verification. Employees should follow the prescribed procedure and maintain confidentiality while handling official information. A well organised record system helps the office complete its work efficiently and provide accurate information whenever it is required.",
      "A public office receives applications from citizens throughout the year. Each application is assigned a reference number so that its progress can be monitored. The concerned staff members verify the documents, enter the required details and forward the file to the appropriate section. The process should be completed within the specified time limit. Clear communication between different sections reduces delays and helps the department deliver better services to the public.",
      "Computer based work requires attention, consistency and a good understanding of instructions. Data entry operators should maintain a steady rhythm and check the information displayed on the screen. The use of standard formats makes records easier to read and compare. Regular training can improve both speed and accuracy. Candidates preparing for a skill test should practise with long passages, numbers, punctuation and common administrative terms."
    ]
  },
  "deo-8k": {
    title: "SSC CHSL · DEO",
    subline: "Data Entry Skill Test · 8,000 KDPH · 15 minutes",
    duration: 15, targetWpm: 0, targetKph: 8000, language: "English",
    info: "<strong>Data Entry Operator skill test</strong>15 minutes · 8,000 key depressions per hour reference standard. The CHSL notice specifies this standard for DEO posts outside the higher 15,000 KDPH category.",
    passages: [
      "The office of the regional administration receives information from different districts and departments. The data is recorded in a standard format so that authorised officials can review and use it when required. Each record contains a date, reference number, department name and details of the relevant activity. The operator must enter every item in the correct field. Special attention should be given to names, figures, dates and punctuation marks. A small error may affect the accuracy of the complete record.",
      "The annual report provides information about the activities completed by the department during the financial year. It includes details of expenditure, approved projects, completed work and pending applications. The figures are collected from different offices and checked before publication. The data entry team plays an important role in preparing the report. All information must be entered in the correct order and compared with the original document to reduce errors.",
      "A computer operator is responsible for entering and updating information in the database. The operator should understand the instructions before starting the task. Records must be saved regularly and confidential information should not be shared with unauthorised persons. A systematic approach improves productivity and reduces the possibility of mistakes. Candidates should practise typing continuous text while maintaining accuracy and a comfortable speed."
    ]
  },
  "deo-15k": {
    title: "SSC CHSL · DEO Grade A",
    subline: "Higher-speed Data Entry Skill Test · 15 minutes",
    duration: 15, targetWpm: 0, targetKph: 15000, language: "English",
    info: "<strong>Higher-speed DEO skill test</strong>15 minutes · 15,000 key depressions per hour reference standard for the specified departments in the CHSL notice. This is a demanding practice mode. Confirm the post and applicable standard in the official notification.",
    passages: [
      "The central office coordinates the collection, verification and maintenance of information received from several administrative units. Each unit is responsible for submitting complete records within the prescribed schedule. The information is checked for accuracy and entered into the central database using the approved format. The operator must maintain a consistent pace without overlooking any word, figure or punctuation mark. Regular review of the entered data helps identify mistakes before the final record is submitted.",
      "The department has introduced an improved system for managing official correspondence and maintaining digital records. Incoming documents are registered with a unique identification number and sent to the relevant section for further action. The status of each document is updated whenever a new step is completed. This process makes it easier to locate information, monitor pending work and prepare reports. Employees must follow security guidelines while accessing the system and handling confidential documents.",
      "Accurate information is essential for planning, monitoring and evaluating public programmes. Reports are prepared from data collected at different levels of administration. Before the information is used, it must be checked for missing entries, incorrect totals and inconsistent dates. The data entry operator should follow the source document exactly and avoid making unauthorised changes. A reliable database supports better decisions and improves the quality of public services."
    ]
  },
  "selection": {
    title: "SSC Selection Post",
    subline: "Custom typing / DEST practice",
    duration: 10, targetWpm: 35, language: "English",
    info: "<strong>Selection Post skill test</strong>Typing, stenography and DEST requirements vary by post code and notification. This mode lets you practise with a configurable duration and target. Select the exact standard from your post-specific notice before treating it as an exam simulation.",
    passages: [
      "The recruitment process is conducted according to the conditions mentioned in the official notification. Candidates should read the eligibility requirements, examination scheme and skill test instructions carefully. The required typing speed or data entry standard may differ according to the post. Applicants must check the relevant post code and follow the instructions issued by the Commission and the concerned regional office.",
      "The selection process may include a computer based examination, document verification and a qualifying skill test. Candidates should keep their certificates and application details ready for verification. The information entered in the application form must be correct and supported by valid documents. Any change in the examination schedule or instructions will be published through the official website.",
      "A skill test measures the candidate's ability to complete a task within a specified time. The candidate should understand the format, maintain accuracy and use the allotted time carefully. Practice with different passages can improve confidence and reduce common typing errors. The final requirements should always be confirmed from the official notice for the particular vacancy."
    ]
  }
};

let sscTimerId = null;
let sscSecondsLeft = 0;
let sscStartedAt = null;
let sscFinished = false;
let sscPassageIndex = 0;
let sscTotalCorrect = 0;
let sscTotalTyped = 0;
let sscTotalErrors = 0;
let sscCurrentConfig = null;
let sscActivePassage = "";

const sscEl = id => document.getElementById(id);

function openSscSimulator() {
  sscEl("sscOverlay").classList.add("open");
  sscEl("sscOverlay").setAttribute("aria-hidden", "false");
  updateSscExamInfo();
}
function closeSscSimulator() {
  if (!sscFinished && !sscEl("sscTestArea").hidden) finishSscTest();
  if (sscTimerId) clearInterval(sscTimerId);
  sscTimerId = null;
  sscEl("sscOverlay").classList.remove("open");
  sscEl("sscOverlay").setAttribute("aria-hidden", "true");
}
function updateSscExamInfo() {
  const selected = sscTests[sscEl("sscExamSelect").value];
  sscEl("sscExamInfo").innerHTML = selected.info;
  sscEl("sscCustomFields").hidden = sscEl("sscExamSelect").value !== "selection";
}
function formatSscTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`;
}
function countSscChars(typed, target) {
  let correct = 0, errors = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === target[i]) correct++;
    else errors++;
  }
  return { correct, errors, typed: typed.length };
}
function getSscCurrentStats() {
  const typed = sscEl("sscTypingInput").value;
  const result = countSscChars(typed, sscActivePassage);
  const correct = sscTotalCorrect + result.correct;
  const total = sscTotalTyped + result.typed;
  const errors = sscTotalErrors + result.errors;
  const elapsed = Math.max((sscCurrentConfig.duration * 60 - sscSecondsLeft) / 60, 1 / 60);
  const wpm = Math.round((correct / 5) / elapsed);
  const kph = Math.round(correct / (elapsed / 60));
  return { correct, total, errors, wpm, kph };
}
function renderSscPassage() {
  const typed = sscEl("sscTypingInput").value;
  const target = sscActivePassage;
  const holder = sscEl("sscPassage");
  holder.innerHTML = "";
  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i];
    if (i < typed.length) span.className = typed[i] === target[i] ? "correct" : "incorrect";
    else if (i === typed.length) span.className = "current";
    holder.appendChild(span);
  }
  sscEl("sscProgressText").textContent =
    `Passage ${sscPassageIndex + 1} · ${sscTotalTyped + typed.length} characters entered`;
}
function updateSscStats() {
  const stats = getSscCurrentStats();
  sscEl("sscWpm").textContent = stats.wpm;
  sscEl("sscAccuracy").textContent = `${stats.total ? Math.round(stats.correct / stats.total * 100) : 100}%`;
  sscEl("sscKeys").textContent = stats.total;
  sscEl("sscErrors").textContent = stats.errors;
}
function startSscTimer() {
  if (sscStartedAt !== null || sscFinished) return;
  sscStartedAt = Date.now();
  sscTimerId = setInterval(() => {
    if (sscFinished) return;
    sscSecondsLeft = Math.max(0, sscSecondsLeft - 1);
    sscEl("sscTimer").textContent = formatSscTime(sscSecondsLeft);
    updateSscStats();
    if (sscSecondsLeft <= 0) finishSscTest();
  }, 1000);
}
function startSscTest() {
  const key = sscEl("sscExamSelect").value;
  const selected = sscTests[key];
  sscCurrentConfig = { ...selected };
  if (key === "selection") {
    sscCurrentConfig.duration = Number(sscEl("sscCustomDuration").value);
    sscCurrentConfig.targetWpm = Number(sscEl("sscCustomTarget").value);
  }
  sscSecondsLeft = sscCurrentConfig.duration * 60;
  sscStartedAt = null;
  sscFinished = false;
  sscPassageIndex = 0;
  sscTotalCorrect = 0;
  sscTotalTyped = 0;
  sscTotalErrors = 0;
  sscActivePassage = sscCurrentConfig.passages[0];

  sscEl("sscTestName").textContent = sscCurrentConfig.title;
  sscEl("sscTestSubline").textContent = sscCurrentConfig.subline;
  sscEl("sscTimer").textContent = formatSscTime(sscSecondsLeft);
  sscEl("sscWpm").textContent = "0";
  sscEl("sscAccuracy").textContent = "100%";
  sscEl("sscKeys").textContent = "0";
  sscEl("sscErrors").textContent = "0";
  sscEl("sscTypingInput").value = "";
  sscEl("sscTypingInput").disabled = false;
  sscEl("sscResult").hidden = true;
  sscEl("sscBackBtn").hidden = true;
  sscEl("sscSetup").hidden = true;
  sscEl("sscTestArea").hidden = false;
  renderSscPassage();
  sscEl("sscTypingInput").focus();
}
function nextSscPassage() {
  const result = countSscChars(sscEl("sscTypingInput").value, sscActivePassage);
  sscTotalCorrect += result.correct;
  sscTotalTyped += result.typed;
  sscTotalErrors += result.errors;
  sscPassageIndex = (sscPassageIndex + 1) % sscCurrentConfig.passages.length;
  sscActivePassage = sscCurrentConfig.passages[sscPassageIndex];
  sscEl("sscTypingInput").value = "";
  renderSscPassage();
  updateSscStats();
}
function finishSscTest() {
  if (sscFinished) return;
  sscFinished = true;
  if (sscTimerId) clearInterval(sscTimerId);
  sscTimerId = null;
  const current = sscEl("sscTypingInput").value;
  if (current.length) {
    const result = countSscChars(current, sscActivePassage);
    sscTotalCorrect += result.correct;
    sscTotalTyped += result.typed;
    sscTotalErrors += result.errors;
  }
  const elapsedMinutes = Math.max((sscCurrentConfig.duration * 60 - sscSecondsLeft) / 60, 1 / 60);
  const wpm = Math.round((sscTotalCorrect / 5) / elapsedMinutes);
  const kph = Math.round(sscTotalCorrect / (elapsedMinutes / 60));
  const accuracy = sscTotalTyped ? Math.round(sscTotalCorrect / sscTotalTyped * 100) : 0;
  const targetText = sscCurrentConfig.targetWpm
    ? `${sscCurrentConfig.targetWpm} WPM`
    : sscCurrentConfig.targetKph
      ? `${Math.round(sscCurrentConfig.targetKph).toLocaleString("en-IN")} key depressions/hour`
      : "No fixed target";
  const achieved = sscCurrentConfig.targetWpm
    ? wpm >= sscCurrentConfig.targetWpm && accuracy >= 90
    : sscCurrentConfig.targetKph
      ? kph >= sscCurrentConfig.targetKph && accuracy >= 90
      : accuracy >= 90;
  sscEl("sscTypingInput").disabled = true;
  sscEl("sscTimer").textContent = "00:00";
  sscEl("sscResult").hidden = false;
  sscEl("sscResult").innerHTML = `
    <strong>${achieved ? "Practice target reached" : "Practice test completed"}</strong><br>
    Net speed: ${wpm} WPM · ${kph.toLocaleString("en-IN")} key depressions/hour<br>
    Accuracy: ${accuracy}% · Correct characters: ${sscTotalCorrect} · Errors: ${sscTotalErrors}<br>
    Reference target: ${targetText}<br>
    <small>This is a practice estimate, not an official SSC score or qualification decision.</small>
  `;
  sscEl("sscEndBtn").disabled = true;
  sscEl("sscBackBtn").hidden = false;
}
function backToSscSetup() {
  if (sscTimerId) clearInterval(sscTimerId);
  sscTimerId = null;
  sscEl("sscEndBtn").disabled = false;
  sscEl("sscTestArea").hidden = true;
  sscEl("sscSetup").hidden = false;
}
sscEl("sscOpenBtn").addEventListener("click", openSscSimulator);
sscEl("sscCloseBtn").addEventListener("click", closeSscSimulator);
sscEl("sscOverlay").addEventListener("click", event => {
  if (event.target === sscEl("sscOverlay")) closeSscSimulator();
});
sscEl("sscExamSelect").addEventListener("change", updateSscExamInfo);
sscEl("sscStartBtn").addEventListener("click", startSscTest);
sscEl("sscEndBtn").addEventListener("click", finishSscTest);
sscEl("sscBackBtn").addEventListener("click", backToSscSetup);
sscEl("sscTypingInput").addEventListener("paste", event => event.preventDefault());
sscEl("sscTypingInput").addEventListener("input", () => {
  if (sscFinished) return;
  startSscTimer();
  const target = sscActivePassage;
  let typed = sscEl("sscTypingInput").value;
  if (typed.length > target.length) {
    sscEl("sscTypingInput").value = typed.slice(0, target.length);
    typed = sscEl("sscTypingInput").value;
  }
  renderSscPassage();
  updateSscStats();
  if (typed.length === target.length) nextSscPassage();
});
updateSscExamInfo();


// 17. INITIALIZE AFTER HTML HAS LOADED
function initializeKeyFlow() {
  if (missingIds.length) {
    console.error("Fix the missing HTML IDs before running KeyFlow.");
    return;
  }

  loadLevel(0);
}

initializeKeyFlow();
