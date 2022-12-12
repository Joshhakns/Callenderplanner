// Made an array that helps me delegate what each time's value is. 
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

  // Wrapped the rest of the code in this function.
$(function () {
// Added an event listner that saves the user input in local storage. 
  $(".saveBtn").click(function () {
    let timeBlockId = $(this).parent().attr("id")
    let userInputText = $(this).siblings(".description").val()
    localStorage.setItem(timeBlockId, userInputText);
    console.log(localStorage.getItem(timeBlockId))
  })
// Removes the class from each section and then applies a new class accordingly depending on the time of day.
// Also tried using let instead of VAR this time around.
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

// Displaying the saved user input text when browser refreshes. 
  $(".description").each(function (index, element) {
   let userInputText = localStorage.getItem($(element).parent().attr("id"))
   $(element).text(userInputText)
  })


  $("#currentDay").text(dayjs().format('MMM D, YYYY'))
});






