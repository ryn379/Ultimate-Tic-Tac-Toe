# Ultimate Tic-Tac-Toe

> A neon-inspired React implementation of the classic strategy game where every move determines the board your opponent must play on next.

[![Live Demo](https://img.shields.io/badge/Play%20the%20live%20demo-00bcd4?style=for-the-badge)](https://ryn379.github.io/Ultimate-Tic-Tac-Toe/)
[![Built with React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite)](https://vite.dev/)

## Overview

Ultimate Tic-Tac-Toe expands ordinary Tic-Tac-Toe into a strategic 3x3 grid of nine smaller boards. A move is important twice:

1. It places your mark on the selected cell.
2. The cell position sends your opponent to the corresponding small board.

The result is a game that rewards planning, board control, and anticipating the opponent's next destination.

## Features

### Gameplay

- Nine nested 3x3 Tic-Tac-Toe boards.
- Alternating **X** and **O** turns.
- Enforced destination-board rule: the previous cell position determines the next board.
- Immediate small-board win detection for rows, columns, and diagonals.
- Completed small boards display their winning mark and stop accepting moves.
- Invalid board selections are blocked with a clear alert.
- Occupied cells cannot be played again.
- A first-launch rules screen explains the game before play begins.

### Visual design

- High-contrast dark background for a focused game surface.
- Cyan macro-board dividers and coral micro-board dividers.
- Glowing highlight around the board currently available to play.
- Large, highly visible X/O marks for completed boards.
- Gradient rules screen with a prominent start button.
- CSS-driven board geometry with no image assets required.
- Vite base-path configuration for GitHub Pages hosting.

### Technical design

- React functional components and hooks.
- Immutable state updates for board and turn changes.
- Small, focused components:
  - `App` owns game state and move orchestration.
  - `Tic` renders an individual small board.
  - `Rules` renders the pre-game instructions.
- ESLint 9 configuration with React Hooks and React Refresh rules.
- Production build and GitHub Pages deployment scripts included.

## How to play

1. Read the rules screen and select **Start Game**.
2. X plays first.
3. Choose any available cell on the first move.
4. The cell's position determines the small board O must play in next.
5. Continue alternating turns. Every move sends the other player to a board.
6. Win small boards by completing a row, column, or diagonal.
7. Use the won small boards as the positions in the larger strategic game.

### Destination-board example

If you play the top-right cell of any small board, your opponent must play in the top-right small board. If that destination board has already been won, the next player is free to choose an available board.

## Design and creative direction

The interface uses a deliberately arcade-inspired visual language:

- **Cyan macro grid:** separates the nine strategic zones.
- **Coral micro grid:** creates a distinct visual hierarchy inside each zone.
- **Neon active state:** a blue glow makes the legal destination board immediately recognizable.
- **Dark stage:** keeps the grid and player marks visually dominant.
- **Gradient briefing screen:** gives the rules a separate, welcoming entry point before the competitive board appears.

The design is intentionally minimal: the board is the hero, animation is restrained, and color is used to communicate state rather than decoration alone.

## Project structure

```text
.
├── index.html              # HTML entry point and document title
├── package.json            # Scripts and dependencies
├── vite.config.js          # React plugin and GitHub Pages base path
├── eslint.config.js        # ESLint and React-specific rules
├── public/                 # Static public assets
├── src/
│   ├── main.jsx            # React application bootstrap
│   ├── App.jsx             # Game state, rules screen, and board components
│   ├── App.css             # Board, active-state, and rules-screen styling
│   ├── index.css           # Global browser and typography styles
│   └── assets/             # Source assets
└── docs/                   # Generated GitHub Pages output
```

## Run locally

### Requirements

- Node.js 18 or newer
- npm

### Install and start the development server

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run deploy` | Build and publish `dist/` through `gh-pages` |
| `npm run predeploy` | Automatically build before deployment |

## Deployment

The project is configured for the repository subpath:

```text
/Ultimate-Tic-Tac-Toe/
```

The Vite `base` setting and the `homepage` field in `package.json` are aligned with the GitHub Pages URL:

<https://ryn379.github.io/Ultimate-Tic-Tac-Toe/>

To publish a new version:

```bash
npm run deploy
```

## State and rules implementation

The game stores:

- `boards`: nine arrays containing the nine cells of each small board.
- `isXNext`: whose turn it is.
- `activeBoard`: the small board currently required by the destination rule.
- `boardCnt`: the winner recorded for each completed small board.
- `showRules`: whether the introductory rules screen is visible.

The `winCheck` helper evaluates all eight possible winning lines on a small board. After a move, the application records a small-board winner and calculates the next destination from the selected cell index.

## Current scope and future ideas

The current implementation focuses on the core board interaction and visual experience. The following enhancements would be natural next steps:

- Detect and announce the overall 3x3 macro-board winner.
- Add draw and stalemate detection.
- Add a restart/new-game control.
- Replace alerts with an in-page status message.
- Add keyboard and screen-reader-friendly controls.
- Improve mobile layouts with breakpoint-based sizing.
- Add move history, undo, or replay.
- Add single-player AI and online multiplayer.
- Add automated unit and interaction tests.

These are intentionally listed as future work rather than presented as existing functionality.

## Contributing

1. Create a feature branch.
2. Make a focused change that follows the existing React and CSS patterns.
3. Run the checks:

   ```bash
   npm run lint
   npm run build
   ```

4. Open a pull request describing the behavior and visual changes.

## License

No license file is currently included in the repository. Add a license before distributing the project as reusable open-source software.
