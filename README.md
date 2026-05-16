# @kana-consultant/ui-kit

A modern React UI kit for **back-office apps and admin dashboards**. Headless
Radix primitives, Tailwind CSS v4 design tokens, TanStack Form and TanStack
Store integrations, and Storybook out of the box.

Built so you can ship the operator-facing side of a product — CRUD screens,
data consoles, internal tooling, analytics dashboards — without reinventing
the layout chrome every time.

- 18 accessible primitives (`Button`, `Input`, `Dialog`, `Select`, ...)
- 12 dashboard-ready blocks (`DashboardShell`, `Sidebar`, `TopBar`, `StatCard`, `KanbanColumn`, ...)
- TanStack Form wrappers with Zod validation
- TanStack Store helpers for theme + collection state
- OKLCH design tokens with first-class dark mode
- Ships ESM + types + CSS tokens

---

## Installation

```bash
pnpm add @kana-consultant/ui-kit
# or
npm install @kana-consultant/ui-kit
# or
yarn add @kana-consultant/ui-kit
```

### Peer dependencies

`@kana-consultant/ui-kit` expects React 18+ or 19+ in your app:

```bash
pnpm add react react-dom
```

Everything else (Radix UI, TanStack Form / Store, `clsx`, `class-variance-authority`,
`lucide-react`, `tailwind-merge`, `zod`) installs automatically.

### Tailwind CSS v4

The kit uses Tailwind v4. If you don't have it yet:

```bash
pnpm add -D tailwindcss @tailwindcss/vite
```

Register the Vite plugin (or the PostCSS plugin equivalent) in your bundler.

Then import the stylesheets in your app's entry CSS:

```css
/* src/app.css */
@import 'tailwindcss';
@import '@kana-consultant/ui-kit/styles';
```

`@kana-consultant/ui-kit/styles` pulls in the design tokens, the `@theme inline` block
that wires them into Tailwind's utility system, and the `.dark` overrides.
Your existing Tailwind configuration continues to work.

---

## Quick start

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle, StatCard } from '@kana-consultant/ui-kit'
import { ListTodo } from 'lucide-react'

export function Home() {
  return (
    <div className="grid gap-4 p-6">
      <StatCard
        id="active"
        label="Active tasks"
        value={42}
        icon={ListTodo}
        tone="primary"
        delta={{ value: 12, direction: 'up' }}
      />
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>Create task</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Dark mode

The kit toggles dark mode via a `.dark` class on `<html>`. The shipped theme
store wires this up for you:

```tsx
import { ThemeToggle, setThemeMode, useResolvedTheme } from '@kana-consultant/ui-kit'

function Header() {
  const mode = useResolvedTheme()
  return (
    <div>
      <ThemeToggle />
      <span>Current: {mode}</span>
    </div>
  )
}

setThemeMode('system')
```

State is persisted to `localStorage` under `kana-ui-theme` and reacts to
`prefers-color-scheme` changes automatically.

---

## Forms with TanStack Form

```tsx
import { useAppForm } from '@kana-consultant/ui-kit'
import { z } from 'zod'

const titleSchema = z.string().min(3, 'At least 3 characters')

export function CreateTaskForm() {
  const form = useAppForm({
    defaultValues: { title: '', notify: true },
    onSubmit: async ({ value }) => console.log(value),
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
    >
      <form.AppField name="title" validators={{ onChange: titleSchema, onBlur: titleSchema }}>
        {(field) => <field.TextField label="Title" required />}
      </form.AppField>

      <form.AppField name="notify">
        {(field) => <field.SwitchField label="Notify assignees" />}
      </form.AppField>

      <form.AppForm>
        <form.SubmitButton>Create</form.SubmitButton>
      </form.AppForm>
    </form>
  )
}
```

Available field components (all derive their value from `useFieldContext`):

- `TextField`
- `TextareaField`
- `CheckboxField`
- `SwitchField`

Form-level components:

- `SubmitButton` (auto-disables when pristine/invalid, shows loader)
- `ResetButton`

---

## State with TanStack Store

```tsx
import {
  createTaskStore,
  addTask,
  toggleDone,
  useTasks,
  useTaskCounts,
  EPriority,
  EStatus,
} from '@kana-consultant/ui-kit'

const store = createTaskStore([
  {
    id: 't1',
    title: 'Ship v1',
    status: EStatus.InProgress,
    priority: EPriority.High,
  },
])

function Board() {
  const tasks = useTasks(store)
  const counts = useTaskCounts(store)
  return (
    <>
      <p>Active: {counts[EStatus.InProgress]}</p>
      {tasks.map((t) => (
        <button key={t.id} onClick={() => toggleDone(store, t.id, t.status !== EStatus.Done)}>
          {t.title}
        </button>
      ))}
    </>
  )
}
```

---

## Component index

**Primitives** (`@kana-consultant/ui-kit`)

| Component | Notes |
| --- | --- |
| `Alert` | 5 tones, icon tile + title + description + actions |
| `Button` | 7 variants, 5 sizes, `loading` + icon slots |
| `Input` | `leadingIcon`, `trailingIcon`, `invalid`, size variants |
| `Label` | Required indicator |
| `Textarea` | Invalid state |
| `Checkbox`, `Switch` | Radix primitives, indeterminate supported |
| `Select` | Full Radix Select composition |
| `Dialog` | With overlay, header, footer helpers |
| `DropdownMenu` | Item / CheckboxItem / RadioItem / Sub |
| `Tabs` | Radix-powered |
| `Tooltip` | Provider + Trigger + Content |
| `Card` | Header / Title / Description / Content / Footer |
| `Badge` | 8 tones, `dot` prop |
| `DatePicker`, `DateRangePicker` | Calendar popover, hover-preview range, presets |
| `Popover` | Radix popover with kit surface + radius |
| `Avatar`, `AvatarGroup` | Radix avatar + auto-overflow group |
| `Toast` | Radix Toast — provider, viewport, 5 tones, action + close |
| `Progress`, `Skeleton`, `Separator`, `Kbd` | — |

**Dashboard blocks**

| Component | Notes |
| --- | --- |
| `DashboardShell` | Sidebar + TopBar layout wrapper |
| `Sidebar` | Grouped nav, active state, footer slot |
| `TopBar` | Title/subtitle, search, notifications, theme, avatar |
| `ThemeToggle` | Wired to the theme store |
| `StatCard` | Value, delta, tone, icon — for KPI rows |
| `TaskCard`, `TaskList` | Record card with checkbox, priority, assignees, metadata |
| `ProjectCard` | Color bar, progress, members — generic "collection" card |
| `TeamMemberCard` | Avatar, online badge — user/entity card |
| `ActivityFeed` | Timeline with avatar rail — audit logs / change history |
| `CalendarMini` | Month grid, markers, selection |
| `KanbanColumn` | Column header + stacked cards — pipeline / workflow views |

Shared enums and types: `EPriority`, `EStatus`, `TTask`, `TProject`, `TMember`,
`TStat`, `TNavItem`, `TActivity`.

---

## AI agents

The kit is designed to be picked up correctly by AI coding assistants. Three
entry points:

- **`/llms.txt`** — standard [llms.txt](https://llmstxt.org) index of the docs
- **`/llms-full.txt`** — one-file full reference covering install, every primitive + block, TanStack Form/Store patterns, and rules for generated code
- **`/skill.md`** — drop-in [Claude Code Skill](https://docs.claude.com/en/docs/claude-code/skills) file

### Claude Code

```bash
mkdir -p ~/.claude/skills/kana-ui-kit
curl https://kana-ui-kit-docs.pages.dev/skill.md -o ~/.claude/skills/kana-ui-kit/SKILL.md
```

Claude auto-loads the skill only for React admin / dashboard work — it stays
silent on unrelated projects.

### Cursor, Windsurf, Aider, ChatGPT, etc.

Point the agent at `llms-full.txt`:

```
Read https://kana-ui-kit-docs.pages.dev/llms-full.txt,
then help me build an admin dashboard with @kana-consultant/ui-kit.
```

Or add a `.cursorrules` / `AGENTS.md` entry:

```
Use @kana-consultant/ui-kit for all UI. Reference:
https://kana-ui-kit-docs.pages.dev/llms-full.txt
```

See [the AI agents guide](https://kana-ui-kit-docs.pages.dev/docs/ai) for more.

---

## Development

```bash
pnpm install
pnpm storybook        # browse every component and the full Tasko dashboard
pnpm dev              # playground dev server
pnpm typecheck
pnpm build            # library build -> dist/
pnpm build-storybook  # static Storybook -> storybook-static/
```

The library build emits:

- `dist/index.js` — ESM bundle (Radix / TanStack / utility deps externalized)
- `dist/index.d.ts` — rolled-up type declarations
- `dist/index.css` — design tokens and `@theme inline` directives
- `dist/index.js.map` — source map

---

## Publishing to npm

The package is scoped under `@kana-consultant`. A `prepublishOnly` hook runs
typecheck + build before every publish, and `publishConfig.access` is set to
`public`.

### Automated publish (recommended)

`.github/workflows/publish.yml` publishes to npm automatically whenever a
GitHub release is published. Every CI-published tarball carries a
[signed provenance attestation](https://docs.npmjs.com/generating-provenance-statements)
linking it back to the exact commit and workflow run.

One-time repo setup:

1. On npmjs.com, generate an **Automation** access token (bypasses 2FA).
2. In the GitHub repo, add it as a secret named `NPM_TOKEN`
   (`Settings → Secrets and variables → Actions → New repository secret`).

Cutting a new version:

```bash
pnpm version patch          # or minor / major — bumps package.json and creates a tag
git push --follow-tags
gh release create v$(node -p "require('./package.json').version") \
  --generate-notes
```

The workflow runs, validates the tag matches `package.json`, then publishes.

### Manual publish

If you prefer to publish locally:

```bash
npm login
pnpm publish --otp=<6-digit-code>
```

### What ships

Only these paths end up in the tarball (see `files` in `package.json`):

- `dist/`
- `README.md`
- `LICENSE`

Source, tests, stories, Storybook config, and tsconfigs stay out of the
installed package.

### Exports map

```json
{
  ".":            "./dist/index.js",
  "./styles":     "./dist/index.css",
  "./styles.css": "./dist/index.css",
  "./package.json"
}
```

So consumers can:

```ts
import { Button } from '@kana-consultant/ui-kit'
import '@kana-consultant/ui-kit/styles'
```

---

## License

MIT © Maulana Sodiqin
