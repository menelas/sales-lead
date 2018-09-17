(function($) {
    $("#status-select").on("change", function(){
        var curVal = $(this).val();
        if(curVal=="Offline"){
            $(this).addClass("offline");
        }else{
            $(this).removeClass("offline");
        }

    });
})(jQuery);