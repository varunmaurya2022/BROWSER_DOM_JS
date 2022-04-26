'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🥖Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);[

// document.querySelector('.guess').value = 23;



// const secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '😒No Number'
        displayMessage('😒No Number')
    }
    //When Player Wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '😉 Correct Number!'
        displayMessage('😉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = '#14e8d6';

        document.querySelector('.number').style.width = '0px';


        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').
            textContent = highscore;
        }
        //When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage(guess > secretNumber ? '🎈To High!' : 'Too Low');
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '🎈To High!' : 'Too Low';
            score--;
            document.querySelector('.score').textContent =
                score;
        } else {
            displayMessage('🧨You Lost The Game');

            // document.querySelector('.message').
            // textContent = '🧨You Lost The Game';
            document.querySelector('.score').textContent = 0;
        }

    }
    // When player to High
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '.🎈To High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🧨You Lost The Game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    // //When Palyer is to Low 
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '.🎈To Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '🧨You Lost The Game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }

    // document.querySelector('.message').textContent = '😀Correct Number';
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('start guessing')
        // document.querySelector('.message').textContent = 'start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';



});