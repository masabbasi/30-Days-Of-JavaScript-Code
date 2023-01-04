const btns = document.querySelectorAll(".btn");
const circles = document.querySelectorAll(".circle");
const timeLine = document.querySelector(".timeline");
let timeLineWidth = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("btn__next")) {
      next();
    } else {
      previous();
    }
  });
});

function next() {
  switch (timeLineWidth) {
    case 0: {
      timeLineWidth = 25;
      circles[1].style.borderColor = "rgb(49, 226, 49)";
      break;
    }
    case 25: {
      timeLineWidth = 50;
      circles[2].style.borderColor = "rgb(49, 226, 49)";
      break;
    }
    case 50: {
      timeLineWidth = 75;
      circles[3].style.borderColor = "rgb(49, 226, 49)";
      break;
    }
    case 75: {
      timeLineWidth = 100;
      circles[4].style.borderColor = "rgb(49, 226, 49)";
      break;
    }
    case 100: {
      break;
    }
  }
  timeLine.style.width = `${timeLineWidth}%`;
}

function previous() {
  switch (timeLineWidth) {
    case 100: {
      timeLineWidth = 75;
      circles[4].style.borderColor = "rgb(78, 76, 76)";
      break;
    }
    case 75: {
      timeLineWidth = 50;
      circles[3].style.borderColor = "rgb(78, 76, 76)";
      break;
    }
    case 50: {
      timeLineWidth = 25;
      circles[2].style.borderColor = "rgb(78, 76, 76)";
      break;
    }
    case 25: {
      timeLineWidth = 0;
      circles[1].style.borderColor = "rgb(78, 76, 76)";
      break;
    }
    case 0: {
      break;
    }
  }
  timeLine.style.width = `${timeLineWidth}%`;
}
