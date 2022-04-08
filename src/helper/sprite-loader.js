import { k } from '../kaboom';
const tileset = require('../assets/sprites/0x72_DungeonTilesetII_v1.4.png');



// loads the elements from the defiend sprite sheet
export function loadGameSprites() {

    k.loadSpriteAtlas(tileset, {
        knight: {
            x: 128,
            y: 100,
            width: 144,
            height: 28,
            sliceX: 9,
            anims: {
                idle: { from: 0, to: 3, loop: true, speed: 3 },
                run: { from: 4, to: 7, loop: true, speed: 10 },
                hit: 8,
            },
        },
        skelet: {
            x: 368,
            y: 80,
            width: 128,
            height: 16,
            sliceX: 8,
            anims: {
                idle: { from: 0, to: 3, loop: true, speed: 3 },
                run: { from: 4, to: 7, loop: true, speed: 10 },
            },
        },
        zombie: {
            x: 368,
            y: 144,
            width: 128,
            height: 16,
            sliceX: 8,
            anims: {
                idle: { from: 0, to: 3, loop: true, speed: 3 },
                run: { from: 4, to: 7, loop: true, speed: 10 },
            },
        },
        masked_orc: {
            x: 368,
            y: 172,
            width: 128,
            height: 20,
            sliceX: 8,
            anims: {
                idle: { from: 0, to: 3, loop: true, speed: 3 },
                run: { from: 4, to: 7, loop: true, speed: 10 },
            },
        },
        sword: {
            x: 307,
            y: 26,
            width: 10,
            height: 21,
        },
        hammer: {
            x: 307,
            y: 55,
            width: 10,
            height: 24,
        },
        wall_top_left: {
            x: 16,
            y: 0,
            width: 16,
            height: 16,
        },
        wall_top_mid: {
            x: 32,
            y: 0,
            width: 16,
            height: 16,
        },
        wall_top_right: {
            x: 48,
            y: 0,
            width: 16,
            height: 16,
        },

        wall_right: {
            x: 48,
            y: 16,
            width: 16,
            height: 16,
        },


        wall_side_top_left: {
            x: 0,
            y: 112,
            width: 16,
            height: 16,
        },
        wall_side_mid_left: {
            x: 0,
            y: 128,
            width: 16,
            height: 16,
        },
        wall_side_front_left: {
            x: 0,
            y: 144,
            width: 16,
            height: 16,
        },
        wall_side_top_right: {
            x: 16,
            y: 112,
            width: 16,
            height: 16,
        },
        wall_side_mid_right: {
            x: 16,
            y: 128,
            width: 16,
            height: 16,
        },
        wall_side_front_right: {
            x: 16,
            y: 144,
            width: 16,
            height: 16,
        },
        wall_mid: {
            x: 32,
            y: 16,
            width: 16,
            height: 16,
        },
        wall_left: {
            x: 16,
            y: 16,
            width: 16,
            height: 16,
        },
        wall_right: {
            x: 48,
            y: 16,
            width: 16,
            height: 16,
        },
        floor_1: {
            x: 16,
            y: 64,
            width: 16,
            height: 16,
        },
        floor_2: {
            x: 32,
            y: 64,
            width: 16,
            height: 16,
        },
        floor_3: {
            x: 48,
            y: 64,
            width: 16,
            height: 16,
        },

        wall_corner_top_left: {
            x: 32,
            y: 112,
            width: 16,
            height: 16,
        },
        wall_corner_top_right: {
            x: 48,
            y: 112,
            width: 16,
            height: 16,
        },
        wall_corner_left: {
            x: 32,
            y: 128,
            width: 16,
            height: 16,
        },
        wall_corner_right: {
            x: 48,
            y: 128,
            width: 16,
            height: 16,
        },
        wall_corner_bottom_left: {
            x: 32,
            y: 144,
            width: 16,
            height: 16,
        },
        wall_corner_bottom_right: {
            x: 48,
            y: 144,
            width: 16,
            height: 16,
        },
        wall_corner_front_left: {
            x: 32,
            y: 160,
            width: 16,
            height: 16,
        },
        wall_corner_front_right: {
            x: 48,
            y: 160,
            width: 16,
            height: 16,
        },

        wall_inner_corner_l_top_left: {
            x: 80,
            y: 128,
            width: 16,
            height: 16,
        },
        wall_inner_corner_l_top_right: {
            x: 64,
            y: 128,
            width: 16,
            height: 16,
        },
        wall_inner_corner_mid_left: {
            x: 80,
            y: 144,
            width: 16,
            height: 16,
        },
        wall_inner_corner_mid_right: {
            x: 64,
            y: 144,
            width: 16,
            height: 16,
        },
        wall_inner_corner_t_top_left: {
            x: 80,
            y: 160,
            width: 16,
            height: 16,
        },
        wall_inner_corner_t_top_right: {
            x: 64,
            y: 160,
            width: 16,
            height: 16,
        },
        hole: {
            x: 96,
            y: 144,
            width: 16,
            height: 16,
        },
        hearth_full: {
            x: 288,
            y: 256,
            width: 16,
            height: 16,
        },


    });

}
