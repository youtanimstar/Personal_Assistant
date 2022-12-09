const bookmarkBackground = document.querySelector(".bookmark-background");
const bookmarkBody = document.querySelector(".bookmark-body");
const optionBookmark = document.querySelector(".option-bookmark");
const optionDisplay = document.querySelector(".option-display");
const formSection = document.querySelector(".form-section");
bookmarkBackground.addEventListener("click", () => {
  bookmarkBody.classList.toggle("option-display");
  optionBookmark.classList.toggle("option-display");
});

optionBookmark.addEventListener("mouseover", () => {
  bookmarkBody.classList.toggle("option-display");
  optionBookmark.classList.toggle("option-display");
});
formSection.addEventListener("mouseover", () => {
  bookmarkBody.classList.remove("option-display");
  optionBookmark.classList.remove("option-display");
});
