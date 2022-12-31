const characters = document.getElementById("characters");
const charactersInput = document.getElementById("characters__input");
const match = document.querySelector(".match");
const btn = document.querySelectorAll(".btn");
const chars = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let captcha = ""

function setCaptcha () {
	let captchaLength=6;
	for (let i=0;i<captchaLength;i++) {
		let random = Math.floor(Math.random()*chars.length);
		captcha+=chars.substring(random,random+1);
		characters.value=captcha;
	}
}

setCaptcha ();

btn.forEach(function(item){
	item.addEventListener("click",function(){
		if (item.classList.contains("btn__refresh")) {
			captcha = "";
			match.innerText = "";
			charactersInput.value="";
			setCaptcha ();
		}
		if (item.classList.contains("btn__go")) {
			if (charactersInput.value === "") {
				match.innerText = "Type Captcha..."
				match.style.color="rgba(255, 145, 0, 0.63)"
			} else if (characters.value === charactersInput.value) {
				match.innerText = "Matched"
				match.style.color="rgba(72, 255, 0, 0.63)"
			} else {
				match.innerText = "Not Matched"
				match.style.color="rgba(255, 145, 0, 0.63)"
			}
		}
	})
})