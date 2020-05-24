// page refresh always brings user to top of page
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
// scroll animation
window.addEventListener('scroll', function() {
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
    // var modal = document.getElementById('myModalMenu');
    // var modalIsVisible = window.getComputedStyle(modal, null).getPropertyValue('display');
    // loop through elements for animation
    function loop() {

        elementsToShow.forEach(function (element) {
            // if (modalIsVisible == 'none') {
                if (isElementInViewport(element)) {
                        element.classList.add('is-visible');
                } else {
                    element.classList.remove('is-visible');
                }
            // } else {
            //     element.classList.add('is-visible');
            // }
        });
      
        scroll(loop);
    }
    loop();
});
