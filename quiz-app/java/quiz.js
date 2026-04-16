let questions = [
  {
    q: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    q: "Which tag is used for paragraph?",
    options: ["<p>", "<h1>", "<div>"],
    answer: "<p>"
  },
  {
    q: "CSS stands for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    q: "Which property is used for text color?",
    options: ["font-color", "color", "text-color"],
    answer: "color"
  },
  {
    q: "Which language is used for web logic?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "JavaScript"
  },
  {
    q: "Which symbol is used for comments in JS?",
    options: ["//", "<!-- -->", "#"],
    answer: "//"
  },
  {
    q: "Which HTML tag is used for image?",
    options: ["<img>", "<image>", "<src>"],
    answer: "<img>"
  },
  {
    q: "Which CSS property controls size of text?",
    options: ["font-size", "text-size", "size"],
    answer: "font-size"
  },
  {
    q: "Which keyword is used to declare variable in JS?",
    options: ["var", "int", "string"],
    answer: "var"
  },
  {
    q: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google"],
    answer: "Netscape"
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  let q = questions[index];
  document.getElementById("question").innerText = q.q;

  let optHTML = "";
  q.options.forEach(opt => {
    optHTML += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
  });

  document.getElementById("options").innerHTML = optHTML;
}

function checkAnswer(ans) {
  if (ans === questions[index].answer) {
    score++;
  }
}

function nextQuestion() {
  index++;

  if (index < questions.length) {
    loadQuestion();
  } else {
    Swal.fire(
      "Quiz Finished 🎉",
      `Score: ${score}/${questions.length}`,
      "success"
    );
  }
}

loadQuestion();