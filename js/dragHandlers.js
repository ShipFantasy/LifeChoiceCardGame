import { cardElement, gameOverScreen, gameContainer, ageDisplay } from './domRefs.js';
import { handleChoice, handleSwipeUp, handleSwipeDown, resetCardPosition } from './core.js';

let isDragging = false, startX = 0, startY = 0, currentTransX = 0, currentTransY = 0;

function onDragStart(e) {
    if (gameOverScreen.classList.contains('hidden')) {
        isDragging = true;
        const touch = e.touches ? e.touches[0] : e;
        startX = touch.clientX;
        startY = touch.clientY;
        const rect = cardElement.getBoundingClientRect();
        currentTransX = rect.left - (window.innerWidth / 2 - rect.width / 2);
        currentTransY = rect.top - gameContainer.getBoundingClientRect().top - 20;
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

function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    const transform = cardElement.style.transform;
    const match = transform.match(/translateX\(([-.\d]+)px\) translateY\(([-.\d]+)px\)/);
    const dx = match ? parseFloat(match[1]) : 0;
    const dy = match ? parseFloat(match[2]) : 0;

    if (Math.abs(dx) > 80 || Math.abs(dy) > 80) {
        if (Math.abs(dx) > Math.abs(dy)) {
            handleChoice(dx < 0 ? 'left' : 'right');
        } else {
            if (dy < 0) handleSwipeUp();
            else handleSwipeDown();
        }
    } else {
        resetCardPosition();
    }
}

export function bindDragEvents() {
    cardElement.addEventListener('mousedown', onDragStart);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    cardElement.addEventListener('touchstart', onDragStart, { passive: false });
    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd);
}
