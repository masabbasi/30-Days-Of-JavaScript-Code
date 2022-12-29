const passwordInput = document.getElementById("password-input");
const generatorBtn = document.querySelector(".generator-btn");
const copyPassword = document.querySelector(".copy-password");
const copyText = document.querySelector(".copyText");


generatorBtn.addEventListener("click",genpass);
copyPassword.addEventListener("click",copypass);


function genpass() {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let passwordLength = 15;
	let password = "";
	for (let i=0;i<passwordLength;i++) {
		let randomNumber = Math.floor(Math.random()*chars.length);
		let randomChar = chars.substring(randomNumber,randomNumber+1);
		password += randomChar;
	}
	passwordInput.value = password;
}

function copypass() {
	if (passwordInput.value!="") {
	// passwordInput.select();
	// document.execCommand("copy");
	navigator.clipboard.writeText(passwordInput.value);
	copyText.style.display="block"
	setTimeout(()=>{
		copyText.style.display="none"
	},700)
	}
}
