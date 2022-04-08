import { LEVEL_CFGS } from "../config/level-cfgs"
import { setBackground } from "./background";
import { loadMap } from "./map-loader"
import { spawnEnemies, spawnPlayer, spawnWeapons } from "./spawner";
import { storage } from "./storage";
import { k } from "../kaboom"
import { createWeaponForPlayer } from "../objects/weapon";

/**
 * generates the whole level.
 * loads the map, spawns all of the objects that are in the level config
 * and sets the background ( current a black background )
 */

export const generateLevel = (level) => {
    k.debug.log("generate level");
    loadMap(LEVEL_CFGS[level].map, LEVEL_CFGS[level]);

    storage.player = spawnPlayer(LEVEL_CFGS[level].player_pos);

    /* checks if the player had a weapon. 
     * if so, the player gets the old weapon from the storage object
    */
    storage.player_weapon ? createWeaponForPlayer(storage.player,
        storage.player_weapon,
        storage.player_weapon.options) : null;

    spawnEnemies(LEVEL_CFGS[level].enemies);

    spawnWeapons(LEVEL_CFGS[level].weapons);

    setBackground(LEVEL_CFGS[level].background,
        storage.player);


}