// function to display date
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

// past, present, furture status update by time block class from css file
function timeBlockStatus() {
    var hour = moment().hours();

    $(".time-block").each(function () {
        var currentHour = $(this).attr("id");

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour == hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// send values to the local storage
var saveBtn = $(".saveBtn");
saveBtn.on('click', function () {

    var time = $(this).siblings('.hour').text();
    var description = $(this).siblings('.description').val();

    localStorage.setItem(time, description);
});

var description = JSON.parse(localStorage.getItem(".description")) || [];

// get saved values from local storage
function loadSchedule() {
    $('.hour').each(function () {
        var currentHour = $(this).text();
        var currentDescription = localStorage.getItem(currentHour);

        if (currentDescription !== null) {
            $(this).siblings(".description").val(currentDescription);
        }

    })
}

timeBlockStatus();
loadSchedule();