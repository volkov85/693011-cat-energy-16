var nav = document.querySelector(".main-nav");
var toggler = document.querySelector(".main-nav__toggle");

document.addEventListener("DOMContentLoaded", function() {
  nav.classList.remove("main-nav--show");
  toggler.classList.add("main-nav__toggle--opened");
});

toggler.addEventListener("click", function (evt) {
  nav.classList.toggle("main-nav--show");
  toggler.classList.toggle("main-nav__toggle--opened");
});
