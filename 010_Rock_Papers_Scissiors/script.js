const resultMsg = document.querySelector("#results-msg");
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const winnerMsg = document.querySelector("#winner-msg");
const playAgainButton = document.querySelector("#reset-game-btn");
const userOptions = document.querySelectorAll(".btn-container .btn");
const optionsContainer=document.querySelector(".options-container")
const computerOptions = ["Rock", "Paper", "Scissors"];

function checkResult(userMove) {
  const computerMove = computerOptions[Math.floor(Math.random() * 3)];
  console.log("userMove," + userMove);
  console.log("computerMove," + computerMove);

  let playerScore = Number(playerScoreElement.innerText);
  let computerScore = Number(computerScoreElement.innerText);

  if (userMove === "Rock" && computerMove === "Scissors") {
    resultMsg.innerText = `Player wins! Rock beats scissors`;
    playerScoreElement.innerText = `${++playerScore}`;
  } else if (userMove === "Rock" && computerMove === "Paper") {
    resultMsg.innerText = `Computer wins! Paper beats Rock`;
    computerScoreElement.innerText = `${++computerScore}`;
  } else if (userMove === "Paper" && computerMove === "Rock") {
    resultMsg.innerText = `Player wins! Paper  beats Rock`;
    playerScoreElement.innerText = `${++playerScore}`;
  } else if (userMove === "Paper" && computerMove === "Scissors") {
    resultMsg.innerText = `Computer wins! scissors beats Paper`;
    computerScoreElement.innerText = `${++computerScore}`;
  } else if (userMove === "Scissors" && computerMove === "Rock") {
    resultMsg.innerText = `Computer wins! Rock beats scissors`;
    computerScoreElement.innerText = `${++computerScore}`;
  } else if (userMove === "Scissors" && computerMove === "Paper") {
    resultMsg.innerText = `Player wins! scissors beats Paper`;
    playerScoreElement.innerText = `${++playerScore}`;
  } else {
    resultMsg.innerText = `It's a tie! Both chose ${userMove}`;
  }

  console.log(computerScoreElement.innerText);
  console.log(typeof computerScoreElement.innerText);

  if (computerScore === 3 || playerScore === 3) {
    winnerMsg.innerText =
      computerScore === 3
        ? "Computer has won the game!"
        : "Player has won the game!";
    playAgainButton.classList.add("show");
    optionsContainer.classList.add("hide")

  }
}
for (const userOption of userOptions) {
  userOption.addEventListener("click", () => {
    checkResult(userOption.innerText);
  });
}

playAgainButton.addEventListener("click", () => {
  playAgainButton.classList.remove("show");
  optionsContainer.classList.remove("hide")

  playerScoreElement.innerText = 0;
  computerScoreElement.innerText = 0;
  winnerMsg.innerText = "";
  resultMsg.innerText = "";
});
