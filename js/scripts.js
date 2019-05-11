jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

    // --------------------------------------------------------------------
    // For Mobile Titles
    // --------------------------------------------------------------------

    $("[title]").click(function(e) {
        $(".title-tooltip").remove();
        let titleWidth = $(this).attr("title").length * 7.1;
        $(this).append(
            '<span class="title-tooltip">' + $(this).attr("title") + "</span>"
        );
    });
}); // JQuery end
