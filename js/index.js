const search = () => {
  const searchBox = document.getElementById("search-apps").value.toUpperCase();
  const applist = document.querySelector(".main");
  const app = document.querySelectorAll(".box");
  const appname = applist.getElementsByTagName("h2");

  for (var i = 0; i < appname.length; i++) {
    let match = app[i].getElementsByTagName("h2")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
        app[i].style.display = "";
        // app[i].classList.remove("big");
        // app[i].classList.remove("vertical");
        // app[i].classList.remove("horinzontal")
        // app[i].classList.toggle("option-nogrid");
      }
      else {
        app[i].style.display = "none";
        // app[i].classList.remove("option-nogrid");
      }
      
      
      
    }
    else{
      app[0].style.display = "block";
    }
  }
};

let gsearch = document.querySelector(".search");
let gbutton = document.querySelector(".fa-google");

gbutton.onclick = function () {
  let url = "https://www.google.com/search?q=" + gsearch.value;
  window.open(url);
};

if (gsearch === "cat") {
  let url = "https://www.google.com/search?q=" + gsearch.value;
  window.open(url);
}
