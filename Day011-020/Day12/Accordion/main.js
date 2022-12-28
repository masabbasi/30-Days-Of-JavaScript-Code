const oC = document.querySelectorAll(".accordion__oc");
const accordionBody = document.querySelectorAll(".accordion__body");


for (let i=0;i<oC.length;i++) {
	oC[i].addEventListener("click",function(){
		oC[i].classList.toggle("accordion__plus");
		accordionBody[i].classList.toggle("accordion__body--open");
	})
}