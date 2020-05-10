/* Image Lightbox Modal JS Code */




// FOOD/ABOUT SPECIFIC

// Open the Modal
function openModalFood() {
  document.getElementById("myModalFood").style.display = "block";
}

// Close the Modal
function closeModalFood() {
  document.getElementById("myModalFood").style.display = "none";
}

var slideIndexFood = 1;
showSlidesFood(slideIndexFood);

// Next/previous controls
function plusSlidesFood(n) {
  showSlidesFood(slideIndexFood += n);
}

// Thumbnail image controls
function currentSlideFood(n) {
  showSlidesFood(slideIndexFood = n);
}

function showSlidesFood(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesFood");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexFood = 1}
  if (n < 1) {slideIndexFood = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexFood-1].style.display = "block";
  dots[slideIndexFood-1].className += " active";
  captionText.innerHTML = dots[slideIndexFood-1].alt;
}





// MENU SPECIFIC

// Open the Modal
function openModalMenu() {
  document.getElementById("myModalMenu").style.display = "block";
}

// Close the Modal
function closeModalMenu() {
  document.getElementById("myModalMenu").style.display = "none";
}

var slideIndexMenu = 1;
showSlidesMenu(slideIndexMenu);

// Next/previous controls
function plusSlidesMenu(n) {
  showSlidesMenu(slideIndexMenu += n);
}

// Thumbnail image controls
function currentSlideMenu(n) {
  showSlidesMenu(slideIndexMenu = n);
}

function showSlidesMenu(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesMenu");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexMenu = 1}
  if (n < 1) {slideIndexMenu = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexMenu-1].style.display = "block";
  dots[slideIndexMenu-1].className += " active";
  captionText.innerHTML = dots[slideIndexMenu-1].alt;
}