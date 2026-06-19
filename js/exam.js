const TOTAL_QUESTIONS = questions.length;

const timer = document.getElementById("time-remaining");

let min = 90;
let sec = 0;

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
        />
        <label class="option-card" for="option${i}">
          ${option}
        </label>
      </div>
    `;
  });

  document.querySelector("#btn-prev").disabled = index === 0;
  document.querySelector("#btn-next").disabled =
    index === TOTAL_QUESTIONS - 1;
}

optionsList.addEventListener("change", (e) => {
  userAnswers[index] = e.target.value.split(".")[0];

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
  const answered = userAnswers.filter((a) => a !== null).length;

  const percentage = Math.round(
    (answered / TOTAL_QUESTIONS) * 100
  );

  progressFill.style.width = `${percentage}%`;

  progressPercent.textContent = `${percentage}%`;

  progressText.textContent =
    `${answered}/${TOTAL_QUESTIONS} Completed`;
}

function updateStats() {
  const answered =
    userAnswers.filter((a) => a !== null).length;

  const unanswered =
    TOTAL_QUESTIONS - answered;

  const flagged =
    document.querySelectorAll(".q-box.flagged").length;

  document.querySelector("#count-answered").textContent =
    answered;

  document.querySelector("#count-unanswered").textContent =
    unanswered;

  document.querySelector("#count-flagged").textContent =
    flagged;

  updateProgress();
}

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

  timer.textContent =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
}, 1000);

questionLoad();
updateStats();