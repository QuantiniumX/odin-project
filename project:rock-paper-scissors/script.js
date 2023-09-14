'use strict';

const computerImgEl = document.querySelector('.computer-image');
const playerImgEl = document.querySelector('.player-img');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const computerScoreEl = document.querySelector('.computer-score');
const playerScoreEl = document.querySelector('.player-score');
const playerColor = document.getElementById('playerScorePara');
const computerColor = document.getElementById('computerScorePara');

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


const getRandomChoice = function() {
    let randomNumber = Math.trunc(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return `rock`;
        case 2:
            return `paper`;
        case 3:
            return `scissor`;
    }
};

const updateChoices = function(playerSel, computerSel) {
    switch (playerSel) {
        case 'rock':
            playerImgEl.src = "images/rock.jpg";
            break;
        case 'paper':
            playerImgEl.src = "images/paper.jpg";
            break;
        case 'scissor':
            playerImgEl.src = "images/scissor.jpg";
            break;
    }

    switch (computerSel) {
        case 'rock':
            computerImgEl.src = "images/rock.jpg";
            break;
        case 'paper':
            computerImgEl.src = "images/paper.jpg";
            break;
        case 'scissor':
            computerImgEl.src = "images/scissor.jpg";
            break;
    }
}

const playGame = function(playerSel, computerSel) {
    if (playerSel == computerSel) {
        roundWinner = 'tie';
    }
    else if ((playerSel === 'rock' && computerSel === 'scissor') || (playerSel === 'paper' && computerSel === 'rock') || (playerSel === 'scissor' && computerSel === 'paper')) {
        roundWinner = 'player';
        playerScore++;
    }
    else if ((playerSel === 'rock' && computerSel === 'paper') || (playerSel === 'paper' && computerSel === 'scissor') || (playerSel === 'scissor' && computerSel === 'rock')) {
        roundWinner = 'computer';
        computerScore++;
    }
}

const updateScore = function() {
    playerScoreEl.textContent = `Player : ${playerScore}`;
    playerColor.style.color = "white";
    computerScoreEl.textContent = `Computer: ${computerScore}`;
    computerColor.style.color = "white";
}

rockBtn.addEventListener('click', () => buttonClick('rock'));
paperBtn.addEventListener('click', () => buttonClick('paper'));
scissorsBtn.addEventListener('click', () => buttonClick('scissor'));

const buttonClick = function(playerSel) {
    if (gameIsOver()) {
        openEndgameModal();
        return;
    };

    const computerSel = getRandomChoice();
    playGame(playerSel, computerSel);
    updateChoices(playerSel, computerSel);
    updateScore();

    if (gameIsOver()) {
        openEndgameModal()
        setFinalMessage()
    }
}
const gameIsOver = function() {
    playerScore === 5 || computerScore === 5;
}


