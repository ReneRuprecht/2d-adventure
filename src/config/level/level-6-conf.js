import { GAME_SETTINGS } from "../game";

export const LEVEL6_CFG = {
    map: [
        'acccccccccccccccd',
        'beeeeeeeeeeeeeeeg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bffffffffffffffog',
        ' ~~~~~~~~~~~~~~~~',
    ],
    // backgroudn area
    background: {
        rect: {
            x: 16 * GAME_SETTINGS.scaling * 25,
            y: 16 * GAME_SETTINGS.scaling * 15,
        },
        color: (0, 0, 0),
        z: -1,
        origin: 'center',

    },
    player_pos: {
        x: 16 * GAME_SETTINGS.scaling * 2,
        y: 16 * GAME_SETTINGS.scaling * 2
    },
    // list of enemies that are getting placed inside the map
    enemies: [
        {
            x: 16 * GAME_SETTINGS.scaling * 8,
            y: 16 * GAME_SETTINGS.scaling * 8,
            type: "masked_orc",
        },

    ],
  


}