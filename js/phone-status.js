(function($) {
    if( $("#datetimepicker1").length > 0 ){
        $('#datetimepicker1').datetimepicker();
    }
    function datePickShow(){
        if($(".lead-status-toggle").hasClass('active')){
            if($("#reachDecisionMaker").prop('checked')){
               $('#datetimepickerContainer').addClass('active');
            }else{
               $('#datetimepickerContainer').removeClass('active');
            }               
        }else{
            $('#datetimepickerContainer').removeClass('active');
            
        }
    
    }
    function cancelReasonToggle(){
        if($("#lead-status").val() == 'Decline'){
            $('#cancelReasonToggle').addClass('active');                
        }else{
            $('#cancelReasonToggle').removeClass('active');
        }
    }   
    function showPolicyNumber(){
        if($("#lead-status").val() == 'Sold'){
            $('#policyNumberToggle').addClass('active');                
        }else{
            $('#policyNumberToggle').removeClass('active');
        }
    }
    function showOtherField(){
        if( $("#lead-source").val() == 'Other' ){
            $('#otherFieldToggle').addClass('active');
        }else{
            $('#otherFieldToggle').removeClass('active');
        }
    }

    $("#reachDecisionMaker").on("click", function(){
       datePickShow();
    }); 
    var count = 30;
    var t, flagDown = true, flagUp = false;
    var mins = 0;
    var elem = $("#realtime");
    var elem2 = $("#realtime2");
    counting();

    if( $('[data-toggle="tooltip"]').length > 0 ){
        $('[data-toggle="tooltip"]').tooltip({placement:"top"});
    }

    
    function StatusChangeUpdates(){
        leaderStatus();
        datePickShow();
        showPolicyNumber();
        cancelReasonToggle();
    }
    function LeadSourceChangeUpdates(){
        showOtherField();
    }
    StatusChangeUpdates();
    $("#lead-status").on("change", function(){
        StatusChangeUpdates();
    });
    $("#lead-source").on("change", function(){
        LeadSourceChangeUpdates();
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
        }else if(curVal=="decline"){
            $(".decline-status-toggle").addClass("active");
            $(".status-sold-toggle").removeClass("active");
            $(".lead-status-toggle").removeClass("active");
            $(".call-back-toggle").hide();
        }else if(curVal=="Quote"){
            $(".lead-status-toggle").addClass("active");
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
            $(".num-txt").text("Next Call");
            flagUp = false;
            flagDown = false;
        } else if($(".box-phone").hasClass("next-call")){
            $(".box-phone").addClass("ran");
            $(".box-phone").removeClass("next-call");
            $(".num-txt").text("613-654-5321");
            $("#realtime").text(":30").show();
            $("#realtime2").hide().text("00:00");
            flagUp = false;
            flagDown = true;
            count = 30;
            counting();
        }else if($(".box-phone").hasClass("ran")){
            $("#realtime2").show();
            $("#realtime").hide().text(":30");
            $(".box-phone").removeClass("ran");
            $(".box-phone").addClass("running");
            cdpSwitchUp();
            counting();
        }
    });

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
    function cddisplay() {
        elem.text(":"+count);
    }

    function counting() {
        // starts countdown
        if (count == -1) {
            $(".box-phone").removeClass("ran");
            $(".box-phone").addClass("running");
            flagUp = true;
            flagDown = false;
            count++;
            t = setTimeout(counting, 1000);
            elem.hide();
            elem2.show();
            elem2.text("00:"+plz(count));
        } else if (flagUp == true) {
            count++;
            if (count==60){
                count = 0;
                mins = mins + 1;
            }
            elem2.text(plz(mins) + ":" + plz(count));
            clearTimeout(t);
            t = setTimeout(counting, 1000);
        }else if(flagDown==true) {
            flagUp = false;
            clearTimeout(t);
            t = setTimeout(counting, 1000);
            elem.text(":"+plz(count));
            count--;
        }
    }

    function plz(digit){

        var zpad = digit + '';
        if (digit < 10) {
            zpad = "0" + zpad;
        }
        return zpad;
    }

    function cdpSwitchUp() {
        count = -1;
        flagUp = true;
        flagDown = false;
    }
})(jQuery);