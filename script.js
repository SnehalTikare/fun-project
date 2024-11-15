{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    const startForm = document.getElementById('start-form');\
    const landingPage = document.getElementById('landing');\
    const gameBoard = document.getElementById('game-board');\
    const currentPlayerDisplay = document.getElementById('current-player');\
    const board = document.getElementById('board');\
    const cells = document.querySelectorAll('.cell');\
    \
    let currentPlayer = 'pink';\
    \
    // Start the game when the form is submitted\
    startForm.addEventListener('submit', (event) => \{\
        event.preventDefault();\
        landingPage.style.display = 'none';\
        gameBoard.style.display = 'block';\
        currentPlayerDisplay.textContent = 'Pink';  // Show the initial player\
    \});\
\
    // Game functionality\
    cells.forEach(cell => \{\
        cell.addEventListener('click', () => \{\
            if (!cell.classList.contains('pink') && !cell.classList.contains('blue')) \{\
                cell.classList.add(currentPlayer);\
                currentPlayer = currentPlayer === 'pink' ? 'blue' : 'pink';\
                currentPlayerDisplay.textContent = currentPlayer === 'pink' ? 'Pink' : 'Blue';\
                checkWinner();\
            \}\
        \});\
    \});\
\
    function checkWinner() \{\
        // Define winning patterns and check for a winner\
        const winPatterns = [\
            [0, 1, 2], [3, 4, 5], [6, 7, 8],\
            [0, 3, 6], [1, 4, 7], [2, 5, 8],\
            [0, 4, 8], [2, 4, 6]\
        ];\
        \
        winPatterns.forEach(pattern => \{\
            const [a, b, c] = pattern;\
            if (cells[a].classList.contains('pink') &&\
                cells[b].classList.contains('pink') &&\
                cells[c].classList.contains('pink')) \{\
                displayWinner('pink');\
            \}\
            if (cells[a].classList.contains('blue') &&\
                cells[b].classList.contains('blue') &&\
                cells[c].classList.contains('blue')) \{\
                displayWinner('blue');\
            \}\
        \});\
    \}\
\
    function displayWinner(color) \{\
        alert(`The gender reveal is... $\{color === 'pink' ? 'Girl' : 'Boy'\}!`);\
        // Add confetti or animation logic here\
    \}\
\});\
}