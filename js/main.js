import { allCards_12, allCards_13, allCards_14 } from './cards.js';

// -----------------------------------------------------------------------------
//  当整个HTML文档加载完毕后，再执行里面的所有代码
// -----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 定义所有游戏状态变量 ---
    let playerStats = {}; 
    let hiddenStats = {};
    let deck = [];
    let playedCardsHistory = [];
    let bottomHandStack = [];
    let currentCardId = null;
    let currentYear;
    let cardsPlayedThisYear;
    let engravedMemories = [];
    let memoryFragments = [];
    let currentCardPool = {};

    const CARDS_PER_YEAR = 12;
    const DRAG_THRESHOLD = 80;
    const endings = [
    // --- 具体结局（条件苛刻，优先判断） ---
        {
            title: "象牙塔之梦",
            description: "你将所有精力投入学业，取得了令人瞩目的成就。但在知识的海洋中，你似乎错过了岸边的风景。",
            condition: (stats, hiddenStats) => stats.academics >= 85 && stats.social < 50,
            relevantTags: ['school', 'study', 'pressure', 'growth']
        },
        {
            title: "不羁的飞鸟",
            description: "你挣脱了所有无形的束缚，用勇气和行动去追逐向往的自由。世界在你脚下展开，充满了无限的可能。",
            condition: (stats, hiddenStats) => hiddenStats.freedom >= 75 && hiddenStats.courage >= 75 && hiddenStats.compliance < 40,
            relevantTags: ['self', 'explore', 'dream', 'independence', 'boundary']
        },
        {
            title: "温暖的港湾",
            description: "你用心经营着每一段关系，与他人建立了深刻的情感联结。在你身边，总是充满了信任与安心的温度。",
            condition: (stats, hiddenStats) => hiddenStats.emotionalIntimacy >= 75 && stats.social >= 75,
            relevantTags: ['friendship', 'family', 'care', 'social', 'emotion']
        },
        {
            title: "孤勇者",
            description: "你拥有直面一切的勇气，却习惯了独来独往。你像一匹孤独的狼，依靠自己的力量穿越了成长的荒原。",
            condition: (stats, hiddenStats) => hiddenStats.courage >= 75 && hiddenStats.emotionalIntimacy < 40 && stats.social < 50,
            relevantTags: ['self', 'moral', 'struggle', 'ethics', 'escapism']
        },
        {
            title: "安稳的角落",
            description: "你选择了一条最稳妥的道路，小心翼翼地避开了所有风险。生活平静如水，但也失去了波澜壮阔的景色。",
            condition: (stats, hiddenStats) => hiddenStats.security >= 80 && hiddenStats.freedom < 40,
            relevantTags: ['family', 'school', 'pressure', 'shame']
        },

        // --- 基础结局（作为保底） ---
        {
            title: "坚定前行",
            description: "你在成长中始终坚持自己的方向，逐渐学会面对生活。",
            condition: (stats, hiddenStats) => hiddenStats.selfIdentity >= 70,
            relevantTags: ['self', 'explore', 'independence', 'dream', 'boundary', 'growth']
        },
        {
            title: "安静顺从",
            description: "你遵循了所有安排，也因此失去了探索自我的机会。",
            condition: (stats, hiddenStats) => hiddenStats.compliance >= 70,
            relevantTags: ['family', 'school', 'pressure', 'struggle', 'shame']
        },
        {
            title: "挣扎成长",
            description: "你经历了动摇、反思、努力，仍在寻找未来的模样。",
            condition: () => true, // 默认结局，必须放在最后！
            relevantTags: ['social', 'friendship', 'emotion', 'ethics', 'moral', 'loss']
        }
    ];

    // --- 2. 获取所有需要的HTML元素 ---
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const gameContainer = document.querySelector('.game-container');
    const healthStat = document.getElementById('health-stat');
    const academicsStat = document.getElementById('academics-stat');
    const moodStat = document.getElementById('mood-stat');
    const moneyStat = document.getElementById('money-stat');
    const socialStat = document.getElementById('social-stat');
    const ageDisplay = document.getElementById('age-display');
    const cardElement = document.getElementById('card');
    const cardText = document.getElementById('card-text');
    const cardImage = document.getElementById('card-image'); 
    const optionLeftLabel = cardElement.querySelector('.option-left-label');
    const optionRightLabel = cardElement.querySelector('.option-right-label');
    const optionUpLabel = cardElement.querySelector('.option-up-label');
    const optionDownLabel = cardElement.querySelector('.option-down-label');
    const packSelectionScreen = document.getElementById('pack-selection-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
    const gameOverMessage = document.getElementById('game-over-message');
    const cardReviewContainer = document.getElementById('card-review-container');
    const restartButton = document.getElementById('restart-button');
    const bottomHandStackContainer = document.getElementById('bottom-hand-stack');

    const cards = document.querySelectorAll('.memory-display-area.stack-display .memory-fragment');
    cards.forEach((card, i) => {
        card.style.setProperty('--rotate', `${(Math.random() - 0.5) * 10}deg`);
        card.style.setProperty('--z', i);
    });

    // --- 3. 定义所有的游戏函数 ---
    // 因为这些函数都在同一个作用域，所以它们可以互相调用，并且能直接访问上面的所有元素变量

    function startGame() {
        initGame();
    }

    // main.js

    function initGame() {
        playerStats = { health: 100, academics: 60, mood: 70, money: 50, social: 60 };
        hiddenStats = { selfIdentity: 50, emotionalIntimacy: 50, courage: 50, compliance: 50, freedom: 50, security: 50 };
        currentYear = 12;
        cardsPlayedThisYear = 0;
        playedCardsHistory = [];
        bottomHandStack = [];
        deck = [];
        memoryFragments = [];
        engravedMemories = [];
        const bottomHandStackContainer = document.getElementById('bottom-hand-stack');
        bottomHandStackContainer.innerHTML = '';
        updateStatsDisplay();

        assembleDeckForYear(); 
        drawAndDisplayNextCard();
    }

    function assembleDeckForYear(theme) {
        if (currentYear === 12) currentCardPool = allCards_12;
        else if (currentYear === 13) currentCardPool = allCards_13;
        else if (currentYear === 14) currentCardPool = allCards_14;

        const allCardIds = Object.keys(currentCardPool);

        // 加入打乱和抽牌逻辑
        shuffleDeck(allCardIds);
        deck = allCardIds.slice(0, CARDS_PER_YEAR);
        
    }


    function shuffleDeck(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function drawAndDisplayNextCard() {
        currentCardId = deck[cardsPlayedThisYear];
        
        if (currentCardId) {
            displayCard(currentCardPool[currentCardId]);
        } else {
            // 安全网：如果因为未知错误导致抽到了空牌，直接结束游戏，防止卡死
            console.error(`错误：在第 ${cardsPlayedThisYear + 1} 张牌时无法获取卡牌ID。牌库可能未被正确填充。`);
            endGame("在迷茫中，这一年似乎提前结束了...");
        }
    }

    function updateStatsDisplay() {
        healthStat.textContent = `Health: ${playerStats.health}`;
        academicsStat.textContent = `Academic: ${playerStats.academics}`;
        moodStat.textContent = `Mood: ${playerStats.mood}`;
        moneyStat.textContent = `Money: ${playerStats.money}`;
        socialStat.textContent = `Social: ${playerStats.social}`;
        ageDisplay.textContent = `Old: ${currentYear} (${cardsPlayedThisYear}/${CARDS_PER_YEAR})`;
    }

    function displayCard(cardData) {
        // --- 新增的图片处理逻辑 ---
        if (cardData.cardImage) {
            // 如果这张卡有配图
            cardImage.src = cardData.cardImage; // 设置图片路径
            cardImage.style.display = 'block';   // 显示图片
        } else {
            // 如果这张卡没有配图
            cardImage.style.display = 'none';    // 隐藏图片元素
        }
        cardText.textContent = cardData.text;

        // 获取中间选项的标签元素
        const optionCenterLabel = cardElement.querySelector('.option-center-label');

        // 判断是“单选项”还是“双选项”卡牌
        if (cardData.optionCenterText) {
            // 这是“单选项”叙事卡牌
            optionCenterLabel.textContent = cardData.optionCenterText;
            optionCenterLabel.style.display = 'block';
            optionLeftLabel.style.display = 'none';
            optionRightLabel.style.display = 'none';
            optionUpLabel.textContent = '继续'; // 提示玩家向上划动
            optionDownLabel.textContent = '';

        } else {
            // 这是传统的“双选项”卡牌
            optionLeftLabel.textContent = cardData.optionLeftText;
            optionRightLabel.textContent = cardData.optionRightText;
            optionLeftLabel.style.display = 'block';
            optionRightLabel.style.display = 'block';
            optionCenterLabel.style.display = 'none';
            optionUpLabel.textContent = '丢弃'; // 恢复原来的提示
            optionDownLabel.textContent = '重抽';
        }
    }

    function handleChoice(direction) {
        const card = currentCardPool[currentCardId];
        const effect = (direction === 'left' ? card.effectLeft : card.effectRight) || 
                       { stats: {}, memory: { keyword: "迷茫", image: "assets/images/memory_skip.png" } };
        processCardAction(effect);
    }

    function handleSwipeUp() { 
        const card = currentCardPool[currentCardId];

        // 检查这张卡是不是“单选项”叙事卡牌
        if (card && card.effectCenter) {
            // 如果是，则处理它的效果，这代表“经历”这个瞬间
            processCardAction(card.effectCenter);
        } else {
            // 如果不是，保持原来的“丢弃”逻辑
            const effect = { 
                stats: { mood: -5 },
                memory: { 
                    keyword: "跳过", 
                    image: "assets/images/memory_skip.png" 
                } 
            };
            processCardAction(effect);
        }
    }

    function handleSwipeDown() { 
        const effect = { 
            stats: { mood: -5 }, // 重抽同样代表着一种消耗
            memory: { 
                keyword: "犹豫", 
                image: "assets/images/memory_redo.png" 
            } 
        };
        processCardAction(effect);
    }

    function processCardAction(effect) {
        if (!currentCardId) return;

        // 1. 更新可见属性
        if (effect.stats) {
            for (const stat in effect.stats) {
                if (playerStats.hasOwnProperty(stat)) {
                    playerStats[stat] += effect.stats[stat];
                }
            }
        }

        // 2. 更新隐藏属性
        if (effect.hiddenStats) {
            for (const stat in effect.hiddenStats) {
                if (hiddenStats.hasOwnProperty(stat)) {
                    hiddenStats[stat] += effect.hiddenStats[stat];
                }
            }
        }
        
        // 3. 创建并存储记忆碎片（不变）
        if (effect.memory) {
            let color = 'neutral';
            const moodChange = effect.stats?.mood || 0;

            if (moodChange > 5) color = 'happy';
            else if (moodChange < -5) color = 'sad';

            memoryFragments.push({
                keyword: effect.memory.keyword,
                image: effect.memory.image,
                color: color,
                cardText: currentCardPool[currentCardId].text,
                tags: currentCardPool[currentCardId].tags,
            });
        }

        // 4. 其他流程不变
        addCardToBottomHandStack(currentCardId);
        playedCardsHistory.push(currentCardId);
        cardsPlayedThisYear++;
        updateStatsDisplay();
        resetCardPosition();

        setTimeout(() => {
            if (!checkGameEndConditions()) {
                drawAndDisplayNextCard();
            }
        }, 250);
    }

    function showEngraveMemorySelection() {
        const engraveScreen = document.getElementById('engrave-screen');
        const engraveOptions = document.getElementById('engrave-options');
        const engraveConfirm = document.getElementById('engrave-confirm');

        // 1. 获取当年产生的记忆
        const currentYearMemories = memoryFragments.slice(-CARDS_PER_YEAR);

        engraveOptions.innerHTML = '';
        currentYearMemories.forEach((fragment, index) => {
            const div = document.createElement('div');
            div.classList.add('memory-fragment', fragment.color);
            div.innerHTML = `<img src="${fragment.image}" alt=""><div>${fragment.keyword}</div>`;
            div.dataset.index = index;
            div.addEventListener('click', () => {
                document.querySelectorAll('.engrave-grid .memory-fragment').forEach(el => el.classList.remove('selected'));
                div.classList.add('selected');
                engraveOptions.dataset.selected = index;
            });
            engraveOptions.appendChild(div);
        });

        engraveScreen.classList.remove('hidden');

        engraveConfirm.onclick = () => {
            const selectedIndex = engraveOptions.dataset.selected;
            if (selectedIndex !== undefined) {
                const selected = currentYearMemories[selectedIndex];
                engravedMemories.push(selected);
                engraveScreen.classList.add('hidden');
                currentYear++;
                cardsPlayedThisYear = 0;
                assembleDeckForYear('general'); // 可以根据你的逻辑设定主题
                drawAndDisplayNextCard();
            } else {
                alert("请选择一张记忆");
            }
        };
    }



    function checkGameEndConditions() {
        let isEnd = false;
        if (cardsPlayedThisYear >= CARDS_PER_YEAR) {
            if (currentYear < 14) {
                showEngraveMemorySelection(); // 每年结束选择铭刻
            } else {
                endGame();
            }
            isEnd = true;
        }
        return isEnd;
    }

    // 最终版本的 endGame 函数
    // “安全升级版”的 endGame 函数
    function endGame() {
        // 1. 获取结局
        const resultEnding = endings.find(ending => ending.condition(playerStats, hiddenStats));
        if (!resultEnding) {
            console.error("错误：未能根据玩家属性找到任何匹配的结局！");
            return; // 提前退出，防止后续代码出错
        }

        // 2. 安全地获取所有需要的DOM元素
        const gameOverMessage = document.getElementById('game-over-message');
        const engravedDisplay = document.getElementById('engraved-memories-display');
        const relatedDisplay = document.getElementById('related-memories-display');
        const gameOverScreen = document.getElementById('game-over-screen');

        // 3. 在操作前，检查所有元素是否存在
        if (!gameOverMessage || !engravedDisplay || !relatedDisplay || !gameOverScreen) {
            console.error("错误：结局画面的某个关键HTML元素没有找到！请检查你的 index.html 文件是否有以下ID：'game-over-message', 'engraved-memories-display', 'related-memories-display', 'game-over-screen'。同时确认 JS 文件是否在 </body> 前加载。");
            return; // 元素不全，直接退出，防止崩溃
        }

        // 4. 清空并设置结局信息
        engravedDisplay.innerHTML = '';
        relatedDisplay.innerHTML = '';
        gameOverMessage.innerHTML = `<h2>${resultEnding.title}</h2><p>${resultEnding.description}</p>`;

        // --- 核心逻辑：分别找出两种记忆 ---
        const primaryMemories = engravedMemories.filter(fragment =>
            fragment.tags && resultEnding.relevantTags.some(tag => fragment.tags.includes(tag))
        );

        const allRelevantMemories = memoryFragments.filter(fragment =>
            fragment.tags && resultEnding.relevantTags.some(tag => fragment.tags.includes(tag))
        );
        
        const primaryMemoryIds = new Set(primaryMemories.map(m => m.keyword));
        const secondaryMemories = allRelevantMemories.filter(fragment => !primaryMemoryIds.has(fragment.keyword));

        // 5. 将记忆填充到对应的容器中
        if (primaryMemories.length > 0) {
            primaryMemories.forEach((fragment, index) => {
                const el = document.createElement('div');
                el.classList.add('memory-fragment', fragment.color);
                el.innerHTML = `<img src="${fragment.image}" alt="${fragment.keyword}"><div class="keyword">${fragment.keyword}</div>`;

                // 🌟 动画错开时间 + 轻微旋转
                const angle = (Math.random() - 0.5) * 10; // -5 到 +5 度之间
                el.style.transform = `rotate(${angle}deg) scale(0.8)`;
                el.style.animation = `fadeInMemory 0.5s ease forwards`;
                el.style.animationDelay = `${index * 0.1}s`;

                engravedDisplay.appendChild(el);
            });

        }

        if (secondaryMemories.length > 0) {
            secondaryMemories.forEach((fragment, index) => {
                const el = document.createElement('div');
                el.classList.add('memory-fragment', fragment.color);
                el.innerHTML = `<img src="${fragment.image}" alt="${fragment.keyword}"><div class="keyword">${fragment.keyword}</div>`;

                const angle = (Math.random() - 0.5) * 10;
                el.style.transform = `rotate(${angle}deg) scale(0.75)`;
                el.style.animation = `fadeInMemory 0.4s ease forwards`;
                el.style.animationDelay = `${index * 0.05}s`;

                relatedDisplay.appendChild(el);
            });

        }

        if (primaryMemories.length === 0 && secondaryMemories.length === 0) {
            engravedDisplay.innerHTML = '<p style="color: #ccc;">似乎没有留下什么特别的记忆...</p>';
        }
        
        // 6. 显示结局屏幕
        document.querySelector('.game-container').classList.add('hidden');
        gameOverScreen.classList.remove('hidden');
    }
   

    function addCardToBottomHandStack(cardId) {
        const cardData = currentCardPool[cardId]; // ✅ 用当前年份的卡池
        if (!cardData) return;

        const thumbnail = document.createElement('div');
        thumbnail.classList.add('played-card-thumbnail');
        thumbnail.textContent = cardData.text.substring(0, 10) + '...';
        thumbnail.title = cardData.text;

        const stackIndex = bottomHandStack.length;
        const baseOffset = (stackIndex - (playedCardsHistory.length - 1) / 2) * 15;
        const rotation = (Math.random() - 0.5) * 15;

        thumbnail.style.transform = `translateX(${baseOffset}px) rotate(${rotation}deg)`;
        thumbnail.style.zIndex = 1 + stackIndex;

        bottomHandStack.push({ id: cardId, element: thumbnail });
        bottomHandStackContainer.appendChild(thumbnail);

        if (bottomHandStack.length > CARDS_PER_YEAR) {
            const oldestCard = bottomHandStack.shift();
            if (oldestCard.element.parentElement) {
                oldestCard.element.parentElement.removeChild(oldestCard.element);
            }
        }
    }


    function resetCardPosition() {
        cardElement.style.transition = 'transform 0.2s ease-out';
        cardElement.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
    }

    // --- 4. 拖拽交互逻辑 ---
    let isDragging = false, startX = 0, startY = 0, currentTransX = 0, currentTransY = 0;

    function onDragStart(e) {
        if (gameOverScreen.classList.contains('hidden')) {
            isDragging = true;
            const touch = e.touches ? e.touches[0] : e;
            startX = touch.clientX;
            startY = touch.clientY;
            const rect = cardElement.getBoundingClientRect();
            currentTransX = rect.left - (window.innerWidth / 2 - rect.width / 2);
            currentTransY = rect.top - (gameContainer.getBoundingClientRect().top + ageDisplay.getBoundingClientRect().height + 20);

            cardElement.style.transition = 'none';
        }
    }

    function onDragMove(e) {
        if (!isDragging) return;
        const touch = e.touches ? e.touches[0] : e;
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        cardElement.style.transform = `translateX(${dx}px) translateY(${dy}px) rotate(${dx / 10}deg)`;
        cardElement.classList.remove('show-left', 'show-right', 'show-up', 'show-down');
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx < -20) cardElement.classList.add('show-left');
            else if (dx > 20) cardElement.classList.add('show-right');
        } else {
            if (dy < -20) cardElement.classList.add('show-up');
            else if (dy > 20) cardElement.classList.add('show-down');
        }
    }

    function onDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        const transform = cardElement.style.transform;
        const match = transform.match(/translateX\(([-.\d]+)px\) translateY\(([-.\d]+)px\)/);
        const dx = match ? parseFloat(match[1]) : 0;
        const dy = match ? parseFloat(match[2]) : 0;

        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
            if (Math.abs(dx) > Math.abs(dy)) {
                handleChoice(dx < 0 ? 'left' : 'right');
            } else {
                if (dy < 0) handleSwipeUp(); else handleSwipeDown();
            }
        } else {
            resetCardPosition();
        }
    }


    // --- 5. 绑定所有初始事件 ---
    startButton.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        startGame();
    });

    restartButton.addEventListener('click', startGame);

    cardElement.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    cardElement.addEventListener('touchstart', onDragStart, { passive: false });
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd);

});