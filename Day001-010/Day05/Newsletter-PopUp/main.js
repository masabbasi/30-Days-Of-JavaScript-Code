const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const close = document.querySelector(".close");
const submit = document.querySelector("#submit");
const email = document.querySelector("#email");



btn.addEventListener("click",function(){
	box.style.top="50%";
})

close.addEventListener("click",function(){
	box.style.top="-50%";
})

submit.addEventListener("click",function(){
	if (email.value!=="" && email.value!=" ") {
		box.style.top="-50%";
	}
})