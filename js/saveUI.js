// js/saveUI.js
// 存档界面控制

import { saveGame, loadGame, getSaveList, deleteSave } from './saveSystem.js';
import { state, CARDS_PER_YEAR } from './gameState.js';
import { startGame, updateStatsDisplay, drawAndDisplayNextCard } from './core.js';
import { playClickSound, playSaveSound, playLoadSound, playSuccessSound, playErrorSound, getCurrentVolumes, switchToMainMusic } from './audio.js';

let currentMode = 'save'; // 'save' 或 'load'
let returnToGame = false;

// DOM 元素
const saveLoadScreen = document.getElementById('save-load-screen');
const saveLoadTitle = document.getElementById('save-load-title');
const saveSlotsContainer = document.getElementById('save-slots');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.querySelector('.game-container');

/**
 * 显示存档界面
 */
export function showSaveScreen() {
    currentMode = 'save';
    returnToGame = true;
    saveLoadTitle.textContent = 'Save Game';
    updateSaveSlots();
    showScreen();
}

/**
 * 显示读档界面  
 */
export function showLoadScreen() {
    currentMode = 'load';
    returnToGame = false;
    saveLoadTitle.textContent = 'Load Game';
    updateSaveSlots();
    showScreen();
}

/**
 * 显示存档/读档界面
 */
function showScreen() {
    hideAllScreens();
    saveLoadScreen.classList.remove('hidden');
}

/**
 * 隐藏所有界面
 */
function hideAllScreens() {
    saveLoadScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    gameContainer.classList.add('hidden');
}

/**
 * 更新存档槽位显示
 */
function updateSaveSlots() {
    const saveList = getSaveList();
    saveSlotsContainer.innerHTML = '';

    saveList.forEach(save => {
        const slotElement = createSlotElement(save);
        saveSlotsContainer.appendChild(slotElement);
    });
}

/**
 * 创建存档槽位元素
 */
function createSlotElement(save) {
    const div = document.createElement('div');
    div.className = `save-slot ${save.exists ? 'has-data' : 'empty'}`;
    
    div.innerHTML = `
        <div class="save-info">
            <div class="save-name">${save.name}</div>
            <div class="save-details">
                ${save.exists ? 
                    `Age: ${save.year} | Progress: ${save.progress}<br>${save.date}` : 
                    'Empty slot'
                }
            </div>
        </div>
        <div class="save-actions">
            ${createActionButtons(save)}
        </div>
    `;

    return div;
}

/**
 * 创建操作按钮
 */
function createActionButtons(save) {
    if (currentMode === 'save') {
        return `<button class="save-action-btn" onclick="window.saveUI.handleSave(${save.slot})">Save</button>`;
    } else {
        const loadBtn = save.exists ? 
            `<button class="save-action-btn" onclick="window.saveUI.handleLoad(${save.slot})">Load</button>` :
            `<button class="save-action-btn" disabled>Load</button>`;
        
        const deleteBtn = save.exists ? 
            `<button class="save-action-btn delete" onclick="window.saveUI.handleDelete(${save.slot})">Delete</button>` :
            '';
            
        return loadBtn + deleteBtn;
    }
}

/**
 * 处理保存操作
 */
function handleSave(slot) {
    playSaveSound();
    const saveName = prompt('Enter save name:', `Save ${slot + 1} - Age ${state.currentYear}`);
    
    if (saveName !== null && saveName.trim() !== '') {
        const success = saveGame(slot, saveName.trim());
        if (success) {
            playSuccessSound();
            showNotification('Game saved successfully!');
            updateSaveSlots();
        } else {
            playErrorSound();
            alert('Failed to save game!');
        }
    }
}

/**
 * 处理读档操作
 */
function handleLoad(slot) {
    playLoadSound();
    if (confirm('Are you sure you want to load this save? Current progress will be lost.')) {
        const success = loadGame(slot);
        if (success) {
            playSuccessSound();
            showNotification('Game loaded successfully!');
            hideAllScreens();
            gameContainer.classList.remove('hidden');
            
            // 如果游戏已结束，显示警告
            if (state.currentYear > 14) {
                setTimeout(() => {
                    alert('This save file has completed the game.');
                }, 500);
            } else {
                // 重新显示当前卡牌（只有在游戏进行中时）
                setTimeout(() => {
                    if (state.cardsPlayedThisYear < CARDS_PER_YEAR) {
                        drawAndDisplayNextCard();
                    }
                }, 100);
            }
        } else {
            playErrorSound();
            alert('Failed to load game!');
        }
    }
}

/**
 * 处理删除操作
 */
function handleDelete(slot) {
    playClickSound();
    if (confirm('Are you sure you want to delete this save?')) {
        const success = deleteSave(slot);
        if (success) {
            playSuccessSound();
            showNotification('Save deleted!');
            updateSaveSlots();
        } else {
            playErrorSound();
            alert('Failed to delete save!');
        }
    }
}

/**
 * 返回上一个界面
 */
function goBack() {
    playClickSound();
    hideAllScreens();
    if (returnToGame) {
        gameContainer.classList.remove('hidden');
    } else {
        startScreen.classList.remove('hidden');
        // 确保返回开始页面时切换回主音乐并播放
        setTimeout(() => {
            switchToMainMusic();
            if (window.tryPlayMusic) {
                window.tryPlayMusic();
            }
        }, 100);
    }
}

/**
 * 显示通知
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--accent-color);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 2000;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.style.opacity = '1', 100);
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * 初始化存档界面
 */
export function initSaveUI() {
    // 暴露函数到全局作用域供按钮调用
    window.saveUI = {
        handleSave,
        handleLoad,
        handleDelete
    };

    // 绑定事件监听
    const saveButton = document.getElementById('save-button');
    const loadButton = document.getElementById('load-button');
    const backButton = document.getElementById('back-from-save');

    if (saveButton) {
        saveButton.addEventListener('click', () => {
            playClickSound();
            showSaveScreen();
        });
    }

    if (loadButton) {
        loadButton.addEventListener('click', () => {
            playClickSound();
            showLoadScreen();
        });
    }

    if (backButton) {
        backButton.addEventListener('click', goBack);
    }

    // 为所有按钮添加hover音效（轻柔版）
    let lastHoverTime = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            // 防止hover音效过于频繁
            const now = Date.now();
            if (now - lastHoverTime < 200) return; // 200ms内不重复播放
            lastHoverTime = now;
            
            // 使用很小的音量播放hover音效
            const volumes = getCurrentVolumes();
            if (volumes.sfx > 0.2) { // 只有在音效音量足够时才播放
                const audio = new Audio('assets/audio/click.mp3');
                audio.volume = Math.min(volumes.sfx * 0.2, 0.1); // 非常轻柔的音量
                audio.play().catch(() => {}); // 忽略播放失败
            }
        });
    });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 's' && !gameContainer.classList.contains('hidden')) {
            e.preventDefault();
            playClickSound();
            showSaveScreen();
        }
    });
} 