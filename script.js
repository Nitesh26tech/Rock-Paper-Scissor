const choices = document.querySelectorAll(".choice");

const userChoiceText = document.getElementById("userChoice");
const compChoiceText = document.getElementById("compChoice");
const resultText = document.getElementById("result");

const userScoreText = document.getElementById("userScore");
const compScoreText = document.getElementById("compScore");
const round = document.getElementById("round");
const resetBtn = document.getElementById("resetBtn");

let userScore = 0;
let compScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;

const options = ["ROCK", "PAPER", "SCISSOR"];

choices.forEach(choice => {
    choice.addEventListener("click", () => {

        if (roundsPlayed >= maxRounds) return;

        const userChoice = choice.getAttribute("data-choice");
        const compChoice = options[Math.floor(Math.random() * options.length)];

        roundsPlayed++;
        round.textContent = `Round: ${roundsPlayed} / ${maxRounds}`;

        userChoiceText.textContent = `You :- ${userChoice}`;
        compChoiceText.textContent = `Computer :- ${compChoice}`;

        if (userChoice === compChoice) {
            resultText.textContent = "Result :- Draw 🤝";
        }
        else if (
            (userChoice === "ROCK" && compChoice === "SCISSOR") ||
            (userChoice === "PAPER" && compChoice === "ROCK") ||
            (userChoice === "SCISSOR" && compChoice === "PAPER")
        ) {
            resultText.textContent = "Result :- You Win 🎉";
            userScore++;
            userScoreText.textContent = userScore;
        }
        else {
            resultText.textContent = "Result :- You Lose 😢";
            compScore++;
            compScoreText.textContent = compScore;
        }
        if (roundsPlayed === maxRounds) {
            if (userScore > compScore) {
                resultText.textContent = "🏆 Final Winner: You 🎉";
            } else if (compScore > userScore) {
                resultText.textContent = "🏆 Final Winner: Computer 🤖";
            } else {
                resultText.textContent = "🏆 Match Draw 🤝";
            }
            resetBtn.style.display = "inline-block";
        }
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    roundsPlayed = 0;

    userScoreText.textContent = 0;
    compScoreText.textContent = 0;
    round.textContent = "Round: 0 / 10";
    resultText.textContent = "Result :-";
    resetBtn.style.display = "none";
});
