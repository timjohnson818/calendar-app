// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
 var saveBtn = $(".saveBtn");

 renderLocalStorage();

 $(".time-block").each(function(){
   if(parseInt($(this).attr("id")) == dayjs().format('H'))
   {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
   }

   else if(parseInt($(this).attr("id")) > dayjs().format('H'))
   {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
   }

   else
   {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
   }
});

 renderLocalStorage();

 saveBtn.on('click',function(){
    var toDoText = this.parentElement.children[1].value;
    localStorage.setItem(this.parentElement.id,toDoText);
 });

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
     function renderLocalStorage(){
      $(".time-block").each(function(){
         $("#09 textarea").val(localStorage.getItem("09"));
         $("#10 textarea").val(localStorage.getItem("10"));
         $("#11 textarea").val(localStorage.getItem("11"));
         $("#12 textarea").val(localStorage.getItem("12"));
         $("#13 textarea").val(localStorage.getItem("13"));
         $("#14 textarea").val(localStorage.getItem("14"));
         $("#15 textarea").val(localStorage.getItem("15"));
         $("#16 textarea").val(localStorage.getItem("16"));
         $("#17 textarea").val(localStorage.getItem("17"));
     })
   }
  // TODO: Add code to display the current date in the header of the page.
  var dateEl = $('#currentDay');
  dateEl.text(dayjs().format('dddd, MMMM DD'));
});
