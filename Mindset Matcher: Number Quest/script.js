"use strict";

// Function to display a message in the message area
function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 100) + 1;
const highScore = Number(document.querySelector('.highscore').textContent);

// Event listener for the 'Check!' button click
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    const score = Number(document.querySelector('.score').textContent);

    // Case 1: No input provided
    if(!guess){
        displayMessage('⛔ No Number!');
    } 

    // Case 2: Player guesses the correct number
    else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#56a13f';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
        }
    } 
    // Case 3: Player guesses the wrong number
    else{
        // Reduce score by 1 for each incorrect guess
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            document.querySelector('.score').textContent = score - 1;
        } 
        else{
            document.querySelector('body').style.backgroundColor = '#ff0000';
            displayMessage('💥You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    } 
});

// Event listener for the 'Again!' button click (reset game)
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 100;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});