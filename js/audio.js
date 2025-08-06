// 背景音乐
export const bgMusic = new Audio('assets/audio/bgm.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;
bgMusic.playbackRate = 0.8

// 记忆选择/结局音乐
export const memoryMusic = new Audio('assets/audio/round.mp3');
memoryMusic.loop = true;
memoryMusic.volume = 0.5;

export const endSound   = new Audio('assets/audio/end.mp3');


export const clickSound = new Audio('assets/audio/click.mp3');
export const loadSound = new Audio('assets/audio/load.mp3');
export const saveSound  = new Audio('assets/audio/save.wav');
export const swipeSound = new Audio('assets/audio/swipe.mp3');


// 当前播放的音乐
let currentMusic = bgMusic;

// Web Audio API 音效生成器
// class SynthAudio {
//     constructor(type = 'click') {
//         this.type = type;
//         this.volume = 0.5;
//         this.audioContext = null;
//         this.currentTime = 0; // 兼容Audio API
        
//         // 尝试创建AudioContext
//         try {
//             this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
//         } catch (e) {
//             console.warn('Web Audio API not supported, falling back to silent mode');
//         }
//     }
    
//     generateSound(type) {
//         if (!this.audioContext) return;
        
//         const oscillator = this.audioContext.createOscillator();
//         const gainNode = this.audioContext.createGain();
        
//         oscillator.connect(gainNode);
//         gainNode.connect(this.audioContext.destination);
        
//         // 不同类型的音效参数
//         const soundParams = {
//             click: { freq: 660, duration: 0.09, type: 'triangle' },
//             swipe: { freq: 900, duration: 0.36, type: 'triangle', toFreq: 900  },
//             save: { freq: 600, duration: 0.3, type: 'triangle' },
//             load: { freq: 500, duration: 0.3, type: 'triangle' },
//             hover: { freq: 300, duration: 0.05, type: 'sine' },
//             success: { freq: 800, duration: 0.4, type: 'square' },
//             error: { freq: 200, duration: 0.5, type: 'sawtooth' }
//         };
        
//         const params = soundParams[type] || soundParams.click;
        
//         oscillator.frequency.setValueAtTime(params.freq, this.audioContext.currentTime);
//         oscillator.type = params.type;
        
//         gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
//         gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + params.duration);
        
//         oscillator.start(this.audioContext.currentTime);
//         oscillator.stop(this.audioContext.currentTime + params.duration);
//     }
    
//     safePlay() {
//         return new Promise((resolve) => {
//             try {
//                 // 如果AudioContext处于suspended状态，尝试恢复
//                 if (this.audioContext && this.audioContext.state === 'suspended') {
//                     this.audioContext.resume().then(() => {
//                         this.generateSound(this.type);
//                         resolve();
//                     }).catch(() => resolve());
//                 } else {
//                     this.generateSound(this.type);
//                     resolve();
//                 }
//             } catch (error) {
//                 console.warn('Synth audio failed:', error.message);
//                 resolve();
//             }
//         });
//     }
// }

// 音效集合 - 使用合成音效
const sfxFiles = {
  click: clickSound,
  load: loadSound,
  save: saveSound,
  swipe: swipeSound,
  // 可继续扩展更多音效...
};


let sfxVolume = 0.5;
let bgmVolume = 0.5;

// 从localStorage加载音量设置
export function loadVolumeSettings() {
    const savedBGMVolume = localStorage.getItem('lifepages_bgm_volume');
    const savedSFXVolume = localStorage.getItem('lifepages_sfx_volume');
    
    if (savedBGMVolume !== null) {
        bgmVolume = parseFloat(savedBGMVolume);
        bgMusic.volume = bgmVolume;
        memoryMusic.volume = bgmVolume; // 同步记忆音乐音量
    }
    
    if (savedSFXVolume !== null) {
        sfxVolume = parseFloat(savedSFXVolume);
        Object.values(sfxFiles).forEach(audio => {
            audio.volume = sfxVolume;
        });
    }
    
    // 更新界面滑块 - 使用更安全的方法
    updateVolumeSliders();
}

// 单独的函数来更新滑块值
function updateVolumeSliders() {
    // 使用 requestAnimationFrame 确保DOM准备就绪
    requestAnimationFrame(() => {
        const bgmSlider = document.getElementById('bgm-volume');
        const sfxSlider = document.getElementById('sfx-volume');
        const bgmIndicator = document.getElementById('bgm-indicator');
        const sfxIndicator = document.getElementById('sfx-indicator');
        
        if (bgmSlider) {
            bgmSlider.value = bgmVolume;
        }
        
        if (bgmIndicator) {
            bgmIndicator.textContent = Math.round(bgmVolume * 100) + '%';
        }
        
        if (sfxSlider) {
            sfxSlider.value = sfxVolume;
        }
        
        if (sfxIndicator) {
            sfxIndicator.textContent = Math.round(sfxVolume * 100) + '%';
        }
    });
}

// 保存音量设置
function saveVolumeSettings() {
    localStorage.setItem('lifepages_bgm_volume', bgmVolume.toString());
    localStorage.setItem('lifepages_sfx_volume', sfxVolume.toString());
}

export function playSFX(name) {
    const snd = sfxFiles[name];
    if (snd && sfxVolume > 0) {
        snd.currentTime = 0;
        snd.volume = sfxVolume;
        snd.play();
    }
}


export function setBGMVolume(val) {
    bgmVolume = Math.max(0, Math.min(1, parseFloat(val))); // 确保音量在 0-1 范围内
    bgMusic.volume = bgmVolume;
    memoryMusic.volume = bgmVolume; // 同步设置记忆音乐音量
    saveVolumeSettings();
}

export function setSFXVolume(val) {
    sfxVolume = Math.max(0, Math.min(1, parseFloat(val))); // 确保音量在 0-1 范围内
    Object.values(sfxFiles).forEach(audio => {
        audio.volume = sfxVolume;
    });
    saveVolumeSettings();
}

// 播放特定的音效
export function playClickSound()   { playSFX('end');   }
export function playLoadSound()  { playSFX('load');  }
export function playSaveSound()  { playSFX('save');  }
export function playSwipeSound() { playSFX('swipe'); }

export function playHoverSound() { playSFX('hover'); }

export function playSuccessSound() { playSFX('success'); }

export function playErrorSound() { playSFX('error'); }

// 获取当前音量
export function getCurrentVolumes() {
    return {
        bgm: bgmVolume,
        sfx: sfxVolume
    };
}

// 切换到记忆选择/结局音乐
export function switchToMemoryMusic() {
    if (currentMusic === memoryMusic) return; // 已经是记忆音乐了
    
    console.log('🎵 切换到记忆选择音乐');
    
    // 淡出当前音乐
    const fadeOut = setInterval(() => {
        if (currentMusic.volume > 0.1) {
            currentMusic.volume -= 0.1;
        } else {
            currentMusic.volume = 0;
            currentMusic.pause();
            clearInterval(fadeOut);
            
            // 切换到记忆音乐
            currentMusic = memoryMusic;
            currentMusic.volume = 0;
            currentMusic.currentTime = 0;
            
            // 开始播放并淡入
            currentMusic.play().then(() => {
                const fadeIn = setInterval(() => {
                    if (currentMusic.volume < bgmVolume - 0.1) {
                        currentMusic.volume += 0.1;
                    } else {
                        currentMusic.volume = bgmVolume;
                        clearInterval(fadeIn);
                    }
                }, 50);
            }).catch(e => console.log('记忆音乐播放失败:', e));
        }
    }, 50);
}

// 切换回主背景音乐
export function switchToMainMusic() {
    if (currentMusic === bgMusic) return; // 已经是主音乐了
    
    console.log('🎵 切换回主背景音乐');
    
    // 淡出当前音乐
    const fadeOut = setInterval(() => {
        if (currentMusic.volume > 0.1) {
            currentMusic.volume -= 0.1;
        } else {
            currentMusic.volume = 0;
            currentMusic.pause();
            clearInterval(fadeOut);
            
            // 切换到主音乐
            currentMusic = bgMusic;
            currentMusic.volume = 0;
            
            // 开始播放并淡入
            currentMusic.play().then(() => {
                const fadeIn = setInterval(() => {
                    if (currentMusic.volume < bgmVolume - 0.1) {
                        currentMusic.volume += 0.1;
                    } else {
                        currentMusic.volume = bgmVolume;
                        clearInterval(fadeIn);
                    }
                }, 50);
            }).catch(e => console.log('主音乐播放失败:', e));
        }
    }, 50);
}
