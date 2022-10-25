// User input in Console (npm prompt-sync)

// const prompt = require("prompt-sync")();

// Variables

const waitTime = 1000;

const empty = " ";

// Score counters

let tieCounter = 0;
let playerScore = 0;
let computerScore = 0;

const Winner = {
  Tie: 1,
  Computer: 2,
  Player: 3,
};

// Capitalize first letter
// capitalize = (s) => {
//   return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
// };

function getUserChoice() {
  const availableHands = ["Rock", "Paper", "Scissors"];
  let isChoiceAllowed = false;
  while (!isChoiceAllowed) {
    let userChoice = prompt("please choose your hand : ");
    // userChoice = capitalize(userChoice);

    if (availableHands.includes(userChoice)) {
      return userChoice;
    }
  }
}

// Button

function buttonchoice() {
  let choiceButton = document.getElementById("buttons");

  choiceButton.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      console.log(buttons.id);
    });
  });
}
// Get a random hand for the computer - switch instead of if?

function getComputerChoice() {
  const num1 = Math.random() * 100;

  if (num1 <= 33) {
    return "Rock";
  }
  if (num1 >= 33 && num1 <= 66) {
    return "Paper";
  }
  if (num1 > 66) {
    return "Scissors";
  }
}

// Function for each round of play

function playRound() {
  const playerSelection = getUserChoice();
  const computerSelection = getComputerChoice();
  console.log(`Computer choosed: ${computerSelection}`);

  if (computerSelection === playerSelection) {
    return Winner.Tie;
  }
  if (computerSelection === "Rock" && playerSelection === "Scissors") {
    return Winner.Computer;
  }

  if (computerSelection === "Paper" && playerSelection === "Rock") {
    return Winner.Computer;
  }

  if (computerSelection === "Scissors" && playerSelection === "Paper") {
    return Winner.Computer;
  } else {
    return Winner.Player;
  }
}

// colored text in console
// const colors = require("colors");

function playGame() {
  for (let i = 0; i < 1; i++) {
    const winner = playRound();
    if (winner === Winner.Tie) {
      tieCounter += 1;
      console.log(`${empty.repeat(25)}Tie : ${tieCounter}`);
    }
    if (winner === Winner.Computer) {
      computerScore += 1;
      console.log(`${empty.repeat(20)}Computer Score : ${computerScore}`);
    }
    if (winner === Winner.Player) {
      playerScore += 1;
      console.log(`${empty.repeat(20)}Player Score : ${playerScore}`);
    }
  }
}

playGame();

console.log("Calculating Scoresheet.....\n\n");

setTimeout(() => {
  console.log(" FINALSCORE FINALSCORE FINALSCORE  ");
  console.log({
    COMPUTER: computerScore,
    TIE: tieCounter,
    PLAYER: playerScore,
  });
}, waitTime);
