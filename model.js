const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [7, 8, 9];

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
    // for (let i = 0; i < grid.length; i++) {
    //     const row = grid[i];
    //     for (let j = 0; j < row.length; j++) {
    //         const element = row[j];
    //         console.log(element);
    //     }
    // }
    console.log("-------- GAME GRID --------");

    console.table(grid);
}

export { init, readFromCell, writeToCell, dump };
