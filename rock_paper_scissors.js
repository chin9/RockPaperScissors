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



document.getElementById("rock-button").addEventListener("click", function(){
            playGamePlayerRock();
        })

document.getElementById("paper-button").addEventListener("click", function(){
            playGamePlayerPaper();
        })

document.getElementById("scissors-button").addEventListener("click", function(){
            playGamePlayerScissors();
        })


function playGamePlayerRock() {
    let computerSelection = computerPlay();

    let text = document.getElementById('computer-score-id').textContent;
    console.log(text);
    console.log("rock");

    if (computerSelection == "Paper") {
        let num = parseInt(document.getElementById('computer-score-id').textContent);
        num ++;
        document.getElementById('computer-score-id').textContent = num;
        console.log(num);
    } else if (computerSelection == "Scissors") {
        let num = parseInt(document.getElementById('player-score-id').textContent);
        num ++;
        document.getElementById('player-score-id').textContent = num;
        console.log(num);
    }

    checkWinner();
}

function playGamePlayerPaper() {
    let computerSelection = computerPlay();

    let text = document.getElementById('computer-score-id').textContent;


    if (computerSelection == "Scissors") {
        let num = parseInt(document.getElementById('computer-score-id').textContent);
        num ++;
        document.getElementById('computer-score-id').textContent = num;
        console.log(num);
    } else if (computerSelection == "Rock") {
        let num = parseInt(document.getElementById('player-score-id').textContent);
        num ++;
        document.getElementById('player-score-id').textContent = num;
        console.log(num);
    }

    checkWinner();

}

function playGamePlayerScissors() {
    let computerSelection = computerPlay();

    let text = document.getElementById('computer-score-id').textContent;


    if (computerSelection == "Rock") {
        let num = parseInt(document.getElementById('computer-score-id').textContent);
        num ++;
        document.getElementById('computer-score-id').textContent = num;
        console.log(num);
    } else if (computerSelection == "Paper") {
        let num = parseInt(document.getElementById('player-score-id').textContent);
        num ++;
        document.getElementById('player-score-id').textContent = num;
        console.log(num);
    }

    checkWinner();

}

function checkWinner() {

    let playerScore = parseInt(document.getElementById('player-score-id').textContent);
    let computerScore = parseInt(document.getElementById('computer-score-id').textContent);

    if (playerScore == 5) {
        console.log("Player wins");
        const rockButton = document.getElementById('rock-button');
        rockButton.disabled = true;

        const paperButton = document.getElementById('paper-button');
        paperButton.disabled = true;

        const scissorsButton = document.getElementById('scissors-button');
        scissorsButton.disabled = true;

        displayPlayerWins();
    }

    if (computerScore == 5) {
        console.log("Computer wins");

        const rockButton = document.getElementById('rock-button');
        rockButton.disabled = true;

        const paperButton = document.getElementById('paper-button');
        paperButton.disabled = true;

        const scissorsButton = document.getElementById('scissors-button');
        scissorsButton.disabled = true;
    }
}

function displayPlayerWins() {

}