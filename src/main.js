const body = document.querySelector("body");
const mobileMenuIcon = document.querySelector(".nav-menu");
const navbarMainMenu = document.querySelectorAll(".navbar-items .nav-item");
const navbarSubMenu = document.querySelectorAll(".nav-item ul");
const mainMenuArrow = document.querySelectorAll(".nav-link picture");

body.addEventListener("click", (e) => {
  const element = e.target.tagName;
  if (element !== "A") {
    navbarSubMenu.forEach((li) => li.classList.add("hidden"));
    removeElementDisplay(mainMenuArrow, "rotate-icon");
  }
});

mobileMenuIcon.addEventListener("click", function () {
  this.classList.toggle("toggle-menu-icon");
  const mobileMenu = document.querySelector(".navbar .navbar-main-menu");
  mobileMenu.classList.toggle("hidden");
});

navbarMainMenu.forEach((link, index) =>
  link.addEventListener("click", function (e) {
    const menu = e.target;
    addElementDisplay(navbarSubMenu, "hidden", index);
    removeElementDisplay(mainMenuArrow, "rotate-icon", index);

    menu.nextElementSibling.classList.toggle("hidden");
    menu.firstElementChild.classList.toggle("rotate-icon");
  })
);

const addElementDisplay = (element, className, order) => {
  element.forEach((list, index) => {
    if (order !== index) {
      list.classList.contains(className) ? "" : list.classList.add(className);
    }
  });
};

const removeElementDisplay = (element, className, order) => {
  element.forEach((list, index) => {
    if (order !== index) {
      list.classList.contains(className)
        ? list.classList.remove(className)
        : "";
    }
  });
};
