const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const choices = ["rock", "paper", "scissors"];
const results = ["you win!", "you lost!", "it´s a draw!"];
let userChoice;
let computerChoice;
let result;
computerPoints = 0;
userPoints = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    setResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length); // or * 3
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
  //console.log(randomNumber)
  //console.log(computerChoice);
}

function setResult(){
    numberResult = getResult();
    if(numberResult == 0) userPoints +=1;
    if(numberResult == 1) computerPoints +=1;
    result =  results[numberResult];
    console.log(result);
    resultDisplay.innerHTML = result;
}

function getResult() {
  if (userChoice === computerChoice) {
    return 2;
  } else {
    switch (userChoice) {
      case "rock":
        if (computerChoice === "paper") return 1;
        if (computerChoice === "scissors") return 0;
        break;
      case "paper":
        if (computerChoice === "rock") return 0;
        if (computerChoice === "scissors") return 1;
        break;
      case "scissors":
        if (computerChoice === "paper") return 0;
        if (computerChoice === "rock") return 1;
        break;
    }
  }
}
