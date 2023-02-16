"use strict";

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  let result;

  if (random === 1) {
    result = "rock";
  }

  if (random === 2) {
    result = "paper";
  }

  if (random === 3) {
    result = "scissors";
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  let result;

  if (player === "rock" && computerSelection === "scissors") {
    result = "You win! Rock beats scissors!";
  }

  if (player === "rock" && computerSelection === "paper") {
    result = "You lose! Paper beats rock!";
  }

  if (player === "paper" && computerSelection === "scissors") {
    result = "You lose! Paper beats scissors!";
  }

  if (player === "paper" && computerSelection === "rock") {
    result = "You win! Paper beats rock!";
  }

  if (player === "scissors" && computerSelection === "rock") {
    result = "You lose! Rock beats scissors!";
  }

  if (player === "scissors" && computerSelection === "paper") {
    result = "You win! Scissors beats paper!";
  }

  if (player === "scissors" && computerSelection === "scissors") {
    result = "Scissors ties scissors.";
  }

  if (player === "rock" && computerSelection === "rock") {
    result = "Rock ties rock.";
  }

  if (player === "paper" && computerSelection === "paper") {
    result = "Paper ties paper.";
  }

  return result;
}

function game() {
  let round = 1;
  let playerScore = 0;
  let computerScore = 0;

  while (round <= 5) {
    let result = playRound(playerSelection, getComputerChoice());

    if (result.includes("ties")) {
      console.log(`
 Round number ${round} of 5: ${result}
    
        Player Score = ${playerScore}
        Computer Score = ${computerScore}
            `);
    }

    if (result.includes("win")) {
      playerScore++;

      console.log(`Round number ${round} of 5: ${result}
    
        Player Score = ${playerScore}
        Computer Score = ${computerScore}`);
    } else {
      computerScore++;

      console.log(`Round number ${round} of 5: ${result}
    
        Player Score = ${playerScore}
        Computer Score = ${computerScore}`);
    }

    round++;
  }

  console.log(
    playerScore > computerScore
      ? "You have defeated the computer. Congratulations."
      : computerScore === playerScore
      ? "Tie game."
      : "You lose. Train harder."
  );
}
const playerSelection = prompt();
const computerSelection = getComputerChoice(
  "Please enter rock, paper, or scissors."
);
// console.log(playRound(playerSelection, computerSelection));
game();
