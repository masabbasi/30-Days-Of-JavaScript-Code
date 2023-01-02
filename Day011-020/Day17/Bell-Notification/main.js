const btn = document.querySelector(".btn");
const notify__counter = document.querySelector(".notify__counter");
const animation = document.querySelector(".notify img");
let counter = 0;

btn.addEventListener("click", function () {
	if (notify__counter.classList.contains("counter")) {
		animation.classList.add("notify__alert");
    counter++;
    document.querySelector(".counter").innerText = counter;
  } else {
		animation.classList.add("notify__alert");
		notify__counter.classList.toggle("counter");
    counter++;
    document.querySelector(".counter").innerText = counter;
  }
	animation.addEventListener("animationend", () => {
		animation.classList.remove("notify__alert");
	})
});