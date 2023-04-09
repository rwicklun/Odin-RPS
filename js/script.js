function getComputerChoice () {
    const options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return options[choice];

}
function playRound(playerChoice, computerChoice){
    console.log("computer played: " + computerChoice.toLowerCase());
    console.log("player played: " + playerChoice.toLowerCase());
    if (playerChoice.localeCompare(computerChoice, undefined, { sensitivity: 'accent' }) === 0) {
        return 0;
    } 
    if (playerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) === 0) {
        if (computerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' }) === 0 ) {
            return 1;
        } else {
            if (computerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' }) === 0 ) {
                return 2;
            }
        }

    }
    if (playerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' }) === 0) {
        if (computerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) === 0) {
            return 1;
        } else {
            if (computerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' }) === 0) {
                return 2;
            }
        }

    }
    if (playerChoice.localeCompare("scissors", undefined, { sensitivity: 'accent' }) === 0) {
        if (computerChoice.localeCompare("paper", undefined, { sensitivity: 'accent' }) === 0) {
            return 1;
        } else {
            if (computerChoice.localeCompare("rock", undefined, { sensitivity: 'accent' }) === 0) {
                return 2;
            }

        }

    }
    console.error("you need to input some variation of Rock, Paper, or Scissors!");
    return -1;

}
function rps () {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let round = 1;
    document.querySelector('.scoreBoard > h2').textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;
    document.querySelector('.round').textContent = `Round: ${round}`;
    // buttons need to listen
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
        playerWins = 0;
        computerWins = 0;
        ties = 0;
        round = 1;
        document.querySelector('.scoreBoard > h2').textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;
        document.querySelector('.round').textContent = `Round: ${round}`;
        let message = document.querySelector('.gameEndContainer');
        message.classList.remove('show');
    });
    const playerButtons = document.querySelectorAll('.userButtons > button');
    playerButtons.forEach((button)=> {
        button.addEventListener('click', (event) => {
            if (playerWins >=5 || computerWins >=5) return;
            let userInput = event.target.className;
            let computerInput = getComputerChoice();
            switch (playRound(userInput, computerInput)) {
                case 0:
                    ties++;
                    break;
                case 1:
                    playerWins++;
                    break;
                case 2:
                    computerWins++;
                    break;
                default:
                    console.error('Magic has happend you should not be here.');
                    break;
            };
            if (playerWins >= 5) {
                let finalState = [true, round, playerWins, computerWins, ties];
                gameOver(finalState);
            } else if (computerWins >= 5) {
                let finalState = [false, round, playerWins, computerWins, ties];
                gameOver(finalState);
            } else {
            round++;
            document.querySelector('.round').textContent = `Round: ${round}`;
            document.querySelector('.scoreBoard > h2').textContent = `Player: ${playerWins} Computer: ${computerWins} Ties: ${ties}`;
            }
            
        });
    });
}
function gameOver (finalState) {
    let playerWon = finalState[0];
    const message = document.querySelector('.finalScore > h1');
    const gameState = document.querySelector('.gameEndContainer');
    const mainDisplay = document.querySelector('.mainContainer');
    mainDisplay.classList.add('hide');
    if (playerWon) {
        message.textContent = `You won the game!`;
        gameState.classList.add('show');
    } else {
        message.textContent = `You lost the game!`;
        gameState.classList.add('show');
    }
    document.querySelector('.roundEnd').textContent = `This game lasted ${finalState[1]} rounds.`;
    document.querySelector('.finalScore > h2').textContent = `Player: ${finalState[2]} Computer: ${finalState[3]} Ties: ${finalState[4]}`;
    const restartButton = document.querySelector('.gameReset');

    restartButton.addEventListener('click', () => {
        let message = document.querySelector('.gameEndContainer');
        message.classList.remove('show');
        const mainDisplay = document.querySelector('.mainContainer');
        mainDisplay.classList.remove('hide');
        let reset = document.querySelector('#reset');
        reset.click();

    });
    gameState.appendChild(restartButton);

}
rps();
    