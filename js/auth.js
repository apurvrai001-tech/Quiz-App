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
