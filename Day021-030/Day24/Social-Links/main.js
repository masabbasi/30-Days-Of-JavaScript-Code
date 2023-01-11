// const socialMediaOpen = document.querySelector(".socialMediaOpen");
// const socialItem = document.querySelector(".socialItem");
// const socialItemClose = document.querySelector(".close");

// socialMediaOpen.addEventListener("click",function(){
// 	socialItem.classList.add("socialItemShow")
// })

// socialItemClose.addEventListener("click",function(){
// 	socialItem.classList.remove("socialItemShow");
// })

const socialMediaBtn = document.querySelector(".socialMediaBtn");
const socialMediaBtnIcon = document.querySelector(".socialMediaBtn div");
const socialItem = document.querySelector(".socialItem");
const socialItemClose = document.querySelector(".close");
const closeIcon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.878px" height="122.88px"
viewBox="0 0 122.878 122.88" enable-background="new 0 0 122.878 122.88" xml:space="preserve">
<g>
	<path
		d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
</g>
</svg>`;
const socialIcon = `		<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.94"><title>share</title><path d="M98.11,0A24.77,24.77,0,1,1,80.6,42.28c-.22-.22-.43-.44-.64-.67l-31.14,13a25,25,0,0,1,.53,8.95L81,78.31A24.66,24.66,0,1,1,74.72,88L45.34,74.26A24.77,24.77,0,1,1,42.28,43c.44.44.87.9,1.27,1.37L74.29,31.55A24.77,24.77,0,0,1,98.11,0Z"/></svg>`;
socialMediaBtnIcon.innerHTML = socialIcon;

socialMediaBtn.addEventListener("click", function () {
  socialItem.classList.toggle("socialItemShow");

  socialMediaBtnIcon.classList.add("socialMediaBtnAni");
  setTimeout(() => {
    socialMediaBtnIcon.classList.remove("socialMediaBtnAni");
  }, 600);

  if (socialItem.classList.contains("socialItemShow")) {
    socialMediaBtnIcon.innerHTML = closeIcon;
    socialMediaBtn.style.backgroundColor = "rgb(233, 35, 8)";
  } else {
    socialMediaBtnIcon.innerHTML = socialIcon;
    socialMediaBtn.style.backgroundColor = "rgb(21, 255, 0)";
  }
});
