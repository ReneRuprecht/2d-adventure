import { k } from '../kaboom';
import { resetStorage, restartLevelStorage, storage, tempStorage } from '../helper/storage';
import { END_SCREEN_CONTENT } from '../config/text-content';
import { SCENES } from '../config/scenes';
import { getBackgroundMusic } from '../helper/music';



export function endScreen() {
    getBackgroundMusic().stop();

    // get remaining hearts
    const health = storage.player.hp();

    // get current score
    const score = storage.score + tempStorage.score;

    const result = score + health;

    // Background
    k.add([rect(k.width(), k.height()), pos(0, 0), color(34, 34, 34)]);


    if (health > 0) {
        k.add([
            k.pos(k.width() * 0.5, k.height() * 0.1),
            k.text(END_SCREEN_CONTENT.winning_text, 2),
            color(rgb(255, 255, 255)),
            k.origin('center'),
        ]);
    }


    // Score text
    k.add([
        k.pos(k.width() * 0.5, k.height() * 0.25),
        k.text(END_SCREEN_CONTENT.score_text + score, 2),
        color(rgb(255, 255, 255)),
        k.origin('center'),
    ]);

    // Remaining health text
    k.add([
        k.pos(k.width() * 0.5, k.height() * 0.4),
        k.text(END_SCREEN_CONTENT.health_text + health, 2),
        color(rgb(255, 255, 255)),
        k.origin('center'),
    ]);

    // Points text
    k.add([
        k.pos(k.width() * 0.5, k.height() * 0.55),
        k.text(END_SCREEN_CONTENT.points_text + result, 2),
        color(rgb(255, 255, 255)),
        k.origin('center'),
    ]);


    const newGameButtonText = k.add([
        text(END_SCREEN_CONTENT.newGameButtonText, {
            size: 50
        }),
        color(rgb(255, 255, 255)),
        k.origin('center'),
        k.pos(k.width() * 0.25, k.height() * 0.8),
        {
            width: this.width,
            height: this.height,
        },
        z(2)

    ]);

    const newGameButton = k.add([
        k.pos(newGameButtonText.pos.x, newGameButtonText.pos.y),
        k.rect(newGameButtonText.width * 1.2,
            newGameButtonText.height * 1.2),
        k.origin('center'),
        k.color(1, 1, 1),
        area(),
        k.outline(2, YELLOW),

    ]);

    newGameButton.onClick(() => {
        resetStorage(storage)
        resetStorage(tempStorage)
        storage.backgroundMusicPlayer.play();
        k.go(SCENES.main, storage.level);
    });


    // if health is greater than 0, the player shouldn't be able to restart the level
    if (health != 0) {
        return;
    }

    const restartButtonText = k.add([
        text(END_SCREEN_CONTENT.restartButtonText, {
            size: 50
        }),
        color(rgb(255, 255, 255)),
        k.origin('center'),
        k.pos(k.width() * 0.75, k.height() * 0.8),
        {
            width: this.width,
            height: this.height,
        },
        z(2),

    ]);



    const restartButton = k.add([
        k.pos(restartButtonText.pos.x, restartButtonText.pos.y),
        k.rect(restartButtonText.width * 1.2,
            restartButtonText.height * 1.2),
        k.origin('center'),
        k.color(1, 1, 1),
        area(),
        k.outline(2, YELLOW),

    ]);

    restartButton.onClick(() => {
        restartLevelStorage(tempStorage, storage);
        storage.backgroundMusicPlayer.play();
        k.go(SCENES.main, storage.level);
    });





}
