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

function game () {
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let games = [];
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round} start`);
        let userInput = prompt("Please enter: Rock, Paper, or Scissors");
        let computerInput = getComputerChoice();
        games[round] = playRound(userInput, computerInput);
        switch (games[round]) {
            case 0:
                ties++;
                console.log(`It's a TIE! Nobody won today ${userInput} is equal to ${computerInput}`);
                break;
            case 1:
                playerWins++;
                console.log(`You won rond ${round}! ${userInput} beats ${computerInput}`)
                break;
            case 2:
                computerWins++;
                console.log(`You lost round ${round}! ${computerInput} beats ${userInput}`)
                break;
            default:
                break;

        }

    }
    if (playerWins > computerWins) {
        console.log(`You won the game! \nYou won: ${playerWins} times. \nYou lost: ${computerWins} times. \nYou tied: ${ties} times`)
    }
    if (playerWins < computerWins) {
        console.log(`You lost the game! \nYou won: ${playerWins} times. \nYou lost: ${computerWins} times. \nYou tied: ${ties} times`)
    }
    if (playerWins == computerWins) {
        console.log(`You tied the game! \nYou won: ${playerWins} times. \nYou lost: ${computerWins} times. \nYou tied: ${ties} times`)
    }
}
game();