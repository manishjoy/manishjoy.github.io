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
        if ($(document).width() <= 768) {
            $(".title-tooltip").remove();
            let titleWidth = $(this).attr("title").length * 7.1;
            $(this).append(
                '<span class="title-tooltip">' + $(this).attr("title") + "</span>"
            );
        }
        
    });
    
    $(document).click(function(evt) {
        var target = evt.target.className;
        if(!(evt.target.hasAttribute('title') || (typeof $(evt.target).closest('[title]').attr('title') != 'undefined' && $(evt.target).closest('[title]').attr('title').length))) {
            $(".title-tooltip").remove();
        }
    });
}); // JQuery end
