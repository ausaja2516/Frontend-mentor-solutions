const menuBtn = document.querySelector(".menu_btn");
const nav = document.querySelector(".nav_list");
const menuImg = document.querySelector(".menu_image");

let change = false;
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("animate");
  if (!change) {
    menuImg.setAttribute("src", "./assets/images/icon-menu-close.svg");
    change = true;
  } else {
    menuImg.setAttribute("src", "./assets/images/icon-menu.svg");
  }
});
