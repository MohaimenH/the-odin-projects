const computerPlay = () => {
    let options = ['rock', 'paper', 'scissors'];

    return options[(Math.floor(Math.random() * 3))];
}

const playRound = (playerSelectionCaps, computerSelection) => {
    let playerSelection = playerSelectionCaps.toLowerCase();
    let result = "";

    if (playerSelection === computerSelection) {
        // return 'Draw!';
        return 2; // 2 means Draw
    }

    if (playerSelection == 'rock') {
        // result = (computerSelection === 'paper') ? "You Lose! Paper beats Rock." : "You Win! Rock beats Scissors."
        result = (computerSelection === 'paper') ? 0 : 1
        return result;
    }

    if (playerSelection == 'paper') {
        // result = (computerSelection === 'scissors') ? "You Lose! Scissors beats Paper." : "You Win! Paper beats Rock."
        result = (computerSelection === 'scissors') ? 0 : 1
        return result;
    }

    if (playerSelection == 'scissors') {
        // result = (computerSelection === 'rock') ? "You Lose! Rock beats Scissors." : "You Win! Scissors beats Paper."
        result = (computerSelection === 'rock') ? 0 : 1
        return result;
    }
}

const game = () => {
    let score = [0,0,0]; // First index is computer's wins. Second index is player's wins. Third is draw index.
    let result = "Ended with a draw!"
    for (let i = 0; i < 5; i++) {
        let usrInput = prompt("Choose one:");
        let computerInput = computerPlay();

        console.log(usrInput);
        console.log(computerInput);
        let round = playRound(usrInput, computerInput)

        if (round === 0) {
            console.log("Computer Wins This Round!")
        }

        else if (round === 1) {
            console.log("You Win This Round!")
        }

        else {
            console.log("Draw!")
        }

        score[round]++;
    }

    if (score[0] > score[1]){
        result =  "Computer Wins";
    } 

    else if (score[0] < score[1]) {
        result = "Player Wins";
    }

    console.log(result);

}

game();