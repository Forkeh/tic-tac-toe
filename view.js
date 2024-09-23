export { init };

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
}
