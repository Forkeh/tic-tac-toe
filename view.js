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
            const value = model.readFromCell(row, col);

            console.log(`row ${row} col ${col} val ${value}`);

            const visualCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

            // TODO: if statemement hvor tal laves til X / O
            visualCell.textContent = value;
        }
    }
}

export { init, clickCell, displayBoard };
