const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const close = document.querySelector(".close");
const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
let emailList = [];


btn.addEventListener("click",function(){
	box.style.top="50%";
})

close.addEventListener("click",function(){
	box.style.top="-50%";
})

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("click",function(e){
	e.preventDefault();
	let emailValue = email.value;
	if (emailRegEx.test(emailValue)) {
		emailList.push(emailValue);
		email.value = "";
		box.style.top="-50%";
	}
	console.log(emailList);
})