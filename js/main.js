import { startGame } from './core.js';
import { startButton, volumeButton, volumeScreen, startScreen, gameContainer, backToStartButton, bgmSlider, sfxSlider } from './domRefs.js';
import { bgMusic, sfx, setBGMVolume, setSFXVolume, playSFX } from './audio.js';
import { bindDragEvents } from './dragHandlers.js';
import { hiddenStats } from './gameState.js';
import { state } from './gameState.js';

document.addEventListener('DOMContentLoaded', () => {

    bindDragEvents();
    showHiddenStats();
    bgMusic.play();
    startButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        startGame();
    });

    volumeButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        volumeScreen.classList.remove('hidden');
    });

    backToStartButton.addEventListener('click', () => {
        volumeScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    });

    bgmSlider.addEventListener('input', e => setBGMVolume(parseFloat(e.target.value)));
    sfxSlider.addEventListener('input', e => {
        setSFXVolume(parseFloat(e.target.value));
        playSFX();
    });

    document.getElementById("restart-button").addEventListener("click", () => {
        location.reload();  
    });

    document.getElementById("quit-button").addEventListener("click", () => {


        // 隐藏游戏界面，显示起始页
        document.querySelector(".game-container").classList.add("hidden");
        document.getElementById("start-screen").classList.remove("hidden");


    });


    


});


// main.js 中
window.showHiddenStats = function () {
    const panel = document.getElementById("hidden-stats-panel");
    if (!panel) return;

    const listHTML = Object.entries(hiddenStats)
    .map(([key, value]) => `
        <div class="hidden-stat-row">
        <span class="stat-name">${capitalize(key)}</span>
        <span class="stat-value">${value}</span>
        </div>
    `)
    .join("");

        panel.innerHTML = `
        <div class="hidden-stat-row">
            <span class="stat-name">Age</span>
            <span class="stat-value">${state.currentYear}</span>
        </div>
        ${listHTML}
        `;


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

};


