;(function($) {

    // Testimonials Slider
    $(".testimonials.owl-carousel").owlCarousel({
        nav: true, // Show next/prev buttons.
        items: 3, // The number of items you want to see on the screen.
        loop: false, // Infinity loop. Duplicate last and first items to get loop illusion.
        navText: false,
        autoHeight: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3200,
        margin: 25,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            480 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            },
            1200 : {
                items: 2,
            }
        }
    });

})(jQuery);