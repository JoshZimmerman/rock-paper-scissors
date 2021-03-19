console.log("Welcome to my Rock, Paper, Scissors Game");

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
      return `You Win! ${playerChoice} beats ${computerSelection}`;
  } else if ((playerChoice === "Scissors" && computerSelection === "Rock")
        || (playerChoice === "Rock" && computerSelection === "Paper")
        || (playerChoice === "Paper" && computerSelection === "Scissors")) {
      return `You Lose. ${computerSelection} beats ${playerChoice}`;
  } else if (playerChoice === computerSelection) {
      return "It's a Tie.";
  } else {
      return "Something went very wrong. :(";
  }
}

function capitalizeString(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++){
    let playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissors'");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.charAt(4) === 'W') {
      playerScore += 1;
    } else if (result.charAt(4) === 'L') {
      computerScore += 1;
    } else {}
    console.log(`Score: Player-${playerScore} to Computer-${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("You Won the Game!");
  } else if (computerScore > playerScore){
    console.log("You Lost the Game.");
  } else {
    console.log("The Game ended in a draw.");
  }
}

const rockBtn = document.querySelector('#pc-rock');
rockBtn.addEventListener('click', () => {
  console.log("You Chose Rock");
  console.log(playRound("Rock", computerPlay()));
});

const paperBtn = document.querySelector('#pc-paper');
paperBtn.addEventListener('click', () => {
  console.log("You Chose Paper");
  console.log(playRound("Paper", computerPlay()));
});

const scissorsBtn = document.querySelector('#pc-scissors');
scissorsBtn.addEventListener('click', () => {
  console.log("You Chose Scissors");
  console.log(playRound("Scissors", computerPlay()));
});

//paper > rock
//rock > scissors
//scissors > paper
