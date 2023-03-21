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
console.log(getComputerChoice());
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

let userPlay = prompt("Please select rock, paper, or scissors");
userPlay = userPlay.toLowerCase();
let compPlay = getComputerChoice();
console.log(playRound(userPlay, compPlay));

//Game function to include 5 rounds of a single game