const computerPlay = () => {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelectionCaps, computerSelection) => {
  let playerSelection = playerSelectionCaps.toLowerCase();
  let result = "";

  if (playerSelection === computerSelection) {
    return 2; // 2 means Draw
  }

  if (playerSelection == "rock") {
    result = computerSelection === "paper" ? 0 : 1;
    return result;
  }

  if (playerSelection == "paper") {
    result = computerSelection === "scissors" ? 0 : 1;
    return result;
  }

  if (playerSelection == "scissors") {
    result = computerSelection === "rock" ? 0 : 1;
    return result;
  }
};

const game = (usrInput) => {
  let computerInput = computerPlay();
  return playRound(usrInput, computerInput);
};

let score = [0, 0, 0];

const updateScores = () => {
  document.querySelector(
    ".computer-score"
  ).textContent = `Computer Score: ${score[0]}`;
  document.querySelector(
    ".player-score"
  ).textContent = `Player Score: ${score[1]}`;
  document.querySelector(".draws").textContent = `Draws: ${score[2]}`;
};

const buttons = document.querySelector(".buttons");

const buttonList = buttons.childNodes;

const buttonToggle = (buttonState) => {
  buttonList.forEach((btn) => {
    btn.disabled = buttonState;
  });
};

const winnerDiv = document.querySelector(".winner");

buttons.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    console.log("here");
    let result = game(e.target.className);
    score[result]++;

    updateScores();

    if (score[result] >= 5 && result != 2) {
      winnerDiv.textContent = result == 0 ? `Computer Wins!` : "You Win!";
      buttonToggle(true);
      return;
    }
  }
});

const reset = () => {
  winnerDiv.textContent = "";
  score = [0, 0, 0];

  updateScores();
  buttonToggle(false);
};

document.querySelector(".reset").addEventListener("click", reset);
