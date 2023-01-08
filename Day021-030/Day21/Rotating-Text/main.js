//			Code By: MohammedHamzaMalik
var words = document.getElementsByClassName("words");
var array = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (let i = 0; i < words.length; i++) {
  eachLetter(words[i]);
}

function eachLetter(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];

  for (let i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  array.push(letters);
}

function wordIsChanging() {
  var currentWd = array[currentWord];
  var newWd =
    currentWord == words.length - 1 ? array[0] : array[currentWord + 1];
  for (let i = 0; i < currentWd.length; i++) {
    animateOut(currentWd, i);
  }
  for (let i = 0; i < newWd.length; i++) {
    newWd[i].className = "letter behind";
    newWd[0].parentElement.style.opacity = 1;
    animateIn(newWd, i);
  }
  currentWord = currentWord == array.length - 1 ? 0 : currentWord + 1;
}

function animateOut(currentWd, i) {
  setTimeout(() => {
    currentWd[i].className = "letter out";
  }, i * 80);
}
function animateIn(newWd, i) {
  setTimeout(() => {
    newWd[i].className = "letter in";
  }, 340 + i * 80);
}

wordIsChanging();
setInterval(wordIsChanging, 2000);

//			Code By: Me

//			Change Word (Simple)
// const words = document.querySelectorAll(".words");
// let count = 0;
// setInterval(change,2000);
// function change(){
// 	words.forEach(function(word){
// 		word.style.opacity="0";
// 	})
// 	words[count].style.opacity="1";
// 	count++;
// 	if (count > words.length-1) {
// 		count = 0;
// 	}
// }

//			Writing Letters (Simple)
// const words = document.querySelectorAll(".words");
// let index = 0;
// setInterval(write,150);
// function write(){
// 	let word = "beautiful.";
// 	words[0].innerHTML = word.slice(0,index);
// 	index++;
// 	if (index>word.length) {
// 		index=0;
// 	}
// }
