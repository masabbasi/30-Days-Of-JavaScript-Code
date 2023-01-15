const items = document.querySelectorAll(".dropdown > a");
const menuItems = document.querySelectorAll(".dropdown-menu");


items.forEach((item,itemIndex)=>{
	item.addEventListener("click",()=>{
		menuItems.forEach((menuItem,menuItemIndex)=>{
			if(itemIndex===menuItemIndex) {
				item.classList.toggle("active");
				menuItem.classList.toggle("show");
			}
		})
	})
})