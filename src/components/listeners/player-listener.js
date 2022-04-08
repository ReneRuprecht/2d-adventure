
import { k } from '../../kaboom.js';
import { touchedWeapon } from './weapon-listener.js';
import { attackWeapon, createWeaponAtPosition, createWeaponForPlayer, getWeapon, resetWeaponAngle } from '../../objects/weapon.js';
import { storage, tempStorage } from '../../helper/storage.js';
import { SCENES } from '../../config/scenes.js';
import { KEYBINDS } from '../../config/keybinds.js';
import { getSwoosh, getTakeDmg } from '../../helper/music.js';




export function initPlayerControlListener(player) {

    k.debug.log("init player control listener");

    k.onUpdate(() => {
        movement();
        weaponPickUp();
        updateWeaponPosition();
        updateCameraToPlayerPos();
        attack();

    });

    /**
     * if the player gets hurt by an enemy,
     * a sound gets played and the players opacity gets reduced.
     * the health gets updated in the tempstorage
     */
    k.on("hurt", "player", (player) => {
        if (player.isAttackable) {
            getTakeDmg().play();
            k.debug.log("player hp: " + player.hp())
            player.opacity = 0.5;
            player.damageCooldown(1500);
            tempStorage.health -= 1;
        }

        player.isAttackable = false;
    })


    // if the player dies, the screen switches to the end screen
    k.on("death", "player", () => {
        k.go(SCENES.end);
    })


    // update weapon to follow player
    function updateWeaponPosition() {
        const weapon = getWeapon();

        if (weapon != null) {
            weapon.updatePosition();
        }
    }


    // sets the camera to the player position
    function updateCameraToPlayerPos() {
        camPos(player.pos);
    }


    /**
     * handles the attacking of the player.
     * plays the sound, moves the weapon
     */
    function attack() {

        const space = isKeyDown(KEYBINDS.attack);

        if (tempStorage.player_weapon == null && storage.player_weapon == null) { return; }

        if (space) {

            player.isAttacking = true;
            getSwoosh().play();
            setTimeout(function () {

                attackWeapon();
            }, getWeapon().damageCooldown);
        }
        else {
            getSwoosh().stop();
            player.isAttacking = false;
            resetWeaponAngle();

        }
    }

    /**
     * handles the movement of the player.
     * flips the player sprite if the x-cord gets changed.
     * plays the run and the idle animation if a key is pressed or not
     */
    function movement() {
        const left = isKeyDown(KEYBINDS.left);
        const right = isKeyDown(KEYBINDS.right);
        const up = isKeyDown(KEYBINDS.up);
        const down = isKeyDown(KEYBINDS.down);

        if (left || right || up || down) {
            if (player.currentAnimation != 'run') {
                player.currentAnimation = 'run';
                player.play(player.currentAnimation);
            }

            if (left || right) {
                player.flipX(left);
                left ? player.move(-player.speed, 0) : player.move(player.speed, 0);
                left ? player.facing = -1 : player.facing = 1;
            }

            if (up || down) {
                up ? player.move(0, -player.speed) : player.move(0, player.speed);
            }
        }


        if (!left && !right && !up && !down) {
            if (player.currentAnimation != 'idle') {
                player.currentAnimation = 'idle';
                player.play(player.currentAnimation);
            }
        }
    }


    /**
     * handles the assigning of a weapon to a player.
     * destroys the weapon on the map if the player pressed the use key
     * and spawns a new one for the player
     * 
     */
    function weaponPickUp() {
        const e = isKeyPressed(KEYBINDS.use);
        if (!touchedWeapon) {
            return;
        }


        if (player.isTouching(touchedWeapon)) {
            k.debug.log("touches weapon")
            if (e) {

                touchedWeapon.destroy();
                const weapon = getWeapon();

                // if the player had a weapon, the weapon gets played to the map
                if (weapon) {
                    createWeaponAtPosition(
                        weapon.pos.x,
                        weapon.pos.y,
                        weapon.name)
                    weapon.destroy();
                }

                const weaponForPlayer = createWeaponForPlayer(player, touchedWeapon, touchedWeapon.options);

                /**
                 * sets the weapon to the tempstorage, because
                 * if the player dies, the weapon should not be loaded
                 * if the player restarts the level
                 */
                tempStorage.player_weapon = weaponForPlayer;

                k.debug.log("picked up weapon - " + touchedWeapon.name);
            }
        }
    }

}
