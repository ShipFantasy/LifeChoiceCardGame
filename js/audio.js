export const bgMusic = new Audio('assets/audio/bgm.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;

export const sfx = new Audio('assets/audio/click.mp3');
sfx.volume = 0.5;

export function playSFX(name = 'click') {
    if (name === 'click') sfx.play();
}

export function setBGMVolume(val) {
    bgMusic.volume = val;
}

export function setSFXVolume(val) {
    sfx.volume = val;
}
