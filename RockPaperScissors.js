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
    playRound(e.target.id); // invoke the playround with the selected target as argument (e.target.id)
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
  const tie = computerSelection === playerSelection;
  if (tie) {
    tieCounter += 1;
  }
  // prettier-ignore
  const isComputerWinning 
      =  computerSelection === "Rock"     && playerSelection === "Scissors" 
      || computerSelection === "Paper"    && playerSelection === "Rock" 
      || computerSelection === "Scissors" && playerSelection === "Paper"

  if (isComputerWinning) {
    computerScore += 1;
  }
  // prettier-ignore
  const isPlayerWinning 
          =  playerSelection === "Rock"     && computerSelection === "Scissors" 
          || playerSelection === "Paper"    && computerSelection === "Rock" 
          || playerSelection === "Scissors" && computerSelection === "Paper"
  if (isPlayerWinning) {
    playerScore += 1;
  }

  console.log({
    COMPUTER: computerScore,
    TIE: tieCounter,
    PLAYER: playerScore,
  });
}
