
// User input in Console (installed npm prompt-sync)
const colors = require("colors");

const prompt = require("prompt-sync")();
const hand = prompt("Rock, Paper, or Scissors? ");

const handResult = capitalize(hand);
const playerSelection = handResult

// Variables

let computerSelection = ''
const waitTime = 1000
const empty = "                    "   


// Score counters

let tieCounter = 0
let playerScore = 0
let computerScore = 0

const Winner = {
  Tie: 1,
  Computer: 2,
  Player: 3
}

// Capitalize first letter

function capitalize(){
  const capitalized = hand.charAt(0).toUpperCase() + hand.slice(1);
    return capitalized

}
// Get a random hand for the computer

function getComputerChoice() {
  const num1 = Math.random() * 100

  if (num1 <= 33) {
    return 'Rock'
  }
  if (num1 >= 33 && num1 <= 66) {
    return 'Paper'
  }
  if (num1 > 66) {
    return 'Scissors'
  }
}


// Function for each round of play

function playRound () {
  computerSelection = getComputerChoice()

  if (computerSelection === playerSelection) {
    return Winner.Tie
  }
  if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    return Winner.Computer
  }

  if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    return Winner.Computer
  }

  if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    return Winner.Computer
  } else {
    return Winner.Player
  }
}


function playGame () {
  for (let i = 0; i < 10; i++) {
    const winner = playRound()
    if (winner === Winner.Tie) {
      tieCounter += 1
      console.log(`${empty}     Tie : ${tieCounter}`.cyan)
    }
    if (winner === Winner.Computer) {
      computerScore += 1
      console.log(`Computer Score : ${computerScore}`.magenta)
    }
    if (winner === Winner.Player) {
      playerScore += 1
      console.log(`${empty}${empty}Player Score : ${playerScore}`.green)
    }
  }
}

playGame()

setTimeout (() => {
    console.log( { COMPUER : computerScore, TIE : tieCounter, PLAYER : playerScore } )
    console.log("FINALSCORE FINALSCORE FINALSCORE ".rainbow)
}, waitTime)



