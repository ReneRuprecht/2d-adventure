import { k } from "../kaboom";

// sets the background with given settings to hide the area around the map
export function setBackground(backgroundCfg, player) {
    k.add([
        k.rect(backgroundCfg.rect.x,
            backgroundCfg.rect.y),
        k.pos(0, 0),
        k.color(backgroundCfg.color),
        k.origin(backgroundCfg.origin),
        k.follow(player),
        k.z(backgroundCfg.z)
    ]);
}