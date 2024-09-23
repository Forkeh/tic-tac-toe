import * as view from "./view.js";
import * as model from "./model.js";

// TODO: Global player variable

init();

function init() {
    console.log("controller klar");
    view.init();
    model.init();
    window.model = model; // Hacky way to access model in console for testing
}

function setCell(row, col) {
    model.writeToCell(row, col, 1);
    model.dump();
    view.displayBoard(model);
}

export { setCell };
