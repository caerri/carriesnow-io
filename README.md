# carriesnow.io

My personal portfolio website.

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- React Router
- React Icons
- ESLint + Prettier

## Project Structure

```
src/
├── components/     # React components
├── data/          # Project data and content
├── types/         # TypeScript definitions
├── assets/        # Images and static files
├── App.tsx
├── main.tsx
└── index.css      # Tailwind directives
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Code Quality

Lint:

```bash
npm run lint
```

Auto-fix lint issues:

```bash
npm run lint:fix
```

Format with Prettier:

```bash
npm run format
```

## Customization

**Projects**: Edit `src/data/projects.ts`

**Styling**: Use Tailwind utility classes in JSX. Customize theme in `tailwind.config.js`

**Imports**: Use `@/` alias for src imports (e.g., `import type { Project } from '@/types'`)

## Deployment

Works with Vercel, Netlify, or GitHub Pages.

- Build command: `npm run build`
- Output directory: `dist/`

