
const gameBox = document.getElementById("gameBox");
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resetButton = document.getElementById("resetButton");
const messageElement = document.getElementById("message");
const attemptsElement = document.getElementById("attempts");
const helpButton = document.getElementById("helpButton");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

function createSecretNumber() {
  
  return Math.floor(Math.random() * 10) + 1;
}

let secretNumber = createSecretNumber();
let attempts = 5;

function showMessage(message) {
  messageElement.textContent = message;
}


function checkGuess() {

  if (checkButton.disabled) {
    return;
  }

  if (guessInput.value === "") {
    showMessage("Enter a number");
    return;
  }

  const guess = Number(guessInput.value);


  if (guess < 1 || guess > 10) {
    showMessage("Choose a number from 1 to 10");
    return;
  }


  if (guess === secretNumber) {
    showMessage("congralation");
    gameBox.classList.add("win");
    checkButton.disabled = true;
    return;
  }


  attempts = attempts - 1;
  attemptsElement.textContent = attempts;

  if (attempts === 0) {
    showMessage("nice try");
    gameBox.classList.add("lose");
    checkButton.disabled = true;
  } else if (guess > secretNumber) {
    showMessage("Too high");
  } else {
    showMessage("Too low");
  }
}

function resetGame() {
  attempts = 5;
  attemptsElement.textContent = attempts;
  guessInput.value = "";
  showMessage("Good luck!");
  checkButton.disabled = false;
  gameBox.classList.remove("win");
  gameBox.classList.remove("lose");
  secretNumber = createSecretNumber(); 
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

resetButton.addEventListener("click", resetGame);
helpButton.addEventListener("click", openModal);
checkButton.addEventListener("click", checkGuess);
overlay.addEventListener("click", closeModal);
closeButton.addEventListener("click", closeModal);

