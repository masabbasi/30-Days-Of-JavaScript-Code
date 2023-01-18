const sec = document.querySelector(".sec");
const millisec = document.querySelector(".millisec");
let second = 00;
let millisecond = 00;
let time = true;
let myTimer;

const audioWrong = new Audio("./wrong.mp3");
const audioCorrect = new Audio("./correct.mp3");
const audioSuccess = new Audio("./success.mp3");


const recordTime = document.querySelector(".record__time");
let bestTime = [];
if (JSON.parse(localStorage.getItem("memory-card-record")) == null) {
  bestTime = [];
} else {
  bestTime = JSON.parse(localStorage.getItem("memory-card-record"));
  recordTime.innerText = `${+bestTime[0]}:${+bestTime[1]}`;
}

const again = document.querySelector(".again");

const cards = document.querySelectorAll(".card");
const backs = document.querySelectorAll(".back-face");
const fronts = document.querySelectorAll(".front-face");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let fixCard = 0;

function flipCard() {
  if (time) {
    myTimer = setInterval(update, 10);
    time = false;
  }
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCard() : unflipCards();
}

function disableCard() {
	audioCorrect.play();
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  fixCard += 2;
  if (fixCard === 12) {
		audioSuccess.play();
    clearInterval(myTimer);
    setRecord();
    time = true;
		fixCard = 0;
    again.style.display = "block";
    again.addEventListener("click", () => {
      again.style.display = "none";
      for (let card of cards) {
        card.classList.remove("flip");
        sec.innerText = 00;
        millisec.innerText = 00;
        second = 00;
        millisecond = 00;
        resetBoard();
        shuffle();
        card.addEventListener("click", flipCard);
      }
    });
  }
  resetBoard();
}

function unflipCards() {
	audioWrong.play();
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function shuffle() {
  const randomPosition = [];
  let i = 0;
  while (i < 12) {
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    if (randomPosition.indexOf(randomNumber) === -1) {
      randomPosition.push(randomNumber);
      i++;
    }
  }
  for (let i = 0; i < randomPosition.length; i++) {
    cards[i].style.order = randomPosition[i];
  }
}

function update() {
  millisecond++;
  if (millisecond > 99) {
    second++;
    if (second < 10) {
      second = `0${second}`;
    }
    millisecond = 0;
  }

  if (millisecond < 10) {
    millisecond = `0${millisecond}`;
  }

  sec.innerText = second;
  millisec.innerText = millisecond;
}

function setRecord() {
  if (
    bestTime.length === 0 ||
    second < bestTime[0] ||
    (second == bestTime[0] && millisecond < bestTime[1])
  ) {
    bestTime[0] = second;
    bestTime[1] = millisecond;
  }
  localStorage.setItem("memory-card-record", JSON.stringify(bestTime));
  recordTime.innerText = `${bestTime[0]}:${bestTime[1]}`;
}

shuffle();
cards.forEach((card) => card.addEventListener("click", flipCard));
