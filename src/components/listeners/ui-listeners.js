import { k } from "../../kaboom";
import { updatePosition, updateRoomText, updateScoreText } from "../ui";



export function initUpdateUiListener() {

    k.debug.log("init update ui listener");

    // runs all of the tasks to update the ui
    k.onUpdate(() => {
        updateScoreText();
        updatePosition();
        updateRoomText();
    });


}

