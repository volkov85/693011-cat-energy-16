var nav = document.querySelector(".main-nav");
var toggler = document.querySelector(".header__toggle");

document.addEventListener("DOMContentLoaded", function() {
  nav.classList.remove("main-nav--show");
  toggler.classList.add("header__toggle--opened");
});

toggler.addEventListener("click", function (evt) {
  nav.classList.toggle("main-nav--show");
  toggler.classList.toggle("header__toggle--opened");
});
