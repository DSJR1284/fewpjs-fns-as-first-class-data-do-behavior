/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timestring){
  const time = timestring.split(':');
 if (time[0] < 12){
   return ('Good Morning')
 } else if (time[1] > 17){
   return ('Good Afternoon')
 } else {
   return ('Good Evening')
 }
}

/* Write your implementation of displayMessage() */
function displayMessage(greet){
  document.getElementById("greeting").innerText = greet
}
