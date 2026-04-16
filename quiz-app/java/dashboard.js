function startQuiz(type) {
  localStorage.setItem("quizType", type);
  window.location = "quiz.html";
}