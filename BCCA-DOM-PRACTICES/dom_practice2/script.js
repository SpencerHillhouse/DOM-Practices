document.addEventListener('DOMContentLoaded', () => {
    const numberElement = document.querySelector('.game_header div[name="number"]');
    const messageElement = document.querySelector('#message');
    const scoreElement = document.querySelector('.score');
    const highscoreElement = document.querySelector('.highscore');
    const guessInput = document.querySelector('.guess');
    const checkBox = document.querySelector('.check');
    const againButton = document.querySelector('.again');

    let secretNumber = Math.floor(Math.random() * 20) + 1;
    let score = 20;
    let highscore = 0;

    function updateMessage(message) {
        messageElement.textContent = message;
    }

    function updateScore(newScore) {
        scoreElement.textContent = newScore;
    }

    function checkGuess(){
        const guess = Number(guessInput.value);

        if (!guess || guess < 1 || guess > 20) {
            updateMessage("Please enter a number between 1 and 20!");
            return;
        };
        if (guess===secretNumber){
            updateMessage("Correct Number!");
            numberElement.textContent = secretNumber;
            numberElement.style.backgroundColor = 'green';
            if (score > highscore) {
                highscore = score;
                highscoreElement.textContent = highscore;
            }
        } else {
            if (score > 1) {
                updateMessage(guess > secretNumber ? "Too high!" : "Too low!");
                score--;
                updateScore(score);
            } else {
                updateMessage("You have lost the game!");
                updateScore(0);
                numberElement.textContent = secretNumber;
                numberElement.style.backgroundColor = 'red';
            };
        };
    };

    function resetGame(){
        secretNumber = Math.floor(Math.random() * 20) + 1;
        score = 20;
        updateScore(score);
        updateMessage("Try the Game!");
    };

    checkBox.addEventListener('click', checkGuess);
    againButton.addEventListener('click', resetGame);
})