const searchBox = document.querySelector(".search__box");
const searchInput = document.querySelector(".search__input");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
	searchBox.classList.toggle("active");
	if (searchBox.classList.contains("active")) {
		searchInput.value="";
	}
})