const search = document.querySelector(".search");
search.addEventListener("input",updateResult)

function updateResult(){
	
}

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://imdb8.p.rapidapi.com/auto-complete',
//   params: {q: 'game of thr'},
//   headers: {
//     'X-RapidAPI-Key': 'e875558efdmshb0c1999f0925818p10099cjsn54efb51a5777',
//     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });