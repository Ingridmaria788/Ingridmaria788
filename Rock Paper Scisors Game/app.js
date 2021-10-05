let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function ConvertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ConvertToWord(userChoice)} ${smallUserWord} beats ${ConvertToWord(computerChoice)} ${smallCompWord}. You win!`;
    userChoice_div.classList.add("green_glow");
    setTimeout(() => userChoice_div.classList.remove("green_glow"), 300);
}

function lose(computerChoice, userChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${ConvertToWord(computerChoice)} ${smallCompWord} beats ${ConvertToWord(userChoice)} ${smallUserWord}. You lost...`;
    userChoice_div.classList.add("red_glow");
    setTimeout(() => userChoice_div.classList.remove("red_glow"), 300);

}

function draw(computerChoice, userChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${ConvertToWord(computerChoice)} equals ${ConvertToWord(userChoice)}. Its a draw!`;
    userChoice_div.classList.add("gray_glow");
    setTimeout(() => userChoice_div.classList.remove("gray_glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(computerChoice, userChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(computerChoice, userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();