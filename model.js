const row1 = [0, 0, 0];
const row2 = [0, 0, 0];
const row3 = [0, 0, 0];

const grid = [row1, row2, row3];

function init() {
    console.log("model kører");
}

function writeToCell(row, col, value) {
    grid[row][col] = value;
}

function readFromCell(row, col) {
    return grid[row][col];
}

function dump() {
    console.log("-------- GAME GRID --------");

    console.table(grid);
}

// TODO: check for winner function - isWinner

export { init, readFromCell, writeToCell, dump };
