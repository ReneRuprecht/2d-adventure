import { GAME_SETTINGS } from "./game";

// contains all of the mapped sprites for map creation
export const SPRITES = {
    Cfg: {
        width: 16 * GAME_SETTINGS.scaling,
        height: 16 * GAME_SETTINGS.scaling,
        'a': () => [
            sprite('wall_top_left'),
            area(),
            solid(),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),

        ],
        'b': () => [
            sprite('wall_inner_corner_mid_left'),
            area(),
            solid(),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),

        ],
        'c': () => [
            sprite('wall_top_mid'),
            area(),
            solid(),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),
        ],
        'd': () => [
            sprite('wall_top_right'),
            area(),
            solid(),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),
        ],

        'e': () => [
            sprite('wall_mid'),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),
        ],
        'f': () => [
            sprite('floor_1'),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),
        ],
        'g': () => [
            sprite('wall_inner_corner_mid_right'),
            area(),
            solid(),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),
        ],
        '~': () => [
            sprite('wall_inner_corner_t_top_left'),
            area(),
            solid(),
            scale(GAME_SETTINGS.scaling),
            opacity(0),
            layer("bg"),
        ],
        'o': () => [
            sprite('hole'),
            area(),
            scale(GAME_SETTINGS.scaling),
            layer("bg"),
            "next-level",
        ]
    }
}