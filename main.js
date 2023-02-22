'use strict';

const images = document.querySelectorAll('.choices img');
const playerScoreElement = document.querySelector('.player-score div');
const computerScoreElement = document.querySelector('.computer-score div');
const winLoseMsg = document.querySelector('.main-one');
const msg = document.querySelector('.main-two');
const playerImg = document.querySelector('.player-score img');
const computerImg = document.querySelector('.computer-score img');
const header = document.querySelector('div.header');
const main = document.querySelector('div.main');
const container = document.querySelector('div.container');
const neon = document.querySelector('h1.neonText');
const body = document.querySelector('body');
const playAgain = document.querySelector('.container h2');

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let result;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  let computerChoice;

  if (random === 1) {
    computerChoice = 'rock';
  }

  if (random === 2) {
    computerChoice = 'paper';
  }

  if (random === 3) {
    computerChoice = 'scissors';
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = `win`;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = `lose`;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result = `lose`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = `win`;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = `lose`;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = `win`;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    result = `tie`;
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
    result = `tie`;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    result = `tie`;
  }

  return result;
}

function game() {
  computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  if (result === 'tie') {
    winLoseMsg.innerText = `Tie!`;
    msg.innerText = `${playerSelection} ties ${computerSelection}`;
  } else if (result === 'win') {
    playerScore++;
    winLoseMsg.innerText = `You won!`;
    msg.innerText = `${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    winLoseMsg.innerText = `You lost!`;
    msg.innerText = `${computerSelection} beats ${playerSelection}`;
  }
  return result;
}

function onClick(event) {
  playerSelection = event.target.classList[0];
  game();
  playerScoreElement.innerText = `Player Score: ${playerScore}`;
  computerScoreElement.innerText = `Computer Score: ${computerScore}`;
  playerImg.src = `./images/${playerSelection}-removebg-preview.png`;
  computerImg.src = `./images/${computerSelection}-removebg-preview.png`;

  if (playerScore === 5 || computerScore === 5) {
    gameOver();
  }
}

function gameOver() {
  images.forEach(img => img.removeEventListener('click', onClick));
  images.forEach(img => img.classList.remove('hover'));
  header.classList.add('hidden');
  main.classList.add('hidden');
  container.classList.remove('hidden');
  neon.innerText = `You ${playerScore === 5 ? 'won' : 'lost'}!`;
  body.classList.add('neon-body');
  neon.classList.add('neon-h1');
}

function reset(event) {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.innerText = `Player Score: ${playerScore}`;
  computerScoreElement.innerText = `Computer Score: ${computerScore}`;
  msg.innerText = `First Score to 5 Wins`;
  winLoseMsg.innerText = `Choose Carefully...`;
  images.forEach(img => img.addEventListener('click', onClick));
  images.forEach(img => img.classList.add('hover'));
  body.classList.remove('neon-body');
  container.classList.add('hidden');
  header.classList.remove('hidden');
  main.classList.remove('hidden');
  playerImg.src = './images/neon-questionmark3-removebg-preview.png';
  computerImg.src = './images/neon-questionmark3-removebg-preview.png';
}

images.forEach(img => img.addEventListener('click', onClick));
playAgain.addEventListener('click', reset);
