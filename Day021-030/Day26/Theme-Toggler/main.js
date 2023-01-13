const circle = document.querySelector(".circle");
const togglerLable = document.querySelector(".toggler__lable");
const box = document.querySelector(".box");

togglerLable.addEventListener("click",function(){
	circle.classList.toggle("night");
	box.classList.toggle("bgblack");
})