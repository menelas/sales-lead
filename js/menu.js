(function($) {
    $(".navbar-toggler").on("click", function(e){
        var hHeader = $("header").outerHeight();
        console.log(hHeader);
        $("#sidebar").css({"top":hHeader+"px"})
    });
})(jQuery);