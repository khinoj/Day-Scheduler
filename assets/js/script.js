  // set variable for current date and time
var now = dayjs();

// set varible to format current date being displayed at top of page
var currentDate = now.format('dddd, MMMM D, YYYY');

// set variable for the current hour to adjust color coding
var currentHour = now.format('H');
$('#currentDay').text(currentDate);

// variable for the days tasks for each hour
var daysTasks = ["", "", "", "", "", "", "", "", ""];
