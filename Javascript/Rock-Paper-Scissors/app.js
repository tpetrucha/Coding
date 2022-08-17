const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const choices = ['rock','paper','scissors'];
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
  })
);

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)   // or * 3
    computerChoice = choices[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
    //console.log(randomNumber)
    //console.log(computerChoice);
}

function getResult(){
    
}
