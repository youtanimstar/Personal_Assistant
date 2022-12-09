const bookmarkWindow = document.querySelector(".bookmark-window");
const bookmarkWindowBackground = document.querySelector(
  ".bookmark-window-background"
);
const cross = document.querySelector(".fa-x");
const bookmarkAdd = document.querySelectorAll(".bookmark-add");

bookmarkAdd[0].addEventListener("click", () => {
  bookmarkWindow.classList.toggle("option-display");
  bookmarkWindowBackground.classList.toggle("option-display");
});
bookmarkAdd[1].addEventListener("click", () => {
  bookmarkWindow.classList.toggle("option-display");
  bookmarkWindowBackground.classList.toggle("option-display");
});
cross.addEventListener("click", () => {
  bookmarkWindow.classList.toggle("option-display");
  bookmarkWindowBackground.classList.toggle("option-display");
});
bookmarkWindowBackground.addEventListener("click", () => {
  bookmarkWindow.classList.toggle("option-display");
  bookmarkWindowBackground.classList.toggle("option-display");
});
