// Resize window based by browser size.
window.addEventListener("resize", myFunction);

const x = 0;
function myFunction() {
  let txt = (x += 1);
  document.getElementById("adjust").innerHTML = txt;
}

const modal = document.getElementById("myModal");

const aboutBtn = document.getElementById("about");

const span = document.getElementsByClassName("close")[0];

aboutBtn.onclick = function () {
  modal.style.display = "block";
  aboutBtn.addClass("pullDown");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// Need to fix - doesn't close
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// function toggle() {
//   const blur = document.getElementById("blur");
//   blur.classList.toggle("active");
//   const popup = document.getElementById("popup");
//   popup.classList.toggle("active");
// }
const slider_img = document.querySelector(".slider-image");
let images = [
  // "FizzBuzzQix.png",
  // "BootCampBlog.png",
  // "DateNightApp.png",
  // "DonutMaker.png",
  "FranklinSS.PNG",
  "KaufmanSS.PNG",
];
let i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "images/" + images[i]);
}
