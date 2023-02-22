'use strict';

const images = document.querySelectorAll('.choices img');
const playerScoreElement = document.querySelector('.player-score div');
const computerScoreElement = document.querySelector('.computer-score div');
const winLoseMsg = document.querySelector('.main-one');
const msg = document.querySelector('.main-two');
const playerImg = document.querySelector('.player-score img');
const computerImg = document.querySelector('.computer-score img');
const endMsg = document.querySelector('.play-again');
const blur = document.querySelectorAll('.end-game');
const btn = document.querySelector('.btn');
const endMsgTxt = document.querySelector('.play-again div');
const rock = document.querySelector('.rock-hover');
const paper = document.querySelector('.paper-hover');
const scissors = document.querySelector('.scissors-hover');
const header = document.querySelector('div.header');
const main = document.querySelector('div.main');
const container = document.querySelector('div.container');
const neon = document.querySelector('h1.neonText');
const body = document.querySelector('body');
const playAgain = document.querySelector('.container h2');

let playerSelection;
let computerSelection;
let round = 1;
let playerScore = 0;
let computerScore = 0;
let result;

function onClick(event) {
  playerSelection = event.target.classList[0];

  game();
  playerScoreElement.innerText = `Player Score: ${playerScore}`;
  computerScoreElement.innerText = `Computer Score: ${computerScore}`;
  playerImg.src = `./images/${playerSelection}-removebg-preview.png`;
  computerImg.src = `./images/${computerSelection}-removebg-preview.png`;
  console.log(playerImg.src);
  if (playerScore === 5) {
    msg.innerText = ``;
    // endMsg.style.display = 'flex';
    blur.forEach(ele => (ele.style.filter = 'blur(5px)'));
    images.forEach(img => img.removeEventListener('click', onClick));
    btn.innerText = 'Play again?';
    endMsgTxt.innerText = 'You won!';
    images.forEach(img => img.classList.remove('hover'));
    header.classList.add('hidden');
    main.classList.add('hidden');
    container.classList.remove('hidden');
    neon.innerText = `You won!`;
    body.classList.add('neon-body');
    neon.classList.add('neon-h1');
  } else if (computerScore === 5) {
    msg.innerText = ``;
    blur.forEach(ele => (ele.style.filter = 'blur(5px)'));
    // endMsg.style.display = 'flex';
    images.forEach(img => img.removeEventListener('click', onClick));
    btn.innerText = 'Play again?';
    endMsgTxt.innerText = 'You lost!';
    images.forEach(img => img.classList.remove('hover'));
    header.classList.add('hidden');
    main.classList.add('hidden');
    container.classList.remove('hidden');
    neon.innerText = `You lost!`;
    body.classList.add('neon-body');
    neon.classList.add('neon-h1');
  }
}

function reset(event) {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.innerText = `Player Score: ${playerScore}`;
  computerScoreElement.innerText = `Computer Score: ${computerScore}`;
  blur.forEach(ele => (ele.style.filter = ''));
  endMsg.style.display = 'none';
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
btn.addEventListener('click', reset);
playAgain.addEventListener('click', reset);

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  let result;

  if (random === 1) {
    result = 'rock';
  }

  if (random === 2) {
    result = 'paper';
  }

  if (random === 3) {
    result = 'scissors';
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

  if (player === 'rock' && computerSelection === 'scissors') {
    result = `win`;
  }

  if (player === 'rock' && computerSelection === 'paper') {
    result = `lose`;
  }

  if (player === 'paper' && computerSelection === 'scissors') {
    result = `lose`;
  }

  if (player === 'paper' && computerSelection === 'rock') {
    result = `win`;
  }

  if (player === 'scissors' && computerSelection === 'rock') {
    result = `lose`;
  }

  if (player === 'scissors' && computerSelection === 'paper') {
    result = `win`;
  }

  if (player === 'scissors' && computerSelection === 'scissors') {
    result = `tie`;
  }

  if (player === 'rock' && computerSelection === 'rock') {
    result = `tie`;
  }

  if (player === 'paper' && computerSelection === 'paper') {
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
