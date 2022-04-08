import { createEnemyAtPosition } from "../objects/enemy";
import { createPlayerAtPosition } from "../objects/player";
import { createWeaponAtPosition } from "../objects/weapon";
import { enemyOptions } from "../config/enemies"

// spawns a player at a given position from the player config
export function spawnPlayer(playerPosCfg) {
    return createPlayerAtPosition(playerPosCfg.x, playerPosCfg.y);
}

// spawns weapon at a given position and type
export function spawnWeapons(weapons) {
    // if there are no weapons, return
    if (weapons == null || weapons.length == 0) { return; }

    for (let weapon in weapons) {
        createWeaponAtPosition(
            weapons[weapon].x,
            weapons[weapon].y,
            weapons[weapon].type);
    }

}

// spawns enemies at a given position and type
export function spawnEnemies(enemys) {

    if (enemys == null || enemys.length == 0) { return; }

    for (let enemy in enemys) {

        const options = enemyOptions[enemys[enemy].type];

        createEnemyAtPosition(
            enemys[enemy].x,
            enemys[enemy].y,
            enemys[enemy].type,
            options ? options : null);
    }
}