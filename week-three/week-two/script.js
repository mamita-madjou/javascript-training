console.log('connected')


const UserNumber = document.getElementById('userNumber')
const Submit = document.getElementById('Submit')
const result = Math.floor(Math.random() * 100) + 1
console.log('This is the random number', result);
console.log(UserNumber)

let userInput = 0;

function checkGuessNum() {
    console.log("This is the user's guess", userInput)
    if (userInput < result) {
        window.alert('Number it too low');
    } else if (userInput > result) {
        window.alert('Number is too high');
    } else if (userInput === result) {
       window.alert('Good! you guessed right')
    }
} 


Submit.addEventListener('click', checkGuessNum)
UserNumber.addEventListener('input', (event) => {
    userInput = event.target.value;
})

    