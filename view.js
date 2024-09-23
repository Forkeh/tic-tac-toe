import * as controller from "./controller.js";

function init() {
    console.log("view kører");

    const allCells = document.querySelectorAll(".cell");

    allCells.forEach((cell) => cell.addEventListener("click", clickCell));
}

function clickCell(event) {
    const cell = event.target;

    const row = cell.dataset.row;
    const col = cell.dataset.col;

    console.log(`clicked row: ${row} col: ${col}`);

    controller.setCell(row, col);
}

function displayBoard(model) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let value = model.readFromCell(row, col);

            const visualCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            if (value === 1) {
                value = "X";
                visualCell.removeEventListener("click", clickCell);
                visualCell.style.pointerEvents = "none";
            } else if (value === 2) {
                value = "O";
                visualCell.removeEventListener("click", clickCell);
                visualCell.style.pointerEvents = "none";
            } else {
                value = "";
            }

            visualCell.textContent = value;
        }
    }
}

function displayCurrentPlayer(player) {
    document.querySelector(".player").textContent = player;
}

function endGame(isThereWinner, player) {
    const allCells = document.querySelectorAll(".cell");

    allCells.forEach((cell) => {
        cell.removeEventListener("click", clickCell);
        cell.style.pointerEvents = "none";
    });

    let endOfGameText;

    if (!isThereWinner) {
        endOfGameText = "Game is a draw!";
    } else {
        endOfGameText = `Player ${player} won the game!`;
    }
    document.querySelector(".end-state").textContent = endOfGameText;
}

export { init, clickCell, displayBoard, displayCurrentPlayer, endGame };
