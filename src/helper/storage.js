/*
stores general informations for a completed level.
can be used to reset the last completed level
*/

export const storage = {
    level: 0,
    player: null,
    player_weapon: null,
    health: 0,
    score: 0,
    backgroundMusicPlayer: null,
    hitmarkerMusicPlayer: null,
    swooshMusicPlayer: null,
    playerTakesDamageMusicPlayer: null,

}

// resets to a clean storage object
export function resetStorage(storage) {
    storage.level = 0;
    storage.player = null;
    storage.player_weapon = null;
    storage.score = 0;
    storage.health = 0;
}


/*
stores informations for the current level.
tempStorage gets used to update storage after completing a level
*/
export const tempStorage = {
    player_weapon: null,
    score: 0,
    health: 0,
}

export function resetTempStorage(tempStorage) {
    tempStorage.player_weapon = null;
    tempStorage.score = 0;
    tempStorage.health = storage.player.hp();

}

/**
 * resets the temp score and sets the 
 * health value of the tempstorage to the value 
 * before the player entered the level
 */
export function restartLevelStorage(tempstorage, storage) {
    tempStorage.score = 0;
    tempstorage.health = storage.health;
}