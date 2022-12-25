const inputs = document.querySelectorAll(".css-controller input");

inputs.forEach((input)=>{
	input.addEventListener("change",change);
	input.addEventListener("mousemove",change)
});

function change(){
	const inputUnit = this.dataset.sizing || ""; // "" for Color!
	document.documentElement.style.setProperty(`--${this.id}`, this.value + inputUnit);
}