var randomNumber = Math.floor(Math.random() * 99) + 1; 
var guesses = document.querySelector('#guesses'); 
var lastResult = document.querySelector('#lastResult'); 
var lowOrHi = document.querySelector('#lowOrHi'); 
var invalid = document.getElementById('invalid'); 
var record = document.querySelector('#record'); 
var winRecord = 0; 
var lossRecord = 0;

var guessSubmit = document.querySelector('.guessSubmit'); 
var guessField = document.querySelector('.guessField'); 

var guessCount = 1; 
var resetButton = document.querySelector('#reset');
resetButton.style.display='none'; 
guessField.focus(); 
//document.getElementById("numberToGuess").innerHTML = randomNumber;
gameRecord(); 

var resetButton; 

function checkGuess() {
    var userGuess = Number(guessField.value); 
    
    //Error message
    if (userGuess > 99) {
        invalid.innerHTML = 'This number is invalid!';
        invalid.style.backgroundColor = 'yellow';
    }
    else {
        invalid.innerHTML = '';
        if(guessCount === 1) {
            guesses.innerHTML = 'Previous guesses: '; 
        }
        guesses.innerHTML += userGuess + ' '; 
        
        if (userGuess === randomNumber) {
            lastResult.innerHTML = 'Congratulations! You got it right!'; 
            lastResult.style.backgroundColor = 'green'; 
            lowOrHi.innerHTML = ''; 
            winRecord ++;
            setGameOver();
            gameRecord();
        } else if (guessCount == 7) {
            lastResult.innerHTML = 'Sorry, you lost!';
            lossRecord ++;
            setGameOver();
            gameRecord();
        } else {
            lastResult.innerHTML = 'Wrong!'; 
            lastResult.style.backgroundColor = 'red'; 
            if (userGuess < randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too low!'; 
            } else if (userGuess > randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too high!';
            }
        }
        
        guessCount ++; 
    }
    guessField.value = ''; 
    guessField.focus(); 
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true; 
    resetButton.style.display = 'inline'; 
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1; 
    
    var resetParas = document.querySelector('.resultParas p'); 
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.style.display = 'none';
    
    lastResult.innerHTML = ''; 
    lowOrHi.innerHTML = ''; 
    invalid.innerHTML = '';    
    guesses.innerHTML = ''; 
    
    guessField.disabled = false; 
    guessSubmit.disabled = false; 
    guessField.value = ''; 
    guessField.focus(); 
    
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
}

function gameRecord() {
    record.innerHTML = 'Wins: ' + winRecord + ' Losses: ' + lossRecord;
    record.style.backgroundColor = '#A9B9E0';
}