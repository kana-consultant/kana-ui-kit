export type TNavItem = {
  label: string
  href: string
}

export type TNavSection = {
  label: string
  items: TNavItem[]
}

export const docsNav: TNavSection[] = [
  {
    label: 'Getting started',
    items: [
      { label: 'Introduction', href: '/' },
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    label: 'Primitives',
    items: [
      { label: 'Overview', href: '/docs/components' },
      { label: 'Button', href: '/docs/components/button' },
      { label: 'Input', href: '/docs/components/input' },
      { label: 'Badge', href: '/docs/components/badge' },
    ],
  },
  {
    label: 'Dashboard blocks',
    items: [
      { label: 'Overview', href: '/docs/dashboard' },
    ],
  },
  {
    label: 'Integrations',
    items: [
      { label: 'Forms (TanStack Form)', href: '/docs/forms' },
      { label: 'State (TanStack Store)', href: '/docs/stores' },
    ],
  },
]

export const topNav: TNavItem[] = [
  { label: 'Docs', href: '/docs/installation' },
  { label: 'Components', href: '/docs/components' },
  { label: 'Storybook', href: 'https://github.com/kana-consultant/kana-ui-kit' },
  { label: 'GitHub', href: 'https://github.com/kana-consultant/kana-ui-kit' },
]
