
//DOM section
const bookmarkAdd = document.querySelectorAll(".bookmark-add");
const bookmarkWindow = document.querySelector(".bookmark-window");
const bookmarkWindowBackground = document.querySelector(
  ".bookmark-window-background"
);
const bookmarkWindowSave = document.querySelector(".bookmark-window-save");
const cross = document.querySelector(".fa-x");
const bookmarkWindowName = document.querySelector(".bookmark-window-name");
const bookmarkWindowURL = document.querySelector(".bookmark-window-url");
const SectionContainer = document.querySelector(".bookmark-section-container");
const bookmarksubSection = document.querySelector(".sub-section");
const trash = document.querySelector(".fa-trash");


//object
const bookmark = JSON.parse(localStorage.getItem("bookmark")) || [];

const addBookamrk = (name, url) => {

  bookmark.push({
    name,
    url,
  })
  localStorage.setItem("bookmark", JSON.stringify(bookmark));
  return {name, url};
};


const createBookmark = ({ name, url }) => {
  const bookmarkOption = document.createElement("a");
  bookmarkOption.classList.add("sub-option");
  const bookmarkOptionTwo = document.createElement("a");
  bookmarkOptionTwo.classList.add("sub-option");
  const BookmarkoptionhtmlData = `<img src="./images/web-black.png" alt="" class="favicon"> <a href="${url}" class="sub-option-link" target="blank"> ${name}</a>`;

  bookmarkOption.insertAdjacentHTML("afterbegin", BookmarkoptionhtmlData);
  bookmarkOptionTwo.insertAdjacentHTML("afterbegin", BookmarkoptionhtmlData);
  

  bookmarksubSection.appendChild(bookmarkOption);
  SectionContainer.appendChild(bookmarkOptionTwo);
  
  
};



bookmark.forEach(createBookmark);

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
bookmarkWindowSave.addEventListener("click", () => {

  if(bookmarkWindowName.value == "" || bookmarkWindowURL.value == "" )
    {
        alert("Please fill all the input section");
    }
    else{
      const newbookmark = addBookamrk(
        bookmarkWindowName.value,
                bookmarkWindowURL.value,
              );
              createBookmark(newbookmark);
    }
    

    
    
    

  setTimeout(() => {
    bookmarkWindow.classList.toggle("option-display");
    bookmarkWindowBackground.classList.toggle("option-display");

    bookmarkWindowName.value ="";
    bookmarkWindowURL.value ="";
  }, 100);

  console.log(bookmarkWindowName.value);
});
