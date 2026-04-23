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
      { label: 'AI agents', href: '/docs/ai' },
    ],
  },
  {
    label: 'Primitives',
    items: [
      { label: 'Overview', href: '/docs/components' },
      { label: 'Avatar', href: '/docs/components/avatar' },
      { label: 'Badge', href: '/docs/components/badge' },
      { label: 'Button', href: '/docs/components/button' },
      { label: 'Card', href: '/docs/components/card' },
      { label: 'Checkbox', href: '/docs/components/checkbox' },
      { label: 'Dialog', href: '/docs/components/dialog' },
      { label: 'DropdownMenu', href: '/docs/components/dropdown-menu' },
      { label: 'Input', href: '/docs/components/input' },
      { label: 'Kbd', href: '/docs/components/kbd' },
      { label: 'Label', href: '/docs/components/label' },
      { label: 'Progress', href: '/docs/components/progress' },
      { label: 'Select', href: '/docs/components/select' },
      { label: 'Separator', href: '/docs/components/separator' },
      { label: 'Skeleton', href: '/docs/components/skeleton' },
      { label: 'Switch', href: '/docs/components/switch' },
      { label: 'Tabs', href: '/docs/components/tabs' },
      { label: 'Textarea', href: '/docs/components/textarea' },
      { label: 'Tooltip', href: '/docs/components/tooltip' },
    ],
  },
  {
    label: 'Dashboard blocks',
    items: [
      { label: 'Overview', href: '/docs/dashboard' },
      { label: 'ActivityFeed', href: '/docs/dashboard/activity-feed' },
      { label: 'CalendarMini', href: '/docs/dashboard/calendar-mini' },
      { label: 'DashboardShell', href: '/docs/dashboard/dashboard-shell' },
      { label: 'KanbanColumn', href: '/docs/dashboard/kanban-column' },
      { label: 'ProjectCard', href: '/docs/dashboard/project-card' },
      { label: 'Sidebar', href: '/docs/dashboard/sidebar' },
      { label: 'StatCard', href: '/docs/dashboard/stat-card' },
      { label: 'TaskCard', href: '/docs/dashboard/task-card' },
      { label: 'TeamMemberCard', href: '/docs/dashboard/team-member-card' },
      { label: 'TopBar', href: '/docs/dashboard/top-bar' },
      { label: 'Tasko Composition', href: 'https://kana-ui-kit-storybook.pages.dev/?path=/story/dashboard-tasko-composition--full-dashboard' },
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
  { label: 'Storybook', href: 'https://kana-ui-kit-storybook.pages.dev' },
  { label: 'GitHub', href: 'https://github.com/kana-consultant/kana-ui-kit' },
]
