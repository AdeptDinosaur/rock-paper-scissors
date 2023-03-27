//Function to obtain computer's choice
function getComputerChoice() {
    let rando = Math.floor(Math.random() * 9);
    if (rando === 0 || rando === 1 || rando === 2) {
        return "paper";
    } else if (rando === 3 || rando === 4 || rando === 5) {
        return "rock";
    } else {
        return "scissors";
    }
}



//Function to play single round of the game with user input
function playRound(playerSelection, computerSelection) {
    
    
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "You both have rock therefore a tie.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You both have paper therefore a tie";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You both have scissors therefore a tie.";
    }



}

//Integration of HTML to provide GUI and changed to first to 5
let playerScore = 0;
let computerScore = 0;
let tie = 0;

const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const selection = document.querySelector('.selection');
        selection.textContent =`Button ${this.textContent} was clicked.`;
        let result = playRound(this.textContent, getComputerChoice());
        if (result.substring(4,7) === "win" ){
            playerScore++;
        } else if (result.substring(4,8) === "lose") {
            computerScore++;
        } else {
            tie++;
        }
        const score = document.querySelector('.score');
        score.textContent = `Results: Player: ${playerScore}, Computer: ${computerScore}, with ties: ${tie}`
        if (playerScore === 5) {
            score.textContent = 'Congratulations, you win first to 5!';
        } else if (computerScore === 5) {
            score.textContent = 'Unfortunately our computer overlords have won the day.';
        }
    });
});




