
const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.button button')
console.log(buttons)

 const clearButton = document.querySelector('.btn-clear')
const equalButton = document.querySelector('.btn-equal');

let currentInput = '';

let numbers =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
numbers.forEach(number => {
    if(number % 2 == 0) {
        console.log(number, 'is even')
    } else {
        console.log(number, 'is odd')

    }
});
console.log(numbers)

// Update screen when buttons are clicked
buttons.forEach(button => {
    console.log(button)
    button.addEventListener('click', () => {
        currentInput += button.dataset.num || ''; // Append button value if it exists
        screen.value = currentInput; // Update the screen
    });
});

// Evaluate the expression on equal button click
equalButton.addEventListener('click', () => {
    try {
        screen.value = eval(currentInput); // Evaluate and display result
        currentInput = ''; // Reset input after evaluation
    } catch {
        screen.value = 'Error'; // Show error if evaluation fails
    }
});

// Clear input and screen on clear button click
clearButton.addEventListener('click', () => {
    currentInput = '';
    screen.value = '';
});