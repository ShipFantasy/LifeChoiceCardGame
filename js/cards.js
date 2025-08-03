// js/cards.js
// 全新12岁卡池 - 基于深度叙事和单选机制

export const allCards_12 = {
    // --- 双选项卡牌 ---
    "card_locked_door": {
      text: "The first time you locked the door, your mother knocked on it for a long time.",
      tags: ["family", "boundary"],
      cardImage: "assets/images/card_locked_door.jpg",

      optionLeftText: "Open the door and say 'I need some space'",
      effectLeft: {
        stats: { mood: +5, freedom: +10 },
        hiddenStats: { courage: +2, selfIdentity: +1 },
        memory: {
          keyword: "边界",
          image: "assets/images/card_locked_door.jpg"
        }
      },

      optionRightText: "Pretend not to hear and keep silent",
      effectRight: {
        stats: { mood: -10, security: -5 },
        hiddenStats: { compliance: +2, emotionalIntimacy: -5 },
        memory: {
          keyword: "疏离",
          image: "assets/images/card_locked_door.jpg"
        }
      }
    },
    "card_dad_drunk": {
      text: "Your dad got angry at you when he was drunk, but you pretended to be asleep and didn’t respond.",
      tags: ["family", "fear"],
      cardImage: "assets/images/card_dad_drunk.jpg",

      optionLeftText: "The next day, you tentatively ask, “How were you yesterday?”",
      effectLeft: {
        stats: { courage: +5, security: +5 },
        hiddenStats: { emotionalIntimacy: +3 },
        memory: {
          keyword: "Tentative Connection",
          image: "assets/images/card_dad_drunk.jpg"
        }
      },

      optionRightText: "You keep silent and never mention it again.",
      effectRight: {
        stats: { mood: -10, security: -10 },
        hiddenStats: { compliance: +2, emotionalIntimacy: -5 },
        memory: {
          keyword: "Repression",
          image: "assets/images/card_dad_drunk.jpg"
        }
      }
    },
    "card_mom_cry": {
      text: "You get up in the middle of the night to get some water and accidentally see your mother crying alone in the living room.",
      tags: ["family", "growth"],
      cardImage: "assets/images/card_mom_cry.jpg",

      optionLeftText: "Quietly walk over and hug her.",
      effectLeft: {
        stats: { mood: +10 },
        hiddenStats: { emotionalIntimacy: +5 },
        memory: {
          keyword: "Compassion",
          image: "assets/images/card_mom_cry.jpg"
        }
      },

      optionRightText: "Pretend not to notice and go back to your room.",
      effectRight: {
        stats: { mood: -10 },
        hiddenStats: { avoidance: +3 },
        memory: {
          keyword: "Avoidance",
          image: "assets/images/card_mom_cry.jpg"
        }
      }
    },
    "card_dance_dream": {
      text: "You want to learn to dance, but your family thinks it's a waste of time.",
      tags: ["dream", "family"],
      cardImage: "assets/images/card_dance_dream.jpg",

      optionLeftText: "Argue with them.",
      effectLeft: {
        stats: { mood: -10 },
        hiddenStats: { courage: +3, selfIdentity: +2 },
        memory: {
          keyword: "Persistence",
          image: "assets/images/card_dance_dream.jpg"
        }
      },

      optionRightText: "Keep your desire to yourself for now.",
      effectRight: {
        stats: { mood: -5 },
        hiddenStats: { compliance: +2, emotionalIntimacy: -3 },
        memory: {
          keyword: "Suppression",
          image: "assets/images/card_dance_dream.jpg"
        }
      }
    },
    "card_family_trip": {
      text: "While on a family trip, your parents suddenly start arguing, and you feel embarrassed and helpless.",
      tags: ["family", "emotion"],
      cardImage: "assets/images/card_family_trip.jpg",

      optionLeftText: "Try to calm them down.",
      effectLeft: {
        stats: { mood: +5, social: +5 },
        hiddenStats: { emotionalIntimacy: +3 },
        memory: {
          keyword: "Mediation",
          image: "assets/images/card_family_trip.jpg"
        }
      },

      optionRightText: "Avoid them and explore on your own.",
      effectRight: {
        stats: { freedom: +10, mood: -5 },
        hiddenStats: { avoidance: +3 },
        memory: {
          keyword: "Escape",
          image: "assets/images/card_family_trip.jpg"
        }
      }
    },
    

    "card_stray_cat": {
      text: "You picked up a kitten together at the alley entrance.",
      tags: ["friendship", "care"],
      cardImage: "assets/images/card_stray_cat.jpg",

      optionLeftText: "Decide to secretly raise it together.",
      effectLeft: {
        stats: { social: +10, mood: +5 },
        hiddenStats: { responsibility: +3 },
        memory: {
          keyword: "Shared Bond",
          image: "assets/images/card_stray_cat.jpg"
        }
      },

      optionRightText: "Let it go, saying it’s too much trouble.",
      effectRight: {
        stats: { mood: -5, social: -5 },
        hiddenStats: { avoidance: +2 },
        memory: {
          keyword: "Letting Go",
          image: "assets/images/card_stray_cat.jpg"
        }
      }
    },
    "card_bestie_argue": {
      text: "You and your best friend are having a huge fight and neither of you is speaking to the other. What do you do?",
      tags: ["social", "friendship"],
      cardImage: "assets/images/card_bestie_argue.jpg",

      optionLeftText: "Pass a note to apologize.",
      effectLeft: {
        stats: { social: +15, mood: +10 },
        hiddenStats: { emotionalIntimacy: +3 },
        memory: {
          keyword: "Reconciliation",
          image: "assets/images/card_bestie_argue.jpg"
        }
      },

      optionRightText: "Wait for her to come to you first.",
      effectRight: {
        stats: { social: -10, mood: -10 },
        hiddenStats: { selfIdentity: +1, emotionalIntimacy: -3 },
        memory: {
          keyword: "Stubbornness",
          image: "assets/images/card_bestie_argue.jpg"
        }
      }
    },
    "card_friend_move": {
      text: "Your best friend is moving away, and you feel sad and helpless.",
      tags: ["friendship", "loss"],
      cardImage: "assets/images/card_friend_move.jpg",

      optionLeftText: "Promise to keep in touch.",
      effectLeft: {
        stats: { social: +10, mood: +5 },
        hiddenStats: { responsibility: +2, emotionalIntimacy: +2 },
        memory: {
          keyword: "Promise",
          image: "assets/images/card_friend_move.jpg"
        }
      },

      optionRightText: "Choose to slowly let go.",
      effectRight: {
        stats: { mood: -5, courage: +5 },
        hiddenStats: { selfIdentity: +2 },
        memory: {
          keyword: "Letting Go",
          image: "assets/images/card_friend_move.jpg"
        }
      }
    },
    "card_secret_crush": {
      text: "You start to care about someone, and this becomes the biggest secret in your diary.",
      tags: ["relationship", "love"],
      cardImage: "assets/images/card_secret_crush.jpg",

      optionLeftText: "Tell your friends about this feeling.",
      effectLeft: {
        stats: { social: +10, mood: +5 },
        hiddenStats: { emotionalIntimacy: +2 },
        memory: {
          keyword: "Secret Shared",
          image: "assets/images/card_secret_crush.jpg"
        }
      },

      optionRightText: "Only write it in your diary.",
      effectRight: {
        stats: { mood: +10 },
        hiddenStats: { selfIdentity: +2 },
        memory: {
          keyword: "Inner Monologue",
          image: "assets/images/card_secret_crush.jpg"
        }
      }
    },
    "card_bully_group": {
      text: "In the class group chat, some classmates start to isolate a girl.",
      tags: ["moral", "social"],
      cardImage: "assets/images/card_bully_group.jpg",

      optionLeftText: "Privately comfort the girl.",
      effectLeft: {
        stats: { social: +5, mood: +5 },
        hiddenStats: { emotionalIntimacy: +3 },
        memory: {
          keyword: "Kindness",
          image: "assets/images/card_bully_group.jpg"
        }
      },

      optionRightText: "Stay silent and pretend not to see.",
      effectRight: {
        stats: { social: -5, mood: -10 },
        hiddenStats: { compliance: +3 },
        memory: {
          keyword: "Silence",
          image: "assets/images/card_bully_group.jpg"
        }
      }
    },


    "card_groupwork_alone": {
      text: "No one contributes to the group project, so you quietly finish it alone.",
      tags: ["school", "pressure"],
      cardImage: "assets/images/card_groupwork_alone.jpg",

      optionLeftText: "Submit it with everyone’s name.",
      effectLeft: {
        stats: { social: +5, self: -5 },
        hiddenStats: { emotionalIntimacy: +2 },
        memory: {
          keyword: "Sacrifice",
          image: "assets/images/card_groupwork_alone.jpg"
        }
      },

      optionRightText: "Only submit your own name.",
      effectRight: {
        stats: { courage: +10, social: -10 },
        hiddenStats: { selfIdentity: +3 },
        memory: {
          keyword: "Assertiveness",
          image: "assets/images/card_groupwork_alone.jpg"
        }
      }
    },
    "card_cheating_seen": {
      text: "You catch your friend cheating during a test.",
      tags: ["ethics", "school"],
      cardImage: "assets/images/card_cheating_seen.jpg",

      optionLeftText: "Pretend not to see.",
      effectLeft: {
        stats: { mood: -5, self: -5 },
        hiddenStats: { avoidance: +2 },
        memory: {
          keyword: "Silence",
          image: "assets/images/card_cheating_seen.jpg"
        }
      },

      optionRightText: "Talk to her after the exam.",
      effectRight: {
        stats: { courage: +10, social: +5 },
        hiddenStats: { emotionalIntimacy: +2 },
        memory: {
          keyword: "Reminder",
          image: "assets/images/card_cheating_seen.jpg"
        }
      }
    },
    "card_math_class": {
      text: "In math class, you realize you’re performing better than most boys.",
      tags: ["study", "gender"],
      cardImage: "assets/images/card_math_class.jpg",

      optionLeftText: "Enjoy the feeling of leading.",
      effectLeft: {
        stats: { academics: +10, mood: +5 },
        hiddenStats: { selfIdentity: +3 },
        memory: {
          keyword: "Pride",
          image: "assets/images/card_math_class.jpg"
        }
      },

      optionRightText: "Downplay it by making a few mistakes on purpose.",
      effectRight: {
        stats: { academics: -5, mood: -10 },
        hiddenStats: { compliance: +2 },
        memory: {
          keyword: "Concealment",
          image: "assets/images/card_math_class.jpg"
        }
      }
    },
    "card_period_panic": {
      text: "In class, you sense you might be having your period for the first time.",
      tags: ["body", "shame"],
      cardImage: "assets/images/card_period_panic.jpg",

      optionLeftText: "Tell your best friend after class.",
      effectLeft: {
        stats: { health: +5, social: +5 },
        hiddenStats: { emotionalIntimacy: +2 },
        memory: {
          keyword: "Sharing",
          image: "assets/images/card_period_panic.jpg"
        }
      },

      optionRightText: "Go check quietly in the restroom.",
      effectRight: {
        stats: { health: -5, mood: -5 },
        hiddenStats: { anxiety: +3 },
        memory: {
          keyword: "Panic",
          image: "assets/images/card_period_panic.jpg"
        }
      }
    },
    "card_school_performance": {
      text: "Your test results exceed expectations, but you feel pressure.",
      tags: ["study", "pressure"],
      cardImage: "assets/images/card_school_performance.jpg",

      optionLeftText: "Celebrate the achievement.",
      effectLeft: {
        stats: { mood: +10, academics: +5 },
        hiddenStats: { emotionalIntimacy: +2 },
        memory: {
          keyword: "Joy",
          image: "assets/images/card_school_performance.jpg"
        }
      },

      optionRightText: "Set even higher goals.",
      effectRight: {
        stats: { courage: +10, mood: -5 },
        hiddenStats: { selfIdentity: +3 },
        memory: {
          keyword: "Challenge",
          image: "assets/images/card_school_performance.jpg"
        }
      }
    },


    "card_mirror_self": {
      text: "Looking at yourself in the mirror, do you want to wear that favorite but somewhat conspicuous skirt?",
      tags: ["self", "explore"],
      cardImage: "assets/images/card_mirror_self.jpg",

      optionLeftText: "Wear it! I like it.",
      effectLeft: {
        stats: { mood: +15, social: -5 },
        hiddenStats: { selfIdentity: +4 },
        memory: {
          keyword: "Uniqueness",
          image: "assets/images/card_mirror_self.jpg"
        }
      },

      optionRightText: "Wear the school uniform.",
      effectRight: {
        stats: { mood: -5 },
        hiddenStats: { compliance: +3 },
        memory: {
          keyword: "Blending In",
          image: "assets/images/card_mirror_self.jpg"
        }
      }
    },
    "card_fat_shame": {
      text: "At lunch, someone joked about how much you ate. You stayed silent the whole afternoon.",
      tags: ["self", "shame"],
      cardImage: "assets/images/card_fat_shame.jpg",

      optionLeftText: "Bear it silently.",
      effectLeft: {
        stats: { mood: -15, health: -5 },
        hiddenStats: { emotionalIntimacy: -5 },
        memory: {
          keyword: "Shame",
          image: "assets/images/card_fat_shame.jpg"
        }
      },

      optionRightText: "Fight back and defend yourself.",
      effectRight: {
        stats: { mood: +5, social: -5 },
        hiddenStats: { selfIdentity: +3 },
        memory: {
          keyword: "Rebuttal",
          image: "assets/images/card_fat_shame.jpg"
        }
      }
    },
    "card_sensible_praise": {
      text: "A relative visits and praises you as a 'very sensible child.' You force a smile, unsure if it’s truly a compliment.",
      tags: ["self", "struggle"],
      cardImage: "assets/images/card_sensible_praise.jpg",
      canEcho: true,
      flowerTag: "Mint (Hidden Obedience)",
      echoType: "Narrative Resonance",

      optionLeftText: "Respond politely...",
      effectLeft: {
        stats: { mood: -5 },
        hiddenStats: { compliance: +2 },
        memory: { keyword: "Obedience", image: "assets/images/card_sensible_praise.jpg" }
      },

      optionRightText: "You feel wronged, but stay quiet.",
      effectRight: {
        stats: { mood: -10 },
        hiddenStats: { emotionalIntimacy: -3 },
        memory: { keyword: "Unspoken Grievance", image: "assets/images/card_sensible_praise.jpg" }
      }
    },
    "card_rooftop_escape": {
      text: "You're alone on the school rooftop, gazing at the sky, fantasizing about disappearing for a while.",
      tags: ["escapism", "emotion"],
      cardImage: "assets/images/card_rooftop_escape.jpg",
      canEcho: true,
      flowerTag: "Snapdragon (Escape)",
      echoType: "Emotional Disruption",

      optionLeftText: "Just like that, quietly...",
      effectLeft: {
        stats: { mood: +10, health: -5 },
        hiddenStats: { freedom: +3 },
        memory: { keyword: "Stillness", image: "assets/images/card_rooftop_escape.jpg" }
      },

      optionRightText: "Take a deep breath and face it.",
      effectRight: {
        stats: { mood: -5, courage: +10 },
        hiddenStats: { selfIdentity: +2, courage: +1 },
        memory: { keyword: "Bravery", image: "assets/images/card_rooftop_escape.jpg" }
      }
    },
    "card_idol_light": {
      text: "Watching your idol’s concert online, you see a sea of lights, and something in you lights up.",
      tags: ["dream", "spark"],
      cardImage: "assets/images/card_idol_light.jpg",
      canEcho: true,
      flowerTag: "Sunflower (Inspiration)",
      echoType: "Narrative Resonance",

      optionLeftText: "Deeply moved...",
      effectLeft: {
        stats: { mood: +20 },
        hiddenStats: { selfIdentity: +3, freedom: +2 },
        memory: { keyword: "Spark", image: "assets/images/card_idol_light.jpg" }
      },

      optionRightText: "Feel it's out of reach, admire silently.",
      effectRight: {
        stats: { mood: +5 },
        hiddenStats: { emotionalIntimacy: +2 },
        memory: { keyword: "Distant Admiration", image: "assets/images/card_idol_light.jpg" }
      }
    },


};

// js/cards_13.js
// 13岁卡池示范

export const allCards_13 = {

"card_parents_plan_future": {
  text: "Your parents have been planning your future without asking your opinion.",
  tags: ["family", "control"],
  cardImage: "assets/images/card_parents_plan_future.jpg",

  optionLeftText: "Speak up and share what you truly want.",
  effectLeft: {
    stats: { courage: 10, mood: -5 },
    hiddenStats: { selfIdentity: 5 },
    memory: { keyword: "Expression", image: "assets/images/card_parents_plan_future.jpg" }
  },

  optionRightText: "Stay silent and follow their plan.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { compliance: 5 },
    memory: { keyword: "Obedience", image: "assets/images/card_parents_plan_future.jpg" }
  }
},
"card_sibling_jealousy": {
  text: "Your younger sibling gets more attention from your parents lately.",
  tags: ["family", "emotion"],
  cardImage: "assets/images/card_sibling_jealousy.jpg",

  optionLeftText: "Talk to your parents about how you feel.",
  effectLeft: {
    stats: { mood: 5, courage: 5 },
    hiddenStats: { openness: 3 },
    memory: { keyword: "Honesty", image: "assets/images/card_sibling_jealousy.jpg" }
  },

  optionRightText: "Keep it to yourself and act cold.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { withdrawal: 4 },
    memory: { keyword: "Jealousy", image: "assets/images/card_sibling_jealousy.jpg" }
  }
},
"card_home_duties": {
  text: "You're asked to take on more chores and help with your siblings.",
  tags: ["family", "responsibility"],
  cardImage: "assets/images/card_home_duties.jpg",

  optionLeftText: "Take it seriously and try your best.",
  effectLeft: {
    stats: { responsibility: 10, mood: 5 },
    hiddenStats: { diligence: 3 },
    memory: { keyword: "Support", image: "assets/images/card_home_duties.jpg" }
  },

  optionRightText: "Complain and try to avoid doing it.",
  effectRight: {
    stats: { mood: -5, responsibility: -5 },
    hiddenStats: { resistance: 3 },
    memory: { keyword: "Avoidance", image: "assets/images/card_home_duties.jpg" }
  }
},
"card_family_secret": {
  text: "You overhear a serious family conversation not meant for you.",
  tags: ["family", "emotion"],
  cardImage: "assets/images/card_family_secret.jpg",

  optionLeftText: "Ask your parents directly about it.",
  effectLeft: {
    stats: { courage: 10 },
    hiddenStats: { curiosity: 3 },
    memory: { keyword: "Truth", image: "assets/images/card_family_secret.jpg" }
  },

  optionRightText: "Pretend you didn't hear anything.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { anxiety: 3 },
    memory: { keyword: "Silence", image: "assets/images/card_family_secret.jpg" }
  }
},
"card_midnight_argument": {
  text: "You get into a heated argument with your parents late at night.",
  tags: ["family", "conflict"],
  cardImage: "assets/images/card_midnight_argument.jpg",

  optionLeftText: "Apologize and try to make peace.",
  effectLeft: {
    stats: { mood: 5 },
    hiddenStats: { empathy: 4 },
    memory: { keyword: "Reconciliation", image: "assets/images/card_midnight_argument.jpg" }
  },

  optionRightText: "Stay angry and refuse to talk.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { resentment: 4 },
    memory: { keyword: "Grudge", image: "assets/images/card_midnight_argument.jpg" }
  }
},


"card_friend_circle_shift": {
  text: "Your old friends start spending less time with you, and you feel left out.",
  tags: ["friendship", "loss"],
  cardImage: "assets/images/card_friend_circle_shift.jpg",

  optionLeftText: "Talk to them and ask what's going on.",
  effectLeft: {
    stats: { courage: 10, social: -5 },
    hiddenStats: { openness: 3 },
    memory: { keyword: "Inquiry", image: "assets/images/card_friend_circle_shift.jpg" }
  },

  optionRightText: "Stay silent and slowly drift away.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { loneliness: 4 },
    memory: { keyword: "Drift", image: "assets/images/card_friend_circle_shift.jpg" }
  }
},
"card_trust_test": {
  text: "A friend shares a secret with you and asks you not to tell anyone.",
  tags: ["friendship", "trust"],
  cardImage: "assets/images/card_trust_test.jpg",

  optionLeftText: "Respect their trust and keep it secret.",
  effectLeft: {
    stats: { social: 5 },
    hiddenStats: { integrity: 3 },
    memory: { keyword: "Loyalty", image: "assets/images/card_trust_test.jpg" }
  },

  optionRightText: "Accidentally reveal it to someone else.",
  effectRight: {
    stats: { social: -10 },
    hiddenStats: { guilt: 3 },
    memory: { keyword: "Betrayal", image: "assets/images/card_trust_test.jpg" }
  }
},
"card_social_label": {
  text: "You hear classmates calling you 'too weird' or 'too quiet'.",
  tags: ["friendship", "identity"],
  cardImage: "assets/images/card_social_label.jpg",

  optionLeftText: "Confront them and defend yourself.",
  effectLeft: {
    stats: { courage: 10, mood: -5 },
    hiddenStats: { selfIdentity: 3 },
    memory: { keyword: "Assertion", image: "assets/images/card_social_label.jpg" }
  },

  optionRightText: "Say nothing and feel hurt inside.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { selfDoubt: 4 },
    memory: { keyword: "Label", image: "assets/images/card_social_label.jpg" }
  }
},
"card_group_bullying": {
  text: "You witness your classmates excluding someone from the group.",
  tags: ["friendship", "bullying"],
  cardImage: "assets/images/card_group_bullying.jpg",

  optionLeftText: "Speak up and support the excluded classmate.",
  effectLeft: {
    stats: { courage: 15, social: -5 },
    hiddenStats: { empathy: 4 },
    memory: { keyword: "Ally", image: "assets/images/card_group_bullying.jpg" }
  },

  optionRightText: "Stay quiet to avoid being targeted too.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { fear: 4 },
    memory: { keyword: "Bystander", image: "assets/images/card_group_bullying.jpg" }
  }
},
"card_crush_between_friends": {
  text: "You realize you like someone who seems to like your best friend.",
  tags: ["friendship", "emotion"],
  cardImage: "assets/images/card_crush_between_friends.jpg",

  optionLeftText: "Confess your feelings honestly.",
  effectLeft: {
    stats: { courage: 15, mood: +5 },
    hiddenStats: { vulnerability: 4 },
    memory: { keyword: "Confession", image: "assets/images/card_crush_between_friends.jpg" }
  },

  optionRightText: "Hide your feelings and pretend nothing happened.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { repression: 4 },
    memory: { keyword: "Secret", image: "assets/images/card_crush_between_friends.jpg" }
  }
},


"card_test_score_shame": {
  text: "Your test score was lower than expected, and the teacher comments in front of the class.",
  tags: ["school", "stress"],
  cardImage: "assets/images/card_test_score_shame.jpg",

  optionLeftText: "Talk to the teacher after class about how it made you feel.",
  effectLeft: {
    stats: { courage: 10 },
    hiddenStats: { communication: 3 },
    memory: { keyword: "SpeakUp", image: "assets/images/card_test_score_shame.jpg" }
  },

  optionRightText: "Stay quiet and let it bother you.",
  effectRight: {
    stats: { mood: -10, academics: -5 },
    hiddenStats: { repression: 3 },
    memory: { keyword: "Shame", image: "assets/images/card_test_score_shame.jpg" }
  }
},
"card_fairness_conflict": {
  text: "Your teacher gives you a worse grade than others for the same effort.",
  tags: ["school", "authority"],
  cardImage: "assets/images/card_fairness_conflict.jpg",

  optionLeftText: "Ask for an explanation and challenge the decision.",
  effectLeft: {
    stats: { courage: 15 },
    hiddenStats: { assertiveness: 4 },
    memory: { keyword: "Challenge", image: "assets/images/card_fairness_conflict.jpg" }
  },

  optionRightText: "Accept it and keep quiet.",
  effectRight: {
    stats: { mood: -5, academics: -5 },
    hiddenStats: { compliance: 3 },
    memory: { keyword: "Resignation", image: "assets/images/card_fairness_conflict.jpg" }
  }
},
"card_club_overload": {
  text: "You've joined too many school clubs and feel completely drained.",
  tags: ["school", "overload"],
  cardImage: "assets/images/card_club_overload.jpg",

  optionLeftText: "Quit one and protect your energy.",
  effectLeft: {
    stats: { mood: +5 },
    hiddenStats: { selfCare: 3 },
    memory: { keyword: "Balance", image: "assets/images/card_club_overload.jpg" }
  },

  optionRightText: "Push through and try to do everything.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { burnout: 3 },
    memory: { keyword: "Overload", image: "assets/images/card_club_overload.jpg" }
  }
},
"card_homework_collaboration": {
  text: "Your friend asks to copy your homework before class.",
  tags: ["school", "peer"],
  cardImage: "assets/images/card_homework_collaboration.jpg",

  optionLeftText: "Say no and explain your reason.",
  effectLeft: {
    stats: { courage: 10, academics: +5 },
    hiddenStats: { integrity: 4 },
    memory: { keyword: "Boundaries", image: "assets/images/card_homework_collaboration.jpg" }
  },

  optionRightText: "Let them copy, just this once.",
  effectRight: {
    stats: { social: +5 },
    hiddenStats: { hesitation: 2 },
    memory: { keyword: "Compromise", image: "assets/images/card_homework_collaboration.jpg" }
  }
},
"card_internet_exposure": {
  text: "You post something online that gets more attention than you expected.",
  tags: ["social", "internet"],
  cardImage: "assets/images/card_internet_exposure.jpg",

  optionLeftText: "Enjoy the moment but stay cautious.",
  effectLeft: {
    stats: { mood: +5, social: +5 },
    hiddenStats: { selfAwareness: 3 },
    memory: { keyword: "Confidence", image: "assets/images/card_internet_exposure.jpg" }
  },

  optionRightText: "Get anxious and delete the post.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { anxiety: 3 },
    memory: { keyword: "Regret", image: "assets/images/card_internet_exposure.jpg" }
  }
},

"card_journal_reflection": {
  text: "You start writing a private journal to sort through your thoughts.",
  tags: ["self", "introspection"],
  cardImage: "assets/images/card_journal_reflection.jpg",

  optionLeftText: "Write regularly and reflect honestly.",
  effectLeft: {
    stats: { mood: +10 },
    hiddenStats: { selfAwareness: 4 },
    memory: { keyword: "Clarity", image: "assets/images/card_journal_reflection.jpg" }
  },

  optionRightText: "Feel embarrassed and give up writing.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { avoidance: 3 },
    memory: { keyword: "Abandonment", image: "assets/images/card_journal_reflection.jpg" }
  }
},
"card_emotional_outburst": {
  text: "You suddenly get very upset over something small and don't know why.",
  tags: ["self", "emotion"],
  cardImage: "assets/images/card_emotional_outburst.jpg",

  optionLeftText: "Apologize and try to understand your feelings.",
  effectLeft: {
    stats: { mood: +5 },
    hiddenStats: { maturity: 3 },
    memory: { keyword: "Growth", image: "assets/images/card_emotional_outburst.jpg" }
  },

  optionRightText: "Blame others and stay angry.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { reactivity: 4 },
    memory: { keyword: "Explosion", image: "assets/images/card_emotional_outburst.jpg" }
  }
},
"card_midnight_scrolling": {
  text: "You stay up late on your phone, knowing you'll be tired tomorrow.",
  tags: ["self", "habit"],
  cardImage: "assets/images/card_midnight_scrolling.jpg",

  optionLeftText: "Put the phone down and sleep early.",
  effectLeft: {
    stats: { health: +10, mood: +5 },
    hiddenStats: { discipline: 4 },
    memory: { keyword: "Control", image: "assets/images/card_midnight_scrolling.jpg" }
  },

  optionRightText: "Keep scrolling, ignoring the time.",
  effectRight: {
    stats: { mood: -5, health: -10 },
    hiddenStats: { impulse: 4 },
    memory: { keyword: "Fatigue", image: "assets/images/card_midnight_scrolling.jpg" }
  }
},
"card_mirror_moment": {
  text: "You stare at your reflection, wondering who you're becoming.",
  tags: ["self", "identity"],
  cardImage: "assets/images/card_mirror_moment.jpg",

  optionLeftText: "Embrace the changes and be curious.",
  effectLeft: {
    stats: { mood: +10 },
    hiddenStats: { selfAcceptance: 4 },
    memory: { keyword: "Curiosity", image: "assets/images/card_mirror_moment.jpg" }
  },

  optionRightText: "Avoid looking and feel uneasy.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { insecurity: 4 },
    memory: { keyword: "Doubt", image: "assets/images/card_mirror_moment.jpg" }
  }
},
"card_boundary_setting": {
  text: "A classmate keeps invading your space, but you're unsure how to respond.",
  tags: ["self", "boundary"],
  cardImage: "assets/images/card_boundary_setting.jpg",

  optionLeftText: "Set a clear boundary and speak up.",
  effectLeft: {
    stats: { courage: +10, mood: +5 },
    hiddenStats: { selfIdentity: 4 },
    memory: { keyword: "Boundary", image: "assets/images/card_boundary_setting.jpg" }
  },

  optionRightText: "Stay quiet and hope they stop.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { compliance: 3 },
    memory: { keyword: "Suppression", image: "assets/images/card_boundary_setting.jpg" }
  }
}


};



export const allCards_14 = {

"card_lock_door_argument": {
  text: "You lock your bedroom door for privacy, and your parent gets upset.",
  tags: ["family", "boundary"],
  cardImage: "assets/images/card_lock_door_argument.jpg",

  optionLeftText: "Explain your need for space calmly.",
  effectLeft: {
    stats: { mood: +5, courage: +5 },
    hiddenStats: { selfIdentity: +3 },
    memory: { keyword: "Boundaries", image: "assets/images/card_lock_door_argument.jpg" }
  },

  optionRightText: "Stay silent and avoid talking.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { withdrawal: +3 },
    memory: { keyword: "Distance", image: "assets/images/card_lock_door_argument.jpg" }
  }
},
"card_family_expectation_clash": {
  text: "Your parents want you to pursue something you’re not interested in.",
  tags: ["family", "value"],
  cardImage: "assets/images/card_family_expectation_clash.jpg",

  optionLeftText: "Express your real interests.",
  effectLeft: {
    stats: { courage: +10 },
    hiddenStats: { selfIdentity: +4 },
    memory: { keyword: "Voice", image: "assets/images/card_family_expectation_clash.jpg" }
  },

  optionRightText: "Pretend to agree to avoid conflict.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { compliance: +4 },
    memory: { keyword: "Pretending", image: "assets/images/card_family_expectation_clash.jpg" }
  }
},
"card_emotional_burst": {
  text: "One parent suddenly yells at you about something small.",
  tags: ["family", "emotion"],
  cardImage: "assets/images/card_emotional_burst.jpg",

  optionLeftText: "Ask them calmly why they reacted that way.",
  effectLeft: {
    stats: { courage: +5 },
    hiddenStats: { empathy: +3 },
    memory: { keyword: "Understanding", image: "assets/images/card_emotional_burst.jpg" }
  },

  optionRightText: "Shout back and escalate the fight.",
  effectRight: {
    stats: { mood: -15 },
    hiddenStats: { volatility: +3 },
    memory: { keyword: "Explosion", image: "assets/images/card_emotional_burst.jpg" }
  }
},
"card_family_secret_reveal": {
  text: "You accidentally overhear something about a family issue you were never told.",
  tags: ["family", "trust"],
  cardImage: "assets/images/card_family_secret_reveal.jpg",

  optionLeftText: "Ask about it directly.",
  effectLeft: {
    stats: { courage: +10 },
    hiddenStats: { trust: +2 },
    memory: { keyword: "Truth", image: "assets/images/card_family_secret_reveal.jpg" }
  },

  optionRightText: "Keep it to yourself, feeling uneasy.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { confusion: +3 },
    memory: { keyword: "Doubt", image: "assets/images/card_family_secret_reveal.jpg" }
  }
},
"card_weekend_rebellion": {
  text: "You refuse to attend a family event to hang out with friends instead.",
  tags: ["family", "conflict"],
  cardImage: "assets/images/card_weekend_rebellion.jpg",

  optionLeftText: "Negotiate honestly with your parent.",
  effectLeft: {
    stats: { freedom: +5, mood: +5 },
    hiddenStats: { independence: +3 },
    memory: { keyword: "Assertiveness", image: "assets/images/card_weekend_rebellion.jpg" }
  },

  optionRightText: "Go without permission and lie about it later.",
  effectRight: {
    stats: { freedom: +10, mood: -5 },
    hiddenStats: { guilt: +4 },
    memory: { keyword: "Deception", image: "assets/images/card_weekend_rebellion.jpg" }
  }
},

"card_group_exclusion": {
  text: "Your friend group goes out without telling you. You find out from photos later.",
  tags: ["friendship", "exclusion"],
  cardImage: "assets/images/card_group_exclusion.jpg",

  optionLeftText: "Talk to them and ask why.",
  effectLeft: {
    stats: { courage: +10 },
    hiddenStats: { communication: +3 },
    memory: { keyword: "Confrontation", image: "assets/images/card_group_exclusion.jpg" }
  },

  optionRightText: "Say nothing and withdraw.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { selfDoubt: +4 },
    memory: { keyword: "Isolation", image: "assets/images/card_group_exclusion.jpg" }
  }
},
"card_loyalty_dilemma": {
  text: "One friend tells you a secret that involves another friend.",
  tags: ["friendship", "trust"],
  cardImage: "assets/images/card_loyalty_dilemma.jpg",

  optionLeftText: "Respect the secret and stay neutral.",
  effectLeft: {
    stats: { mood: -5 },
    hiddenStats: { loyalty: +3 },
    memory: { keyword: "Neutral", image: "assets/images/card_loyalty_dilemma.jpg" }
  },

  optionRightText: "Tell the other friend to warn them.",
  effectRight: {
    stats: { social: -5 },
    hiddenStats: { betrayal: +3 },
    memory: { keyword: "Break", image: "assets/images/card_loyalty_dilemma.jpg" }
  }
},
"card_friends_vs_values": {
  text: "Your friends pressure you to tease someone you don’t dislike.",
  tags: ["friendship", "morality"],
  cardImage: "assets/images/card_friends_vs_values.jpg",

  optionLeftText: "Stand up and say it’s not okay.",
  effectLeft: {
    stats: { courage: +15, social: -5 },
    hiddenStats: { integrity: +4 },
    memory: { keyword: "Principle", image: "assets/images/card_friends_vs_values.jpg" }
  },

  optionRightText: "Laugh along to stay accepted.",
  effectRight: {
    stats: { mood: -5, social: +5 },
    hiddenStats: { guilt: +4 },
    memory: { keyword: "Compromise", image: "assets/images/card_friends_vs_values.jpg" }
  }
},
"card_friend_confides": {
  text: "A friend opens up about their struggles and swears you to secrecy.",
  tags: ["friendship", "emotion"],
  cardImage: "assets/images/card_friend_confides.jpg",

  optionLeftText: "Keep the promise and offer support.",
  effectLeft: {
    stats: { mood: +5 },
    hiddenStats: { empathy: +3 },
    memory: { keyword: "Trust", image: "assets/images/card_friend_confides.jpg" }
  },

  optionRightText: "Tell someone else out of concern.",
  effectRight: {
    stats: { social: -5 },
    hiddenStats: { supportSeeking: +2, betrayal: +2 },
    memory: { keyword: "Concern", image: "assets/images/card_friend_confides.jpg" }
  }
},
"card_friendship_shift": {
  text: "Your best friend grows close to someone new, and you feel left out.",
  tags: ["friendship", "change"],
  cardImage: "assets/images/card_friendship_shift.jpg",

  optionLeftText: "Talk about your feelings honestly.",
  effectLeft: {
    stats: { courage: +5 },
    hiddenStats: { emotionalIntimacy: +3 },
    memory: { keyword: "Vulnerability", image: "assets/images/card_friendship_shift.jpg" }
  },

  optionRightText: "Distance yourself to protect your pride.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { avoidance: +4 },
    memory: { keyword: "Drift", image: "assets/images/card_friendship_shift.jpg" }
  }
},

"card_teacher_unfairness": {
  text: "You get blamed for something in class that wasn’t your fault.",
  tags: ["school", "injustice"],
  cardImage: "assets/images/card_teacher_unfairness.jpg",

  optionLeftText: "Stand up and explain the truth.",
  effectLeft: {
    stats: { courage: +10 },
    hiddenStats: { justice: +3 },
    memory: { keyword: "Speak Up", image: "assets/images/card_teacher_unfairness.jpg" }
  },

  optionRightText: "Stay quiet and accept the blame.",
  effectRight: {
    stats: { mood: -10 },
    hiddenStats: { repression: +3 },
    memory: { keyword: "Unfair", image: "assets/images/card_teacher_unfairness.jpg" }
  }
},
"card_club_leadership": {
  text: "You're asked to be the leader of a group project or club.",
  tags: ["school", "leadership"],
  cardImage: "assets/images/card_club_leadership.jpg",

  optionLeftText: "Take the role and do your best.",
  effectLeft: {
    stats: { social: +10, courage: +5 },
    hiddenStats: { responsibility: +4 },
    memory: { keyword: "Lead", image: "assets/images/card_club_leadership.jpg" }
  },

  optionRightText: "Decline because you're unsure.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { fear: +3 },
    memory: { keyword: "Hesitation", image: "assets/images/card_club_leadership.jpg" }
  }
},
"card_school_event_pressure": {
  text: "You’re chosen to perform at a big school event.",
  tags: ["school", "pressure"],
  cardImage: "assets/images/card_school_event_pressure.jpg",

  optionLeftText: "Push through and prepare hard.",
  effectLeft: {
    stats: { courage: +10, mood: +5 },
    hiddenStats: { perseverance: +3 },
    memory: { keyword: "Stage", image: "assets/images/card_school_event_pressure.jpg" }
  },

  optionRightText: "Fake illness to avoid the spotlight.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { avoidance: +3 },
    memory: { keyword: "Escape", image: "assets/images/card_school_event_pressure.jpg" }
  }
},
"card_real_world_visit": {
  text: "Your class visits a local shelter or courthouse. It impacts you deeply.",
  tags: ["society", "reflection"],
  cardImage: "assets/images/card_real_world_visit.jpg",

  optionLeftText: "Share your feelings and ask questions.",
  effectLeft: {
    stats: { self: +5 },
    hiddenStats: { empathy: +4 },
    memory: { keyword: "Awakening", image: "assets/images/card_real_world_visit.jpg" }
  },

  optionRightText: "Ignore the feeling and move on.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { repression: +2 },
    memory: { keyword: "Silence", image: "assets/images/card_real_world_visit.jpg" }
  }
},
"card_school_policy_conflict": {
  text: "You and your classmates feel a new school rule is unfair.",
  tags: ["school", "rules"],
  cardImage: "assets/images/card_school_policy_conflict.jpg",

  optionLeftText: "Organize a petition to question it.",
  effectLeft: {
    stats: { courage: +15 },
    hiddenStats: { initiative: +4 },
    memory: { keyword: "Change", image: "assets/images/card_school_policy_conflict.jpg" }
  },

  optionRightText: "Complain quietly but follow it anyway.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { compliance: +3 },
    memory: { keyword: "Obedience", image: "assets/images/card_school_policy_conflict.jpg" }
  }
},

"card_identity_crisis": {
  text: "You no longer feel like the person you were a year ago, and it scares you.",
  tags: ["self", "growth"],
  cardImage: "assets/images/card_identity_crisis.jpg",

  optionLeftText: "Write in a journal to explore who you are now.",
  effectLeft: {
    stats: { self: +10, mood: +5 },
    hiddenStats: { introspection: +4 },
    memory: { keyword: "Reflection", image: "assets/images/card_identity_crisis.jpg" }
  },

  optionRightText: "Try to act like your old self.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { repression: +3 },
    memory: { keyword: "Mask", image: "assets/images/card_identity_crisis.jpg" }
  }
},
"card_first_art_expression": {
  text: "You create something (a drawing, a poem) and feel proud—but hesitant to share it.",
  tags: ["self", "expression"],
  cardImage: "assets/images/card_first_art_expression.jpg",

  optionLeftText: "Share it online or with a friend.",
  effectLeft: {
    stats: { courage: +10, mood: +5 },
    hiddenStats: { vulnerability: +4 },
    memory: { keyword: "Expression", image: "assets/images/card_first_art_expression.jpg" }
  },

  optionRightText: "Delete it and pretend it never existed.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { avoidance: +4 },
    memory: { keyword: "Hide", image: "assets/images/card_first_art_expression.jpg" }
  }
},
"card_fear_of_future": {
  text: "People start asking what you want to do in the future. You feel lost.",
  tags: ["self", "pressure"],
  cardImage: "assets/images/card_fear_of_future.jpg",

  optionLeftText: "Admit you're unsure and stay curious.",
  effectLeft: {
    stats: { mood: +5 },
    hiddenStats: { openness: +3 },
    memory: { keyword: "Curiosity", image: "assets/images/card_fear_of_future.jpg" }
  },

  optionRightText: "Make up an answer to avoid judgment.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { suppression: +3 },
    memory: { keyword: "Pretend", image: "assets/images/card_fear_of_future.jpg" }
  }
},
"card_self_criticism": {
  text: "You compare yourself harshly to others and feel like you're not enough.",
  tags: ["self", "emotion"],
  cardImage: "assets/images/card_self_criticism.jpg",

  optionLeftText: "Talk to someone about how you feel.",
  effectLeft: {
    stats: { mood: +10 },
    hiddenStats: { emotionalIntimacy: +3 },
    memory: { keyword: "Share", image: "assets/images/card_self_criticism.jpg" }
  },

  optionRightText: "Keep criticizing yourself in silence.",
  effectRight: {
    stats: { mood: -15 },
    hiddenStats: { selfCriticism: +4 },
    memory: { keyword: "Doubt", image: "assets/images/card_self_criticism.jpg" }
  }
},
"card_solo_walk": {
  text: "You take a long walk alone and feel strangely calm.",
  tags: ["self", "solitude"],
  cardImage: "assets/images/card_solo_walk.jpg",

  optionLeftText: "Embrace solitude as a way to recharge.",
  effectLeft: {
    stats: { mood: +10 },
    hiddenStats: { selfAwareness: +4 },
    memory: { keyword: "Stillness", image: "assets/images/card_solo_walk.jpg" }
  },

  optionRightText: "Feel lonely and disconnected.",
  effectRight: {
    stats: { mood: -5 },
    hiddenStats: { isolation: +3 },
    memory: { keyword: "Loneliness", image: "assets/images/card_solo_walk.jpg" }
  }
}


};
