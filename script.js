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
  roundReset();
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
  playAnimations(computerSelection);
}

function roundReset() {
  unFlip('comp-rock-inner');
  unFlip('comp-paper-inner');
  unFlip('comp-scissors-inner');
}

function playAnimations(computerSelection) {
  console.log(computerSelection);
  cardFlip(`comp-${computerSelection.toLowerCase()}-inner`);
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
  //Update text with an array of phrases to cycle through
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
    updateText("You Won the game!", "results");
    gameReset();
  } else if (computerScore === 5) {
    updateText("You Lost the game.", "results");
    gameReset();
  } else {
    //return updateText("Another Round?", "final-result");
  }
}

function gameReset() {
  playerScore = 0;
  compScore = 0;
  updateText("Play Again?", "final-result");
}

function fullReset() {
  playerScore = 0;
  compScore = 0;
  roundReset();
  updateText("", "results");
  updateText("", "final-result");
  updateText(playerScore, "player-score");
  updateText(compScore, "comp-score")
}

function cardFlip(id) {
  document.getElementById(id).classList.add('flip-over-card');
}

function unFlip(id) {
  document.getElementById(id).classList.remove('flip-over-card');
}

//Set up eventListeners
const cards = document.querySelectorAll('.overlay');
cards.forEach( playerCard => {playerCard.addEventListener('click', function(e) {
    if (document.getElementById("final-result").textContent) {
      fullReset();
    } else {
    console.log(e.target);
    console.log(`You Chose ${e.target.parentElement.innerText}`);
    playRound(e.target.parentElement.innerText, computerPlay());
  }});
});

const oppCards = document.querySelectorAll('.comp-card');
oppCards.forEach(oppCard => {
    oppCard.addEventListener('mouseover', function(e) {
      console.log(e.target);
      updateText("Hey, no cheating", "results");
    });
    oppCard.addEventListener('mouseout', function(e) {
      console.log(e.target);
      updateText("", "results");
    });
});

const playAgain = document.getElementById('final-result');
playAgain.addEventListener('click', function(e) {
  console.log(e);
  fullReset();
});
