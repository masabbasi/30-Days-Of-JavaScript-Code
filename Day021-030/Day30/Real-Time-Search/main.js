const search = document.querySelector(".search");
const body = document.querySelector(".body");
const more = document.querySelector(".more");
search.addEventListener("input", updateResult);

let all = [];

more.addEventListener("click",()=>getItem ())

function getItem (){
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "e875558efdmshb0c1999f0925818p10099cjsn54efb51a5777",
			"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
		},
	};
	
	fetch("https://moviesdatabase.p.rapidapi.com/titles", options)
		.then((response) => response.json())
		.then((response) => showList(response.results))
		.catch((err) => console.error(err));
}

function updateResult() {}

function showList(data) {
  all.pop(data);
	console.log(data);
  for (let i = 0; i < data.length; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("film");
    let div2 = document.createElement("div");
    div2.classList.add("left");
    let img1 = document.createElement("img");
    img1.setAttribute("src", data[i].primaryImage.url);
    div2.appendChild(img1);
    div1.appendChild(div2);
    let div3 = document.createElement("div");
    div3.classList.add("right");
    let div4 = document.createElement("div");
    div4.classList.add("film-name");
    div4.innerText = data[i].titleText.text;
    let div5 = document.createElement("div");
    div5.classList.add("film-years");
    div5.innerText = data[i].releaseYear.year;
    let div6 = document.createElement("div");
    div6.classList.add("film-type");
    div6.innerText = data[i].titleType.text;
    let div7 = document.createElement("div");
    div7.classList.add("film-imdb");
    let a = document.createElement("a");
    a.setAttribute("href", `https://www.imdb.com/title/${data[i].id}`);
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
}

getItem ();