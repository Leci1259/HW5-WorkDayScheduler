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
    console.log(oneBlock)
    console.log(val)
    
    //checks if that time block is in the past
if (val < hour) {
   
    //changes background color
    oneBlock.style.backgroundColor='#350002'


}
// checks if we are in time block
else if (val == hour) {

    // changes background color
    oneBlock.style.backgroundColor='#fd7b02';
    oneBlock.children().first().style.color = "white";
}
};











//save event function

//grabs all buttons
var saveButton = document.querySelectorAll(".saveBtn")

/*saveButton.on("click", function (event) {

    //grab the button pressed
    var item = event.target;
    //get the text from the nearby textarea
    var task = item.closest("textarea");
    //get the time block its in
    var timeBlock = item.clos

    localStorage.setItem("")

});
*/


