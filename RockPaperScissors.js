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

// Button
const choiceButton = document.querySelectorAll(".selection-button");
choiceButton.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // console.log(e.target.id);
    playRound(e.target.id);
  });
});

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

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  console.log(`Computer choosed: ${computerSelection}`);

  if (computerSelection === playerSelection) {
    tieCounter += 1;
  }
  if (computerSelection === "Rock" && playerSelection === "Scissors") {
    computerScore += 1;
  }

  if (computerSelection === "Paper" && playerSelection === "Rock") {
    computerScore += 1;
  }

  if (computerSelection === "Scissors" && playerSelection === "Paper") {
    computerScore += 1;
  } else {
    playerScore += 1;
  }
  console.log({
    COMPUTER: computerScore,
    TIE: tieCounter,
    PLAYER: playerScore,
  });
}
