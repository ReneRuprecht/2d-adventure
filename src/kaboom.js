import kaboom from "kaboom";
import { GAME_SETTINGS } from "./config/game";
import { KABOOM_SETTINGS } from "./config/kaboom";



export const k = kaboom({
    fullscreen: KABOOM_SETTINGS.fullscreen,
    scale: GAME_SETTINGS.scale,

})