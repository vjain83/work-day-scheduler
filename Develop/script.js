// function to display date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

// create variable



// past, present, furture status update by time block class from css file
function timeBlockStatus() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currentHour = $(this).attr("id");


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
timeBlockStatus();

var saveBtn = $(".saveBtn");
saveBtn.on('click', function () {

    var time = $(this).siblings('.hour').text();
    var schedule = $(this).siblings('.schedule').value();

    localStorage.setItem(time, schedule);
})


