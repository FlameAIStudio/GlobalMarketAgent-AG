# Global Market Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

AI-powered market intelligence demo built with Next.js and Tailwind CSS.

## Features

- Natural-language product input
- AI relay routing through `/api/analyze`
- Structured mock reports for fast demo delivery
- GitHub Pages static preview fallback

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in development.

## Environment Variables

Create `.env.local` with:

```bash
OPENAI_API_KEY=your-relay-api-key
OPENAI_BASE_URL=https://api.gmi-serving.com/v1
OPENAI_MODEL=openai/gpt-5.4-mini
```

## GitHub Pages

This repo supports GitHub Pages deployment through GitHub Actions.
Static preview mode uses bundled mock data instead of runtime API routes.

## License

This project is licensed under the MIT License.
See [LICENSE](./LICENSE) for details.
