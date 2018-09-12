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
    leaderStatus();
    $("#lead-status").on("change", function(){
        leaderStatus();
    });
    function leaderStatus(){
        var curVal = $("#lead-status").val();
        if(curVal=="Open"){
            $(".lead-status-toggle").addClass("active");
            $(".status-sold-toggle").removeClass("active");
            $(".decline-status-toggle").removeClass("active");
            $(".call-back-toggle").hide();
            if($("#maker-checkbox").is(":checked")){
                $(".call-back-toggle").show();
            }
        }else if(curVal=="Sold"){
            $(".status-sold-toggle").addClass("active");
            $(".lead-status-toggle").removeClass("active");
            $(".call-back-toggle").hide();
        }else if(curVal=="Decline"){
            $(".decline-status-toggle").addClass("active");
            $(".status-sold-toggle").removeClass("active");
            $(".lead-status-toggle").removeClass("active");
            $(".call-back-toggle").hide();
        }else{
            $(".lead-status-toggle").removeClass("active");
            $(".status-sold-toggle").removeClass("active");
            $(".call-back-toggle").hide();
        }
    }
    $("#btn-phone").on("click", function(e){
        e.preventDefault();
        var curVal = $(this).val();
        if($(".box-phone").hasClass("running")){
            $(".box-phone").removeClass("running");
            $("#realtime").text(":30");
            $(".box-phone").addClass("next-call");
            clearInterval(timer);
            $(".num-txt").text("Next Call");
        } else if($(".box-phone").hasClass("next-call")){
            $(".box-phone").removeClass("next-call");
            $(".num-txt").text("613-654-5321");
            clearInterval(timer);
            countdown30s();
        }else{
            countdown30s();
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
    function countdown30s(){

        var timeLeft = 29;
        var elem = $("#realtime");
        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == -1) {
                clearTimeout(timerId);
                countdownEnd();
            } else {
                elem.text(":"+timeLeft);
                timeLeft--;
            }
        }
    }
    function countdownEnd() {
        $("#realtime").text("00:00");
        $(".box-phone").addClass("running");
        startCount();
    }
    $("#maker-checkbox").on("change", function(){
        if($(this).is(":checked")){
            $(".call-back-toggle").show();
        }else{
            $(".call-back-toggle").hide();
        }
    });
    $('input.date-picker').each(function() {
        $(this).datepicker('');
    });
    $(document).ready(function(){
        $(".fa-plus-circle").click(function(){
            $(this).hide();
            $(this).siblings(".fa-minus-circle").show();
            var colClass = $(this).attr("data-agent-user");
            $("."+colClass).show();
        });
        $(".fa-minus-circle").click(function(){
            $(this).hide();
            $(this).siblings(".fa-plus-circle").show();
            var colClass = $(this).attr("data-agent-user");
            $("."+colClass).hide();
        });
    });
})(jQuery);