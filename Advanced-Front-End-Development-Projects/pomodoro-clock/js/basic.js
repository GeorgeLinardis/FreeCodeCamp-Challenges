$('document').ready(function(){
    "use strict";
    const DefTime=25,DefBreak = 10;
    let workTime = moment.duration(DefTime,"minutes"),
        breakTime = moment.duration(DefBreak,"minutes"),
        $workMinutes = $("#work-minutes")[0],
        $workSeconds = $("#work-seconds")[0],
        $breakMinutes = $("#break-minutes")[0],
        $breakSeconds = $("#break-seconds")[0],
        $batteryCharge = $("#battery-charging"),
        workClockStart,breakClockStart,batteryChargeChange,workLimit,breakLimit,
        clockRunning;

    function refreshClock(){
        $workMinutes.innerText = workTime.minutes();
        $workSeconds.innerText = workTime.seconds();
        $breakMinutes.innerText = breakTime.minutes();
        $breakSeconds.innerText = breakTime.seconds();
    }

    function resetData(){
        clockRunning=false;
        workTime = moment.duration(DefTime,"minutes");
        breakTime = moment.duration(DefBreak,"minutes");
        refreshClock();
        clearInterval(workClockStart);
        clearInterval(breakClockStart);
        $batteryCharge.height("0px");

    }


    // sets work clock mechanism
    function workClock(){
        workTime.subtract(1,"seconds");
        refreshClock();
        lights(workLimit);
        if($batteryCharge.height()<=344){$batteryCharge.innerHeight("+="+batteryChargeChange+"px")}
        if(workTime.minutes()===0 && workTime.seconds()===0) {
            clearInterval(workClockStart);
            batteryChargeChange = 344 / (breakTime / 1000);
            breakLimit = breakTime._milliseconds/1000;
            breakClockStart =setInterval(breakClock,1000);
        }
    }

    function lights(timeLimit){
        let timeNow = workTime._milliseconds/1000;
        if(timeNow>(timeLimit/2)){
            $("#bottom-light").addClass("green-light").removeClass("no-light");

        }else if (timeNow<(timeLimit/4)) {
            $("#bottom-light").addClass("no-light").removeClass("green-light");
            $("#middle-light").addClass("no-light").removeClass("green-light");
            $("#top-light").addClass("red-light").removeClass("no-light");
        }
        else if(timeNow<timeLimit/2){
            $("#bottom-light").addClass("no-light").removeClass("green-light");
            $("#middle-light").addClass("orange-light").removeClass("no-light");
        }
    }

    // clock events
    $("#work-clock-plus-btn").click(function(){
        $workMinutes.innerText = workTime.add(1, "minutes").minutes();
    });

    $("#work-clock-minus-btn").click(function(){
        if(workTime.minutes()>1) {$workMinutes.innerText = workTime.subtract(1, "minutes").minutes();} });

    $("#work-title").click(function() {
        if (clockRunning === false) {
            batteryChargeChange = 344 / (workTime / 1000);
            workLimit = workTime._milliseconds / 1000;
            workClockStart = setInterval(workClock, 1000);
            $("button").attr("disabled", "disabled");
            $(this).addClass("reset-all");
            $(this)[0].innerText = "Reset ?";
            clockRunning = true;
        }
        else if(clockRunning===true){
            $(this).removeClass("reset-all").addClass("default-style");
            $(this)[0].innerText = "Wanna work ?";
            $("#top-light").addClass("no-light").removeClass("red-light");
            $("#middle-light").addClass("no-light").removeClass("orange-light");
            $("#bottom-light").addClass("no-light").removeClass("green-light");
            $("button").removeAttr("disabled", "disabled");
            resetData();
        }
    });


    /************   break timer settings **************/

    $("#break-clock-plus-btn").click(function() {$breakMinutes.innerText = breakTime.add(1, "minutes").minutes(); });
    $("#break-clock-minus-btn").click(function(){
        if(breakTime.minutes()>1) {
            $breakMinutes.innerText = breakTime.subtract(1, "minutes").minutes();
        }});


    // sets work clock mechanism
    function breakClock(){
        breakTime.subtract(1,"seconds");
        $breakMinutes.innerText = breakTime.minutes();
        $breakSeconds.innerText = breakTime.seconds();
        console.log(batteryChargeChange);
        if($batteryCharge.height()>=1){$batteryCharge.innerHeight("-="+batteryChargeChange+"px")}
        if(breakTime.minutes()===0 && breakTime.seconds()===0) {
            clearInterval(breakClockStart);
        }
    }




    resetData();
});