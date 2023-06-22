let leftArrows = document.querySelectorAll(".left-arrow");
let rightArrows = document.querySelectorAll(".right-arrow");

for (const leftArrow of leftArrows) {
  leftArrow.onclick = (e) => {

    let span = e.currentTarget.nextElementSibling
    let header = span.nextElementSibling
    let ul = header.nextElementSibling

    ul.scrollLeft -= 100;
  };
}

for (const rightArrow of rightArrows) {
  rightArrow.onclick = (e) => {
    let header = e.currentTarget.nextElementSibling
    let ul = header.nextElementSibling

    ul.scrollLeft += 100;
  };
}

// // console.log(hero);

// // // hero.scrollLeft = window.innerWidth

// navbar.style.background = "orange";

// let heroWidth = getComputedStyle(hero).width;

// hero.onscroll = () => {
//   if (hero.scrollLeft === 0) {
//     // console.log(hero.scrollLeft);
//     navbar.style.background = "orange";
//   }

//   if (hero.scrollLeft == parseInt(heroWidth)) {
//     // alert(hero.scrollLeft);
//     navbar.style.background = "#5A2994";
//   }

//   if (hero.scrollLeft == parseInt(heroWidth) * 2) {
//     navbar.style.background = "#305850";
//   }
// };

// hero.addEventListener("scroll", () => {
//   console.log(heroWidth);
//   console.log(hero.scrollLeft);
//   //       if (heroWidth === 0) {
//   //       navbar.style.background = "orange";
//   //       console.log("first");
//   //     }

//   //     if (heroWidth === window.innerWidth) {
//   //       navbar.style.background = "#5A2994";
//   //         console.log(hero.scrollLeft);
//   //     }

//   //     if (heroWidth === window.innerWidth * 2) {
//   //       navbar.style.background = "#305850";
//   //       console.log(hero.scrollLeft);
//   // }
// })

//       if (heroWidth === 0) {
//         navbar.style.background = "orange";
//         console.log("first");
//       }

//       if (heroWidth === window.innerWidth) {
//         navbar.style.background = "#5A2994";
//           console.log(hero.scrollLeft);
//       }

//       if (heroWidth === window.innerWidth * 2) {
//         navbar.style.background = "#305850";
//         console.log(hero.scrollLeft);
//   }
// });
// let closebtn = document.querySelector(".closebtn");
// let btn = document.querySelector(".openBtn");
// closebtn.style.display = "flex";
// isShow = true;
// btn.style.display = "flex";
// isShow = false;

// btn.addEventListener("click", () => {
//   if (isShow) {
//     isShow = true;
//     btn.style.display = "none";
//   } else {
//     isShow = true;
//     btn.style.display = "none";
//   }
//   if (isShow) {
//     btn.style.display = "none";
//     closebtn.addEventListener("click", () => {
//       btn.style.display = "flex";
//     });
//   }
// });

// function openSearchHero() {
//   document.getElementById("FullScreenOverlay").style.display = "block";
// }

// function closeSearchHero() {
//   document.getElementById("FullScreenOverlay").style.display = "none";
// }


// let checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// })
// //  search.style.backgroundColor = "black";
// // isShow = false;

// // search.addEventListener("click", (e) => {
// //   if (isShow) {
// //     isShow = false;
// //     search.style.backgroundColor = "red";
// //   } else {
// //     isShow = true;
// //     search.style.backgroundColor = "black";
// //   }
// // });
