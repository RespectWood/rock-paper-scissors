// Scorecounters for player, computer & tie
const playerScoreEL = document.createElement("p");
playerScoreEL.classList.add("ScoreCounter");

const computerScoreEL = document.createElement("p");
computerScoreEL.classList.add("ScoreCounter");

const tieScoreEL = document.createElement("p");
tieScoreEL.classList.add("ScoreCounter");

// Visual background-circle for Scorecounters
const playerScoreCircle = document.getElementById("PlayerScore");
playerScoreCircle.appendChild(playerScoreEL);

const computerScoreCircle = document.getElementById("ComputerScore");
computerScoreCircle.appendChild(computerScoreEL);

const tieScoreCircle = document.getElementById("Ties");
tieScoreCircle.appendChild(tieScoreEL);

const popUp = document.querySelector(".popUp");
const popupInfo = document.querySelector("#popup-text");

// Score counters
let tieCounter = 0;
let playerScore = 0;
let computerScore = 0;

playerScoreEL.innerText = playerScore;
computerScoreEL.innerText = computerScore;

// Prompt for Player name

// Button for hand selection

const choiceButton = document.querySelectorAll(".selection-button");
choiceButton.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    playRound(e.target.id); // invoke the playround with the selected target as argument (e.target.id)
  });
});

// Prompt & Button for confirm username

const inputField = document.getElementById("user-name");
console.log(inputField);
const NameOK = document.getElementById("nameSubmitbtn");
NameOK.addEventListener("click", () => {
  document.getElementById("playerBoard").innerText = inputField.value;
  document.querySelector(".popUpName").style.display = "none";
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

function resetGame() {
  tiecounter = 0;
  playerScore = 0;
  computerScore = 0;
  playerScoreEL.innerText = playerScore;
  computerScoreEL.innerText = computerScore;
}
// Function for each round of play
function playRound(playerSelection) {
  tieScoreEL.innerText = "";
  const computerSelection = getComputerChoice();
  console.log(`Computer choosed: ${computerSelection}`);
  const tie = computerSelection === playerSelection;
  if (tie) {
    tieCounter += 1;
    tieScoreEL.innerText = "TIE!";
    setTimeout(() => {
      tieScoreEL.innerText = "";
    }, 400);
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

  playerScoreEL.innerText = playerScore;
  computerScoreEL.innerText = computerScore;

  if (playerScore === 1) {
    popUp.style.display = "flex";
    popupInfo.innerText = "You win!";
    setTimeout(() => {
      resetGame();
      popUp.style.display = "none";
    }, 3000);
  }

  if (computerScore === 1) {
    popUp.style.display = "flex";
    popupInfo.innerText = "You Lose";
    setTimeout(() => {
      resetGame();
      popUp.style.display = "none";
    }, 3000);
  }

  console.log({
    PLAYER: playerScore,
    TIE: tieCounter,
    COMPUTER: computerScore,
  });
}
