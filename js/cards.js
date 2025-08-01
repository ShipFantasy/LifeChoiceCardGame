// js/cards.js
// 全新12岁卡池 - 基于深度叙事和单选机制

export const allCards_12 = {
    // --- 双选项卡牌 ---
    "card_locked_door": {
        text: "你第一次反锁房门，妈妈在门外敲了很久。",
        tags: ['family', 'boundary'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "打开门说“我想有点空间”",
        effectLeft: {
            stats: { mood: +5, freedom: +10 },
            hiddenStats: { courage: +2, selfIdentity: +1 },
            memory: { keyword: "边界", image: "assets/images/card_locked_door.png" }
        },
        optionRightText: "假装没听见继续沉默",
        effectRight: {
            stats: { mood: -10, security: -5 },
            hiddenStats: { avoidance: +3 },
            memory: { keyword: "疏离", image: "assets/images/card_locked_door.png" }
        }
    },
    "card_dad_drunk": {
        text: "爸爸喝醉后对你发了火，你装作睡着没回应。",
        tags: ['family', 'fear'],
        cardImage: "assets/images/card_dad_drunk.png",
        optionLeftText: "第二天试探地问“你昨天还好吗？”",
        effectLeft: {
            stats: { courage: +5, security: +5 },
            hiddenStats: { empathy: +2 },
            memory: { keyword: "试探", image: "assets/images/card_dad_drunk.png" }
        },
        optionRightText: "继续不提这件事",
        effectRight: {
            stats: { mood: -10, security: -10 },
            hiddenStats: { repression: +3 },
            memory: { keyword: "压抑", image: "assets/images/card_dad_drunk.png" }
        }
    },
    "card_mom_cry": {
        text: "你半夜起来喝水，偶然看见妈妈在客厅偷偷哭泣。",
        tags: ['family', 'growth'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "悄悄走过去抱住她",
        effectLeft: {
            stats: { mood: +10 },
            hiddenStats: { compassion: +3 },
            memory: { keyword: "体谅", image: "assets/images/card_mom_cry.png" }
        },
        optionRightText: "假装没看见回房间",
        effectRight: {
            stats: { mood: -10 },
            hiddenStats: { denial: +2 },
            memory: { keyword: "逃避", image: "assets/images/card_mom_cry.png" }
        }
    },
    "card_dance_dream": {
        text: "你想学跳舞，但家人觉得这是“浪费时间”。",
        tags: ['dream', 'family'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "和他们据理力争",
        effectLeft: {
            stats: { mood: -10 },
            hiddenStats: { determination: +3 },
            memory: { keyword: "坚持", image: "assets/images/card_dance_dream.png" }
        },
        optionRightText: "暂时把想法藏起来",
        effectRight: {
            stats: { mood: -5 },
            hiddenStats: { suppression: +2 },
            memory: { keyword: "隐藏", image: "assets/images/card_dance_dream.png" }
        }
    },
    "card_family_trip": {
        text: "家庭旅行时，父母忽然吵了起来，你感到很尴尬和无助。",
        tags: ['family', 'emotion'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "试着调解他们的情绪",
        effectLeft: {
            stats: { mood: +5, courage: +5 },
            hiddenStats: { mediation: +3 },
            memory: { keyword: "调和", image: "assets/images/card_family_trip.png" }
        },
        optionRightText: "躲开他们，自己去探索",
        effectRight: {
            stats: { freedom: +10, mood: -5 },
            hiddenStats: { escapism: +3 },
            memory: { keyword: "逃离", image: "assets/images/card_family_trip.png" }
        }
    },    
    "card_white_lie_friend": {
        text: "朋友帮你撒了个小谎，但你开始不安。",
        tags: ['friendship', 'ethics'],
        cardImage: "assets/images/card_locked_door.png",
        canEcho: true,
        flowerTag: "鸢尾花（信任裂痕）",
        echoType: "情绪干扰",
        optionLeftText: "坦白告诉老师事情真相",
        effectLeft: {
            stats: { courage: +10, social: -5 },
            hiddenStats: { honesty: +3 },
            memory: { keyword: "诚实", image: "assets/images/card_white_lie_friend.png" }
        },
        optionRightText: "接受这份‘保护’",
        effectRight: {
            stats: { mood: +5, self: -5 },
            hiddenStats: { guilt: +2 },
            memory: { keyword: "隐瞒", image: "assets/images/card_white_lie_friend.png" }
        }
    },
    "card_stray_cat": {
        text: "和她一起在巷子口捡到一只小猫。",
        tags: ['friendship', 'care'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "勿忘我（珍惜）",
        echoType: "剧情共鸣",
        optionLeftText: "决定偷偷一起养",
        effectLeft: {
            stats: { social: +10, mood: +5 },
            hiddenStats: { responsibility: +3 },
            memory: { keyword: "共养", image: "assets/images/card_stray_cat.png" }
        },
        optionRightText: "放走它，说“太麻烦了”",
        effectRight: {
            stats: { mood: -5, social: -5 },
            hiddenStats: { guilt: +2 },
            memory: { keyword: "放弃", image: "assets/images/card_stray_cat.png" }
        }
    },
    "card_bestie_argue": {
        text: "和最好的朋友大吵一架，你俩谁也不理谁。你会怎么做？",
        tags: ['social', 'friendship'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "薄荷（冷战）",
        echoType: "对话改写",
        optionLeftText: "主动递纸条道歉",
        effectLeft: {
            stats: { social: +15, mood: +10 },
            hiddenStats: { humility: +2 },
            memory: { keyword: "和解", image: "card_bestie_argue.png" }
        },
        optionRightText: "等她先来找我",
        effectRight: {
            stats: { social: -10, mood: -10 },
            hiddenStats: { stubbornness: +3 },
            memory: { keyword: "固执", image: "assets/images/card_bestie_argue.png" }
        }
    },
    "card_friend_move": {
        text: "最好的朋友要搬家了，你感到难过和无助。",
        tags: ['friendship', 'loss'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "风信子（离别）",
        echoType: "情绪干扰",
        optionLeftText: "约定保持联系",
        effectLeft: {
            stats: { social: +10, mood: +5 },
            hiddenStats: { commitment: +3 },
            memory: { keyword: "承诺", image: "assets/images/memory_friend_call.png" }
        },
        optionRightText: "选择慢慢放下",
        effectRight: {
            stats: { mood: -5, courage: +5 },
            hiddenStats: { acceptance: +2 },
            memory: { keyword: "放手", image: "assets/images/memory_let_go.png" }
        }
    },
    "card_secret_crush": {
        text: "你发现自己开始在意某个人，这成了日记里最大的秘密。",
        tags: ['relationship', 'love'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "薰衣草（隐恋）",
        echoType: "剧情共鸣",
        optionLeftText: "把这份心情告诉朋友",
        effectLeft: {
            stats: { social: +10, mood: +5 },
            hiddenStats: { openness: +2 },
            memory: { keyword: "秘密", image: "assets/images/card_secret_crush.png" }
        },
        optionRightText: "只写在日记本的最后一页",
        effectRight: {
            stats: { mood: +10 },
            hiddenStats: { introspection: +2 },
            memory: { keyword: "独白", image: "assets/images/card_secret_crush.png" }
        }
    },
    "card_bully_group": {
        text: "班级聊天群里，几个同学开始带头孤立一个女生。",
        tags: ['moral', 'social'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "鬼针草（旁观者）",
        echoType: "对话改写",
        optionLeftText: "私下安慰那个女生",
        effectLeft: {
            stats: { social: +5, mood: +5 },
            hiddenStats: { kindness: +3 },
            memory: { keyword: "善意", image: "assets/images/card_bully_group.png" }
        },
        optionRightText: "保持沉默，假装没看到",
        effectRight: {
            stats: { social: -5, mood: -10 },
            hiddenStats: { indifference: +3 },
            memory: { keyword: "沉默", image: "assets/images/card_bully_group.png" }
        }
    },
    "card_groupwork_alone": {
        text: "小组作业没人动手，你默默一个人完成了。",
        tags: ['school', 'pressure'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "写上所有人名字交上去",
        effectLeft: {
            stats: { social: +5, self: -5 },
            hiddenStats: { altruism: +2 },
            memory: { keyword: "成全", image: "assets/images/card_groupwork_alone.png" }
        },
        optionRightText: "只写你自己名字",
        effectRight: {
            stats: { courage: +10, social: -10 },
            hiddenStats: { assertiveness: +3 },
            memory: { keyword: "据理", image: "assets/images/card_groupwork_alone.png" }
        }
    },
    "card_cheating_seen": {
        text: "你亲眼看到朋友在考试中作弊。",
        tags: ['ethics', 'school'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "装作没看到",
        effectLeft: {
            stats: { mood: -5, self: -5 },
            hiddenStats: { avoidance: +2 },
            memory: { keyword: "沉默", image: "assets/images/card_cheating_seen.png" }
        },
        optionRightText: "考后提醒她以后别这样",
        effectRight: {
            stats: { courage: +10, social: +5 },
            hiddenStats: { integrity: +3 },
            memory: { keyword: "提醒", image: "assets/images/card_cheating_seen.png" }
        }
    },
    "card_math_class": {
        text: "数学课上，你发现自己比大多数男生成绩都好。",
        tags: ['study', 'gender'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "享受这份领先的自信",
        effectLeft: {
            stats: { academics: +10, mood: +5 },
            hiddenStats: { pride: +3 },
            memory: { keyword: "光芒", image: "assets/images/card_math_class.png" }
        },
        optionRightText: "怕太张扬，故意做错几道",
        effectRight: {
            stats: { academics: -5, mood: -10 },
            hiddenStats: { modesty: +2 },
            memory: { keyword: "隐藏", image: "assets/images/card_math_class.png" }
        }
    },
    "card_period_panic": {
        text: "在上课时，你感觉自己好像是第一次来月经了。",
        tags: ['body', 'shame'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "下课后告诉同桌闺蜜",
        effectLeft: {
            stats: { health: +5, social: +5 },
            hiddenStats: { trust: +2 },
            memory: { keyword: "分享", image: "assets/images/card_period_panic.png" }
        },
        optionRightText: "一个人去厕所偷偷确认",
        effectRight: {
            stats: { health: -5, mood: -5 },
            hiddenStats: { anxiety: +3 },
            memory: { keyword: "慌张", image: "assets/images/card_period_panic.png" }
        }
    },
    "card_school_performance": {
        text: "考试成绩公布，你的排名比预期高，但也感到压力山大。",
        tags: ['study', 'pressure'],
        cardImage: "assets/images/card_locked_door.png",
        optionLeftText: "庆祝这份成就",
        effectLeft: {
            stats: { mood: +10, academics: +5 },
            hiddenStats: { celebration: +3 },
            memory: { keyword: "喜悦", image: "assets/images/card_school_performance.png" }
        },
        optionRightText: "给自己制定更高目标",
        effectRight: {
            stats: { courage: +10, mood: -5 },
            hiddenStats: { ambition: +3 },
            memory: { keyword: "挑战", image: "assets/images/card_school_performance.png" }
        }
    },
    "card_mirror_self": {
        text: "看着镜子里变化的自己，你想穿那件喜欢的、但又有点“显眼”的裙子出门吗？",
        tags: ['self', 'explore'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "雏菊（自我觉醒）",
        echoType: "情绪干扰",
        optionLeftText: "穿！我喜欢就好",
        effectLeft: {
            stats: { mood: +15, social: -5 },
            hiddenStats: { confidence: +4 },
            memory: { keyword: "独特", image: "assets/images/card_mirror_self.png" }
        },
        optionRightText: "还是穿校服吧",
        effectRight: {
            stats: { mood: -5 },
            hiddenStats: { conformity: +3 },
            memory: { keyword: "融入", image: "assets/images/card_mirror_self.png" }
        }
    },
    "card_fat_shame": {
        text: "午餐时，有人开玩笑说你“吃得真多，怪不得有点胖”。你沉默了一整个下午。",
        tags: ['self', 'shame'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "月见草（羞耻）",
        echoType: "对话变更",
        optionLeftText: "默默地承受...",
        effectLeft: {
            stats: { mood: -15, health: -5 },
            hiddenStats: { hurt: +3 },
            memory: { keyword: "羞耻", image: "assets/images/card_fat_shame.png" }
        },
        optionRightText: "当场反击，维护自己",
        effectRight: {
            stats: { mood: +5, social: -5 },
            hiddenStats: { assertiveness: +3 },
            memory: { keyword: "反击", image: "assets/images/card_fat_shame.png" }
        }
    },
    "card_sensible_praise": {
        text: "亲戚来家里做客，夸你“真是个懂事的孩子”。你挤出微笑，但不确定这是不是一句赞美。",
        tags: ['self', 'struggle'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "薄荷（隐痛顺从）",
        echoType: "剧情共鸣",
        optionLeftText: "礼貌地回应...",
        effectLeft: {
            stats: { mood: -5 },
            hiddenStats: { compliance: +2 },
            memory: { keyword: "懂事", image: "assets/images/card_sensible_praise.png" }
        },
        optionRightText: "心里感到委屈，但没说出来",
        effectRight: {
            stats: { mood: -10 },
            hiddenStats: { resentment: +3 },
            memory: { keyword: "委屈", image: "assets/images/card_sensible_praise.png" }
        }
    },
    "card_rooftop_escape": {
        text: "你一个人在教学楼的楼顶看天发呆，幻想自己能消失一会儿，哪怕只有几分钟。",
        tags: ['escapism', 'emotion'],
        canEcho: true,
        cardImage: "assets/images/card_locked_door.png",
        flowerTag: "金鱼草（逃避）",
        echoType: "情绪干扰",
        optionLeftText: "就这样，静静地...",
        effectLeft: {
            stats: { mood: +10, health: -5 },
            hiddenStats: { calmness: +3 },
            memory: { keyword: "放空", image: "assets/images/card_rooftop_escape.png" }
        },
        optionRightText: "深呼吸，决定回去面对",
        effectRight: {
            stats: { mood: -5, courage: +10 },
            hiddenStats: { resolve: +3 },
            memory: { keyword: "勇敢", image: "assets/images/card_rooftop_escape.png" }
        }
    },
    "card_idol_light": {
        text: "在屏幕上看到偶像的演唱会，万千灯光汇成一片海。你感觉心里某个东西，被点亮了。",
        tags: ['dream', 'spark'],
        cardImage: "assets/images/card_locked_door.png",
        canEcho: true,
        flowerTag: "向日葵（启发）",
        echoType: "剧情共鸣",
        optionLeftText: "被深深地打动...",
        effectLeft: {
            stats: { mood: +20 },
            hiddenStats: { inspiration: +5 },
            memory: { keyword: "闪光", image: "assets/images/card_idol_light.png" }
        },
        optionRightText: "觉得遥不可及，默默欣赏",
        effectRight: {
            stats: { mood: +5 },
            hiddenStats: { admiration: +2 },
            memory: { keyword: "仰望", image: "assets/images/card_idol_light.png" }
        }
    },
    "card_first_earnings": {
        text: "你用零花钱买了自己喜欢的小物品，感受到掌控的快乐。",
        tags: ['self', 'independence'],
        cardImage: "assets/images/card_locked_door.png",
        canEcho: true,
        flowerTag: "金盏花（掌控）",
        echoType: "剧情共鸣",
        optionLeftText: "计划下一次购物",
        effectLeft: {
            stats: { freedom: +10, mood: +5 },
            hiddenStats: { planning: +3 },
            memory: { keyword: "掌控", image: "assets/images/card_first_earnings.png" }
        },
        optionRightText: "存钱攒起来做更大投资",
        effectRight: {
            stats: { patience: +10, freedom: +5 },
            hiddenStats: { saving: +3 },
            memory: { keyword: "积蓄", image: "assets/images/card_first_earnings.png" }
        }
    },
    "card_first_job": {
        text: "你尝试做第一份兼职，体验劳动的艰辛与乐趣。",
        tags: ['growth', 'responsibility'],
        cardImage: "assets/images/card_locked_door.png",
        canEcho: true,
        flowerTag: "风铃草（成长）",
        echoType: "剧情共鸣",
        optionLeftText: "认真完成任务",
        effectLeft: {
            stats: { courage: +10, freedom: +5 },
            hiddenStats: { diligence: +3 },
            memory: { keyword: "努力", image: "assets/images/card_first_job.png" }
        },
        optionRightText: "觉得压力大，想放弃",
        effectRight: {
            stats: { mood: -10, courage: -5 },
            hiddenStats: { stress: +3 },
            memory: { keyword: "退缩", image: "assets/images/card_first_job.png" }
        }
    },
    "card_new_hobby": {
        text: "你发现了一个新的兴趣爱好，想试试看。",
        tags: ['explore', 'joy'],
        cardImage: "assets/images/card_locked_door.png",
        canEcho: true,
        flowerTag: "勿忘我（热情）",
        echoType: "情绪干扰",
        optionLeftText: "投入时间学习",
        effectLeft: {
            stats: { mood: +15, courage: +5 },
            hiddenStats: { enthusiasm: +4 },
            memory: { keyword: "热情", image: "assets/images/card_new_hobby.png" }
        },
        optionRightText: "犹豫不决，暂时放弃",
        effectRight: {
            stats: { mood: -5 },
            hiddenStats: { indecision: +3 },
            memory: { keyword: "犹豫", image: "assets/images/card_new_hobby.png" }
        }
    }
};

// js/cards_13.js
// 13岁卡池示范

export const allCards_13 = {
  "card_new_school": {
    text: "转学第一天，你在新学校感到格格不入，没人主动跟你说话。",
    tags: ['school', 'social'],
    optionLeftText: "主动跟同学打招呼，试着融入",
    effectLeft: {
      stats: { social: +10, courage: +5 },
      hiddenStats: { anxiety: +2 },
      memory: { keyword: "融入", image: "assets/images/memory_new_school.png" }
    },
    optionRightText: "选择观察，慢慢适应",
    effectRight: {
      stats: { mood: -5, social: -5 },
      hiddenStats: { caution: +3 },
      memory: { keyword: "观察", image: "assets/images/memory_watch.png" }
    }
  },
  "card_first_crush": {
    text: "你发现自己对一个同学有了特别的感觉，心跳加速。",
    tags: ['love', 'growth'],
    optionLeftText: "偷偷写情书给他/她",
    effectLeft: {
      stats: { mood: +10, courage: +5 },
      hiddenStats: { vulnerability: +3 },
      memory: { keyword: "暗恋", image: "assets/images/memory_crush_letter.png" }
    },
    optionRightText: "把这份心情藏起来，继续朋友关系",
    effectRight: {
      stats: { mood: -5 },
      hiddenStats: { repression: +2 },
      memory: { keyword: "秘密", image: "assets/images/memory_crush_secret.png" }
    }
  },
  "card_exam_pressure": {
    text: "期中考试快到了，你感到极大压力，晚上经常失眠。",
    tags: ['study', 'stress'],
    optionLeftText: "制定详细复习计划，按部就班",
    effectLeft: {
      stats: { academics: +15, mood: -5 },
      hiddenStats: { discipline: +4 },
      memory: { keyword: "计划", image: "assets/images/memory_study_plan.png" }
    },
    optionRightText: "逃避复习，分心做别的事情",
    effectRight: {
      stats: { academics: -10, mood: +5 },
      hiddenStats: { procrastination: +3 },
      memory: { keyword: "逃避", image: "assets/images/memory_procrastinate.png" }
    }
  },
  "card_family_conflict": {
    text: "父母因为你的成绩争吵，你感到委屈和无助。",
    tags: ['family', 'emotion'],
    optionLeftText: "尝试沟通，表达自己的感受",
    effectLeft: {
      stats: { mood: +5, courage: +5 },
      hiddenStats: { openness: +3 },
      memory: { keyword: "沟通", image: "assets/images/memory_family_talk.png" }
    },
    optionRightText: "选择沉默，回避争吵",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { withdrawal: +3 },
      memory: { keyword: "沉默", image: "assets/images/memory_silent.png" }
    }
  },
  "card_friend_betrayal": {
    text: "你发现最好的朋友背后说了你的坏话。",
    tags: ['friendship', 'betrayal'],
    optionLeftText: "当面质问朋友，寻求解释",
    effectLeft: {
      stats: { courage: +10, social: -5 },
      hiddenStats: { confrontation: +3 },
      memory: { keyword: "质问", image: "assets/images/memory_confront.png" }
    },
    optionRightText: "选择疏远朋友，冷处理",
    effectRight: {
      stats: { mood: -10, social: -10 },
      hiddenStats: { resentment: +4 },
      memory: { keyword: "疏远", image: "assets/images/memory_distance.png" }
    }
  },
  "card_new_hobby": {
    text: "你发现了新的兴趣爱好，想全身心投入。",
    tags: ['explore', 'joy'],
    optionLeftText: "坚持练习，逐渐提高",
    effectLeft: {
      stats: { mood: +15, courage: +5 },
      hiddenStats: { dedication: +4 },
      memory: { keyword: "热情", image: "assets/images/memory_new_hobby.png" }
    },
    optionRightText: "兴趣减弱，逐渐放弃",
    effectRight: {
      stats: { mood: -5 },
      hiddenStats: { indecision: +3 },
      memory: { keyword: "放弃", image: "assets/images/memory_giveup.png" }
    }
  },
  "card_body_image": {
    text: "你对自己身体的变化感到困惑，镜子里的自己似乎陌生。",
    tags: ['self', 'body'],
    optionLeftText: "接受变化，试着喜欢自己",
    effectLeft: {
      stats: { mood: +10, confidence: +5 },
      hiddenStats: { selfAcceptance: +3 },
      memory: { keyword: "接受", image: "assets/images/memory_body_accept.png" }
    },
    optionRightText: "批评自己，感觉不够好",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { selfCriticism: +4 },
      memory: { keyword: "批评", image: "assets/images/memory_body_criticize.png" }
    }
  },
  "card_social_media": {
    text: "你看到朋友圈里别人光鲜的生活，心里产生嫉妒。",
    tags: ['social', 'emotion'],
    optionLeftText: "主动减少社交媒体使用",
    effectLeft: {
      stats: { mood: +5, freedom: +5 },
      hiddenStats: { mindfulness: +3 },
      memory: { keyword: "减少", image: "assets/images/memory_social_off.png" }
    },
    optionRightText: "继续刷屏，想融入",
    effectRight: {
      stats: { mood: -5, social: +5 },
      hiddenStats: { envy: +3 },
      memory: { keyword: "嫉妒", image: "assets/images/memory_social_envy.png" }
    }
  },
  "card_peer_pressure": {
    text: "朋友们开始尝试抽烟喝酒，你是否跟随？",
    tags: ['peer', 'pressure'],
    optionLeftText: "拒绝，坚定自我",
    effectLeft: {
      stats: { courage: +15, health: +10 },
      hiddenStats: { integrity: +4 },
      memory: { keyword: "拒绝", image: "assets/images/memory_refuse.png" }
    },
    optionRightText: "尝试，想融入群体",
    effectRight: {
      stats: { mood: +5, social: +10 },
      hiddenStats: { risk: +4 },
      memory: { keyword: "尝试", image: "assets/images/memory_try.png" }
    }
  },
  "card_part_time_job": {
    text: "你找到一份兼职工作，既兴奋又有些害怕。",
    tags: ['growth', 'responsibility'],
    optionLeftText: "认真负责，努力适应",
    effectLeft: {
      stats: { courage: +10, freedom: +5 },
      hiddenStats: { diligence: +3 },
      memory: { keyword: "努力", image: "assets/images/memory_part_time.png" }
    },
    optionRightText: "觉得压力大，想放弃",
    effectRight: {
      stats: { mood: -10, courage: -5 },
      hiddenStats: { stress: +3 },
      memory: { keyword: "退缩", image: "assets/images/memory_quit.png" }
    }
  },
  "card_mental_health": {
    text: "你开始感到焦虑，夜晚难以入眠。",
    tags: ['mental', 'health'],
    optionLeftText: "尝试写日记排解",
    effectLeft: {
      stats: { mood: +5 },
      hiddenStats: { introspection: +3 },
      memory: { keyword: "日记", image: "assets/images/memory_journal.png" }
    },
    optionRightText: "选择忽略，继续挣扎",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { avoidance: +4 },
      memory: { keyword: "忽略", image: "assets/images/memory_ignore.png" }
    }
  },

  "card_group_project": {
    text: "小组项目合作中，有人不按时完成任务，你怎么办？",
    tags: ['school', 'teamwork'],
    optionLeftText: "主动帮忙完成任务",
    effectLeft: {
      stats: { social: +10, mood: -5 },
      hiddenStats: { responsibility: +3 },
      memory: { keyword: "担当", image: "assets/images/memory_group_help.png" }
    },
    optionRightText: "提出质疑，要求公平分工",
    effectRight: {
      stats: { courage: +10, social: -5 },
      hiddenStats: { assertiveness: +4 },
      memory: { keyword: "坚持", image: "assets/images/memory_group_assert.png" }
    }
  },
  "card_cyberbullying": {
    text: "你在网上遭遇匿名欺凌，心情低落。",
    tags: ['social', 'cyberbullying'],
    optionLeftText: "向老师和家长求助",
    effectLeft: {
      stats: { mood: +5, courage: +5 },
      hiddenStats: { supportSeeking: +3 },
      memory: { keyword: "求助", image: "assets/images/memory_cyberbully_help.png" }
    },
    optionRightText: "选择沉默，自己忍受",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { isolation: +4 },
      memory: { keyword: "沉默", image: "assets/images/memory_cyberbully_silent.png" }
    }
  },
  "card_body_change_conflict": {
    text: "你因身体发育被同学取笑，感到尴尬。",
    tags: ['body', 'bullying'],
    optionLeftText: "勇敢反击，维护自己",
    effectLeft: {
      stats: { courage: +15, social: -5 },
      hiddenStats: { resilience: +4 },
      memory: { keyword: "反击", image: "assets/images/memory_body_defend.png" }
    },
    optionRightText: "躲避同学，避免冲突",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { avoidance: +3 },
      memory: { keyword: "逃避", image: "assets/images/memory_body_hide.png" }
    }
  },
  "card_first_conflict_with_teacher": {
    text: "你因作业问题与老师发生争执。",
    tags: ['school', 'authority'],
    optionLeftText: "表达自己的观点，试图沟通",
    effectLeft: {
      stats: { courage: +10, academics: -5 },
      hiddenStats: { communication: +3 },
      memory: { keyword: "沟通", image: "assets/images/memory_teacher_talk.png" }
    },
    optionRightText: "默默接受，避免冲突",
    effectRight: {
      stats: { mood: -5 },
      hiddenStats: { compliance: +3 },
      memory: { keyword: "顺从", image: "assets/images/memory_teacher_accept.png" }
    }
  },
  "card_sibling_rivalry": {
    text: "你和兄弟姐妹因争抢家里电脑发生争吵。",
    tags: ['family', 'conflict'],
    optionLeftText: "主动让步，平息争端",
    effectLeft: {
      stats: { mood: +5, social: +5 },
      hiddenStats: { empathy: +3 },
      memory: { keyword: "让步", image: "assets/images/memory_sibling_givein.png" }
    },
    optionRightText: "坚持己见，争取使用权",
    effectRight: {
      stats: { courage: +10, mood: -5 },
      hiddenStats: { stubbornness: +4 },
      memory: { keyword: "坚持", image: "assets/images/memory_sibling_fight.png" }
    }
  },
  "card_first_public_speech": {
    text: "学校安排你做公开演讲，你感到紧张。",
    tags: ['school', 'courage'],
    optionLeftText: "认真准备，尽力发挥",
    effectLeft: {
      stats: { courage: +15, social: +5 },
      hiddenStats: { preparation: +4 },
      memory: { keyword: "准备", image: "assets/images/memory_speech_prepare.png" }
    },
    optionRightText: "临时放弃，避免尴尬",
    effectRight: {
      stats: { mood: -10, courage: -5 },
      hiddenStats: { avoidance: +4 },
      memory: { keyword: "放弃", image: "assets/images/memory_speech_skip.png" }
    }
  },
  "card_first_kiss": {
    text: "你和喜欢的人第一次牵手，心跳加速。",
    tags: ['love', 'growth'],
    optionLeftText: "大胆表达喜欢",
    effectLeft: {
      stats: { mood: +20, courage: +10 },
      hiddenStats: { vulnerability: +5 },
      memory: { keyword: "表达", image: "assets/images/memory_first_kiss.png" }
    },
    optionRightText: "害羞回避，保持距离",
    effectRight: {
      stats: { mood: -5 },
      hiddenStats: { shyness: +3 },
      memory: { keyword: "回避", image: "assets/images/memory_shy.png" }
    }
  },
  "card_peer_argument": {
    text: "你和朋友为一件小事争吵，气氛紧张。",
    tags: ['friendship', 'conflict'],
    optionLeftText: "主动和解，修复关系",
    effectLeft: {
      stats: { social: +15, mood: +10 },
      hiddenStats: { forgiveness: +4 },
      memory: { keyword: "和解", image: "assets/images/memory_makeup.png" }
    },
    optionRightText: "冷战，谁也不说话",
    effectRight: {
      stats: { social: -10, mood: -10 },
      hiddenStats: { stubbornness: +4 },
      memory: { keyword: "冷战", image: "assets/images/memory_cold_war.png" }
    }
  },
  "card_new_responsibility": {
    text: "家里让你帮忙照顾弟弟妹妹，你觉得累又开心。",
    tags: ['family', 'responsibility'],
    optionLeftText: "认真照顾，尽力做好",
    effectLeft: {
      stats: { mood: +10, responsibility: +10 },
      hiddenStats: { diligence: +3 },
      memory: { keyword: "责任", image: "assets/images/memory_care_siblings.png" }
    },
    optionRightText: "敷衍了事，想偷懒",
    effectRight: {
      stats: { mood: -5, responsibility: -5 },
      hiddenStats: { laziness: +3 },
      memory: { keyword: "偷懒", image: "assets/images/memory_lazy.png" }
    }
  },
  "card_mental_breakdown": {
    text: "你因为压力爆发，情绪失控哭泣。",
    tags: ['mental', 'stress'],
    optionLeftText: "寻求朋友倾诉",
    effectLeft: {
      stats: { mood: +10, social: +5 },
      hiddenStats: { openness: +3 },
      memory: { keyword: "倾诉", image: "assets/images/memory_cry_help.png" }
    },
    optionRightText: "独自承受，继续坚强",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { isolation: +4 },
      memory: { keyword: "独自", image: "assets/images/memory_alone.png" }
    }
  },
  "card_sports_team": {
    text: "加入学校运动队，你感到兴奋也有压力。",
    tags: ['growth', 'teamwork'],
    optionLeftText: "努力训练，争取上场机会",
    effectLeft: {
      stats: { courage: +10, mood: +5, health: +10 },
      hiddenStats: { perseverance: +4 },
      memory: { keyword: "训练", image: "assets/images/memory_sports_train.png" }
    },
    optionRightText: "害怕失败，准备放弃",
    effectRight: {
      stats: { mood: -10 },
      hiddenStats: { fear: +4 },
      memory: { keyword: "放弃", image: "assets/images/memory_sports_quit.png" }
    }
  }
};

// js/cards_14_extra.js
// 14岁卡池 - 12张示范卡牌

export const allCards_14 = {
  "card_first_job_offer": {
    text: "你收到了一份暑期兼职的工作邀请，既兴奋又有点紧张。",
    tags: ['growth', 'responsibility'],
    optionLeftText: "接受挑战，努力工作",
    effectLeft: {
      stats: { courage: +15, responsibility: +10, mood: +5 },
      memory: { keyword: "成长", image: "assets/images/memory_first_job.png" }
    },
    optionRightText: "担心自己不够好，拒绝机会",
    effectRight: {
      stats: { mood: -10, courage: -5 },
      memory: { keyword: "犹豫", image: "assets/images/memory_job_decline.png" }
    }
  },
  "card_friend_betrayal": {
    text: "你发现最好的朋友背后说了你的坏话，感到受伤。",
    tags: ['friendship', 'trust'],
    optionLeftText: "当面质问，寻求真相",
    effectLeft: {
      stats: { courage: +10, social: -5 },
      memory: { keyword: "质问", image: "assets/images/memory_friend_confront.png" }
    },
    optionRightText: "选择疏远，慢慢冷静",
    effectRight: {
      stats: { mood: -10, social: -10 },
      memory: { keyword: "疏远", image: "assets/images/memory_friend_distance.png" }
    }
  },
  "card_exam_pressure": {
    text: "临近大考，你感受到前所未有的压力。",
    tags: ['study', 'stress'],
    optionLeftText: "制定详细复习计划，努力坚持",
    effectLeft: {
      stats: { academics: +15, mood: -5 },
      memory: { keyword: "坚持", image: "assets/images/memory_exam_study.png" }
    },
    optionRightText: "焦虑逃避，选择放松",
    effectRight: {
      stats: { mood: +5, academics: -10 },
      memory: { keyword: "逃避", image: "assets/images/memory_exam_avoid.png" }
    }
  },
  "card_romantic_interest": {
    text: "你发现自己喜欢上了一个同学，心跳加速。",
    tags: ['love', 'growth'],
    optionLeftText: "主动表白，表达心意",
    effectLeft: {
      stats: { courage: +20, mood: +10 },
      memory: { keyword: "勇敢", image: "assets/images/memory_confession.png" }
    },
    optionRightText: "害羞躲避，保持距离",
    effectRight: {
      stats: { mood: -5, courage: -5 },
      memory: { keyword: "害羞", image: "assets/images/memory_shy.png" }
    }
  },
  "card_family_conflict": {
    text: "父母为你的未来规划发生激烈争吵，你夹在中间感到无助。",
    tags: ['family', 'stress'],
    optionLeftText: "尝试调解，表达自己的想法",
    effectLeft: {
      stats: { courage: +10, mood: -5 },
      memory: { keyword: "沟通", image: "assets/images/memory_family_talk.png" }
    },
    optionRightText: "选择回避，独自冷静",
    effectRight: {
      stats: { mood: -10 },
      memory: { keyword: "逃避", image: "assets/images/memory_family_escape.png" }
    }
  },
  "card_peer_pressure": {
    text: "朋友们劝你参加聚会，玩些你不太喜欢的游戏。",
    tags: ['social', 'pressure'],
    optionLeftText: "坚持自己的底线，拒绝参与",
    effectLeft: {
      stats: { courage: +15, social: -5 },
      memory: { keyword: "坚持", image: "assets/images/memory_peer_resist.png" }
    },
    optionRightText: "妥协参与，融入集体",
    effectRight: {
      stats: { social: +10, mood: -5 },
      memory: { keyword: "妥协", image: "assets/images/memory_peer_join.png" }
    }
  },
  "card_self_image": {
    text: "你对自己的外貌开始有更多关注，有些不自信。",
    tags: ['self', 'body'],
    optionLeftText: "努力接受自己，寻找优点",
    effectLeft: {
      stats: { mood: +10, self: +10 },
      memory: { keyword: "接纳", image: "assets/images/memory_self_accept.png" }
    },
    optionRightText: "沉迷于外貌焦虑，情绪低落",
    effectRight: {
      stats: { mood: -15 },
      memory: { keyword: "焦虑", image: "assets/images/memory_self_anxiety.png" }
    }
  },
  "card_first_failure": {
    text: "你第一次在重要事情上失败，感到沮丧。",
    tags: ['growth', 'emotion'],
    optionLeftText: "总结经验，重新出发",
    effectLeft: {
      stats: { courage: +10, mood: +5 },
      memory: { keyword: "成长", image: "assets/images/memory_failure_growth.png" }
    },
    optionRightText: "陷入自责，难以自拔",
    effectRight: {
      stats: { mood: -15 },
      memory: { keyword: "自责", image: "assets/images/memory_self_blame.png" }
    }
  },
  "card_new_hobby": {
    text: "你被一项新兴趣深深吸引，想要尝试。",
    tags: ['explore', 'joy'],
    optionLeftText: "投入时间学习，积极探索",
    effectLeft: {
      stats: { mood: +15, courage: +5 },
      memory: { keyword: "热情", image: "assets/images/memory_new_hobby.png" }
    },
    optionRightText: "犹豫放弃，怕浪费时间",
    effectRight: {
      stats: { mood: -5 },
      memory: { keyword: "犹豫", image: "assets/images/memory_hesitation.png" }
    }
  },
  "card_social_media": {
    text: "你在社交媒体上看到别人晒出光鲜生活，开始怀疑自己。",
    tags: ['self', 'social'],
    optionLeftText: "理性看待，保持自信",
    effectLeft: {
      stats: { mood: +10, self: +10 },
      memory: { keyword: "理性", image: "assets/images/memory_social_media.png" }
    },
    optionRightText: "陷入比较，情绪低落",
    effectRight: {
      stats: { mood: -15 },
      memory: { keyword: "比较", image: "assets/images/memory_social_comparison.png" }
    }
  },
  "card_health_concern": {
    text: "你感觉身体不适，但害怕告诉家长。",
    tags: ['health', 'fear'],
    optionLeftText: "勇敢告知家长并就医",
    effectLeft: {
      stats: { health: +10, courage: +5 },
      memory: { keyword: "关怀", image: "assets/images/memory_health_care.png" }
    },
    optionRightText: "选择隐瞒，自己承受",
    effectRight: {
      stats: { health: -10, mood: -5 },
      memory: { keyword: "隐瞒", image: "assets/images/memory_health_hide.png" }
    }
  },
  "card_school_club": {
    text: "学校招募新社团成员，你想参加但又担心时间不够。",
    tags: ['growth', 'social'],
    optionLeftText: "报名参加，挑战自我",
    effectLeft: {
      stats: { social: +10, courage: +10 },
      memory: { keyword: "挑战", image: "assets/images/memory_club_join.png" }
    },
    optionRightText: "拒绝，选择专注学业",
    effectRight: {
      stats: { academics: +10, mood: -5 },
      memory: { keyword: "专注", image: "assets/images/memory_study_focus.png" }
    }
  },
  "card_conflict_with_teacher": {
    text: "你和老师发生了激烈争论，觉得对方不理解你。",
    tags: ['school', 'conflict'],
    optionLeftText: "冷静表达自己的观点",
    effectLeft: {
      stats: { courage: +10, academics: -5 },
      memory: { keyword: "沟通", image: "assets/images/memory_teacher_talk.png" }
    },
    optionRightText: "选择沉默，避免冲突",
    effectRight: {
      stats: { mood: -5 },
      memory: { keyword: "回避", image: "assets/images/memory_silent.png" }
    }
  },
  "card_sibling_rivalry": {
    text: "你和兄弟姐妹因为小事争吵，气氛紧张。",
    tags: ['family', 'emotion'],
    optionLeftText: "主动道歉，缓和关系",
    effectLeft: {
      stats: { mood: +10, social: +5 },
      memory: { keyword: "和解", image: "assets/images/memory_sibling_peace.png" }
    },
    optionRightText: "坚持己见，冷战一阵",
    effectRight: {
      stats: { mood: -10, social: -5 },
      memory: { keyword: "固执", image: "assets/images/memory_sibling_cold.png" }
    }
  },
  "card_online_argument": {
    text: "在网络上和陌生人发生争论，感觉越来越激动。",
    tags: ['social', 'stress'],
    optionLeftText: "理智退场，避免无谓争吵",
    effectLeft: {
      stats: { mood: +5, courage: +5 },
      memory: { keyword: "理智", image: "assets/images/memory_online_exit.png" }
    },
    optionRightText: "继续争辩，捍卫立场",
    effectRight: {
      stats: { mood: -10, courage: +10 },
      memory: { keyword: "坚持", image: "assets/images/memory_online_fight.png" }
    }
  },
  "card_art_competition": {
    text: "你参加了学校的美术比赛，面临压力和期待。",
    tags: ['creativity', 'pressure'],
    optionLeftText: "全力以赴，享受创作过程",
    effectLeft: {
      stats: { mood: +15, courage: +5 },
      memory: { keyword: "热情", image: "assets/images/memory_art_competition.png" }
    },
    optionRightText: "感到紧张，半途放弃",
    effectRight: {
      stats: { mood: -10, courage: -5 },
      memory: { keyword: "放弃", image: "assets/images/memory_art_quit.png" }
    }
  },
  "card_body_change": {
    text: "身体开始明显变化，感到不适应和困惑。",
    tags: ['body', 'growth'],
    optionLeftText: "主动了解，接受变化",
    effectLeft: {
      stats: { mood: +10, self: +10 },
      memory: { keyword: "接受", image: "assets/images/memory_body_accept.png" }
    },
    optionRightText: "抗拒，感到烦躁",
    effectRight: {
      stats: { mood: -10, self: -5 },
      memory: { keyword: "抗拒", image: "assets/images/memory_body_reject.png" }
    }
  },
  "card_cyberbullying": {
    text: "你在网络上遭遇恶意留言，感到受伤害。",
    tags: ['social', 'fear'],
    optionLeftText: "告诉信任的大人寻求帮助",
    effectLeft: {
      stats: { courage: +10, mood: +5 },
      memory: { keyword: "求助", image: "assets/images/memory_help.png" }
    },
    optionRightText: "选择沉默，忍受痛苦",
    effectRight: {
      stats: { mood: -15 },
      memory: { keyword: "沉默", image: "assets/images/memory_silent.png" }
    }
  },
  "card_first_travel_alone": {
    text: "你第一次独自出门旅行，既期待又紧张。",
    tags: ['growth', 'freedom'],
    optionLeftText: "积极探索，享受独立",
    effectLeft: {
      stats: { freedom: +15, courage: +10, mood: +5 },
      memory: { keyword: "独立", image: "assets/images/memory_travel_alone.png" }
    },
    optionRightText: "感到害怕，想早点结束旅行",
    effectRight: {
      stats: { mood: -10, courage: -5 },
      memory: { keyword: "恐惧", image: "assets/images/memory_travel_fear.png" }
    }
  },
  "card_volunteer_work": {
    text: "学校组织义工活动，你在考虑是否参加。",
    tags: ['social', 'growth'],
    optionLeftText: "报名参加，帮助他人",
    effectLeft: {
      stats: { social: +10, mood: +10 },
      memory: { keyword: "奉献", image: "assets/images/memory_volunteer.png" }
    },
    optionRightText: "觉得麻烦，选择放弃",
    effectRight: {
      stats: { mood: -5, social: -5 },
      memory: { keyword: "逃避", image: "assets/images/memory_volunteer_skip.png" }
    }
  },
  "card_peer_comparison": {
    text: "看到同龄人取得成绩，你感到压力山大。",
    tags: ['self', 'pressure'],
    optionLeftText: "努力提升自己，不断进步",
    effectLeft: {
      stats: { courage: +10, academics: +10 },
      memory: { keyword: "进步", image: "assets/images/memory_self_improve.png" }
    },
    optionRightText: "陷入自卑，丧失动力",
    effectRight: {
      stats: { mood: -15 },
      memory: { keyword: "自卑", image: "assets/images/memory_self_doubt.png" }
    }
  },
  "card_school_confession": {
    text: "有同学向你表达喜欢，你感到惊讶和迷茫。",
    tags: ['love', 'social'],
    optionLeftText: "认真回应，尝试了解对方",
    effectLeft: {
      stats: { courage: +10, mood: +10 },
      memory: { keyword: "回应", image: "assets/images/memory_confession_response.png" }
    },
    optionRightText: "婉拒，保持距离",
    effectRight: {
      stats: { mood: -5 },
      memory: { keyword: "拒绝", image: "assets/images/memory_confession_reject.png" }
    }
  },
  "card_time_management": {
    text: "面对繁重的学习和兴趣安排，你感到时间不够用。",
    tags: ['stress', 'growth'],
    optionLeftText: "制定计划，有效分配时间",
    effectLeft: {
      stats: { academics: +10, mood: +5 },
      memory: { keyword: "规划", image: "assets/images/memory_time_manage.png" }
    },
    optionRightText: "放任自己，随遇而安",
    effectRight: {
      stats: { mood: -10, academics: -5 },
      memory: { keyword: "散漫", image: "assets/images/memory_time_mess.png" }
    }
  }
};
