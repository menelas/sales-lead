(function($) {
    $("#status-select").on("change", function(){
        var curVal = $(this).val();
        if(curVal=="Offline"){
            $(this).addClass("offline");
        }else{
            $(this).removeClass("offline");
        }

        if(curVal=="Away"){
            $(this).addClass("away");
        }else{
            $(this).removeClass("away");
        }

        if(curVal=="Logout"){
            $(this).addClass("logout");
        }else{
            $(this).removeClass("logout");
        }

        if(curVal=="Stop"){
            $(this).addClass("stop-emulating");
        }else{
            $(this).removeClass("stop-emulating");
        }
    });
})(jQuery);