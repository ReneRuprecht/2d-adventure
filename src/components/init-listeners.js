import { k } from "../kaboom"
import { storage } from "../helper/storage";
import { initEnemyListener } from "./listeners/enemy-listener";
import { initMapChangeListener } from "./listeners/level-change-listener";
import { initPlayerControlListener } from "./listeners/player-listener";
import { initUpdateUiListener } from "./listeners/ui-listeners";
import { initWeaponListener } from "./listeners/weapon-listener";

// loads all of the needed listeners
export function initListener() {
    k.debug.log("init listeners");

    initWeaponListener();

    initPlayerControlListener(storage.player);

    initMapChangeListener()

    initEnemyListener();

    initUpdateUiListener();

}

