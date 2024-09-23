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

function isThereWinner(player) {
    // Horizontal
    if (grid[0][0] === player && grid[0][1] === player && grid[0][2] === player) return true;
    if (grid[1][0] === player && grid[1][1] === player && grid[1][2] === player) return true;
    if (grid[2][0] === player && grid[2][1] === player && grid[2][2] === player) return true;
    // Vertical
    if (grid[0][0] === player && grid[1][0] === player && grid[2][0] === player) return true;
    if (grid[0][1] === player && grid[1][1] === player && grid[2][1] === player) return true;
    if (grid[0][2] === player && grid[1][2] === player && grid[2][2] === player) return true;
    // Diagonally
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) return true;
    if (grid[2][0] === player && grid[1][1] === player && grid[0][2] === player) return true;
}

export { init, readFromCell, writeToCell, dump, isThereWinner };
