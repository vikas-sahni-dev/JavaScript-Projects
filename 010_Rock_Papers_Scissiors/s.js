function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }

};
function resetGame() {
  playerScore=0;
  computerScore=0;
  playerScoreSpanElement.innerText=playerScore
  computerScoreSpanElement.innerText=computerScore

   resetGameBtn.style.display="none"
   optionsContainer.style.display="block"
   winnerMsgElement.innerText=""
   roundResultsMsg.innerText=""
};

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});


// const playerScoreSpanElement = document.getElementById("player-score");
// const computerScoreSpanElement = document.getElementById("computer-score");
// const roundResultsMsg = document.getElementById("results-msg");
// const winnerMsgElement = document.getElementById("winner-msg");
// const optionsContainer = document.querySelector(".options-container");
// const resetGameBtn = document.getElementById("reset-game-btn");
// function getRandomComputerResult() {
//   const options = ["Rock", "Paper", "Scissors"];
//   //here i should not multiply with 3, i should use array.length
//   // return options[Math.floor(Math.random()*3)]
//   const randomIndex = Math.floor(Math.random() * options.length);
//   return options[randomIndex];
// }

// function hasPlayerWonTheRound(player, computer) {
//   if (player === "Rock" && computer === "Scissors") {
//     return true;
//   } else if (player === "Rock" && computer === "Paper") {
//     return false;
//   } else if (player === "Paper" && computer === "Rock") {
//     return true;
//   } else if (player === "Paper" && computer === "Scissors") {
//     return false;
//   } else if (player === "Scissors" && computer === "Rock") {
//     return false;
//   } else if (player === "Scissors" && computer === "Paper") {
//     return true;
//   } else {
//     return false;
//   }
// }

// let playerScore = 0;
// let computerScore = 0;

// function getRoundResults(userOption) {
//   const computerResult = getRandomComputerResult();

//   if (userOption === computerResult) {
//     return "It's a tie! Both chose" + userOption;
//   } else if (hasPlayerWonTheRound(userOption, computerResult)) {
//     ++playerScore;
//     return `Player wins! ${userOption} beats ${computerResult}`;
//   } else {
//     ++computerScore;
//     return `"Computer wins! ${computerResult} beats ${userOption}`;
//   }
// }

// function showResults(userOption) {

//   roundResultsMsg.innerText = getRoundResults(userOption);

//   playerScoreSpanElement.innerText = playerScore;
//   computerScoreSpanElement.innerText = computerScore;
//   if(  playerScore===3 ){
//     winnerMsgElement.innerText="Player has won the game!"
//      resetGameBtn.style.display="block"
//      optionsContainer.style.display="none"
//   }
//   else if(computerScore===3){
//     winnerMsgElement.innerText="Computer has won the game!"
//        resetGameBtn.style.display="block"
//      optionsContainer.style.display="none"
//   }
// }


// function resetGame() {
//   playerScore=0;
//   computerScore=0;
//   playerScoreSpanElement.innerText=playerScore
//   computerScoreSpanElement.innerText=computerScore

//    resetGameBtn.style.display="none"
//    optionsContainer.style.display="block"
//    winnerMsgElement.innerText=""
//    roundResultsMsg.innerText=""
// };