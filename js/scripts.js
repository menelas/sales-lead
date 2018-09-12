(function($) {
    $('[data-toggle="tooltip"]').tooltip({placement:"top"});
    $("#status-select").on("change", function(){
       var curVal = $(this).val();
       if(curVal==2){
           $(this).addClass("offline");
       }else{
           $(this).removeClass("offline");
       }
    });
    $("#lead-status").on("change", function(){
        var curVal = $(this).val();
        if(curVal=="Open"){
            $(".lead-status-toggle").addClass("active");
        }else{
            $(".lead-status-toggle").removeClass("active");
        }
    });
    $("#btn-phone").on("click", function(e){
        e.preventDefault();
        var curVal = $(this).val();
        if($(".box-phone").hasClass("running")){
            $(".box-phone").removeClass("running");
            myStopFunction();
            $("#realtime").text("00:00");
        }else{
            startCount();
            $(".box-phone").addClass("running");
        }
    });
    function startCount()
    {
        timer = setInterval(count,1000);
    }
    function count()
    {
        var time_shown = $("#realtime").text();
        var time_chunks = time_shown.split(":");
        var hour, mins, secs;

        mins=Number(time_chunks[0]);
        secs=Number(time_chunks[1]);
        secs++;
        if (secs==60){
            secs = 0;
            mins=mins + 1;
        }
        $("#realtime").text(plz(mins) + ":" + plz(secs));
    }

    function plz(digit){

        var zpad = digit + '';
        if (digit < 10) {
            zpad = "0" + zpad;
        }
        return zpad;
    }
    function myStopFunction() {
        clearInterval(timer);
    }
})(jQuery);