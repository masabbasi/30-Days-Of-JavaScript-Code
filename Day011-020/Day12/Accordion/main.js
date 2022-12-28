const oC = document.querySelectorAll(".accordion__oc");
const accordionHead = document.querySelectorAll(".accordion__head");
const accordionBody = document.querySelectorAll(".accordion__body");

for (let i = 0; i < accordionHead.length; i++) {
  accordionHead[i].addEventListener("click", function () {
    oC[i].classList.toggle("accordion__plus");
    accordionBody[i].classList.toggle("accordion__body--open");
  });
}
