const message /* change to numInput*/= prompt('\n \n Please choose a numbered option: \n 1: Show messages \n 2: Add a message\n 3: Delete a message \n 0: Quit')

/* If (numInput ===1)
    const output =document.getElementById('output')
    'The current messages are: \n 1: Message 01 \n 2: Message 02 \n 3: Message 03 \n 4: Message 04 \n 5: Message 05' */


// alert('Your input is: ' + message)
const output = document.getElementById("output")
output.innerHTML = 'Your message is ' + message