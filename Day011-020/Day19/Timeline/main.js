const btnPrevious = document.querySelector(".btn__previous");
const btnNext = document.querySelector(".btn__next");
const circles = document.querySelectorAll(".circle");
const timeLine = document.querySelector(".timeline");
let step = 1;

function changeStep() {
  circles.forEach((circle, index) => {
    if (index < step) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

	const actives = document.querySelectorAll(".active");

	timeLine.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;
	
	if (step === 1) {
		btnPrevious.disabled = true;
	} else if (step === circles.length) {
		btnNext.disabled = true;
	} else {
		btnPrevious.disabled = false;
		btnNext.disabled = false;
	}
}

btnNext.addEventListener("click", () => {
  step++;
  if (step > circles.length) {
    step = circles.length;
  }
  changeStep();
});

btnPrevious.addEventListener("click", () => {
  step--;
  if (step < 1) {
    step = 1;
  }
  changeStep();
});

//           ::::::::Another Way:::::::::
//
//
// const btns = document.querySelectorAll(".btn");
// const circles = document.querySelectorAll(".circle");
// const timeLine = document.querySelector(".timeline");
// let timeLineWidth = 0;

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     if (btn.classList.contains("btn__next")) {
//       next();
//     } else {
//       previous();
//     }
//   });
// });

// function next() {
//   switch (timeLineWidth) {
//     case 0: {
//       timeLineWidth = 25;
//       circles[1].style.borderColor = "rgb(49, 226, 49)";
//       break;
//     }
//     case 25: {
//       timeLineWidth = 50;
//       circles[2].style.borderColor = "rgb(49, 226, 49)";
//       break;
//     }
//     case 50: {
//       timeLineWidth = 75;
//       circles[3].style.borderColor = "rgb(49, 226, 49)";
//       break;
//     }
//     case 75: {
//       timeLineWidth = 100;
//       circles[4].style.borderColor = "rgb(49, 226, 49)";
//       break;
//     }
//     case 100: {
//       break;
//     }
//   }
//   timeLine.style.width = `${timeLineWidth}%`;
// }

// function previous() {
//   switch (timeLineWidth) {
//     case 100: {
//       timeLineWidth = 75;
//       circles[4].style.borderColor = "rgb(78, 76, 76)";
//       break;
//     }
//     case 75: {
//       timeLineWidth = 50;
//       circles[3].style.borderColor = "rgb(78, 76, 76)";
//       break;
//     }
//     case 50: {
//       timeLineWidth = 25;
//       circles[2].style.borderColor = "rgb(78, 76, 76)";
//       break;
//     }
//     case 25: {
//       timeLineWidth = 0;
//       circles[1].style.borderColor = "rgb(78, 76, 76)";
//       break;
//     }
//     case 0: {
//       break;
//     }
//   }
//   timeLine.style.width = `${timeLineWidth}%`;
// }
