// pre-load images so initial load on awards page doesn't look wonky
function preloadImage(url)
{
    var img01 = new Image();
    img01.src = "/assets/img/awards/2001-paperpromo.JPG";

    var img02 = new Image();
    img02.src = "/assets/img/awards/2002-paperpromo.JPG";

    var img03 = new Image();
    img03.src = "/assets/img/awards/2003.jpeg";

    var img04 = new Image();
    img04.src = "/assets/img/awards/2004.jpeg";

    var img05 = new Image();
    img05.src = "/assets/img/awards/2005.jpeg";

    var img06 = new Image();
    img06.src = "/assets/img/awards/2006.jpeg";

    var img07 = new Image();
    img07.src = "/assets/img/awards/2007.jpeg";

    var img08 = new Image();
    img08.src = "/assets/img/awards/2008.jpeg";

    var img09 = new Image();
    img09.src = "/assets/img/awards/2009.jpeg";

    var img10 = new Image();
    img10.src = "/assets/img/awards/2010.jpeg";

    var img11 = new Image();
    img11.src = "/assets/img/awards/2011-paperpromo.JPG";

    var img12 = new Image();
    img12.src = "/assets/img/awards/2011.jpeg";

    var img13 = new Image();
    img13.src = "/assets/img/awards/2012-paperpromo.JPG";

    var img14 = new Image();
    img14.src = "/assets/img/awards/2012.jpeg";

    var img15 = new Image();
    img15.src = "/assets/img/awards/2013-paperpromo.JPG";

    var img16 = new Image();
    img16.src = "/assets/img/awards/2013.jpeg";

    var img17 = new Image();
    img17.src = "/assets/img/awards/2014.jpeg";

    var img18 = new Image();
    img18.src = "/assets/img/awards/2016-paperpromo.JPG";

    var img19 = new Image();
    img19.src = "/assets/img/awards/2016.jpeg";

    var img20 = new Image();
    img20.src = "/assets/img/awards/2017.jpeg";

    var img21 = new Image();
    img21.src = "/assets/img/awards/2018-metro.jpeg";

    var img22 = new Image();
    img22.src = "/assets/img/awards/2018-paperpromo.JPG";

    var img23 = new Image();
    img23.src = "/assets/img/awards/2018.jpeg";

    var img24 = new Image();
    img24.src = "/assets/img/awards/2019-bestbrkfst.jpeg";

    var img25 = new Image();
    img25.src = "/assets/img/awards/2019-bestbrunch.jpeg";

    var img26 = new Image();
    img26.src = "/assets/img/awards/2019-bestfamily-jpeg.jpeg";

    var img27 = new Image();
    img27.src = "/assets/img/awards/2019-bestoutdoor.jpeg";

    var img28 = new Image();
    img28.src = "/assets/img/awards/2019-bestserver.jpeg";

}

// page refresh always brings user to top of page
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// main function
var loadIt = function() {
 // something to support older browsers
 var scroll = window.requestAnimationFrame ||
 function(callback){ window.setTimeout(callback, 1000/60)};

 // elements to show on scroll
 var elementsToShow = document.querySelectorAll('.show-on-scroll');

 // determine visibility
 function isElementInViewport(el) {
     // special bonus for those using jQuery
     if (typeof jQuery === "function" && el instanceof jQuery) {
     el = el[0];
     }
     var rect = el.getBoundingClientRect();
     return (
     (rect.top <= 0
         && rect.bottom >= 0)
     ||
     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.top <= (window.innerHeight || document.documentElement.clientHeight))
     ||
     (rect.top >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
     );
 }

 // loop through elements for animation
 function loop() {

     elementsToShow.forEach(function (element) {
         if (isElementInViewport(element)) {
                 element.classList.add('is-visible');
         } else {
             element.classList.remove('is-visible');
         }
     });
   
     scroll(loop);
 }
 loop();
};

window.onload = loadIt();
window.onload = preloadImage();

// scroll animation
window.addEventListener('scroll', loadIt);
