# Lo-Fi Music Player

> A minimalist lo-fi music player built with React and TypeScript. Streams curated tracks directly from the [Chillhop](https://chillhop.com) catalog.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)

![Demo](assets/demo.gif)

## Features

- **Curated lo-fi tracks** streamed live from the Chillhop catalog
- **Full playback controls** — play/pause, skip forward & backward
- **Seekable progress bar** with a unique color gradient per track
- **Collapsible library sidebar** to browse all available tracks
- **Auto-advance** to the next track when a song ends

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styles | SCSS |
| Icons | FontAwesome |
| Audio Source | Chillhop Streaming API |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ajsevillano/react-music-player.git
cd react-music-player

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/       # React components (Player, Library, Song, etc.)
├── hooks/            # Custom React hooks
├── data/             # Track data & types
├── styles/           # SCSS stylesheets
└── App.tsx           # Root component
```

## License

MIT
