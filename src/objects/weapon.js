import { GAME_SETTINGS } from '../config/game';
import { k } from '../kaboom';
import { weaponOptions } from '../config/weapons';

export const createWeaponForPlayer = (
    player,
    weapon,
    options,
) => {

    const weaponForPlayer = k.add([
        sprite(weapon.name),
        pos(weapon.pos = player.pos.add(1 * 10, 2)),
        origin('center'),
        area(),
        rotate(25),
        scale(GAME_SETTINGS.scaling),
        'player-weapon',
        weapon.name,
        {
            name: weapon.name,
            options: options,
            damage: options ? options.damage : 1,
            knockback: options ? options.knockback : 0,
            tag: 'weapon',
            isAttacking: false,
            canAttack: true,
            updatePosition: () => {

                // -1 links
                //  1 rechts

                weaponForPlayer.pos = player.pos.add(10 * player.facing, 2);
                if (player.facing == -1 && !weaponForPlayer.flipX) {
                    weaponForPlayer.flipX = true;
                    weaponForPlayer.angle = weaponForPlayer.angle * player.facing;
                }
                else if (player.facing == 1 && weaponForPlayer.flipX) {
                    weaponForPlayer.flipX = false;
                    weaponForPlayer.angle = Math.abs(weaponForPlayer.angle);

                }

            },
            attack: () => {

                // const flip = player.xFlipped ? -1 : 1

                if (Math.abs(weaponForPlayer.angle) >= 90) {
                    weaponForPlayer.angle = 25 * player.facing;
                    weaponForPlayer.canAttack = false;
                    weaponCooldown(weaponForPlayer, options ? options.cooldown : 100);
                }

                if (weaponForPlayer.canAttack) {
                    weaponForPlayer.angle += 10 * player.facing;
                    player.isAttacking = true;
                    weaponForPlayer.isAttacking = true;
                }

            }
        },

    ]);

    return weaponForPlayer;
};


// resets the capability to attack again after given seconds
export function weaponCooldown(weapon, seconds) {
    setTimeout(function () {
        weapon.canAttack = true;
    }, seconds);
}


export function createWeaponAtPosition(x, y, type, scaling) {
    k.add([
        sprite(type),
        pos(x, y),
        origin('center'),
        area(),
        scale(scaling ? scaling : GAME_SETTINGS.scaling),
        "weapon",
        {
            name: type,
            options: weaponOptions[type],
        },
    ]);

}

// returns the current weapon of the player
export function getWeapon() {

    return k.get('player-weapon')[0];
}

export function attackWeapon() {
    const weapon = getWeapon();
    if (!weapon) { return };

    weapon.attack();

}

// resets the displayed angle of the weapon to the default angle
export function resetWeaponAngle() {
    const weapon = getWeapon();
    if (!weapon) { return };

    const flip = weapon.flipX ? -1 : 1
    weapon.angle = 25 * flip;

    weapon.isAttacking = false;
}