# Decisions

## 1. Ingestion strategy

All content in this build is ingested as typed data modules co-located with the components that render them — plain TypeScript arrays/objects (features, showcase panels, dashboard stats, projects, git activity, assistant transcript) consumed directly by the view layer.

The obvious alternative I rejected was standing up a backend (database + auth + server functions) and feeding the dashboard from real rows. I rejected it because the deliverable is a product-story surface: a marketing page plus a demo of the workspace. A live datastore would have added schema design, access rules, loading/error states, and empty-state handling without changing a single thing a viewer actually sees. Keeping data in-module made the render path deterministic (no spinners, no flicker, no fetch on first paint), kept everything server-renderable for SEO, and — importantly — the data shapes are already the shapes a real API would return, so swapping the constants for a loader is a one-file change per view rather than a rewrite.

## 2. Trade-off under the time limit

The dashboard is a fixture, not a product. Nothing persists: sign-in is a modal that validates shape and resolves, filters and views are presentational, and the AI assistant replays a scripted exchange instead of calling a model. I spent my time on the parts that carry the pitch — typography scale, spacing rhythm, motion on scroll, the showcase and dashboard chrome — because a rough visual with a real backend reads worse than a sharp visual with an honest demo badge on it.

With a real week I'd: put the workspace behind actual auth and a database, replace each fixture with a route loader over the same types, wire the assistant to a streaming model endpoint with tool access to project data, add real empty/error/loading states, and cover the flows with Playwright tests. I'd also split the single landing route into discrete routes (product, how it works, pricing) once there's enough copy to justify it, and audit contrast and keyboard traversal properly rather than by eye.

## 3. AI tool usage

I used an AI coding assistant for the mechanical bulk: scaffolding component files, expanding Tailwind class sets, generating first-draft copy for feature cards, and writing the repetitive fixture arrays.

What I did myself or changed afterwards:

- Design system. The first drafts hardcoded colours (`bg-slate-900`, `text-white`) and drifted between sections. I replaced all of it with semantic tokens in `src/styles.css` and made every component read from those, so the palette and radii are defined once.
- Copy. Generated marketing text was generic ("revolutionise your workflow"). I rewrote the headline, subhead, and feature descriptions to say concretely what the product does.
- Layout and motion. Spacing, the responsive hero grid, the stagger/in-view animation timings, and the dashboard chrome were tuned by hand against the rendered page, not accepted as generated.
- Verification. I read every file that landed, checked the page at mobile and desktop widths, confirmed the SSR head metadata is unique and accurate, verified anchors scroll to real sections, and removed dead props and unused imports the assistant left behind.

Anything I couldn't explain line by line, I rewrote until I could.
