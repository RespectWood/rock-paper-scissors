// Variables

const playerSelection = 'Paper'
let computerSelection = ''

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

function getComputerChoice () {
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

function playGame () {
  for (let i = 0; i < 10; i++) {
    const winner = playRound()
    if (winner === Winner.Tie) {
      tieCounter += 1
      console.log(`Total Ties are ${tieCounter}`)
    }
    if (winner === Winner.Computer) {
      computerScore += 1
      console.log(`Total computerscore are ${computerScore}`)
    }
    if (winner === Winner.Player) {
      playerScore += 1
    }
  }
}

playGame()
console.log({ tieCounter, computerScore, playerScore })

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
