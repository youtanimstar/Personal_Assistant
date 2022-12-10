const bookmarkWindow = document.querySelector(".bookmark-window");
const bookmarkWindowBackground = document.querySelector(
  ".bookmark-window-background"
);
const cross = document.querySelector(".fa-x");
const bookmarkAdd = document.querySelectorAll(".bookmark-add");
const bookmarkSave = document.querySelector(".bookmark-window-save");

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
bookmarkSave.addEventListener("click", () => {
  setTimeout(() => {
    bookmarkWindow.classList.toggle("option-display");
    bookmarkWindowBackground.classList.toggle("option-display");
  }, 1000);
});

bookmarkSave.addEventListener("click", (text = "") => {
  const bookmarkWindowName = document.querySelector(
    ".bookmark-window-name"
  ).value;
  const bookmarkWindowURL = document.querySelector(
    ".bookmark-window-url"
  ).value;

  const bookmarkOption = document.createElement("a");
  bookmarkOption.classList.add("sub-option");
  const BookmarkoptionhtmlData = `<a href="${bookmarkWindowURL}" class="sub-option-link" target="blank"> ${bookmarkWindowName}</a>`;

  bookmarkOption.insertAdjacentHTML('afterbegin', BookmarkoptionhtmlData);
  const subSection = document.querySelector(".sub-section").appendChild(bookmarkOption);
  
});
bookmarkSave.addEventListener("click", (text = "") => {
  const bookmarkWindowName = document.querySelector(
    ".bookmark-window-name"
  ).value;
  const bookmarkWindowURL = document.querySelector(
    ".bookmark-window-url"
  ).value;

  const bookmarkOption = document.createElement("a");
  bookmarkOption.classList.add("sub-option");
  const BookmarkoptionhtmlData = `<a href="${bookmarkWindowURL}" class="sub-option-link" target="blank"> ${bookmarkWindowName}</a>`;

  bookmarkOption.insertAdjacentHTML('afterbegin', BookmarkoptionhtmlData);
  const bookmarkSectionContainer = document.querySelector(".bookmark-section-container").appendChild(bookmarkOption);

  
});


