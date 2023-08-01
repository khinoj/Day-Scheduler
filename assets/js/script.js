// set variable for current date and time
var now = dayjs();
var hour = now.hour();
// date top of page
var currentDate = now.format('dddd, MMMM D, YYYY');

// current hour 
var currentHour = now.format('H');
$('#currentDay').text(currentDate);

// // variable for the days tasks for each hour
// var daysTasks = ["", ];

$(document).ready(function () {
  //event listener
  $(".saveBtn").on("click", function () {
    //local storage 
    const time = $(this).parent().attr("id");
    const text = $(this).siblings(".description").val();
    console.log('time',time);
    localStorage.setItem(time, text);
  });
  colorChange();
})

function colorChange() {
  let currentTime = now.hour();
  console.log('Current Time', currentTime);

  $('.time-block').each( function() {
    // Compare current time to id of time-block, but first you need to ensure that it is handled as an integer
    if (currentTime === parseInt($(this).attr('id'))) {
      $(this).addClass('present');
    } else if (currentTime > parseInt($(this).attr('id'))) {
      $(this).addClass('past');
    } else {
      $(this).addClass('future');
    }
  });
}

// Pull Local Storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

