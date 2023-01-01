const $ = document;
const tabs = $.querySelectorAll(".tab");
const contents = $.querySelectorAll(".content");
const preview = $.querySelector(".preview");


tabs.forEach(function (tab,tabIndex) {
  tab.addEventListener("click",function(){
		contents.forEach(function(content,contentIndex){
			content.style.display="none";
			if (tabIndex == contentIndex) {
				preview.style.display="none";
				content.style.display="block";
			}
		})
	})
});
