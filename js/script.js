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
    document.querySelector('.round').textContent = `Round: ${round}`;
    // buttons need to listen
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
        playerWins = 0;
        computerWins = 0;
        ties = 0;
        round = 1;
        document.querySelector('.scoreBoard > h2').textContent = `Score: ${playerWins}:${computerWins} Ties: ${ties}`;
        document.querySelector('.round').textContent = `Round: ${round}`;
        document.querySelector('.message').textContent = '';
    });
    const playerButtons = document.querySelectorAll('.userButtons > button');
    playerButtons.forEach((button)=> {
        button.addEventListener('click', (event) => {
            if (playerWins >=5 || computerWins >=5) return;
            console.log(`Round ${round} start!`);
            let userInput = event.target.className;
            let computerInput = getComputerChoice();
            switch (playRound(userInput, computerInput)) {
                case 0:
                    ties++;
                    console.log(`It's a TIE! Nobody won today ${userInput} is equal to ${computerInput}`);
                    break;
                case 1:
                    playerWins++;
                    console.log(`You won this round! ${userInput} beats ${computerInput}`)
                    break;
                case 2:
                    computerWins++;
                    console.log(`You lost this round! ${computerInput} beats ${userInput}`)
                    break;
                default:
                    console.error('Magic has happend you should not be here.');
                    break;
            };
            round++;
            document.querySelector('.round').textContent = `Round: ${round}`;
            document.querySelector('.scoreBoard > h2').textContent = `Score: ${playerWins}:${computerWins} Ties: ${ties}`;
            if (playerWins >= 5) {
                document.querySelector('.message').textContent = `You won the game!`;
            }
            if (computerWins >= 5) {
                document.querySelector('.message').textContent = `You lost the game!`;
            }
            
        });
    });
}
rps();
    