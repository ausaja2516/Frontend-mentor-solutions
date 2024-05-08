const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav_list");
const menuImg = document.querySelector(".menu_image");
const overlay = document.querySelector(".overlay");

let change = false;

menuBtn.addEventListener("click", () => {
  if (!change) {
    nav.classList.add("animate");
    menuImg.setAttribute("src", "./assets/images/icon-menu-close.svg");
    overlay.classList.add("animate");

    change = true;
  } else {
    nav.classList.remove("animate");
    menuImg.setAttribute("src", "./assets/images/icon-menu.svg");
    overlay.classList.remove("animate");

    change = false;
  }
});
