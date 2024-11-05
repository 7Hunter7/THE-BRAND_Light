const menuActive = document.querySelector("div.menu");
const menuClose = menuActive.querySelector("button.menu__close");
const menuButton = document.querySelector("a.menu__button");
const topEl = document.querySelector("div.top");

menuButton.addEventListener("click", function (e) {
  menuActive.classList.toggle("hidden");
  topEl.classList.toggle("top__image_menu");
});

menuClose.addEventListener("click", function (e) {
  menuActive.classList.toggle("hidden");
  topEl.classList.toggle("top__image_menu");
});
