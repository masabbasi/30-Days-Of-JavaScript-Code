// get Element Height
const oC = document.querySelectorAll(".accordion__oc"); //oc : open close
const accordionHead = document.querySelectorAll(".accordion__head");
const accordionBody = document.querySelectorAll(".accordion__body");
const allHeight = [];

accordionBody.forEach(function (item) {
  allHeight.push(item.offsetHeight);
  item.style.height = "0px";
});

accordionHead.forEach((headItem, headIndex) => {
  headItem.addEventListener("click", () => {
    accordionBody.forEach((bodyItem, bodyIndex) => {
      if (headIndex === bodyIndex) {
        if (bodyItem.style.height == "0px") {
          bodyItem.style.height = `${allHeight[bodyIndex]}px`;
        } else {
          bodyItem.style.height = "0px";
        }
        oC[headIndex].classList.toggle("accordion__plus");
      }
    });
  });
});

// Set max-height
// const oC = document.querySelectorAll(".accordion__oc");
// const accordionHead = document.querySelectorAll(".accordion__head");
// const accordionBody = document.querySelectorAll(".accordion__body");

// accordionHead.forEach((headItem, headIndex) => {
//   headItem.addEventListener("click", () => {
//     accordionBody.forEach((bodyItem, bodyIndex) => {
//       if (headIndex === bodyIndex) {
//         bodyItem.classList.toggle("accordion__body--open");
//         oC[headIndex].classList.toggle("accordion__plus");
//       }
//     });
//   });
// });

// another
// const oC = document.querySelectorAll(".accordion__oc");
// const accordionHead = document.querySelectorAll(".accordion__head");
// const accordionBody = document.querySelectorAll(".accordion__body");

// for (let i = 0; i < accordionHead.length; i++) {
//   accordionHead[i].addEventListener("click", function () {
//     oC[i].classList.toggle("accordion__plus");
//     accordionBody[i].classList.toggle("accordion__body--open");
//   });
// }
