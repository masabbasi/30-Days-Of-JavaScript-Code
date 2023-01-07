const filter = document.querySelectorAll(".filter div");
const items = document.querySelectorAll(".item div");

filter.forEach(function(filterItem){
	filterItem.addEventListener("click",function(){
		if (filterItem.classList.contains("red")) {
			items.forEach(function(item){
				if (item.classList.contains("red")) {
					item.style.display="block";
				} else {
					item.style.display="none";
				}
			})
		} else if (filterItem.classList.contains("green")) {
			items.forEach(function(item){
			if (item.classList.contains("green")) {
				item.style.display="block";
			} else {
				item.style.display="none";
			}
		})

	} else if  (filterItem.classList.contains("blue")) {
		items.forEach(function(item){
		if (item.classList.contains("blue")) {
			item.style.display="block";
		} else {
			item.style.display="none";
		}
	})
	} else {
		items.forEach(function(item){
				item.style.display="block";
			}
		)
}})})