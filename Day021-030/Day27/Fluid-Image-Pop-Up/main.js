const images = document.querySelectorAll(".other__img img");
const imgShowBox = document.querySelector(".show__img");
const imgShow = document.querySelector(".show__img img");
 
images.forEach((image)=>{
image.addEventListener("click",()=>{
	imgShowBox.style.opacity="1";
	imgShowBox.style.pointerEvents="all";
	imgShow.src=`${image.src}`;
	imgShow.style.transform= "translate(-50%, -50%) scale(1)";
})
})

imgShowBox.addEventListener("click",(e)=>{
	if (e.target.classList.contains("show__img")) {
		imgShowBox.style.opacity="0";
		imgShowBox.style.pointerEvents="none";
		imgShow.src="";
		imgShow.style.transform= "translate(-50%, -50%) scale(0.4)";
		console.log("hi");
	}
})