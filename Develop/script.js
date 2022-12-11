// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let hours_table = {
  "12AM": 0,
  "1AM": 1,
  "2AM": 2,
  "3AM": 3,
  "4AM": 4,
  "5AM": 5,
  "6AM": 6,
  "7AM": 7,
  "8AM": 8,
  "9AM": 9,
  "10AM": 10,
  "11AM": 11,
  "12PM": 12,
  "1PM": 13,
  "2PM": 14,
  "3PM": 15,
  "4PM": 16,
  "5PM": 17,
  "6PM": 18,
  "7PM": 19,
  "8PM": 20,
  "9PM": 21,
  "10PM": 22,
  "11PM": 23,
  }

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //write a listener for click event
  $(".saveBtn").click(function () {
    let timeBlockId = $(this).parent().attr("id")
    let userInputText = $(this).siblings(".description").val()
    localStorage.setItem(timeBlockId, userInputText);
    console.log(localStorage.getItem(timeBlockId))
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $(".time-block").each(function (index, element) {
    let hour = dayjs().hour()
   
    if (hour === hours_table[$(element).children(".hour").text()]) {
      $(element).removeClass("past")
      $(element).removeClass("future")
      $(element).addClass("present") 
      
    } else if (hour > hours_table[$(element).children(".hour").text()]) {
      $(element).removeClass("future")
      $(element).removeClass("present")
      $(element).addClass("past")
    } else if (hour < hours_table[$(element).children(".hour").text()]) {
      $(element).removeClass("present")
      $(element).removeClass("past")
      $(element).addClass("future")
    }
    
  })



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $(".description").each(function (index, element) {
   let userInputText = localStorage.getItem($(element).parent().attr("id"))
   $(element).text(userInputText)
  })





  // TODO: Add code to display the current date in the header of the page.

  $("#currentDay").text(dayjs().format('MMM D, YYYY'))

 //adding code text
});






