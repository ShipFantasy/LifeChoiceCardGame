import { cardElement, gameOverScreen, gameContainer, ageDisplay } from './domRefs.js';
import { handleChoice, handleSwipeUp, handleSwipeDown, resetCardPosition } from './core.js';
import { playSwipeSound } from './audio.js';

let isDragging = false, startX = 0, startY = 0, currentTransX = 0, currentTransY = 0;
let animationId = null;
let lastShowState = ''; // 记录上次显示状态，避免重复 DOM 操作

// 防抖函数，优化性能
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function onDragStart(e) {
    if (gameOverScreen.classList.contains('hidden')) {
        isDragging = true;
        const touch = e.touches ? e.touches[0] : e;
        startX = touch.clientX;
        startY = touch.clientY;
        
        // 启用硬件加速和优化性能
        cardElement.style.transition = 'none';
        cardElement.style.willChange = 'transform'; // 告诉浏览器这个元素会改变
        
        // 防止默认的滚动行为
        if (e.preventDefault) e.preventDefault();
        
        lastShowState = ''; // 重置状态追踪
    }
}

function onDragMove(e) {
    if (!isDragging) return;
    
    // 防止默认行为，避免页面滚动
    if (e.preventDefault) e.preventDefault();
    
    const touch = e.touches ? e.touches[0] : e;
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    
    // 取消之前的动画帧
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    // 使用 requestAnimationFrame 优化动画性能
    animationId = requestAnimationFrame(() => {
        // 使用 translate3d 启用硬件加速，提供更流畅的动画
        const rotation = dx * 0.1; // 轻微旋转效果
        cardElement.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${rotation}deg)`;
        
        // 优化选项显示逻辑，减少不必要的 DOM 操作
        updateOptionDisplay(dx, dy);
    });
}

// 单独的函数处理选项显示，减少重复 DOM 操作
function updateOptionDisplay(dx, dy) {
    const threshold = 50;
    let newShowState = '';
    
    if (Math.abs(dx) > Math.abs(dy)) {
        if (dx < -threshold) newShowState = 'show-left';
        else if (dx > threshold) newShowState = 'show-right';
    } else {
        if (dy < -threshold) newShowState = 'show-up';
        else if (dy > threshold) newShowState = 'show-down';
    }
    
    // 只有状态改变时才操作 DOM
    if (newShowState !== lastShowState) {
        // 先移除所有状态
        cardElement.classList.remove('show-left', 'show-right', 'show-up', 'show-down');
        
        // 添加新状态
        if (newShowState) {
            cardElement.classList.add(newShowState);
        }
        
        lastShowState = newShowState;
    }
}

function onDragEnd(e) {
    if (!isDragging) return;
    isDragging = false;
    
    // 取消待执行的动画帧
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    
    // 清除性能优化提示
    cardElement.style.willChange = 'auto';
    
    // 立即清除所有选项显示状态
    cardElement.classList.remove('show-left', 'show-right', 'show-up', 'show-down');
    lastShowState = '';
    
    // 从当前 transform 中提取位移值
    const transform = cardElement.style.transform;
    let dx = 0, dy = 0;
    
    // 支持 translate3d 格式
    const match3d = transform.match(/translate3d\(([-.\d]+)px,\s*([-.\d]+)px,\s*([-.\d]+)px\)/);
    const match2d = transform.match(/translateX\(([-.\d]+)px\) translateY\(([-.\d]+)px\)/);
    
    if (match3d) {
        dx = parseFloat(match3d[1]);
        dy = parseFloat(match3d[2]);
    } else if (match2d) {
        dx = parseFloat(match2d[1]);
        dy = parseFloat(match2d[2]);
    }

    // 判断是否达到触发阈值
    const triggerThreshold = 80;
    if (Math.abs(dx) > triggerThreshold || Math.abs(dy) > triggerThreshold) {
        playSwipeSound(); // 播放滑动音效
        if (Math.abs(dx) > Math.abs(dy)) {
            handleChoice(dx < 0 ? 'left' : 'right');
        } else {
            if (dy < 0) handleSwipeUp();
            else handleSwipeDown();
        }
    } else {
        // 回弹动画
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
