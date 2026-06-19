const questions = [
  {
    id: 1,
    question: "What is the output of console.log(typeof NaN);?",
    options: ['A. "number"', 'B. "NaN"', 'C. "undefined"', 'D. "object"'],
    correctAnswer: "A",
    explanation:
      "NaN stands for 'Not-a-Number', but its data type is actually a number in JavaScript. The ECMAScript standard defines NaN as a numeric value representing an undefined or unrepresentable value.",
  },
  {
    id: 2,
    question:
      "Which of the following is NOT a primitive data type in JavaScript?",
    options: ["A. String", "B. Boolean", "C. Object", "D. Symbol"],
    correctAnswer: "C",
    explanation:
      "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Object is a non-primitive (reference) type.",
  },
  {
    id: 3,
    question: "What is the output of console.log(0.1 + 0.2 === 0.3);?",
    options: ["A. true", "B. false", "C. undefined", "D. NaN"],
    correctAnswer: "B",
    explanation:
      "Due to floating-point precision in IEEE 754 arithmetic, 0.1 + 0.2 evaluates to 0.30000000000000004, which is not strictly equal to 0.3.",
  },
  {
    id: 4,
    question:
      "Which keyword is used to declare a block-scoped variable that can be reassigned?",
    options: ["A. var", "B. const", "C. let", "D. define"],
    correctAnswer: "C",
    explanation:
      "'let' declares a block-scoped local variable, optionally initializing it to a value, and allows reassignment. 'const' is also block-scoped but cannot be reassigned. 'var' is function-scoped.",
  },
  {
    id: 5,
    question: 'What is the result of console.log(1 + "1" - 1);?',
    options: ["A. 11", "B. 10", "C. 0", "D. NaN"],
    correctAnswer: "B",
    explanation:
      '1 + "1" evaluates to "11" (string concatenation). Then, "11" - 1 converts "11" to a number and subtracts 1, resulting in 10 (numeric subtraction).',
  },
  {
    id: 6,
    question: "What is the purpose of Array.prototype.map()?",
    options: [
      "A. It filters elements of an array.",
      "B. It executes a function once for each element and returns undefined.",
      "C. It creates a new array populated with the results of calling a provided function on every element.",
      "D. It reduces the array to a single value.",
    ],
    correctAnswer: "C",
    explanation:
      "map() returns a new array with the results of calling a callback function on every element in the calling array. filter() filters, forEach() returns undefined, and reduce() reduces to a single value.",
  },
  {
    id: 7,
    question: "What does the 'this' keyword refer to inside an arrow function?",
    options: [
      "A. The global object.",
      "B. The element that triggered the event.",
      "C. The object that called the function.",
      "D. The lexical scope in which the arrow function was defined.",
    ],
    correctAnswer: "D",
    explanation:
      "Arrow functions do not have their own 'this' context. They inherit 'this' lexically from the enclosing scope.",
  },
  {
    id: 8,
    question:
      "Which of the following creates a deep copy of a simple JSON object 'obj'?",
    options: [
      "A. Object.assign({}, obj)",
      "B. JSON.parse(JSON.stringify(obj))",
      "C. {...obj}",
      "D. Object.create(obj)",
    ],
    correctAnswer: "B",
    explanation:
      "JSON.parse(JSON.stringify(obj)) serializes and deserializes the object, creating a deep copy. Spread operator {...obj} and Object.assign create shallow copies.",
  },
  {
    id: 9,
    question: "What is the output of console.log([] == ![]);?",
    options: ["A. true", "B. false", "C. TypeError", "D. undefined"],
    correctAnswer: "A",
    explanation:
      '![] coerces the array to a boolean (arrays are truthy, so ![] is false). Thus, [] == false is evaluated. [] is coerced to an empty string "" when compared to a primitive, and "" is coerced to 0. false is also coerced to 0, making 0 == 0 evaluate to true.',
  },
  {
    id: 10,
    question:
      "How do you write a conditional statement for executing some code if 'i' is NOT equal to 5?",
    options: [
      "A. if (i != 5)",
      "B. if (i <> 5)",
      "C. if i =! 5 then",
      "D. if i not 5",
    ],
    correctAnswer: "A",
    explanation:
      "In JavaScript, != or !== is used to check for inequality. The syntax in other choices is incorrect for JS.",
  },
  {
    id: 11,
    question: "What is the output of console.log(typeof null);?",
    options: ['A. "null"', 'B. "undefined"', 'C. "object"', 'D. "boolean"'],
    correctAnswer: "C",
    explanation:
      "This is a well-known bug in the initial JavaScript implementation, where values representing null pointers were typed as objects. It was kept for backward compatibility.",
  },
  {
    id: 12,
    question:
      "Which method is used to add one or more elements to the end of an array and return the new length?",
    options: ["A. pop()", "B. push()", "C. shift()", "D. unshift()"],
    correctAnswer: "B",
    explanation:
      "push() adds to the end of the array and returns the new length. pop() removes from the end. shift() removes from the front. unshift() adds to the front.",
  },
  {
    id: 13,
    question:
      "What is the output of: (function(){ var a = b = 3; })(); console.log(typeof a, typeof b);?",
    options: [
      'A. "undefined" "number"',
      'B. "number" "undefined"',
      'C. "number" "number"',
      'D. "undefined" "undefined"',
    ],
    correctAnswer: "A",
    explanation:
      "var a = b = 3; is interpreted as b = 3; var a = b;. Since b is not declared with var, let, or const, it becomes a global variable (in non-strict mode). Outside the function scope, 'a' is undefined, while global 'b' exists and has type 'number'.",
  },
  {
    id: 14,
    question:
      "Which promise method resolves when all input promises resolve, or rejects if any promise rejects?",
    options: [
      "A. Promise.all()",
      "B. Promise.race()",
      "C. Promise.any()",
      "D. Promise.allSettled()",
    ],
    correctAnswer: "A",
    explanation:
      "Promise.all() takes an iterable of promises and resolves when all resolve, or rejects as soon as one rejects.",
  },
  {
    id: 15,
    question:
      "What is the execution order of the following log statements?\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');",
    options: [
      "A. 1, 4, 2, 3",
      "B. 1, 4, 3, 2",
      "C. 1, 2, 3, 4",
      "D. 1, 3, 4, 2",
    ],
    correctAnswer: "B",
    explanation:
      "Synchronous statements run first ('1' and '4'). Then microtasks (Promise callback) execute before macrotasks, meaning '3' prints. Finally, the setTimeout callback (macrotask) runs, printing '2'.",
  },
  {
    id: 16,
    question: "Which of the following is true about 'hoisting' in JavaScript?",
    options: [
      "A. Only let and const variables are hoisted.",
      "B. Function declarations are hoisted, but variable declarations are not.",
      "C. Both function declarations and variable declarations (declared with var) are hoisted to the top of their scope.",
      "D. Hoisting executes code before it is compiled.",
    ],
    correctAnswer: "C",
    explanation:
      "In JavaScript, variable declarations (using var) and function declarations are hoisted to the top of their containing scope during compilation. Note that only the declaration is hoisted, not the initialization.",
  },
  {
    id: 17,
    question: 'What is the output of console.log(3 + 2 + "7");?',
    options: ['A. "327"', 'B. "12"', 'C. "57"', "D. NaN"],
    correctAnswer: "C",
    explanation:
      '3 + 2 is evaluated first as numeric addition, yielding 5. Then, 5 + "7" triggers type coercion to string, producing "57".',
  },
  {
    id: 18,
    question:
      "Which of the following statements is true about strict mode ('use strict')?",
    options: [
      "A. It makes debugging easier by eliminating some silent errors.",
      "B. It disables all block-scoped variables.",
      "C. It allows the use of undeclared variables.",
      "D. It is required in all HTML5 documents.",
    ],
    correctAnswer: "A",
    explanation:
      "Strict mode prevents syntax anomalies, changes silent errors into throw errors, and prevents accidental creation of global variables.",
  },
  {
    id: 19,
    question: "What is a closure in JavaScript?",
    options: [
      "A. The process of compiling code before execution.",
      "B. A function combined with references to its surrounding state (the lexical environment).",
      "C. The method used to close a browser window or tab.",
      "D. A data structure used to store private properties in class syntax.",
    ],
    correctAnswer: "B",
    explanation:
      "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment), allowing the inner function to access variables from its outer scope even after the outer function has returned.",
  },
  {
    id: 20,
    question: 'What is the output of console.log("5" - - "3");?',
    options: ['A. "53"', "B. 2", "C. 8", "D. NaN"],
    correctAnswer: "C",
    explanation:
      "The subtraction operator '-' coerces string operands to numbers. The expression becomes 5 - (-3), which evaluates to 5 + 3 = 8.",
  },
  {
    id: 21,
    question:
      "Which operator is used to check both the value and the type of a variable?",
    options: ["A. =", "B. ==", "C. ===", "D. !=="],
    correctAnswer: "C",
    explanation:
      "The strict equality operator === checks both value and type without performing implicit type coercion.",
  },
  {
    id: 22,
    question: "What does Object.freeze(obj) do?",
    options: [
      "A. It prevents new properties from being added to the object and prevents existing properties from being removed or modified.",
      "B. It makes the object read-only but allows adding new properties.",
      "C. It minifies the object's memory size.",
      "D. It deletes all functions defined inside the object.",
    ],
    correctAnswer: "A",
    explanation:
      "Object.freeze() makes an object completely immutable: new properties cannot be added, existing properties cannot be removed or modified, and their descriptors cannot be altered.",
  },
  {
    id: 23,
    question: "What is the output of console.log(typeof (() => {}));?",
    options: ['A. "object"', 'B. "arrow"', 'C. "function"', 'D. "undefined"'],
    correctAnswer: "C",
    explanation:
      "Functions, including arrow functions, are of type 'function'.",
  },
  {
    id: 24,
    question: "How can you check if a property exists in an object 'x'?",
    options: [
      'A. x.hasProperty("prop")',
      'B. "prop" in x',
      'C. x.contains("prop")',
      "D. exists(x.prop)",
    ],
    correctAnswer: "B",
    explanation:
      "The 'in' operator returns true if the specified property is in the specified object or its prototype chain. x.hasOwnProperty(\"prop\") is also valid.",
  },
  {
    id: 25,
    question: 'What is the result of console.log(Boolean("false"));?',
    options: ["A. true", "B. false", "C. null", "D. TypeError"],
    correctAnswer: "A",
    explanation:
      'Any non-empty string in JavaScript is truthy. "false" is a non-empty string, so converting it to a Boolean returns true.',
  },
];

// 2. Quiz Logic
// landingPage

const loginView = document.querySelector("#login-view");
const instructionPage = document.querySelector("#instructions-view");
const examPage = document.querySelector("#exam-view");

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  loginView.classList.remove("active");
  instructionPage.classList.add("active");
});

document.querySelector("#back-to-login").addEventListener("click", () => {
  instructionPage.classList.remove("active");
  loginView.classList.add("active");
});

const agreeCheckbox = document.querySelector("#agree");
const startExamBtn = document.querySelector("#start-exam-btn");
startExamBtn.disabled = true;
agreeCheckbox.addEventListener("change", () => {
  startExamBtn.disabled = !agreeCheckbox.checked;
});
startExamBtn.addEventListener("click", () => {
  instructionPage.classList.remove("active");
  examPage.classList.add("active");
});
const timer = document.getElementById("time-remaining");
let min = 90;
let sec = 0;
const timerInterval = setInterval(() => {
  if (sec === 0) {
    if (min === 0) {
      clearInterval(timerInterval);
      submitExam();
      return;
    }
    min--;
    sec = 59;
  } else {
    sec--;
  }
  timer.textContent = `${min}:${sec < 10 ? "0" : ""}${sec}`;
}, 1000);
const TOTAL_QUESTIONS = questions.length;
const progressText = document.getElementById("progress-text");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-bar-fill");
const container = document.getElementById("grid-container");
const questionText = document.getElementById("question-body");
const optionsList = document.getElementById("options-list");
let index = 0;
const userAnswers = new Array(TOTAL_QUESTIONS).fill(null);
for (let i = 0; i < TOTAL_QUESTIONS; i++) {
  const div = document.createElement("div");
  div.textContent = i + 1;
  div.classList.add("q-box");
  container.appendChild(div);
  div.addEventListener("click", () => {
    index = i;
    questionLoad();
  });
}
function questionLoad() {
  const question = questions[index];
  questionText.textContent = question.question;
  document.querySelector("#current-question-num").textContent =
    `Question ${index + 1} of ${TOTAL_QUESTIONS}`;
  optionsList.innerHTML = "";
  question.options.forEach((option, i) => {
    const checked = userAnswers[index] === option ? "checked" : "";
    optionsList.innerHTML += `
      <div class="option">
        <input
          type="radio"
          name="option"
          value="${option}"
          id="option${i}"
          ${checked}
        >
        <label
          class="option-card"
          for="option${i}"
        >
          ${option}
        </label>
      </div>
    `;
  });
  if (index === 0) {
    document.querySelector("#btn-prev").disabled = true;
  } else {
    document.querySelector("#btn-prev").disabled = false;
  }
  if (index === TOTAL_QUESTIONS - 1) {
    document.querySelector("#btn-next").disabled = true;
  } else {
    document.querySelector("#btn-next").disabled = false;
  }
}

optionsList.addEventListener("change", (e) => {
  userAnswers[index] = e.target.value.split(".")[0];
  console.log(userAnswers);
  container.children[index].classList.add("answered");
  updateStats();
});

document.querySelector("#btn-flag").addEventListener("click", () => {
  container.children[index].classList.toggle("flagged");
  updateStats();
});

document.querySelector("#btn-prev").addEventListener("click", () => {
  if (index > 0) {
    index--;
    questionLoad();
  }
});

document.querySelector("#btn-next").addEventListener("click", () => {
  if (index < TOTAL_QUESTIONS - 1) {
    index++;
    questionLoad();
  }
});

function updateProgress() {
  const answered = userAnswers.filter((answer) => answer !== null).length;
  const percentage = Math.round((answered / TOTAL_QUESTIONS) * 100);
  progressFill.style.width = `${percentage}%`;
  progressPercent.textContent = `${percentage}%`;
  progressText.textContent = `${answered}/${TOTAL_QUESTIONS} Completed`;
}

function updateStats() {
  const answered = userAnswers.filter((answer) => answer !== null).length;
  const unanswered = TOTAL_QUESTIONS - answered;
  const flagged = document.querySelectorAll(".q-box.flagged").length;
  document.querySelector("#count-answered").textContent = answered;
  document.querySelector("#count-unanswered").textContent = unanswered;
  document.querySelector("#count-flagged").textContent = flagged;
  updateProgress();
}
const resultPage = document.querySelector("#results-view");
document
  .querySelector("#btn-submit-sidebar")
  .addEventListener("click", submitExam);

function submitExam() {
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  const correctQues = document.querySelector("#res-questions");
  correctQues.innerHTML = "";
  questions.forEach((question, i) => {
    const userAnswer = userAnswers[i];
    let status = "";
    let badgeClass = "";
    if (userAnswer === null) {
      unanswered++;
      status = "Unanswered";
      badgeClass = "warning";
    } else if (userAnswer === question.correctAnswer) {
      correct++;
      status = "Correct";
      badgeClass = "success";

    } else {
      incorrect++;
      status = "Incorrect";
      badgeClass = "danger";
    }

    correctQues.innerHTML += `
            <div class="card mb-3 border-${badgeClass}">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h6 class="fw-bold">
                            Question ${i + 1}
                        </h6>
                        <span class="badge bg-${badgeClass} d-flex align-items-center justify-content-center">
                            ${status}
                        </span>
                    </div>
                    <p class="mt-2 mb-2">
                        ${question.question}
                    </p>
                    <p class="mb-1">
                        <strong>Your Answer:</strong>
                        ${userAnswer ? userAnswer : "Not Attempted"}
                    </p>
                    <p class="mb-1 text-success">
                        <strong>Correct Answer:</strong>
                        ${question.correctAnswer}
                    </p>
                    <p class="mb-0 text-muted">
                        ${question.explanation}
                    </p>

                </div>
            </div>
        `;
  });
  document.querySelector("#res-score-progressbar").style.width = `${((correct / TOTAL_QUESTIONS) * 100).toFixed(1)}%`;
  document.querySelector("#res-score-ratio").textContent = correct;
  document.querySelector("#res-score-percent").textContent = `${((correct / TOTAL_QUESTIONS) * 100).toFixed(1)}%`;
  document.querySelector("#res-progress-pct").textContent = `${((correct / TOTAL_QUESTIONS) * 100).toFixed(1)}%`;
  if(correct > 20){
    document.querySelector("#res-grade-badge").textContent = "Grade A";
  }
  else if(correct > 15){
    document.querySelector("#res-grade-badge").textContent = "Grade B";
  }
  else if(correct > 10){
    document.querySelector("#res-grade-badge").textContent = "Grade C";
  }
  else if(correct > 5){
     document.querySelector("#res-grade-badge").textContent = "Grade D";
  }
  else {
    document.querySelector("#res-grade-badge").textContent = "Grade F";
  }
  document.querySelector("#res-correct-val").textContent = correct;
  document.querySelector("#res-incorrect-val").textContent = incorrect;
  document.querySelector("#res-unanswered-val").textContent = unanswered;
  document.querySelector("#res-correct-pct").textContent = `${((correct / TOTAL_QUESTIONS) * 100).toFixed(1)}% of total`;
  document.querySelector("#res-incorrect-pct").textContent = `${((incorrect / TOTAL_QUESTIONS) * 100).toFixed(1)}% of total`;
  document.querySelector("#res-unanswered-pct").textContent = `${((unanswered / TOTAL_QUESTIONS) * 100).toFixed(1)}% of total`;
  clearInterval(timerInterval);
  document.querySelector("#exam-view").classList.remove("active");
  document.querySelector("#results-view").classList.add("active");
}

questionLoad();
updateStats();
