const result = document.querySelector(".result");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
let resultValue = 0;

increase.addEventListener("click", function () {
  resultValue = ++resultValue;
  result.innerText = resultValue;
  resultColor();
});

decrease.addEventListener("click", function () {
  resultValue = --resultValue;
  result.innerText = resultValue;
  resultColor();
});

reset.addEventListener("click", function () {
  result.innerText = 0;
	result.style.color = "rgb(255, 255, 255)";
});

function resultColor() {
  if (resultValue == 0) {
    result.style.color = "rgb(255, 255, 255)";
  } else if (resultValue > 0) {
    result.style.color = "rgb(36, 175, 66)";
    console.log("sabz");
  } else {
    result.style.color = "rgb(161, 36, 47)";
  }
}
