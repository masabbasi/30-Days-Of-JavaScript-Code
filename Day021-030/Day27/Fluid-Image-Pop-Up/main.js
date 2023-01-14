const images = document.querySelectorAll(".other__img img");
const imgShowBox = document.querySelector(".show__img");
const imgShow = document.querySelector(".show__img img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    imgShowBox.classList.add("active");
    imgShow.src = `${image.src}`;
  });
});

imgShowBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
		console.log("contains");
    imgShowBox.classList.remove("active");
    imgShow.src = "";
  }
});
