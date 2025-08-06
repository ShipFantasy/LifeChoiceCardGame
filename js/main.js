import { startGame } from './core.js';
import { startButton, volumeButton, volumeScreen, startScreen, gameContainer, backToStartButton, bgmSlider, sfxSlider } from './domRefs.js';
import { bgMusic, memoryMusic, setBGMVolume, setSFXVolume, playClickSound, loadVolumeSettings, switchToMainMusic } from './audio.js';
import { bindDragEvents } from './dragHandlers.js';
import { hiddenStats } from './gameState.js';
import { state } from './gameState.js';
import { initSaveUI } from './saveUI.js';

document.addEventListener('DOMContentLoaded', () => {

    bindDragEvents();
    showHiddenStats();
    initSaveUI();
    
    // 延迟加载音量设置，确保DOM完全准备好
    setTimeout(() => {
        loadVolumeSettings(); // 加载音量设置
    }, 100);
    
    // 立即尝试播放背景音乐
    let musicStarted = false;
    
    window.tryPlayMusic = () => {
        if (!musicStarted) {
            bgMusic.play().then(() => {
                musicStarted = true;
                console.log('🎵 背景音乐开始播放');
            }).catch(e => {
                console.log('⚠️ 自动播放被阻止，等待用户交互:', e.message);
                // 如果自动播放被阻止，在用户交互时再次尝试
                const playOnInteraction = () => {
                    if (!musicStarted) {
                        bgMusic.play().then(() => {
                            musicStarted = true;
                            console.log('🎵 用户交互后背景音乐开始播放');
                            document.removeEventListener('click', playOnInteraction);
                            document.removeEventListener('touchstart', playOnInteraction);
                        }).catch(err => console.log('音乐播放失败:', err));
                    }
                };
                document.addEventListener('click', playOnInteraction);
                document.addEventListener('touchstart', playOnInteraction);
            });
        }
    };
    
    // 立即尝试播放
    setTimeout(window.tryPlayMusic, 500);
    
    startButton.addEventListener('click', () => {
        playClickSound();
        startScreen.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        startGame();
    });

    volumeButton.addEventListener('click', () => {
        playClickSound();
        startScreen.classList.add('hidden');
        volumeScreen.classList.remove('hidden');
        
        // 确保音量设置正确加载和显示
        setTimeout(() => {
            loadVolumeSettings();
        }, 50);
    });

    backToStartButton.addEventListener('click', () => {
        playClickSound();
        volumeScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        
        // 确保回到开始页面时切换回主音乐并播放
        setTimeout(() => {
            switchToMainMusic();
            window.tryPlayMusic();
        }, 100);
    });

    // 音量滑块事件监听 - 增强版
    if (bgmSlider) {
        const bgmIndicator = document.getElementById('bgm-indicator');
        
        bgmSlider.addEventListener('input', e => {
            const volume = parseFloat(e.target.value);
            setBGMVolume(volume);
            
            // 更新音量指示器
            if (bgmIndicator) {
                bgmIndicator.textContent = Math.round(volume * 100) + '%';
            }
            
            // 立即测试BGM音量变化 - 播放当前的背景音乐
            if (bgMusic.paused && memoryMusic.paused) {
                // 如果两个音乐都暂停了，播放主音乐
                bgMusic.play().catch(() => {});
            }
        });
        
        // 添加鼠标移动时的实时预览
        bgmSlider.addEventListener('mousemove', e => {
            if (e.buttons === 1) { // 只有在拖拽时
                const volume = parseFloat(e.target.value);
                setBGMVolume(volume);
                if (bgmIndicator) {
                    bgmIndicator.textContent = Math.round(volume * 100) + '%';
                }
            }
        });
    }
    
    if (sfxSlider) {
        const sfxIndicator = document.getElementById('sfx-indicator');
        
        // 防抖函数，避免音效播放过于频繁
        let sfxTestTimeout;
        
        sfxSlider.addEventListener('input', e => {
            const volume = parseFloat(e.target.value);
            setSFXVolume(volume);
            
            // 更新音量指示器
            if (sfxIndicator) {
                sfxIndicator.textContent = Math.round(volume * 100) + '%';
            }
            
            // 清除之前的测试音效计时器
            if (sfxTestTimeout) {
                clearTimeout(sfxTestTimeout);
            }
            
            // 延迟播放测试音效，避免过于频繁
            sfxTestTimeout = setTimeout(() => {
                playClickSound(); // 播放测试音效
            }, 150);
        });
        
        // 鼠标松开时播放一次确认音效
        sfxSlider.addEventListener('mouseup', () => {
            setTimeout(playClickSound, 50);
        });
        
        // 触摸设备支持
        sfxSlider.addEventListener('touchend', () => {
            setTimeout(playClickSound, 50);
        });
    }

    document.getElementById("restart-button").addEventListener("click", () => {
        playClickSound();
        location.reload();  
    });

    document.getElementById("quit-button").addEventListener("click", () => {
        playClickSound();

        // 隐藏游戏界面，显示起始页
        document.querySelector(".game-container").classList.add("hidden");
        document.getElementById("start-screen").classList.remove("hidden");
        
        // 确保返回开始页面时切换回主音乐并播放
        setTimeout(() => {
            switchToMainMusic();
            window.tryPlayMusic();
        }, 100);
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


