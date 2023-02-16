"use strict";

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  let result;

  if (random === 1) {
    result = "Rock";
  }

  if (random === 2) {
    result = "Paper";
  }

  if (random === 3) {
    result = "Scissors";
  }
  console.log(result);
  return result;
}

getComputerChoice();
