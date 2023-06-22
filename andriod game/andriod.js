let leftArrows = document.querySelectorAll(".left-arrow");
let rightArrows = document.querySelectorAll(".right-arrow");
const navBtn = document.querySelector(".nav-btn");
const searchBtn = document.querySelector(".searchbtn");
const searchBar = document.querySelector(".search-bar");
const modal = document.querySelector(".modal");
const logo = document.querySelector(".logo");
const closeBtn = document.querySelector(".close-btn");
const menuBar = document.querySelector(".menu-bar");
const btnCover = document.querySelector(".circle");
const menuIcons = document.querySelector(".menu-icons");

// Functions
function hideElem(elem) {
  elem.classList.remove("fade-in");
  elem.classList.add("fade-out");
  setTimeout(() => {
    elem.classList.add("hide");
  }, 500);
}

function showElem(elem) {
  setTimeout(() => {
    elem.classList.remove("hide");
  }, 1000);

  setTimeout(() => {
    elem.classList.remove("fade-out");
    elem.classList.add("fade-in");
  }, 1000);
}

function slideIn(elem) {
  setTimeout(() => {
    elem.classList.remove("hide");
  });

  setTimeout(() => {
    elem.classList.remove("slide-out");
    elem.classList.add("slide-in");
  });
}

function slideOut(elem) {
  elem.classList.remove("slide-in");
  elem.classList.add("slide-out");
  setTimeout(() => {
    elem.classList.add("hide");
  }, 1000);
}
// toggle Btn functionality
function xBtn(element) {
  e.currentTarget.classList.add("active");
}

function toggleBtn(element) {
  element.classList.toggle("active");
}

function menuBtn(element) {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("active");
  });
}

function transitElems(elem) {
  setTimeout(() => {
    elem.classList.add("opacity");
  }, 1000);
}
function fadeIn(elem) {
  elem.classList.remove("hide");
  elem.classList.add("fade-in");
}
function fadeOut(elem1) {
  elem1.classList.add("hide");
  elem1.classList.remove("fade-in");
}
function reduceMenu(menuElem1) {
  menuIcons.classList.remove("expand");
  menuElem1.classList.add("reduce");
}

function expandMenu(menuElem) {
  menuElem.classList.remove("reduce");
  menuElem.classList.add("expand");

  setTimeout(() => {
    const texts = menuElem.querySelectorAll(".text");
    for (const text of texts) {
      fadeIn(text);
      text.classList.remove("fade-out");
      text.style.display = "block";
    }
  }, 1000);
}

// closeBtn.onclick = (e) => {};

// Slideshow Functionality
document.addEventListener("DOMContentLoaded", () => {
  let show = false;
  navBtn.onclick = (e) => {
    const thisBtn = e.currentTarget;
    const targetkids = thisBtn.children;

    toggleBtn(thisBtn);

    expandMenu(menuIcons);

    if (show === false) {
      // slideIn(menuBar);

      // menuBtn(navBtn)

      for (const kid of targetkids) {
        kid.classList.add("red");
        setTimeout(() => {
          btnCover.classList.add("fade-in");
          btnCover.style.opacity = 1;
        }, 600);
      }
      show = true;
    } else {
      const texts = document.querySelectorAll(".text");
      for (const key of texts) {
        key.classList.remove("fade-in");
        key.classList.add("fade-out");

        setTimeout(() => {
          key.style.display = "none";
        }, 1000);
      }
      for (const child of targetkids) {
        setTimeout(() => { 
           btnCover.style.opacity = 0;
          btnCover.classList.remove("fade-in");
          btnCover.classList.add("fade-0ut");

        
        }, );
        child.classList.remove("red");

        setTimeout(() => {
          reduceMenu(menuIcons);
        }, 1400);

        show = false;
      }
    }
  };
  function opacityElem(opacity) {
    opacity.style.opacity = 0;
  }
  function RemoveopacityElem(opacity) {
    opacity.style.opacity = 1;
  }
  searchBtn.addEventListener("click", (e) => {
    hideElem(navBtn);
    hideElem(logo);
    hideElem(searchBtn);
    setTimeout(() => {
      opacityElem(menuIcons);
    }, 100);
    showElem(searchBar);
    showElem(closeBtn);
    showElem(modal);
  });

  closeBtn.addEventListener("click", (e) => {
    showElem(navBtn);
    showElem(logo);
    setTimeout(() => {
      RemoveopacityElem(menuIcons);
    }, 1200);

    showElem(searchBtn);
    hideElem(searchBar);
    hideElem(closeBtn);
    hideElem(modal);
  });

  // new Splide(".splide", {
  //   type: "loop",
  //   pauseOnHover: false,
  //   perPage: 1,
  //   autoplay: true,
  //   arrows: false,
  //   width: "100%",
  //   height: "100vh",
  //   speed: 1000,
  // }).mount();
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
