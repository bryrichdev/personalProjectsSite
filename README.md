# Personal projects site

A portfolio site for showing projects to recruiters and hiring managers. React 19 +
TypeScript + Vite, no runtime dependencies beyond React itself.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

## Editing the site

**All copy lives in [`src/content.ts`](src/content.ts).** It ships with `TODO:`
placeholders — replace them and the whole page updates. You shouldn't need to touch a
component to change what the site says.

`src/types.ts` documents every field. A few things worth knowing:

- **Empty sections disappear.** Leave `experience: []` and both the section and its nav
  link are dropped. Same for `skills`.
- **`featured: true`** floats a project to the top of the grid and gives it a full-width
  card on wide screens. Two or three featured projects is about right.
- **The filter bar builds itself** from the `tech` arrays across all projects, ordered by
  how often each appears. Keep the spelling consistent ("Node.js", not "NodeJS") or you'll
  get duplicate chips.
- **`resumeUrl`** is empty by default, which hides the Resume button. Drop a PDF in
  `public/` and set it to `/resume.pdf` to show it.
- **Status badges**: `Live` and `In progress` get colored treatments; `Prototype` and
  `Archived` render neutral.

### What recruiters actually read

The `highlights` bullets are the part of a project card that gets skimmed. Make them
outcomes with numbers ("cut p95 latency 800ms → 120ms", "1.2k monthly users") rather than
task lists ("used Redis"). One working `links.demo` is worth more than another paragraph
of description.

## Structure

```
index.html            title, meta description, favicon, pre-paint theme script
src/
  content.ts          ← all site copy
  types.ts            content shapes, documented
  index.css           design tokens (color, type scale, spacing), reset, shared atoms
  App.tsx             composes the sections, drops empty ones
  components/         one .tsx + .css pair per section
  hooks/
    useTheme.ts       light/dark, persisted to localStorage, follows system by default
    useActiveSection.ts  highlights the nav link for the section in view
    useReveal.ts      fade-in-on-scroll, disabled under prefers-reduced-motion
```

Theming is plain CSS custom properties. Dark is the default palette; `:root[data-theme='light']`
in `src/index.css` overrides it. The inline script in `index.html` sets `data-theme` before
first paint so there's no flash of the wrong theme.

### Accessibility and responsiveness

Skip link, labelled sections, `aria-current` on the active nav item, visible focus rings,
`prefers-reduced-motion` support, and a layout that holds from 320px up. Worth keeping
intact — some recruiting pipelines audit for it.

## Deploying

The build output in `dist/` is a static site; any host works.

- **Vercel / Netlify / Cloudflare Pages**: point at the repo, build command `npm run build`,
  output directory `dist`. No configuration needed.
- **GitHub Pages under a repo subpath** (`user.github.io/repo`): set
  `base: '/repo/'` in `vite.config.ts` first, or asset URLs will 404.

After deploying, update the `og:` meta tags in `index.html` with the real URL.
