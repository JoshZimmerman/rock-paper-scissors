console.log("Welcome to my Rock, Paper, Scissors Game");

let playerScore = 0;
let compScore = 0;

//the computer will randomly choose rock, paper, or scissors
function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerChoice, computerSelection){
  if ((playerChoice === "Rock" && computerSelection === "Scissors") 
        || (playerChoice === "Paper" && computerSelection === "Rock") 
        || (playerChoice === "Scissors" && computerSelection === "Paper")) {
      roundWin();
  } else if ((playerChoice === "Scissors" && computerSelection === "Rock")
        || (playerChoice === "Rock" && computerSelection === "Paper")
        || (playerChoice === "Paper" && computerSelection === "Scissors")) {
      roundLose();
  } else if (playerChoice === computerSelection) {
      roundTie();
  } else {
      error()
  }
}

function roundWin() {
  //winnng tasks
  updateText("You won this round!", "results");
  playerScore++;
  document.getElementById("player-score").innerText = playerScore;
  checkVictory(playerScore, compScore);
}

function roundLose() {
  //losing tasks
  updateText("You lost this round.", "results");
  compScore++;
  document.getElementById("comp-score").innerText = compScore;
  checkVictory(playerScore, compScore);
}

function roundTie() {
  //tied round tasks
  updateText("It's a tie.", "results")
}

function error() {
  alert("Something went very wrong. :(");
  fullReset();
}

function updateText(text, id) {
  document.getElementById(id).innerText = text;
}

function checkVictory(playerScore, computerScore) {
  if (playerScore === 5) {
    updateText("You won the game!", "final-result");
    gameReset();
  } else if (computerScore === 5) {
    updateText("You Lost the game, better luck next time.", "final-result");
    gameReset();
  } else {
    return updateText("Another Round?", "final-result");
  }
}

function gameReset() {
  playerScore = 0;
  compScore = 0;
}

function fullReset() {
  playerScore = 0;
  compScore = 0;
  updateText("", "results");
  updateText("", "final-result");
  updateText(playerScore, "player-score");
  updateText(compScore, "comp-score")
}

const cards = document.querySelectorAll('.player-card');
cards.forEach( playerCard => {playerCard.addEventListener('click', function(e) {
  console.log(`You Chose ${e.target.textContent}`);
  playRound(e.target.textContent, computerPlay());
  });
});



//paper > rock
//rock > scissors
//scissors > paper
