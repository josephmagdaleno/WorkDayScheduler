var m = moment();
var inputBox;
var timeInfo;
//get the current time / day to display on the planner
$("#currentDay").text(m.format("dddd, MMMM Do"));
var x = new Date();
var time = x.getHours() + ":" + x.getMinutes();
document.write(time);
console.log(time);

$("#currentTime").text(m.format(time));
//show if the time has passed or not throughout the day
$(document).ready (function() {
    hourColor ();
    loadText ();
});

function hourColor () {
     var currentTime = moment().hours();
    console.log("Current Time" + currentTime);
    //checking to see if the time of day is current or past or ahead.
    $(".input").each(function () {
        var timeCheck = parseInt($(this).attr("id"));
        console.log(timeCheck);
        
        if (currentTime > timeCheck) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < timeCheck) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

$(".saveBtn").click(function() {
    inputBox = $(this).siblings(".input").val();
    console.log(inputBox);
    timeInfo = $(this).siblings(".hour").text();
    console.log(timeInfo);
    localStorage.setItem(timeInfo, JSON.stringify(inputBox));
    
    hourColor ();
    loadText ();
})

function loadText () {
    var hour9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(hour9);
    
    var hour10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(hour10);
    
    var hour11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(hour11);
    
    var hour12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(hour12);
    
    var hour1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#1").val("");
    $("#1").val(hour1);

    var hour2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#2").val("");
    $("#2").val(hour2);

    var hour3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#3").val("");
    $("#3").val(hour3);

    var hour4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#4").val("");
    $("#4").val(hour4);

    var hour5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#5").val("");
    $("#5").val(hour5);
}