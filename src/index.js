import { k } from './kaboom';

import { loadGameSprites } from './helper/sprite-loader.js';
import { mainScene } from './scenes/main';
import { endScreen } from './scenes/end';
import { GAME_SETTINGS } from './config/game';
import { SCENES } from './config/scenes';
import { loadMusic } from './helper/music';
import { startScreen } from './scenes/intro';


// sets the debug settings
k.debug.inspect = GAME_SETTINGS.inspect;
k.debug.showLog = GAME_SETTINGS.showLog;

// loads all of the sprite from the tileset
loadGameSprites();

// defines all of the scenes
k.scene(SCENES.menu, startScreen);
k.scene(SCENES.main, mainScene);
k.scene(SCENES.end, endScreen);


// load the sound files and start the game
loadMusic().then(() => {
    k.go(SCENES.menu);
});
