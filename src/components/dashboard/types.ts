import type { LucideIcon } from 'lucide-react'

export const EPriority = {
  Low: 'low',
  Medium: 'medium',
  High: 'high',
  Urgent: 'urgent',
} as const

export type TPriority = (typeof EPriority)[keyof typeof EPriority]

export const EStatus = {
  Backlog: 'backlog',
  Todo: 'todo',
  InProgress: 'in_progress',
  Review: 'review',
  Done: 'done',
} as const

export type TStatus = (typeof EStatus)[keyof typeof EStatus]

export type TMember = {
  id: string
  name: string
  email?: string
  avatarUrl?: string
  role?: string
}

export type TProject = {
  id: string
  name: string
  color: string
  progress: number
  dueDate?: string
  members: TMember[]
  tasksDone: number
  tasksTotal: number
}

export type TTask = {
  id: string
  title: string
  description?: string
  status: TStatus
  priority: TPriority
  projectId?: string
  projectName?: string
  dueDate?: string
  assignees?: TMember[]
  tags?: string[]
  subtasks?: { total: number; done: number }
  comments?: number
  attachments?: number
}

export type TStatDelta = {
  value: number
  direction: 'up' | 'down' | 'flat'
}

export type TStat = {
  id: string
  label: string
  value: string | number
  icon: LucideIcon
  tone?: 'primary' | 'accent' | 'success' | 'warning' | 'info' | 'neutral'
  delta?: TStatDelta
  hint?: string
}

export type TNavItem = {
  id: string
  label: string
  icon: LucideIcon
  href?: string
  badge?: string | number
}

export type TActivity = {
  id: string
  actor: TMember
  verb: string
  target?: string
  at: string
}
