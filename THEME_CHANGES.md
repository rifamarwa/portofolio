# Portfolio theme update

All existing pages now use the shared theme in `app/globals.css`.

| Color | Hex |
| --- | --- |
| Light background | #F6F5F3 |
| Dark background | #17161C |
| Dusty rose | #C18390 |
| Sage | #DFE8D6 |
| Charcoal | #302D32 |

## Updated

- Home, Work, project details, and About share the global palette.
- Navbar, footer, buttons, language toggle, technology chips, and project search use theme tokens.
- Company logos sit in cards; existing logos and project screenshots are preserved.
- A shared background uses abstract rose arches and a soft sage wash. Original artwork files remain available as unused assets.
- About is shortened to an introduction, compact experience summary, eight tools, and one personal sentence.
- About supports English and Bahasa Indonesia through the existing translation system.
- Text labels use readable sizes starting at 16px. Accent text uses darker rose ink in light mode.
- Process descriptions stay visible in both themes.
- Project cards and back links retain the selected language.
- Project archive rows expand to fit their content.
- The dependency lockfile has been repaired so it matches the existing package versions.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3006/en or http://localhost:3006/id.

## Verification

Production compilation and TypeScript checks passed with `npm run build`.
Browser visual inspection was not available in the editing environment.

This ZIP includes source code and public assets. Generated caches and dependencies are excluded.
