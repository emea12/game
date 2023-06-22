import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import "./style.css";
import "./global.css";
import "./search.css";
import "./script";

document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide", {
    type: "loop",
    pauseOnHover:false,
    perPage: 1,
    autoplay: true,
    arrows: false,
    width: "100%",
    height: "100vh",
    speed:1000,
  }).mount();
});
