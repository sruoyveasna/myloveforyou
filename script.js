// Questions and answers
const questions = [
  {
    question: "Which one is the most beautiful?",
    options: ["Mountain", "Sea", "Sunset"],
    answer: "You, Lyly ❤️",
    resultMessage: "Nope! The most beautiful is you, Lyly ❤️",
  },
  {
    question: "What is the most precious thing in the world?",
    options: ["Gold", "Diamond", "Love"],
    answer: "You, Lyly 💎",
    resultMessage: "Wrong! The most precious thing is you, Lyly 💎",
  },
  {
    question: "Who is the most amazing person I know?",
    options: ["My God", "My Friend", "My Pet"],
    answer: "You, Lyly 🌟",
    resultMessage: "Incorrect! The most amazing person is you, Lyly 🌟",
  },
  {
    question: "What makes me the happiest?",
    options: ["Food", "Travel", "Sleep"],
    answer: "You, Lyly 😊",
    resultMessage: "Not quite! What makes me happiest is you, Lyly 😊",
  },
  {
    question: "What is the most romantic place?",
    options: ["Paris", "Venice", "Bali"],
    answer: "Anywhere with you, Lyly 🌍",
    resultMessage:
      "Nope! The most romantic place is anywhere with you, Lyly 🌍",
  },
  {
    question: "What is my favorite sound?",
    options: ["Birds Chirping", "Ocean Waves", "Rain"],
    answer: "Your voice, Lyly 🎶",
    resultMessage: "Wrong! My favorite sound is your voice, Lyly �",
  },
  {
    question: "What is the most important thing in life?",
    options: ["Money", "Health", "Happiness"],
    answer: "You, Lyly 💖",
    resultMessage: "Incorrect! The most important thing is you, Lyly 💖",
  },
];

const questionContainer = document.getElementById("question-container");
const result = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const message = document.getElementById("message");

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
  const q = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <div class="question">
      <h3>${q.question}</h3>
      <div class="options">
        ${q.options.map((option) => `<button>${option}</button>`).join("")}
      </div>
    </div>
  `;

  // Add event listeners to buttons
  const buttons = questionContainer.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => showResult(q.resultMessage));
  });
}

// Function to display the result
function showResult(messageText) {
  result.innerHTML = `${messageText} ${getRandomEmoji()}`;
  result.style.display = "block";
  nextBtn.style.display = "block";
}

// Function to get a random funny emoji
function getRandomEmoji() {
  const emojis = ["😜", "🤪", "😘", "🥰", "😍", "😂", "🤣", "😎", "👻", "💖"];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

// Function to move to the next question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    result.style.display = "none";
    nextBtn.style.display = "none";
    displayQuestion();
  } else {
    questionContainer.innerHTML = `<h3>You've answered all the questions! You're the best, Lyly! ❤️</h3>`;
    result.style.display = "none";
    nextBtn.style.display = "none";
    message.classList.remove("hidden"); // Show the heartfelt message
  }
});

// Display the first question when the page loads
displayQuestion();
