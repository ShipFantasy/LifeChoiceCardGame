// js/saveSystem.js
// 游戏存档系统

import { 
    playerStats, hiddenStats, state, playedCardsHistory, 
    engravedMemories, memoryFragments, deck, bottomHandStack
} from './gameState.js';

import { updateStatsDisplay, rebuildHandStack, assembleDeckForYear } from './core.js';

const SAVE_KEY = 'lifePagesGame_saves';

/**
 * 保存游戏到指定槽位
 */
export function saveGame(slot = 0, customName = '') {
    try {
        const saveData = {
            version: '1.0',
            timestamp: Date.now(),
            saveName: customName || `Save ${slot + 1}`,
            playerStats: { ...playerStats },
            hiddenStats: { ...hiddenStats },
            currentYear: state.currentYear,
            cardsPlayedThisYear: state.cardsPlayedThisYear,
            currentCardId: state.currentCardId,
            playedCardsHistory: [...playedCardsHistory],
            engravedMemories: [...engravedMemories],
            memoryFragments: [...memoryFragments],
            deck: [...deck]
        };

        const allSaves = getAllSaves();
        allSaves[slot] = saveData;
        localStorage.setItem(SAVE_KEY, JSON.stringify(allSaves));
        
        return true;
    } catch (error) {
        console.error('Save failed:', error);
        return false;
    }
}

/**
 * 从指定槽位读取游戏
 */
export function loadGame(slot = 0) {
    try {
        const allSaves = getAllSaves();
        const saveData = allSaves[slot];
        
        if (!saveData) return false;

        // 恢复游戏状态
        Object.assign(playerStats, saveData.playerStats);
        Object.assign(hiddenStats, saveData.hiddenStats);
        state.currentYear = saveData.currentYear;
        state.cardsPlayedThisYear = saveData.cardsPlayedThisYear;
        state.currentCardId = saveData.currentCardId;
        
        // 恢复数组
        playedCardsHistory.length = 0;
        playedCardsHistory.push(...saveData.playedCardsHistory);
        
        engravedMemories.length = 0;
        engravedMemories.push(...saveData.engravedMemories);
        
        memoryFragments.length = 0;
        memoryFragments.push(...saveData.memoryFragments);
        
        deck.length = 0;
        deck.push(...saveData.deck);

        // 重建当前年龄的卡牌池
        assembleDeckForYear();

        // 更新游戏显示
        updateStatsDisplay();
        rebuildHandStack();
        if (typeof showHiddenStats === 'function') showHiddenStats();

        return true;
    } catch (error) {
        console.error('Load failed:', error);
        return false;
    }
}

/**
 * 获取所有存档
 */
export function getAllSaves() {
    try {
        const saves = localStorage.getItem(SAVE_KEY);
        return saves ? JSON.parse(saves) : {};
    } catch (error) {
        return {};
    }
}

/**
 * 获取存档信息列表
 */
export function getSaveList() {
    const allSaves = getAllSaves();
    const saveList = [];
    
    for (let i = 0; i < 3; i++) {
        if (allSaves[i]) {
            const save = allSaves[i];
            saveList.push({
                slot: i,
                exists: true,
                name: save.saveName,
                year: save.currentYear,
                progress: `${save.cardsPlayedThisYear}/9`,
                date: new Date(save.timestamp).toLocaleString()
            });
        } else {
            saveList.push({
                slot: i,
                exists: false,
                name: `Empty Slot ${i + 1}`,
                year: null,
                progress: null,
                date: null
            });
        }
    }
    
    return saveList;
}

/**
 * 删除存档
 */
export function deleteSave(slot) {
    try {
        const allSaves = getAllSaves();
        delete allSaves[slot];
        localStorage.setItem(SAVE_KEY, JSON.stringify(allSaves));
        return true;
    } catch (error) {
        return false;
    }
}

/**
 * 快速保存 (使用槽位0)
 */
export function quickSave() {
    return saveGame(0, `Quick Save - Age ${state.currentYear}`);
}

/**
 * 快速读取
 */
export function quickLoad() {
    return loadGame(0);
} 