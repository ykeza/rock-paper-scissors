
console.log('Rochambeau!');
const capitalize = string => {
    string = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    return string;
}
let choices = ['Rock', 'Paper', 'Scissors'];
let computerPlay = () => choices[Math.floor(Math.random() * 3)];
let computerScore = 0, playerScore = 0;
let playRound = () => {
    let computerSelection = computerPlay();
    let playerSelection;
    let validInput = false;
    do {
        playerSelection = capitalize(prompt('Rock, Paper or Scissors?'));
        (choices.indexOf(playerSelection) == -1) ?
                 validInput = false :
                         validInput = true;
    } while (!validInput);
    switch(playerSelection) {
        case 'Rock':
                if(computerSelection == 'Paper' || computerSelection == 'Scissors') {
                    computerSelection == 'Paper' ?
                             alert(`You lose! ${computerSelection} [${++computerScore}] covers ${playerSelection} [${playerScore}]`) :
                                     alert(`You win! ${playerSelection} [${++playerScore}] breaks ${computerSelection} [${computerScore}]`);
                } else {
                    alert(`It's a draw! ${playerSelection} [${playerScore}] matches ${computerSelection} [${computerScore}].`);
                };
                break;
        case 'Paper':
                if(computerSelection == 'Rock' || computerSelection == 'Scissors') {
                    computerSelection == 'Rock' ?
                             alert(`You win! ${playerSelection} [${++playerScore}] covers ${computerSelection} [${computerScore}]`) :
                                     alert(`You lose! ${computerSelection} [${++computerScore}] cut ${playerSelection} [${playerScore}]`);
                } else {
                    alert(`It's a draw! ${playerSelection} [${playerScore}] matches ${computerSelection} [${computerScore}].`);
                };
                break;
        case 'Scissors':
                if(computerSelection == 'Paper' || computerSelection == 'Rock') {
                    computerSelection == 'Paper' ?
                             alert(`You win! ${playerSelection} [${++playerScore}] cut ${computerSelection} [${computerScore}]`) :
                                     alert(`You lose! ${computerSelection} [${++computerScore}] breaks ${playerSelection} [${playerScore}]`);
                } else {
                    alert(`It's a draw! ${playerSelection} [${playerScore}] matches ${computerSelection} [${computerScore}].`);
                };
                break;
    };
};
let game = () => {
    let rounds = prompt('How many rounds of \'Rock, Paper, Scissors\' would you like to play?: ')
    computerScore = 0, playerScore = 0;
    for(i = 0; i < rounds; i++) {
        playRound();
    };
    alert(`Final Score: PLAYER [${playerScore}] VS. [${computerScore}] COMPUTER`)
    computerScore = 0, playerScore = 0;
};