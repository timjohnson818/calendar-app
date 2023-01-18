
$(document).ready(function () {
 var saveBtn = $(".saveBtn");

 //call to display the saved plans
 renderLocalStorage();

 //Modifies the classes of elements that share the .time-block class to change the color of the time slot
 $(".time-block").each(function(){
   //checks if the time-slot is the current time
   if(parseInt($(this).attr("id")) == dayjs().format('H'))
   {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
   }
   //checks if the time slot is after the current time slot
   else if(parseInt($(this).attr("id")) > dayjs().format('H'))
   {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
   }
   //else the time slot must be in the past
   else
   {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
   }
});

 renderLocalStorage();

 //When the save icon is clicked the information in the textarea is saved in local storage using the ID as a key
 saveBtn.on('click',function(){
    var toDoText = this.parentElement.children[1].value;
    localStorage.setItem(this.parentElement.id,toDoText);
 });

      //places the value stored in the local storage and places it in the corresponding time slot's text area.
     function renderLocalStorage(){
         $("#09 textarea").val(localStorage.getItem("09"));
         $("#10 textarea").val(localStorage.getItem("10"));
         $("#11 textarea").val(localStorage.getItem("11"));
         $("#12 textarea").val(localStorage.getItem("12"));
         $("#13 textarea").val(localStorage.getItem("13"));
         $("#14 textarea").val(localStorage.getItem("14"));
         $("#15 textarea").val(localStorage.getItem("15"));
         $("#16 textarea").val(localStorage.getItem("16"));
         $("#17 textarea").val(localStorage.getItem("17"));
   }
  // Displays the current date at the top of the page
  var dateEl = $('#currentDay');
  dateEl.text(dayjs().format('dddd, MMMM DD'));
});
