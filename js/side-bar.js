const bookmarkSideBar = document.querySelector("#bookmark-side-bar");
const arrow = document.querySelector("#arrow");

const subSection = document.querySelector(".sub-section");
const main = document.querySelector(".side-bar-closed");

bookmarkSideBar.addEventListener("click", () => {
  subSection.classList.toggle("option-display");
  arrow.classList.toggle("rotate");
});
main.addEventListener("click", () => {
  setTimeout(() => {
    subSection.classList.remove("option-display");
    arrow.classList.remove("rotate");
  }, 1000);
});
