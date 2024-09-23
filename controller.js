import * as view from "./view.js";
import * as model from "./model.js";

let player = 1;
let turn = 1;

init();

function init() {
    console.log("controller klar");
    view.init();
    model.init();
    window.model = model; // Hacky way to access model in console for testing
    view.displayBoard(model);
}

function updateGameState() {
    view.displayBoard(model);

    const isThereWinner = model.isThereWinner(player);

    if (isThereWinner || turn >= 9) {
        view.endGame(isThereWinner, player);
    } else {
        changePlayer();
        turn++;
        view.displayCurrentPlayer(player);
    }
}

function setCell(row, col) {
    model.writeToCell(row, col, player);
    model.dump();
    updateGameState();
}

function changePlayer() {
    if (player === 1) {
        player = 2;
    } else {
        player = 1;
    }
}

export { setCell, player };
