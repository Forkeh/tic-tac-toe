import * as view from "./view.js";
import * as model from "./model.js";

init();

function init() {
    console.log("controller klar");
    view.init();
    model.init();
    window.model = model; // Hacky way to access model in console
}
