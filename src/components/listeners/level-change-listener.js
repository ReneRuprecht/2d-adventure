
import { KEYBINDS } from '../../config/keybinds.js';
import { LEVEL_CFGS } from '../../config/level-cfgs.js';
import { SCENES } from '../../config/scenes.js';
import { resetTempStorage, storage, tempStorage } from '../../helper/storage.js';

import { k } from '../../kaboom.js';


/**
 * the function gets used to change the map.
 * checks if the player is at a object to change the map
 * if the player pressed the use button, the score, 
 * health and weapon gets saved from the tempstorage to the storage.
 * if it was the last map, the game ends.
 * otherwise the next map gets loaded
 * 
 */
export function initMapChangeListener() {

    k.debug.log("init level change listener");

    k.onUpdate("player", (player) => {

        try {
            const nextLeveLObjects = k.get("next-level");
            // check if player is at the object to change map
            for (let nextLevelId in nextLeveLObjects) {
                if (player.isTouching(nextLeveLObjects[nextLevelId])) {
                    k.debug.log("can switch to next level");

                    if (keyIsDown(KEYBINDS.use)) {

                        storage.score += tempStorage.score;
                        if (tempStorage.player_weapon != null) {
                            storage.player_weapon = tempStorage.player_weapon;
                        }
                        storage.health = tempStorage.health;

                        resetTempStorage(tempStorage);

                        if (storage.level == LEVEL_CFGS.length - 1) {
                            k.go(SCENES.end);
                            return;
                        }
                        k.go(SCENES.main, storage.level += 1);

                    }
                }
            }

        } catch (e) {
            k.debug.log(e);
        }

    });


}