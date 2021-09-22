// function to display date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

// create variable

var saveBtn = $(".saveBtn");

// past, present, furture status update by time block class from css file
function timeBlockStatus() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


