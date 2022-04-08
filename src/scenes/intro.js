import { k } from '../kaboom';
import { resetStorage, storage } from '../helper/storage';
import { MENU_CONTENT } from '../config/text-content';
import { SCENES } from '../config/scenes';
import { getBackgroundMusic } from '../helper/music';


export function startScreen() {

    // Background
    k.add([rect(k.width(), k.height()), pos(0, 0), color(34, 34, 34)]);


    k.add([
        k.pos(k.width() * 0.15, k.height() * 0.2),
        k.text(MENU_CONTENT.description_heading, {
            size: 55,
        }),
        color(rgb(255, 255, 255)),
        k.origin('center'),
    ]);


    // Keybinds text
    k.add([
        text(MENU_CONTENT.description_text, {
            size: 40,
        }),
        color(rgb(255, 255, 255)),
        k.origin('left'),
        k.pos(k.width() * 0.03, k.height() * 0.4),

    ]);





    // Keybinds text heading
    k.add([
        k.pos(k.width() * 0.80, k.height() * 0.2),
        k.text(MENU_CONTENT.keybind_text_heading, {
            size: 55,
        }),
        color(rgb(255, 255, 255)),
        k.origin('center'),
    ]);

    // Keybinds text
    k.add([
        text(MENU_CONTENT.keybind_text, {
            size: 55,
        }),
        color(rgb(255, 255, 255)),
        k.origin('left'),
        k.pos(k.width() * 0.68, k.height() * 0.5),

    ]);



    const startButtonText = k.add([
        text(MENU_CONTENT.startButtonText, 3),
        color(rgb(255, 255, 255)),
        k.origin('center'),
        k.pos(k.width() * 0.5, k.height() * 0.85),
        {
            width: this.width,
            height: this.height,
        },
        z(2),

    ]);

    const startButton = k.add([
        k.pos(startButtonText.pos.x, startButtonText.pos.y),
        k.rect(startButtonText.width * 1.5,
            startButtonText.height * 1.5),
        k.origin('center'),
        k.color(1, 1, 1),
        area(),
        k.outline(2, YELLOW),

    ]);


    // starts the game and the music
    startButton.onClick(() => {
        resetStorage(storage)
        k.go(SCENES.main, storage.level);
        getBackgroundMusic().play()

    });
}
