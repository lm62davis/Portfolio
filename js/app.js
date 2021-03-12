// Resize window based by browser size.
window.addEventListener("resize", myFunction);

const x = 0;
function myFunction() {
  const txt = x += 1;
  document.getElementById("adjust").innerHTML = txt;
}


var modal = document.getElementById("myModal");

var aboutBtn = document.getElementById("about");

var span = document.getElementsByClassName("close")[0];

aboutBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// Need to fix - doesn't close 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
