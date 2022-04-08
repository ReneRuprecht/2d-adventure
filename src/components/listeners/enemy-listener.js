
import { getHitmarker } from "../../helper/music";
import { storage, tempStorage } from "../../helper/storage";
import { k } from "../../kaboom";

export function initEnemyListener() {
    k.debug.log("init enemy listener");


    /**
     * if an enemy dies, the enemy gets destroyed
     * and the score of the enemy gets added to the tempstorage
     */
    k.on("death", "enemy", (enemy) => {
        enemy.destroy()
        tempStorage.score += enemy.score;

    })


    /**
     * if an enemy gets hurt, a sound gets played,
     * the solid property gets removed (so the player can move through it)
     * the opacity gets lowerd to indicate the damage.
     * the enemy gets marked so it can't take damage in a given timespan
     */
    k.on("hurt", "enemy", (enemy) => {
        if (enemy.isAttackable) {
            getHitmarker().play();
            enemy.solid = false;
            enemy.opacity = 0.5;
            enemy.damageCooldown(1000);
        }

        enemy.isAttackable = false;
    });


    // setting facing value for knockback
    k.onUpdate("enemy", (enemy) => {
        enemy.moveTo(storage.player.pos, enemy.speed);
        if (enemy.pos.x > storage.player.pos.x) {
            enemy.facing = -1; // left
        }
        else {
            enemy.facing = 1; // right
        }
        // resets the solid variable
        if (enemy.isAttackable) {
            enemy.solid = true;
        }
    });



    // enemy deals damage to player
    k.onUpdate("enemy", (enemy) => {

        const player = storage.player;

        if (enemy.isTouching(player)) {
            if (player.isAttackable) {
                /**
                 * if the enemy deals more than 1 damage, 
                 * the hurt function needs to be call multiple times. 
                 * its required to check if the player has still
                 * remaining health left to prevent a negative health
                 * amount
                 * 
                 */
                for (let i = 0; i < enemy.damage; i++) {
                    if (player.hp() > 0) {
                        player.hurt(1);
                    }
                }
            }
        }


    });

    /**
     * if the enemies collide with each other, an enemy gets 
     * the solid property removed. with that missing solid property
     * the enemies can move freely. the property gets set again
     *  in an other function.
     */
    k.onCollide("enemy", "enemy", (enemy) => {
        enemy.solid = false;
    });

}