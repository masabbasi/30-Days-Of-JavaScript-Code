const scrollbar = document.querySelector(".scrollbar");
const container = document.querySelector(".container");
const height = window.document.body.scrollHeight - window.innerHeight;

window.addEventListener("scroll",function(){
	let scrollbarWidth = (window.scrollY/height)*100;
	scrollbar.style.width = `${scrollbarWidth}%`;
})