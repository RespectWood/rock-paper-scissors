
// User input in Console (npm prompt-sync)

const prompt = require("prompt-sync")();

// Capitalize first letter

capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}


const hand = getUserChoice()
const playerSelection = hand



function getUserChoice(){
  const availableHands = ["Rock", "Paper", "Scissors"];
  let isChoiceAllowed = false

    while (!isChoiceAllowed){
      let userChoice = prompt("please choose your hand : ")
          userChoice = capitalize(userChoice)
      
        if (availableHands.includes(userChoice)){
        return userChoice
        }
    }

}


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

// colored text in console 
const colors = require("colors");

function playGame () {
  for (let i = 0; i < 10; i++) {
    // setTimeout (() => {
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
  // }, waitTime)
}
}

playGame()

console.log("Calculating Scoresheet.....\n\n")

setTimeout (() => {
  console.log("FINALSCORE FINALSCORE FINALSCORE FINALSCORE FINALSCORE ".rainbow)
  console.log( { COMPUTER : computerScore, TIE : tieCounter, PLAYER : playerScore } )

}, waitTime)


