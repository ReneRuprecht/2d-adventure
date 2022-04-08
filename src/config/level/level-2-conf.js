import { GAME_SETTINGS } from "../game";

export const LEVEL2_CFG = {
    map: [
        'acccccccccccccccd',
        'beeeeeeeeeeeeeeeg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bffffffffffffffog',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
        'bfffffffffffffffg',
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
            x: 16 * GAME_SETTINGS.scaling * 13,
            y: 16 * GAME_SETTINGS.scaling * 6,
            type: "skelet",
        },
        {
            x: 16 * GAME_SETTINGS.scaling * 10,
            y: 16 * GAME_SETTINGS.scaling * 5,
            type: "skelet",
        },

    ],
 
}