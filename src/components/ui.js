import { UI_CONTENT } from "../config/text-content";
import { storage, tempStorage } from "../helper/storage";
import { k } from "../kaboom"



export function initUi() {

    //init hearts for storage objects
    if (storage.health == 0) {
        storage.health = storage.player.hp();
    }
    if (tempStorage.health == 0) {
        tempStorage.health = storage.player.hp();
    }

    //creates heart container
    for (let i = 0; i < storage.health; i++) {
        k.add([
            k.layer("ui"),
            k.pos(16 * i, 0),
            k.origin("center"),
            k.sprite("hearth_full"),
            k.opacity(1),
            "player-healthbar"
        ]);
    }

    // creates score label
    const scoreLabel = k.add([
        k.layer("ui"),
        k.pos(16 * storage.health, 0),
        k.origin("center"),
        text(UI_CONTENT.score + "0"),
        {
            size: 5,
            width: 3,
            font: "sink",
        },
        "scoreLabelText"
    ]);

    // creates room label
    k.add([
        k.layer("ui"),
        k.pos(0, -20),
        k.origin("center"),
        text(UI_CONTENT.room + "0"),
        {
            size: 5,
            width: 3,
            font: "sink",
        },
        "roomLabelText"
    ]);

    // if the player gets hurt, call the update function
    k.on("hurt", "player", (player) => {
        updatePlayerHealthbar(player.hp());
    });

}

// updates text as well as position
export function updateScoreText() {

    const scoreLabel = k.get('scoreLabelText')[0];
    scoreLabel.pos.x = 16 * (storage.player.hp() + 3);
    scoreLabel.text = UI_CONTENT.score + (storage.score + tempStorage.score);
}

// updates text as well as position
export function updateRoomText() {

    const heart = k.get('player-healthbar')[0];

    const roomLabel = k.get('roomLabelText')[0]
    if (roomLabel == null || heart == null) { return; }

    roomLabel.pos.x = heart.pos.x + 16;
    roomLabel.pos.y = heart.pos.y - 20;

    roomLabel.text = UI_CONTENT.room + storage.level;
}

// displays the current health of the player
export function updatePlayerHealthbar(health) {
    const playerHearth = k.get('player-healthbar')[health];
    if (playerHearth) {
        playerHearth.opacity = 0;
    }

}

// updates the position of the helathbar and the scorelabel
export function updatePosition() {
    const scoreLabel = k.get('scoreLabelText')[0];
    for (let i = 0; i < storage.player.hp(); i++) {
        const heart = k.get('player-healthbar')[i];
        // check if a heart is visible 
        try {
            if (heart.opacity != 0) {
                heart.pos.x = (16 * i) + storage.player.pos.x - 16;
            }
        }
        catch (e) {
            k.debug.log(heart);
        }

    }
    // sets the position of the scorelabel
    scoreLabel.pos.x = 16 * (storage.player.hp() + 1) + storage.player.pos.x;
}
