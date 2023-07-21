const hands = ["rock", "paper", "scissors"];
const yourHandsElts = document.querySelectorAll(".hands__img");
const messageStart = document.querySelector(".message__start");
const messageEnd = document.querySelector(".message__end");
const message = document.querySelector(".message");
const yourScore = document.querySelector(".scores__player-value");
const computerScore = document.querySelector(".scores__computer-value");
const messageRunAnimation = document.querySelector(".message--run-animation");
let yourScoreValue = 0;
let computerScoreValue = 0;

// function return an random element in hands
const playComputerGame = () => {
  return hands[Math.floor(Math.random() * 3)];
};

const handleAnimateClass = () => {
  message.classList.add("animate");
  setTimeout(function () {
    message.classList.remove("animate");
  }, 200);
};

// Function analyzeGame return the game result
const analyzeGame = (yourHand, computerHand) => {
  let gameResults = [];
  switch (yourHand) {
    case computerHand:
      gameResults = ["It's a Draw, Computer plays", computerHand];
      break;
    case "rock":
      if (computerHand === "paper") {
        gameResults = ["You Lose, Computer plays", computerHand];
      } else {
        gameResults = ["You Win, Computer plays", computerHand];
      }
      break;
    case "paper":
      if (computerHand === "rock") {
        gameResults = ["You Win, Computer plays", computerHand];
      } else {
        gameResults = ["You Lose, Computer plays", computerHand];
      }
      break;
    case "scissors":
      if (computerHand === "rock") {
        gameResults = ["You Lose, Computer plays", computerHand];
      } else {
        gameResults = ["You Win, Computer plays", computerHand];
      }
      break;
  }
  return gameResults;
};

// Game Play eventListener
yourHandsElts.forEach((yourHandElt) => {
  yourHandElt.addEventListener("click", (e) => {
    // e.preventDefault;
    const computerHand = playComputerGame();
    const yourHand = yourHandElt.dataset.hand;
    const gameResult = analyzeGame(yourHand, computerHand);
    messageStart.textContent = gameResult[0];
    messageEnd.textContent =
    " " + gameResult[1].charAt(0).toUpperCase() + gameResult[1].slice(1);

    // On Win
    if (gameResult[0].toString().includes("Win")) {
      yourScore.textContent = yourScoreValue;
      message.style.color = "#8ac926";
      yourScoreValue++;
      handleAnimateClass();
      
      // On lose
    } else if (gameResult[0].toString().includes("Lose")) {
      yourScore.textContent = yourScoreValue;
      message.style.color = "#e76f51";
      computerScore.textContent = computerScoreValue;
      computerScoreValue++;
      handleAnimateClass();

      // On draw
    } else {
      yourScore.textContent = yourScoreValue;
      message.style.color = "#212529";
      handleAnimateClass();
    }
  });
});
