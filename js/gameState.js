// 负责游戏状态初始化与重置（如属性、卡堆、年级等）

export const initialPlayerStats = {
    health: 100,
    academics: 60,
    mood: 70,
    money: 50,
    social: 60
};

export const initialHiddenStats = {
    selfIdentity: 50,
    emotionalIntimacy: 50,
    courage: 50,
    compliance: 50,
    freedom: 50,
    security: 50
};

export let playerStats = { ...initialPlayerStats };
export let hiddenStats = { ...initialHiddenStats };
export let deck = [], playedCardsHistory = [], bottomHandStack = [];
export const state = {
    currentYear: 12,
    cardsPlayedThisYear: 0,
    currentCardId : null
};

export let engravedMemories = [], memoryFragments = [], currentCardPool = {};
export const CARDS_PER_YEAR = 9;
export const DRAG_THRESHOLD = 80;

export function resetGameState() {
    playerStats = { ...initialPlayerStats };
    hiddenStats = { ...initialHiddenStats };
    currentYear = 12;
    cardsPlayedThisYear = 0;
    playedCardsHistory = [];
    bottomHandStack = [];
    deck = [];
    memoryFragments = [];
    engravedMemories = [];
}