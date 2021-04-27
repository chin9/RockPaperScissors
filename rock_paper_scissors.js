function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 1) {
        return "Rock";
    } else if (num == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection0, computerSelection0) {
    
    let playerSelection = playerSelection0.toLowerCase();
    let computerSelection = computerSelection0.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie, both played rock!"
        } else if (computerSelection == "paper") {
            return "You lose! Paper beats rock!"
        } else {
            return "You win! Rock beats scissors!"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock!"
        } else if (computerSelection == "paper") {
            return "Tie! Both played paper!"
        } else {
            return "You lose! Scissors beats paper!"
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors!"
        } else if (computerSelection == "paper") {
            return "You win! Scissors beats paper!"
        } else {
            return "Tie! Both played scissors!"
        }
    }

}

function game() {

    let playerSelection = prompt("Rock Paper Scissors! Enter your move: ");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection , computerSelection));

    let playerSelection1 = prompt("Rock Paper Scissors! Enter your move: ");
    let computerSelection1 = computerPlay();
    console.log(playRound(playerSelection1 , computerSelection1));

    let playerSelection2 = prompt("Rock Paper Scissors! Enter your move: ");
    let computerSelection2 = computerPlay();
    console.log(playRound(playerSelection2, computerSelection2));

    let playerSelection3 = prompt("Rock Paper Scissors! Enter your move: ");
    let computerSelection3 = computerPlay();
    console.log(playRound(playerSelection3 , computerSelection3));

    let playerSelection4 = prompt("Rock Paper Scissors! Enter your move: ");
    let computerSelection4 = computerPlay();
    console.log(playRound(playerSelection4 , computerSelection4));
}