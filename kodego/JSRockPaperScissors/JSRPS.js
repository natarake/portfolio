const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper");
const Scissors = document.getElementById("scissors");
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const result_div = document.getElementById("hands");
const matchHistory_div = document.getElementById("resultContainer");

let playerScore = 0;
let computerScore = 0;

const randomSelection = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let computerOption = Math.floor(Math.random() * 3);
  return options[computerOption];
};

const playGame = () => {
  Rock.addEventListener("click", () => {
    selection("Rock");
  });

  Paper.addEventListener("click", () => {
    selection("Paper");
  });

  Scissors.addEventListener("click", () => {
    selection("Scissors");
  });
};
playGame();

const declareWinner = () => {
  if (playerScore >= 10) {
    alert("Congatulations! You Won the game!");
    setTimeout(function () {
      location.reload();
    }, 2000);
  } else if (computerScore >= 10) {
    alert("You Lost the game! Try again!");
    setTimeout(function () {
      location.reload();
    }, 700);
  }
};

const selection = (playerSelection) => {
  console.log({ playerSelection });

  const computerSelection = randomSelection();
  console.log({ computerSelection });

  switch (playerSelection + computerSelection) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      userWins(playerSelection, computerSelection);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      userLosses(playerSelection, computerSelection);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      userDraws(playerSelection, computerSelection);
    default:
      break;
  }

  addMatchHistory(playerSelection, computerSelection);
  declareWinner();
};

const userWins = (playerSelection, computerSelection) => {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  result_div.innerHTML = `👱 ${playerSelection} VS 🤖 ${computerSelection}`;
  result.innerText = `You Win! 🔥`;
};

const userLosses = (playerSelection, computerSelection) => {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `👱 ${playerSelection} VS 🤖 ${computerSelection}`;
  result.innerText = `You Lost! 🥹`;
};

const userDraws = (playerSelection, computerSelection) => {
  playerScore += 0.5;
  computerScore += 0.5;
  playerScore_span.innerHTML = playerScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `👱 ${playerSelection} VS 🤖 ${computerSelection}`;
  result.innerText = `It's a Draw!`;
};

const addMatchHistory = (playerSelection, computerSelection) => {
  const table = document.getElementById("myTable");
  const row = table.insertRow(1);
  const cellOne = row.insertCell();
  const cellTwo = row.insertCell();
  const cellThree = row.insertCell();
  const winnerMessage = document.getElementById("result").innerText;
  cellOne.innerHTML = `👱 ${playerSelection}`;
  cellTwo.innerHTML = `🤖 ${computerSelection}`;
  cellThree.innerHTML = "Winner";
  cellThree.innerHTML = `${winnerMessage}`;
};

const endGame = () => {
  location.reload();
  // result_div.innerHTML = "";
  // hands.innerText = "";
  // result.innerText = "";
  // playerScore_span.innerText = 0;
  // computerScore_span.innerText = 0;
  // playerScore = 0;
  // computerScore = 0;
  // table.innerHTML = "";
};

let endGameButton = document.getElementById("endGameButton");
endGameButton.onclick = () => endGame();

// Problems
// 1 add set time out for each selection to avoid spam click
// 2 (also with CSS animations?)
// 3 conditional rendering in HTML?
