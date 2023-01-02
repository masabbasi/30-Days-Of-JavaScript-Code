const btn = document.querySelector(".btn");
const notify__counter = document.querySelector(".notify__counter");
let counter = 0;

btn.addEventListener("click",function(){
	if (notify__counter.classList.contains("counter")) {
		counter++
		document.querySelector(".counter").innerText = counter;
	} else {
		notify__counter.classList.toggle("counter");
		counter++
		document.querySelector(".counter").innerText = counter;
	}
})