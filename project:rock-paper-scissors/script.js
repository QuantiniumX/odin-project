'use strict';

const computerImgEl = document.querySelector('.computer-image');
const playerImgEl = document.querySelector('.player-img');
const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');
const computerScore = document.querySelector('.computer-image');
const playerScore = document.querySelector('player-score');
let score = 0;


document.querySelector('.game-button').addEventListener('click', function() {
    let guessNumber = Math.trunc(Math.random() * 3) + 1;
    computerImgEl.src = `images/${guessNumber}.jpg`;
    const imgCompare = function(image) {
        if (image === guessNumber || image === guessNumber || image === guessNumber) {
            score++;
            console.log(score);
        }
    }
    const playerPlay = function() {
        rockEl.addEventListener('click', function() {
            playerImgEl.src = "images/1.jpg";
            imgCompare(1);
        });
        paperEl.addEventListener('click', function() {
            playerImgEl.src = "images/2.jpg";
            imgCompare(2);
        });
        scissorsEl.addEventListener('click', function() {
            playerImgEl.src = "images/3.jpg";
            imgCompare(3);
        });
    }

    playerPlay()
});



