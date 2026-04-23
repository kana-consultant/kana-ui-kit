# @kana-consultant/ui-kit docs

Astro 6 documentation site for the kit.

## Development

```bash
pnpm install
pnpm dev          # dev server on http://localhost:4321
pnpm build        # static build to dist/
pnpm preview      # preview the build locally
```

## Structure

```
docs/
├── astro.config.mjs
├── package.json
└── src/
    ├── components/
    │   ├── ui/           # docs primitives (Container, Callout, Code, DemoFrame, PropTable, PageHeader)
    │   ├── layout/       # site header, footer, sidebar, theme toggle
    │   ├── home/         # landing page sections
    │   └── demos/        # React demos imported via `client:visible`
    ├── layouts/          # base-layout, docs-layout
    ├── lib/              # nav config
    ├── pages/
    │   ├── index.astro   # landing
    │   └── docs/         # docs pages
    └── styles/
        └── global.css    # imports Tailwind + @kana-consultant/ui-kit/styles
```

## Deployment

The site deploys to Cloudflare Pages via `.github/workflows/deploy-docs.yml`.

### One-time setup

1. Create a Pages project on Cloudflare named **`kana-ui-kit-docs`** (via dashboard
   or `wrangler pages project create kana-ui-kit-docs`).
2. On Cloudflare dashboard → **My Profile → API Tokens**, create a token with the
   **Cloudflare Pages: Edit** permission.
3. Find your account ID on any domain overview page.
4. In the GitHub repo, add two secrets under
   **Settings → Secrets and variables → Actions**:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`

Once secrets are set, every push to `develop` / `main` that touches `docs/**`
triggers a production deploy. Pull requests get preview deploys with a unique
subdomain and an auto-posted comment linking to it.
