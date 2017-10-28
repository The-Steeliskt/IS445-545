const numInput = prompt('Please choose a numbered option: \n 1: Show messages \n 2: Add a message\n 3: Delete a message \n 0: Quit')

const arr = ['1: Message 01', '2: Message 02', '3: Message 03', '4: Message 04', '5: Message 05'];
var text = '';
var i;
for (i = 0; i < arr.length; i++) {
    text += arr[i] + "<br>";
}
document.getElementById("output").innerHTML = text;

if (numInput == 1) {
    document.getElementById("output").innerHTML = 'The current messages are:' + layout
} else if (numInput == 2) {
    const userInput = prompt('Please enter a new message:');
    arr.push('6: ' + userInput);
    document.getElementById('output').innerHTML = arr
} else if (numInput == 3) {
    const pop = prompt('Please select a message index to be deleted, 1-5'); // restrict input to 1-5, throw error message if wrong value is selected
    var p = pop;
    arr.splice(p, 1);
    document.getElementById("output").innerHTML = arr;
} else if (numInput == 0) {
    document.getElementById("output").innerHTML = 'Goodbye'
} else {
    document.getElementById("output").innerHTML = 'Invalid input, please refresh this page and select a valid response'
}