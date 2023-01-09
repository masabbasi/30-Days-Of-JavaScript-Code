const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
  const target = +counter.dataset.number;
  const increment = target / 1000;
  let go = setInterval(function () {
    let count = +counter.innerText + increment;
    if (count >= target) {
      clearInterval(go);
      counter.innerText = target;
    } else {
      counter.innerText = count;
    }
  }, 1);
});

// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   // counter.innerText = "0";
//   const target = +counter.dataset.number;
//   const increment = target / 1000;

//   const updateCounter = () => {
//     const c = +counter.innerText;
//     let number = c + increment;
//     if (number < target) {
//       counter.innerText = `${Math.ceil(number)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });
