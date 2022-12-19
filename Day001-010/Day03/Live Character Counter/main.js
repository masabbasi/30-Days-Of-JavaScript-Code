const textArea = document.querySelector("textarea");
const counterNumber = document.querySelector(".counter-number");

textArea.addEventListener("keyup",function(){
	let conuter = textArea.value.length;
	counterNumber.innerText= `${conuter}`;
});