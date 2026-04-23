import {
  BarChart3,
  CheckCircle2,
  Clock,
  Flame,
  LayoutDashboard,
  ListTodo,
  MessageCircle,
  Settings,
  Users,
  Calendar as CalendarIcon,
  Inbox,
  FolderKanban,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EPriority, EStatus } from '@kana-consultant/ui-kit'
import type {
  TActivity,
  TMember,
  TNavItem,
  TProject,
  TStat,
  TTask,
} from '@kana-consultant/ui-kit'

export type TWithIcon<T> = Omit<T, 'icon'> & { icon: LucideIcon }

export const members: TMember[] = [
  { id: 'u1', name: 'Ava Chen', role: 'Product Designer' },
  { id: 'u2', name: 'Marcus Lee', role: 'Frontend Engineer' },
  { id: 'u3', name: 'Priya Patel', role: 'Engineering Lead' },
  { id: 'u4', name: 'Diego Ramos', role: 'QA' },
  { id: 'u5', name: 'Kenji Yamamoto', role: 'Backend' },
  { id: 'u6', name: 'Sofia Rossi', role: 'PM' },
]

export const nav: TNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'tasks', label: 'My Tasks', icon: ListTodo, badge: 12 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
  { id: 'inbox', label: 'Inbox', icon: Inbox, badge: 3 },
  { id: 'team', label: 'Team', icon: Users },
]

export const navSecondary: TNavItem[] = [
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'messages', label: 'Messages', icon: MessageCircle },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export const stats: TStat[] = [
  {
    id: 's1',
    label: 'Active tasks',
    value: 42,
    icon: ListTodo,
    tone: 'primary',
    delta: { value: 12, direction: 'up' },
    hint: 'Across 6 projects',
  },
  {
    id: 's2',
    label: 'Completed',
    value: 128,
    icon: CheckCircle2,
    tone: 'success',
    delta: { value: 8, direction: 'up' },
    hint: 'Last 30 days',
  },
  {
    id: 's3',
    label: 'Overdue',
    value: 5,
    icon: Flame,
    tone: 'warning',
    delta: { value: -3, direction: 'down' },
    hint: 'Needs attention',
  },
  {
    id: 's4',
    label: 'Hours tracked',
    value: '164h',
    icon: Clock,
    tone: 'info',
    delta: { value: 2, direction: 'up' },
    hint: 'This week',
  },
]

export const projects: TProject[] = [
  { id: 'p1', name: 'Tasko Redesign', color: '#7c3aed', progress: 72, dueDate: 'May 12', members: members.slice(0, 4), tasksDone: 18, tasksTotal: 25 },
  { id: 'p2', name: 'Mobile App v2', color: '#06b6d4', progress: 41, dueDate: 'Jun 2', members: members.slice(1, 5), tasksDone: 7, tasksTotal: 17 },
  { id: 'p3', name: 'Onboarding Flow', color: '#f59e0b', progress: 88, dueDate: 'Apr 30', members: members.slice(2, 6), tasksDone: 22, tasksTotal: 25 },
]

export const tasks: TTask[] = [
  { id: 't1', title: 'Design new dashboard stats layout', description: 'Iterate on hierarchy and spacing.', status: EStatus.InProgress, priority: EPriority.High, projectName: 'Tasko Redesign', dueDate: 'Tomorrow', assignees: members.slice(0, 2), tags: ['design', 'dashboard'], subtasks: { total: 5, done: 3 }, comments: 4, attachments: 2 },
  { id: 't2', title: 'Wire up theme switcher to store', status: EStatus.Todo, priority: EPriority.Medium, projectName: 'Tasko Redesign', dueDate: 'Apr 28', assignees: [members[1]], tags: ['frontend'], subtasks: { total: 3, done: 0 } },
  { id: 't3', title: 'Ship onboarding email copy', status: EStatus.Review, priority: EPriority.Low, projectName: 'Onboarding Flow', dueDate: 'Apr 25', assignees: [members[5]], comments: 2 },
  { id: 't4', title: 'Fix mobile layout overflow', status: EStatus.Backlog, priority: EPriority.Urgent, projectName: 'Mobile App v2', assignees: [members[2], members[4]], tags: ['bug', 'mobile'] },
  { id: 't5', title: 'Publish Q2 roadmap', status: EStatus.Done, priority: EPriority.Medium, projectName: 'Tasko Redesign', assignees: [members[5]] },
]

export const activity: TActivity[] = [
  { id: 'a1', actor: members[0], verb: 'completed', target: 'Design new dashboard stats layout', at: '2m ago' },
  { id: 'a2', actor: members[1], verb: 'commented on', target: 'Wire up theme switcher', at: '10m ago' },
  { id: 'a3', actor: members[2], verb: 'created project', target: 'Mobile App v2', at: '1h ago' },
  { id: 'a4', actor: members[5], verb: 'assigned', target: 'Fix mobile layout overflow to Diego', at: 'Yesterday' },
]
