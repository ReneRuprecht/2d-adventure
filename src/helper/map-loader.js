import { SPRITES } from '../config/sprites';
import { k } from '../kaboom';

// loads the map and sets the scale of the cam
export function loadMap(map) {
    k.camScale(5);
    k.addLevel(map, SPRITES.Cfg);

}