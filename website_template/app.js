const message = prompt('\n \n Please choose a numbered option: \n 1: Show messages \n 2: Add a message\n 3: Delete a message \n 0: Quit')

// alert('Your input is: ' + message)
const output = document.getElementById("output")
output.innerHTML = 'Your message is ' + message