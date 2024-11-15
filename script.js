document.addEventListener('DOMContentLoaded', () => {
    const startForm = document.getElementById('start-form');
    const landingPage = document.getElementById('landing');
    const gameBoard = document.getElementById('game-board');
    const currentPlayerDisplay = document.getElementById('current-player');
    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    
    let currentPlayer = 'pink';
    
    // Start the game when the form is submitted
    startForm.addEventListener('submit', (event) => {
        event.preventDefault();
        landingPage.style.display = 'none';
        gameBoard.style.display = 'block';
        currentPlayerDisplay.textContent = 'Pink';  // Show the initial player
    });

    // Game functionality
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.classList.contains('pink') && !cell.classList.contains('blue')) {
                cell.classList.add(currentPlayer);
                currentPlayer = currentPlayer === 'pink' ? 'blue' : 'pink';
                currentPlayerDisplay.textContent = currentPlayer === 'pink' ? 'Pink' : 'Blue';
                checkWinner();
            }
        });
    });

    function checkWinner() {
        // Define winning patterns and check for a winner
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        
        winPatterns.forEach(pattern => {
            const [a, b, c] = pattern;
            if (cells[a].classList.contains('pink') &&
                cells[b].classList.contains('pink') &&
                cells[c].classList.contains('pink')) {
                displayWinner('pink');
            }
            if (cells[a].classList.contains('blue') &&
                cells[b].classList.contains('blue') &&
                cells[c].classList.contains('blue')) {
                displayWinner('blue');
            }
        });
    }

    function displayWinner(color) {
        alert(`The gender reveal is... ${color === 'pink' ? 'Girl' : 'Boy'}!`);
        // Add confetti or animation logic here
    }
});
