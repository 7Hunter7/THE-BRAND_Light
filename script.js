// Переменные
const menuContainer = document.querySelector("div.menu");
const menuClose = menuContainer.querySelector("button.menu__close");
const menuOpenButton = document.querySelector("a.menu__button");
const topSection = document.querySelector("div.top");

// Функция обработки событий
const toggleMenu = () => {
  menuContainer.classList.toggle("hidden");
  topSection.classList.toggle("top__image_menu");
};

// Проверка наличия элементов
if (menuOpenButton && menuContainer && menuClose) {
  menuOpenButton.addEventListener("click", toggleMenu);
  menuClose.addEventListener("click", toggleMenu);
}
