import {
    playerStats, hiddenStats, deck, playedCardsHistory, bottomHandStack, state,
    engravedMemories, memoryFragments, currentCardPool,
    CARDS_PER_YEAR
} from './gameState.js';

import {
    healthStat, academicsStat, moodStat, moneyStat, socialStat, ageDisplay,
    cardElement, cardText, cardImage,
    optionLeftLabel, optionRightLabel, optionUpLabel, optionDownLabel, optionCenterLabel,
    bottomHandStackContainer
} from './domRefs.js';

import { allCards_12, allCards_13, allCards_14 } from './cards.js';

window.deck = deck;
window.state = state;


export function startGame() {
    initGame();
}

function initGame() {
    Object.assign(playerStats, { health: 100, academics: 60, mood: 70, money: 50, social: 60 });
    Object.assign(hiddenStats, { selfIdentity: 50, emotionalIntimacy: 50, courage: 50, compliance: 50, freedom: 50, security: 50 });
    state.currentYear = 12;
    state.cardsPlayedThisYear = 0;
    playedCardsHistory.length = 0;
    bottomHandStack.length = 0;
    deck.length = 0;
    memoryFragments.length = 0;
    engravedMemories.length = 0;
    bottomHandStackContainer.innerHTML = '';

    updateStatsDisplay();
    assembleDeckForYear();
    drawAndDisplayNextCard();
}

function updateStatsDisplay() {
    healthStat.textContent = playerStats.health;
    academicsStat.textContent = playerStats.academics;
    moodStat.textContent = playerStats.mood;
    moneyStat.textContent = playerStats.money;
    socialStat.textContent = playerStats.social;

}


function assembleDeckForYear(theme) {
    // 不能直接赋值 currentCardPool（它是 const）
    Object.keys(currentCardPool).forEach(key => delete currentCardPool[key]);

    if (state.currentYear === 12) Object.assign(currentCardPool, allCards_12);
    else if (state.currentYear === 13) Object.assign(currentCardPool, allCards_13);
    else if (state.currentYear === 14) Object.assign(currentCardPool, allCards_14);

    const allCardIds = Object.keys(currentCardPool);
    shuffleDeck(allCardIds);
    deck.splice(0, deck.length, ...allCardIds.slice(0, CARDS_PER_YEAR));
}

function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor((Math.random() + Date.now() % 1) * (i + 1)) % (i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function drawAndDisplayNextCard() {

    state.currentCardId = deck[state.cardsPlayedThisYear];

    if (state.currentCardId) {
        displayCard(currentCardPool[state.currentCardId]);
    } else {
        console.error(`错误：第 ${state.cardsPlayedThisYear + 1} 张牌无效。`);
    }
}

function displayCard(cardData) {
    if (cardData.cardImage) {
        cardImage.src = cardData.cardImage;
        cardImage.style.display = 'block';
    } else {
        cardImage.style.display = 'none';
    }
    cardText.textContent = cardData.text;

    if (cardData.optionCenterText) {
        optionCenterLabel.textContent = cardData.optionCenterText;
        optionCenterLabel.style.display = 'block';
        optionLeftLabel.style.display = 'none';
        optionRightLabel.style.display = 'none';
        optionUpLabel.textContent = '继续';
        optionDownLabel.textContent = '';
    } else {
        optionLeftLabel.textContent = cardData.optionLeftText;
        optionRightLabel.textContent = cardData.optionRightText;
        optionLeftLabel.style.display = 'block';
        optionRightLabel.style.display = 'block';
        optionCenterLabel.style.display = 'none';
        optionUpLabel.textContent = 'Throw';
        optionDownLabel.textContent = 'Again';
    }
}

export function handleChoice(direction) {

    const card = currentCardPool[state.currentCardId];
    const effect = (direction === 'left' ? card.effectLeft : card.effectRight) || 
                   { stats: {}, memory: { keyword: "迷茫", image: "assets/images/memory_skip.png" } };
    processCardAction(effect);
}

export function handleSwipeUp() {
    const card = currentCardPool[state.currentCardId];
    if (card && card.effectCenter) {
        processCardAction(card.effectCenter);
    } else {
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

export function handleSwipeDown() {
    const effect = {
        stats: { mood: -5 },
        memory: {
            keyword: "犹豫",
            image: "assets/images/memory_redo.png"
        }
    };
    processCardAction(effect);
}

function processCardAction(effect) {
    if (!state.currentCardId) return;

    if (effect.stats) {
        for (const stat in effect.stats) {
            if (playerStats.hasOwnProperty(stat)) {
                playerStats[stat] += effect.stats[stat];
            }
        }
    }

    if (effect.hiddenStats) {
        for (const stat in effect.hiddenStats) {
            if (hiddenStats.hasOwnProperty(stat)) {
                hiddenStats[stat] += effect.hiddenStats[stat];
            }
        }
    }

    if (effect.memory) {
        let color = 'neutral';
        const moodChange = effect.stats?.mood || 0;

        if (moodChange > 5) color = 'happy';
        else if (moodChange < -5) color = 'sad';

        memoryFragments.push({
            keyword: effect.memory.keyword,
            image: effect.memory.image,
            color: color,
            cardText: currentCardPool[state.currentCardId].text,
            tags: currentCardPool[state.currentCardId].tags,
        });
    }

    addCardToBottomHandStack(state.currentCardId);
    playedCardsHistory.push(state.currentCardId);
    state.cardsPlayedThisYear++;
    updateStatsDisplay();
    resetCardPosition();

    setTimeout(() => {
    if (state.cardsPlayedThisYear >= CARDS_PER_YEAR) {
        enterEngravingSelection();
    } else {
        drawAndDisplayNextCard();  // ✅ 确保进入下一张
    }
    }, 200); // 等动画结束

    if (typeof showHiddenStats === 'function') showHiddenStats();



}


function addCardToBottomHandStack(cardId) {
    const cardData = currentCardPool[cardId];
    if (!cardData) return;

    const thumbnail = document.createElement('div');
    thumbnail.classList.add('played-card-thumbnail');
    const fragment = memoryFragments.find(f => f.image === cardData.cardImage);
    const keywordDisplay = fragment?.keyword || '？';

    thumbnail.innerHTML = `
    <img src="${cardData.cardImage}" alt="${keywordDisplay}" style="width: 100%; border-radius: 4px;">
    <div class="card-keyword-label">${keywordDisplay}</div>
    `;
    thumbnail.setAttribute('data-fulltext', cardData.text);

    // 加入栈
    bottomHandStack.push({ id: cardId, element: thumbnail });
    bottomHandStackContainer.appendChild(thumbnail);

    // 限制最大数量
    if (bottomHandStack.length > CARDS_PER_YEAR) {
        const oldest = bottomHandStack.shift();
        if (oldest.element.parentElement) {
        oldest.element.parentElement.removeChild(oldest.element);
        }
    }

    // ✅ 重新计算每张卡的位置（居中堆叠）
    const total = bottomHandStack.length;
    const centerIndex = (total - 1) / 2;

    bottomHandStack.forEach((item, i) => {
        const offsetX = (i - centerIndex) * 30;
        const rotation = (Math.random() * 8 - 4).toFixed(2);
        item.element.style.setProperty('--card-offset', `${offsetX}px`);
        item.element.style.setProperty('--card-rotation', `${rotation}deg`);
        item.element.style.zIndex = `${10 + i}`;
    });
}




export function resetCardPosition() {
    cardElement.style.transition = 'transform 0.2s ease-out';
    cardElement.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
}

function enterEngravingSelection() {
    const container = document.getElementById("card-review-container");
    container.innerHTML = ""; // 清空

    // 展示底部 9 张卡牌
    const last9 = playedCardsHistory.slice(-CARDS_PER_YEAR);
    last9.forEach(cardId => {
        const cardData = currentCardPool[cardId] || allCards_12[cardId] || allCards_13[cardId] || allCards_14[cardId];
        if (!cardData) return;

        const cardEl = document.createElement("div");
        cardEl.className = "engrave-choice-card";
        // 根据玩家选择的记忆片段找关键词
        const fragment = memoryFragments.find(f => f.image === cardData.cardImage);
        const keywordDisplay = fragment?.keyword || '？';

        cardEl.innerHTML = `
        <img src="${cardData.cardImage}" alt="${keywordDisplay}">
        <div class="card-keyword-label">${keywordDisplay}</div>
        `;


        // 添加随机旋转 & 偏移
        const rotate = (Math.random() * 10 - 5).toFixed(2) + 'deg';
        const tx = (Math.random() * 10 - 5).toFixed(1) + 'px';
        const ty = (Math.random() * 10 - 5).toFixed(1) + 'px';

        cardEl.style.setProperty('--r', rotate);
        cardEl.style.setProperty('--x', tx);
        cardEl.style.setProperty('--y', ty);



        cardEl.onclick = () => {
            engravedMemories.push({
                keyword: fragment?.keyword || cardData.keyword || '？',
                image: cardData.cardImage,
                tags: cardData.tags || [],
            });

            document.getElementById("birthday-popup").style.display = "none";
            proceedToNextYear(); // 进入下一年
        };

        container.appendChild(cardEl);
    });

    document.getElementById("birthday-popup").style.display = "flex";
}

function proceedToNextYear() {
    state.currentYear++;
    // ✅ 年龄超过14，触发结局
    if (state.currentYear > 14) {

        const ending = determineEnding();  // ✅ 动态获取结局

        const titleEl = document.getElementById("ending-title");
        const descEl = document.getElementById("ending-description");

        titleEl.textContent = ending.title;

        // 显示铭刻卡片
        const engravedContainer = document.getElementById("engraved-cards");
        engravedContainer.innerHTML = "";
        engravedMemories.slice(-3).forEach(mem => {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${mem.image}" alt="${mem.keyword}">
            <div class="card-keyword-label">${mem.keyword}</div>
        `;
        engravedContainer.appendChild(div);
        });

        // 显示全部经历的卡片（缩略图）
        const playedContainer = document.getElementById("played-cards-scroll");
        playedContainer.innerHTML = "";
        playedCardsHistory.forEach(cardId => {
        const card = currentCardPool[cardId] || allCards_12[cardId] || allCards_13[cardId] || allCards_14[cardId];
        if (!card) return;
        const img = document.createElement("img");
        img.src = card.cardImage;
        img.alt = card.text;
        playedContainer.appendChild(img);
        });

        descEl.textContent = ending.description;
        

        document.getElementById("birthday-popup").style.display = "none";
        document.getElementById("game-over-screen").classList.remove("hidden");
        document.querySelector(".game-container").classList.add("hidden");

        autoScrollHorizontally(document.getElementById("played-cards-scroll"), 2);



        return;
    }


    state.cardsPlayedThisYear = 0;
    deck.length = 0;
    bottomHandStack.length = 0;
    bottomHandStackContainer.innerHTML = "";
    assembleDeckForYear();
    updateStatsDisplay();
    
    applyEngravedBonus();
    if (typeof showHiddenStats === 'function') showHiddenStats();
    drawAndDisplayNextCard();

}

function applyEngravedBonus() {
  if (engravedMemories.length === 0) return;
  const lastEngraved = engravedMemories[engravedMemories.length - 1];

  const tagBonusMap = {
    growth:      { mood: +10 },
    freedom:     { freedom: +10 },
    family:      { security: +10 },
    dream:       { mood: +10 },
    friendship:  { social: +10 },
    self:        { self: +10 },
    courage:     { courage: +10 },
    study:       { academics: +10 },
    emotion:     { mood: +5 }
  };

  lastEngraved.tags.forEach(tag => {
    const bonus = tagBonusMap[tag];
    if (bonus) {
      for (const [stat, value] of Object.entries(bonus)) {
        playerStats[stat] = (playerStats[stat] || 0) + value;
      }
    }
  });

}


function determineEnding() {
  const { selfIdentity, courage, freedom, security, compliance, emotionalIntimacy } = hiddenStats;
  const { health, academics, mood, money, social } = playerStats;

  if (selfIdentity >= 70 && courage >= 60) {
    return {
      title: "Brave Self",
      description: "You’ve learned to express your truth and stand tall in who you are. May your voice remain strong and kind."
    };
  }

  if (compliance >= 70 && freedom < 50) {
    return {
      title: "The Good Child",
      description: "You’ve learned to listen, adapt, and stay composed. May you one day speak for yourself as clearly as you do for others."
    };
  }

  if (academics >= 90 && compliance < 50) {
    return {
      title: "The Scholar",
      description: "Your curiosity and focus have built a solid foundation. May your hunger for learning lead you somewhere beautiful."
    };
  }

  if (security < 30 && courage >= 50) {
    return {
      title: "The Survivor",
      description: "Through chaos and challenge, you held on. May your resilience continue to guide you to gentler places."
    };
  }

  if (freedom > 70 && selfIdentity < 40) {
    return {
      title: "The Wanderer",
      description: "You’ve chased the open road before knowing where it leads. May exploration reveal the self you’re still discovering."
    };
  }

  if (emotionalIntimacy >= 65 && security >= 60) {
    return {
      title: "The Connector",
      description: "You’ve nurtured trust and warmth in your relationships. May your heart stay open as your world grows wider."
    };
  }

  if (social >= 80 && emotionalIntimacy >= 50) {
    return {
      title: "The Companion",
      description: "You’ve built strong friendships and shared laughter. May the joy of connection always find you."
    };
  }

  if (money >= 80 && freedom >= 60) {
    return {
      title: "The Independent",
      description: "You’ve taken responsibility for yourself early. May your independence empower rather than isolate you."
    };
  }

  if (health >= 90 && mood >= 70) {
    return {
      title: "The Grounded One",
      description: "You’ve cared for your body and soul. May your steadiness carry you through life’s storms."
    };
  }

  if (selfIdentity >= 60 && introspection >= 4) {
    return {
      title: "The Seeker",
      description: "You’ve begun to ask big questions and listen for honest answers. May your path of self-discovery be filled with light."
    };
  }

  return {
    title: "The Unwritten Path",
    description: "You are still unfolding, full of uncertainty and promise. Whatever lies ahead, it is yours to shape."
  };
}


function autoScrollHorizontally(container, speed = 1) {
  const interval = setInterval(() => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      clearInterval(interval);
    } else {
      container.scrollLeft += speed;
    }
  }, 16); // 约每帧滚一次
}
