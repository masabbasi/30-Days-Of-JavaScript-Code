const search = document.querySelector(".search");
const body = document.querySelector(".body");
const more = document.querySelector(".more");
const searchResult = document.querySelector(".search-result");
search.addEventListener("input", updateResult);
let all = [];
let i = 0;
more.addEventListener("click", () => showContent(all));

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e875558efdmshb0c1999f0925818p10099cjsn54efb51a5777",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};
fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=1644cab2ac396911f038df14a74a9ca4&language=en-US&page=1"
)
  .then((response) => response.json())
  .then((response) => {
    all = response.results;
    showContent(all);
  })
  // .then((response) => console.log(response.results))
  .catch((err) => console.error(err));

function updateResult() {
  searchResult.style.display = "block";
  let keyword = search.value;
  if (keyword.length > 0 && keyword.length < 3) {
    searchResult.innerHTML = "Enter at least 3 letters...";
  } else if (keyword.length >= 3) {
    searchResult.innerHTML = "";
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1644cab2ac396911f038df14a74a9ca4&language=en-US&page=1&include_adult=false&query=${keyword}`
    )
      .then((response) => response.json())
      .then((response) => createResult(response.results))
      .catch((err) => console.error(err));
  } else {
    searchResult.style.display = "none";
  }
  function createResult(data) {
    for (let j = 0; j < data.length; j++) {
      let a = document.createElement("a");
      a.classList.add("link-result");
      a.setAttribute("href", `#`);
      // a.setAttribute("href", `https://www.imdb.com/title/${idmb_code}`);
      let div1 = document.createElement("div");
      div1.classList.add("search-result-item");
      let div2 = document.createElement("div");
      div2.classList.add("search-result-img");
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500${data[j].backdrop_path}`
      );
      let div3 = document.createElement("div");
      div3.classList.add("search-result-name");
      div3.innerText = data[j].original_title;
      div2.appendChild(img);
      div1.appendChild(div2);
      div1.appendChild(div3);
      a.appendChild(div1);
      searchResult.appendChild(a);
    }
  }
}

function showContent(data) {
  let it = i;
  for (i; i < it + 5; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("film");
    let div2 = document.createElement("div");
    div2.classList.add("left");
    let img1 = document.createElement("img");
    img1.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${data[i].backdrop_path}`
    );
    div2.appendChild(img1);
    div1.appendChild(div2);
    let div3 = document.createElement("div");
    div3.classList.add("right");
    let div4 = document.createElement("div");
    div4.classList.add("film-name");
    div4.innerText = data[i].original_title;
    let div5 = document.createElement("div");
    div5.classList.add("film-years");
    div5.innerText = data[i].release_date;
    let div6 = document.createElement("div");
    div6.classList.add("film-type");
    div6.innerText = "---";
    let div7 = document.createElement("div");
    div7.classList.add("film-imdb");
    let a = document.createElement("a");
    a.setAttribute("href", `#`);
    // a.setAttribute("href", `https://www.imdb.com/title/${idmb_code}`);
    let img2 = document.createElement("img");
    img2.setAttribute("src", "./imdb.png");
    a.appendChild(img2);
    div7.appendChild(a);
    div3.appendChild(div4);
    div3.appendChild(div5);
    div3.appendChild(div6);
    div3.appendChild(div7);
    div1.appendChild(div3);
    body.appendChild(div1);
  }
  if (i > 19) {
    more.style.display = "none";
  }
}
