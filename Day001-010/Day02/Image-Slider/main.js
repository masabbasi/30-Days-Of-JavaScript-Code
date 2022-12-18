const slider = document.querySelector(".slider");
const sliderBtn = document.querySelector(".slider__bottom");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const sliderItem = document.querySelectorAll(".item");
const sliderAfter = window.getComputedStyle(slider, "::after");
const sliderBefor = window.getComputedStyle(slider, "::before");
let imgNumber = 0;
const imageSrc = ["./1.jpg", "./2.jpg", "./3.jpg"];

sliderItem.forEach(function (item) {
  item.addEventListener("click", function () {
    sliderItem.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    imgNumber = item.dataset.id;
    slider.style.backgroundImage = `url('${imageSrc[imgNumber]}')`;
  });
});

rightBtn.addEventListener("click", function () {
  imgNumber = Number(imgNumber) + 1;
  if (imgNumber == imageSrc.length) {
    imgNumber = 0;
  }
  slider.style.backgroundImage = `url('${imageSrc[imgNumber]}')`;
  sliderItem.forEach((item) => {
    item.classList.remove("active");
  });
  sliderItem.forEach((item) => {
    if (imgNumber == item.dataset.id) {
      item.classList.add("active");
    }
  });
});

leftBtn.addEventListener("click", function () {
  imgNumber = Number(imgNumber) - 1;
  if (imgNumber == -1) {
    imgNumber = imageSrc.length - 1;
  }
  slider.style.backgroundImage = `url('${imageSrc[imgNumber]}')`;
  sliderItem.forEach((item) => {
    item.classList.remove("active");
    if (imgNumber == item.dataset.id) {
      item.classList.add("active");
    }
  });
});
