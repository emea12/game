"use strict";
const leftArrows = document.querySelectorAll(".left-arrow1");
const rightArrows = document.querySelectorAll(".right-arrow2");
const image = document.querySelector(".image-box");
const video = document.querySelector(".video-box");
const Playbutton = document.querySelector(".cta");
const Pauseicon = document.querySelector(".pause");
const Playicon = document.querySelector(".play");

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide", {
    type: "loop",
    pauseOnHover:false,
    perPage: 1,
    autoplay: true,
    arrows: false,
   
    speed:1000,
  }).mount();
});

Playbutton.addEventListener("click", () => {
  setTimeout(() => {
    Playicon.classList.remove("appear");
    Pauseicon.classList.remove("dissapear");
    video.classList.remove("opacity");
    video.classList.remove("dissapear");
    image.classList.remove("appear");
  });
  setTimeout(() => {
    image.style.display = "none";
    video.style.opacity = 1;
    Playicon.classList.add("dissapear");
    Pauseicon.classList.add("appear");
  }, 200);
});

Pauseicon.addEventListener("click", () => {
  setTimeout(() => {
    Pauseicon.classList.remove("appear");
    Pauseicon.classList.add("dissapear");

    Playicon.classList.remove("dissapear");
    Playicon.classList.add("appear");
  }, 500);
  setTimeout(() => {
    video.classList.add("opacity");
    video.classList.add("dissapear");
    image.classList.add("appear");
  }, 600);
});

for (const leftArrow of leftArrows) {
  leftArrow.onclick = (e) => {
    let span = e.currentTarget.nextElementSibling;

    let header = span.nextElementSibling;
    let ul = header.nextElementSibling;

    ul.scrollLeft -= 100;
  };
}

for (const rightArrow of rightArrows) {
  rightArrow.onclick = (e) => {
    let header = e.currentTarget.nextElementSibling;
    let ul = header.nextElementSibling;

    ul.scrollLeft += 100;
  };
}
