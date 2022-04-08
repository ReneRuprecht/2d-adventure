import { GAME_SETTINGS } from "../game";


export const LEVEL1_CFG = {
    map: [
        'acccccccccccccccd',
        'beeeeeeeeeeeeeeeg',
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
    // list of weapons that are getting placed inside the map
    weapons: [
        {
            x: 16 * GAME_SETTINGS.scaling * 2,
            y: 16 * GAME_SETTINGS.scaling * 4,
            type: "sword",
        },

    ],

}
