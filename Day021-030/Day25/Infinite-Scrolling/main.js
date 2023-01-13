const posts = document.querySelector(".posts");
const loading = document.querySelector(".loading");

const titles = [
  "Lorem ipsum dolor sit amet.",
  "Officia sit hic nihil quisquam?",
  "In laudantium quidem hic ipsam?",
  "Dolorum nostrum culpa magni reprehenderit?",
  "Rerum corporis nisi ea eum.",
];

const contents = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.",
  "Earum dignissimos maxime ipsum ratione nisi, accusamus enim!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.",
  "Earum dignissimos maxime ipsum ratione nisi, accusamus enim!",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos. Autem maiores consectetur reiciendis repudiandae architecto officia ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae libero quidem et facilis ad odit, quia eligendi error cum!",
];

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  // const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	document.querySelector(".test").innerHTML=`
	clientHeight:${clientHeight},
	scrollTop: ${scrollTop},
	scrollHeight: ${scrollHeight}///
	${scrollTop + clientHeight}  :  ${scrollHeight}
	`;
  if ((scrollTop + clientHeight) === (scrollHeight)) {
    showLoading();
  }
});

function showLoading() {
  loading.classList.add("loading-show");

  setTimeout(() => {
    loading.classList.remove("loading-show");
    setTimeout(() => {
      createPost();
      createPost();
      createPost();
    }, 400);
  }, 1500);
}

function randomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  const date = new Date(timestamp);

  console.log(date);
  const postDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  console.log(postDate);
  return postDate;
}

function createPost() {
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomContent = contents[Math.floor(Math.random() * contents.length)];
  const divEl = document.createElement("div");
  divEl.classList.add("box");
  const h2El = document.createElement("h2");
  h2El.classList.add("box__title");
  h2El.innerText = randomTitle;
  const spanEl = document.createElement("span");
  spanEl.classList.add("box__date");
  spanEl.innerText = randomDate();
  const pEl = document.createElement("p");
  pEl.classList.add("box__content");
  pEl.innerText = randomContent;
  divEl.appendChild(h2El);
  divEl.appendChild(spanEl);
  divEl.appendChild(pEl);
  posts.appendChild(divEl);
}

createPost();
createPost();
createPost();
