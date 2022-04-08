import { k } from "../../kaboom";



export function initWeaponListener() {

    k.debug.log("init weapon listener");

    touchedWeapon = null;

    /**
     * assign the collided weapon to a variable.
     * this is needed to assign the weapon to a player
     */
    k.onCollide("weapon", "player", (weapon) => {
        touchedWeapon = weapon;

    });


    /**
     * is needed to check if the weapon is hitting an enemy.
     * if the weapon is hitting an enemy, 
     * the hurt function of the enemy gets triggered.
     * 
     */
    k.onUpdate('player-weapon', (weapon) => {

        const enemys = k.get('enemy');

        if (enemys.length == 0) { return; }

        for (let enemyId in enemys) {
            const enemy = enemys[enemyId];
            if (weapon.isTouching(enemy) && weapon.isAttacking) {

                if (enemy.isAttackable) {
                    enemy.hurt(weapon.damage);
                    const knockback = weapon.knockback * 16;

                    /**
                     * checks in which direction the enemy is facing
                     * to knockback in the right direction
                      */
                    if (enemy.facing == -1) {
                        enemy.pos.x += knockback;
                    }
                    else {
                        enemy.pos.x -= knockback;
                    }
                }

            }
        }

    })

}

export let touchedWeapon;