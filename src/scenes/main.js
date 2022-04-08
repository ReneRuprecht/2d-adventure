import { initListener } from "../components/init-listeners";
import { initUi } from "../components/ui";
import { k } from "../kaboom";
import { generateLevel } from "../helper/generate-level";


export function mainScene(level) {

    // sets layers
    k.layers(['bg', 'obj', 'ui'], 'bg');
    // loads the level and spawns objects
    generateLevel(level);
    // loads the ui
    initUi();
    // loads all listerns
    initListener();

}
