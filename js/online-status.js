(function($) {
    $("#status-select").on("change", function(){
        var curVal = $(this).val();
        if(curVal=="Offline"){
            $(this).addClass("offline");
        }else{
            $(this).removeClass("offline");
        }
        if(curVal=="Logout"){
            $(this).addClass("logout");
        } else if(curVal=="stop"){
            $(this).addClass("stop-emulating");
        }else{
            $(this).removeClass("logout");
        }

    });
})(jQuery);