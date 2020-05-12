/* Additional misc custom JS */

/* Using includes within HTML */
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

/* Hero Slider Image Change */
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');
var thumbslide1 = document.getElementById('thumbslide1');
var thumbslide2 = document.getElementById('thumbslide2');
var thumbslide3 = document.getElementById('thumbslide3');
var thumbslide4 = document.getElementById('thumbslide4');

setInterval(function(){
  if (slide1.classList.contains('active')) {
    thumbslide1.style.opacity = 1;
    thumbslide2.style.opacity = 0.7;
    thumbslide3.style.opacity = 0.7;
    thumbslide4.style.opacity = 0.7;
  } else if (slide2.classList.contains('active')) {
    thumbslide2.style.opacity = 1;
    thumbslide1.style.opacity = 0.7;
    thumbslide3.style.opacity = 0.7;
    thumbslide4.style.opacity = 0.7;
  } else if (slide3.classList.contains('active')) {
    thumbslide3.style.opacity = 1;
    thumbslide1.style.opacity = 0.7;
    thumbslide2.style.opacity = 0.7;
    thumbslide4.style.opacity = 0.7;
  } else if (slide4.classList.contains('active')) {
    thumbslide4.style.opacity = 1;
    thumbslide1.style.opacity = 0.7;
    thumbslide2.style.opacity = 0.7;
    thumbslide3.style.opacity = 0.7;
  }
}, 450);

/* onclick */
function chooseImg1() {
  slide1.classList.remove('active');
  slide1.classList.add('active');
  slide2.classList.remove('active');
  slide3.classList.remove('active');
  slide4.classList.remove('active');
  thumbslide1.style.opacity = 1;
  thumbslide2.style.opacity = 0.7;
  thumbslide3.style.opacity = 0.7;
  thumbslide4.style.opacity = 0.7;
}
function chooseImg2() {
  slide2.classList.remove('active');
  slide2.classList.add('active');
  slide1.classList.remove('active');
  slide3.classList.remove('active');
  slide4.classList.remove('active');
  thumbslide2.style.opacity = 1;
  thumbslide1.style.opacity = 0.7;
  thumbslide3.style.opacity = 0.7;
  thumbslide4.style.opacity = 0.7;
}
function chooseImg3() {
  slide3.classList.remove('active');
  slide3.classList.add('active');
  slide1.classList.remove('active');
  slide2.classList.remove('active');
  slide4.classList.remove('active');
  thumbslide3.style.opacity = 1;
  thumbslide1.style.opacity = 0.7;
  thumbslide2.style.opacity = 0.7;
  thumbslide4.style.opacity = 0.7;
}
function chooseImg4() {
  slide4.classList.remove('active');
  slide4.classList.add('active');
  slide1.classList.remove('active');
  slide2.classList.remove('active');
  slide3.classList.remove('active');
  thumbslide4.style.opacity = 1;
  thumbslide1.style.opacity = 0.7;
  thumbslide2.style.opacity = 0.7;
  thumbslide3.style.opacity = 0.7;
}
