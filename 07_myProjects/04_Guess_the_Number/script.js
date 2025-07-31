let random = parseInt(Math.random() * 100 + 1);

const userInput = document.getElementById('inputField');
const submit = document.getElementById('submit');
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".remainingGuesses");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultPara");

const p = document.createElement("p")
 
let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)

        // console.log(guess)
        validateGuess(guess)

    })
}

// Validate the input user have guessed if the number is in correct format or not
function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number !!')
    } else if (guess < 1) {
        alert('please enter a number more than 1...')
    } else if (guess > 100) {
        alert('Please enter a numbe less than 100...')
    } else {
        prevGuess.push(guess)
        if(numGuess === 10) {
            checkGuess(guess)
            displayGuess(guess)
            displayMessage(`Game Over. Random number was: ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// compare the userinput with the random number
function checkGuess(guess) {
    if(guess === random) {
        displayMessage(`Congrats !! You Guessed the number 🎉`)
        endGame();
    } else if (guess < random) {
        displayMessage(`Number is too LOW ... 😐`)
    } else if (guess > random) {
        displayMessage(`Number is too HIGH ... 😵‍💫`)
    }
}

// dsplays all the user inputs ... 
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remainingGuesses.innerHTML = `${10 - numGuess}`
}

// show the result
function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

// Endgame function 
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')

    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new game...</h2>`
    
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

// new Game function
function newGame() {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener('click', (e) => {
        random =  parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 0
        guessSlot.innerHTML = ''
        remainingGuesses.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}