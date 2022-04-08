import { GAME_SETTINGS } from "../config/game.js";
import { PLAYER } from "../config/player.js";
import { getTakeDmg } from "../helper/music.js";
import { storage } from "../helper/storage.js";
import { k } from "../kaboom.js";

export const createPlayerAtPosition = (x, y) => {
    k.debug.log("create player")
    const player = k.add([
        k.sprite("knight"),
        k.pos(x, y),
        k.origin('center'),
        k.area(),
        health(
            // check if health is inside storage to update from another screen
            storage.health == 0 ? PLAYER.health : storage.health
        ),
        {
            isAttacking: false,
            isAttackable: true,
            speed: 100,
            currentAnimation: "idle",
            health: 3,
            weapon: null,
            facing: 1,

            damageCooldown: (seconds) => {
                setTimeout(function () {
                    player.isAttackable = true;
                    player.opacity = 1
                    getTakeDmg().stop();
                }, seconds);
            }
        },
        "player",
        k.scale(GAME_SETTINGS.scaling),
        k.area(),
        k.solid(),
        z(9),

    ]);
    player.play(player.currentAnimation);

    return player;
}


// returns current player object
export default function getPlayer() {

    return k.get('player')[0];
}








