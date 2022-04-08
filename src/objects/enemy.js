
import { GAME_SETTINGS } from "../config/game.js";
import { getHitmarker } from "../helper/music.js";
import { k } from "../kaboom.js";

export const createEnemyAtPosition = (
    x,
    y,
    type,
    options) => {
    k.debug.log("create enemy: " + type);
    const enemy = k.add([
        k.sprite(type),
        k.pos(x, y),
        k.origin('center'),
        k.area(),
        health(options.health ? options.health : 3),
        k.solid(),
        {
            name: type,
            options: options,
            isAttacking: false,
            isAttackable: true,
            speed: options ? options.speed : 20,
            damage: options ? options.damage : 1,
            currentAnimation: "idle",
            weapon: null,
            XFlipped: false,
            score: options ? options.score : 1,
            facing: -1,
            damageCooldown: (seconds) => {
                setTimeout(function () {
                    enemy.isAttackable = true;
                    enemy.opacity = 1
                    enemy.solid = true;
                    getHitmarker().stop()
                }, seconds);
            },

        },
        "enemy",
        k.scale(options.isBoss ? GAME_SETTINGS.scaling + 1 : GAME_SETTINGS.scaling),
        k.area(),


    ]);
    enemy.play(enemy.currentAnimation);



    return enemy;
}
