(function($) {
    "use strict";
    
        //On Window load & Resize
        $(window).on('load', function() { //Load
            $.get("https://author.themagentoblog.com/blogs.json", function(data, status){
                var blogHtml = "";
                for(var i = 0; i < data.length; i++){
                    // console.log(data[i]);
                    /* Format date */
                    blogHtml += '<a target="_blank" href="'+ data[i].link +'">'+ data[i].title.rendered +'</a><img src="./assets/images/star1.svg" alt="Star">';
                }
                $("#blog-post-container").html(blogHtml)
            });
        });
    
    })(jQuery);
    