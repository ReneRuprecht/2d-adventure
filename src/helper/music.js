import { k } from "../kaboom"

const ambient = require('../assets/music/ambient.mp3');
const hitmarker = require('../assets/music/hitmarker.aac');
const takedmg = require('../assets/music/takedmg.aac');
const swoosh = require('../assets/music/swoosh.aac');
import { soundOptions } from "../config/sound";
import { storage } from "./storage"

/* 
loads the music.
all the music needs to be loaded before starting the game
*/
export function loadMusic() {

    const promises = [
        k.loadSound("ambient", ambient),
        k.loadSound("hitmarker", hitmarker),
        k.loadSound("takedmg", takedmg),
        k.loadSound("swoosh", swoosh)
    ];

    return Promise.all(promises);

}


// returns the player for the background music
export function getBackgroundMusic() {

    if (storage.backgroundMusicPlayer == null) {
        const sound = play('ambient', {
            volume: soundOptions.backgroundVolume,
            loop: true
        })
        sound.pause();
        storage.backgroundMusicPlayer = sound;
        return storage.backgroundMusicPlayer;
    }

    return storage.backgroundMusicPlayer;


}

// returns the player for the hitmarker sound
export function getHitmarker() {
    if (storage.hitmarkerMusicPlayer == null) {
        const sound = play('hitmarker', {
            volume: soundOptions.hitmarkerVolume,
            loop: false
        })
        sound.pause();
        storage.hitmarkerMusicPlayer = sound;
    }
    return storage.hitmarkerMusicPlayer;

}

// returns the player for the takeDmg sound
export function getTakeDmg() {

    if (storage.playerTakesDamageMusicPlayer == null) {
        const sound = play('takedmg', {
            volume: soundOptions.takedmgVolume,
            loop: false
        })
        sound.pause();
        storage.playerTakesDamageMusicPlayer = sound;

    }

    return storage.playerTakesDamageMusicPlayer;


}

// returns the player for the swoosh sound
export function getSwoosh() {

    if (storage.swooshMusicPlayer == null) {
        const sound = play('swoosh', {
            volume: soundOptions.swooshVolume,
            loop: false
        })
        sound.pause();
        storage.swooshMusicPlayer = sound;
    }
    return storage.swooshMusicPlayer;


}
