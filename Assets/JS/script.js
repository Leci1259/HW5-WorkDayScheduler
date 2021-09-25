// display todays date
var displayToday = document.querySelector("#currentDay");

var today= moment();
displayToday.textContent= today.format("dddd, MMMM do");

//Change page as time changes
//grabs current hour
var hour = today.format("HH");

//grabs all the data attribute elements
var blocks = $('[data-time]')

for (var i =0; i<blocks.length; i++) {
    
    //grabs specific block
    var oneBlock = blocks[i];
    var val = oneBlock.getAttribute('data-time')
    
    //checks if that time block is in the past
if (val < hour) {
   
    //changes background color
    oneBlock.style.backgroundColor='#350002'
    //change text color
    document.querySelectorAll("h5")[i].style.color = "black";
    document.querySelectorAll("textarea")[i].style.color = "black";
    document.querySelectorAll("button")[i].style.color = "black";
    document.querySelectorAll("button")[i].style.background= '#350002';
}

// checks if we are in time block
else if (val == hour) {

    // changes background color
    oneBlock.style.backgroundColor='#fd7b02';
    
    //change text color
    document.querySelectorAll("h5")[i].style.color = "white";
}
};

//save event function
//grabs all buttons
var saveButtons = document.querySelectorAll(".saveBtn")
var storedEvents = JSON.parse(localStorage.getItem("storedEvents")) || {
    task: [],
    time: [],
  };   
  
//loop for all buttons
for (i of saveButtons) {
    i.addEventListener('click', function(event) {

        //grabs the text from the container of button clicked
        var text = $(event.target).siblings("textarea").val();

        //gets time tag from the container
        var timeBlock = $(event.target).parent().attr('data-time')

        //pushes values to object

        storedEvents.task.push(text);
        storedEvents.time.push(timeBlock);

        //save local storage
        localStorage.setItem("storedEvents",JSON.stringify(storedEvents));
        
    });
  }
     //set local storage on page
     //set up object either from scratch or local storage
     
     
 
        function init() {
            //if local storage data was pulled
        if (storedEvents !==null) {
        for (i of storedEvents.time) {
            //get attribute number from local storage
            var attribute = storedEvents.time[i];
            console.log=(attribute)
            
            for (var x = 0; x < blocks.length;x++) {
               
                //gets value from data blocks
                var blockVals = $(blocks[x]).attr('data-time')
                console.log= (blockVals)
                //if block value matches with local storage attr value
                if (blockVals == attribute) {
                    //set the text content on that block to the task listed in local storage
                 $(blocks[x]).children().eq[2].textContent = storedEvents.task[i]   
                }
            }
        }
    }
}
init();
 


/*
To Do
Debug local storage set up: not tranversing correctly

Need to grab local storage and set task back based on data attributes
error with correctly grabbing items

*/



