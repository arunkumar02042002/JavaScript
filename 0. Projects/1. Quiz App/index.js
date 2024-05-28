const fs = require("fs");
const readLineSync = require("readline-sync");
const kuler = require("kuler");

// Read the file
const data = fs.readFileSync("./quizzes.json", "utf-8");
const leadersData = fs.readFileSync("./leaderboard.json", "utf-8");

// Parse the JSON data
const QUIZ_LIST = JSON.parse(data);
const TOTAL_QUESTIONS = QUIZ_LIST.length;
const LEADERS_LIST = JSON.parse(leadersData);

// Function to print leaders
function printLeaders(LEADERS_LIST) {
  console.log(
    kuler("-------------------------------------------------", "#1e3a8a"),
  );
  console.log(kuler("LEADERBOARD", "#f7c08a"));
  console.log(
    kuler("-------------------------------------------------", "#1e3a8a"),
  );
  for (let i = 0; i < Math.min(LEADERS_LIST.length, 5); i++) {
    let leader = LEADERS_LIST[i];
    console.log(kuler(`${leader.name} : ${leader.score}`, "#f7c08a"));
  }
  console.log(
    kuler("-------------------------------------------------", "#1e3a8a"),
  );
}

function startQuiz() {
  // User's score
  let score = 0;
  let correctAnswered = 0;
  let wrongAnswered = 0;

  // Ask the user's name
  console.log(
    kuler("-------------------------------------------------", "#1e3a8a"),
  );
  let name = readLineSync.question("What's you name? ");
  console.log(
    kuler("-------------------------------------------------", "#1e3a8a"),
  );
  console.log(kuler(`\nWelcome ${name} to the quiz`, "#f7c08a"));

  // To store indices of questions asked
  const seen = new Set();

  // Ask only 10 questions
  for (let i = 0; i < Math.min(TOTAL_QUESTIONS, 10); i++) {
    // Get a random question
    let index = Math.floor(Math.random() * TOTAL_QUESTIONS);

    // Check if the question has already been asked
    while (seen.has(index)) {
      index = Math.floor(Math.random() * TOTAL_QUESTIONS);
    }
    // Add the question to the set
    seen.add(index);

    // Get the question
    let obj = QUIZ_LIST[index];

    // Ask the question
    console.log(`\nQ. ${i + 1} - ${obj.question}`);

    // Print the options
    for (let [key, value] of Object.entries(obj.options)) {
      console.log(`${key} - ${value}`);
    }

    // Get the answer from the user
    let answer = readLineSync.question("Anwer: ");

    // Check if the answer is correct and calculate Score
    if (answer.toLowerCase() === obj.answer.toLowerCase()) {
      score += 5;
      console.log(kuler("Correct!", "#16a34a"));
      correctAnswered++;
    } else {
      score -= 2;
      console.log(kuler("Wrong!", "#dc2626"));
      wrongAnswered++;
    }
  }

  return [name, score, wrongAnswered, correctAnswered];
}

// Print a welcoming message
const MESSAGE = `
-------------------------------------------------
Welcome to Quizzy Quizz!
-------------------------------------------------
You will be asked a series of questions.
- For each correct answer, you will be awarded 5 points.
- For each wrong answer, you will be deducted 2 points.
- For each invalid input, you will be deducted 2 points.
-------------------------------------------------
`;
console.log(kuler(MESSAGE, "#facc15"));

let play;

// Start Quizz at least once
do {
  // Start the quiz
  const [name, score, wrongAnswered, correctAnswered] = startQuiz();

  const leaderBoardEntry = {
    name: name,
    score: score,
    wrongAnswered: wrongAnswered,
    correctAnswered: correctAnswered,
  };

  //Print Result
  console.log(`
  -------------------------------------------------
  YOUR RESULT:
  -------------------------------------------------
  Score: ${score}
  Total Questions Attempted: ${correctAnswered + wrongAnswered}
  Correct Answered: ${correctAnswered}
  Wrong Answered: ${wrongAnswered}
  -------------------------------------------------
  `);

  // Check if current score is greater than the highest score
  if (score >= LEADERS_LIST[0].score) {
    console.log(kuler("Horray! You just Beat the High Score!\n", "#16a34a"));
  }

  // Add the entry to the leaderboard
  LEADERS_LIST.push(leaderBoardEntry);
  LEADERS_LIST.sort((a, b) => b.score - a.score);

  printLeaders(LEADERS_LIST);

  fs.writeFileSync("./leaderboard.json", JSON.stringify(LEADERS_LIST));

  // Ask user whether he wants to play again
  let input = readLineSync.question(
    "Enter 1 to play again or any other key to exit: ",
  );
  play = input == "1";
} while (play);

console.log(kuler("Thank you for playing!", "#f472b6"));
