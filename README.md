# LifeChoiceCardGame

A narrative card game simulating coming-of-age and life choices.  
Players experience events from ages 12 to 15, make yearly choices, engrave memories, and unlock various endings.

## Project Structure

```
LifeChoiceCardGame/
│
├── assets//
│ ├── audio/ # All sound effects and background music (e.g. bgm.mp3, round.mp3, click.mp3)
│ ├── css/ # Stylesheets (e.g. style.css)
│ └── images/ # Card illustrations and game images
│
├── js/
│ ├── audio.js # Audio logic and volume management
│ ├── cards.js # Card data and structure
│ ├── core.js # Main game flow logic
│ ├── domRefs.js # DOM node references
│ ├── dragHandlers.js # Card drag-and-drop and interaction logic
│ ├── gameState.js # Game state management
│ ├── main.js # App entry and UI event bindings
│ ├── saveSystem.js # Save/load game data logic
│ └── saveUI.js # Save/load UI logic
│
├── index.html # Main game web page
└── README.md # Project documentation (this file)
```


## Quick Start

1. **Clone or download this project** to your local machine.
2. Start a local web server in the project root directory  
   (e.g. VSCode Live Server, Python SimpleHTTPServer, Node http-server, etc).
3. Open browser and visit `http://localhost:YOUR_PORT/` to play the game.


## Copyright

This project is developed for course project study.  
If you use third-party artwork, sound effects, or music, please ensure you have the rights to use or redistribute them.


