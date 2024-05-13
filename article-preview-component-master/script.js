const shareBtn = document.querySelector(".share_btn");
const popup = document.querySelector(".popup_links");
const shareImg = document.querySelector(".share_img");
let click = false;

shareBtn.addEventListener("click", () => {
  if (!click) {
    popup.style.visibility = "visible";
    popup.style.transform = "translate(0)";
    popup.style.opacity = 1;

    shareBtn.style.backgroundColor = "var(--color-desaturatedDarkBlue)";
    shareImg.style.filter =
      " brightness(0) invert(100%) sepia(100%) saturate(1%) hue-rotate(43deg) brightness(102%) contrast(101%)";

    click = true;
  } else {
    popup.style.visibility = "hidden";
    popup.style.transform = "translateY(100%)";
    popup.style.opacity = 0;
    shareBtn.style.backgroundColor = "var(--color-lightGrayishBlue)";
    shareImg.style.filter = "none";

    click = false;
  }
});
