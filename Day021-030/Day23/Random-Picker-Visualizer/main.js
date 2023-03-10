const textArea = document.querySelector("textarea");
const list = document.querySelector(".tags ul");

textArea.focus();

textArea.addEventListener("keyup", function (e) {
			createTag(e.target.value);
});

function createTag(all){
  let tags = all.split('.').filter(tag => tag.trim() !== '').map(tag => tag.trim());
	list.innerHTML = '';
	tags.forEach(function(tag){
		let li = document.createElement("li");
		li.innerText=`#${tag.replace(/\s{1,}/g, '_')}`;
		list.appendChild(li);
	})
}

//			 Tags separator : Two Spaces ("  ")
// function createTag(all){
//   let tags = all.split(/\s{2,}/g).filter(tag => tag.trim() !== '');
// 	list.innerHTML = '';
// 	tags.forEach(function(tag){
// 		let li = document.createElement("li");
// 		li.innerText=`#${tag.replace(/\s{1,}/g, '_')}`;
// 		list.appendChild(li);
// 	})
// }