import { Store } from '@tanstack/store'
import { useStore } from '@tanstack/react-store'
import { EStatus } from '@/components/dashboard/types'
import type { TStatus, TTask } from '@/components/dashboard/types'

export type TTaskFilters = {
  search: string
  status: TStatus | 'all'
  assigneeId?: string
}

export type TTaskBoardState = {
  tasks: TTask[]
  filters: TTaskFilters
}

export function createTaskStore(initial: TTask[] = []) {
  return new Store<TTaskBoardState>({
    tasks: initial,
    filters: { search: '', status: 'all' },
  })
}

export function addTask(store: Store<TTaskBoardState>, task: TTask) {
  store.setState((s) => ({ ...s, tasks: [task, ...s.tasks] }))
}

export function removeTask(store: Store<TTaskBoardState>, id: string) {
  store.setState((s) => ({ ...s, tasks: s.tasks.filter((t) => t.id !== id) }))
}

export function updateTask(
  store: Store<TTaskBoardState>,
  id: string,
  patch: Partial<TTask>,
) {
  store.setState((s) => ({
    ...s,
    tasks: s.tasks.map((t) => (t.id === id ? { ...t, ...patch } : t)),
  }))
}

export function moveTask(store: Store<TTaskBoardState>, id: string, status: TStatus) {
  updateTask(store, id, { status })
}

export function toggleDone(store: Store<TTaskBoardState>, id: string, done: boolean) {
  updateTask(store, id, { status: done ? EStatus.Done : EStatus.Todo })
}

export function setSearch(store: Store<TTaskBoardState>, search: string) {
  store.setState((s) => ({ ...s, filters: { ...s.filters, search } }))
}

export function setStatusFilter(store: Store<TTaskBoardState>, status: TStatus | 'all') {
  store.setState((s) => ({ ...s, filters: { ...s.filters, status } }))
}

function matchFilters(task: TTask, filters: TTaskFilters) {
  if (filters.status !== 'all' && task.status !== filters.status) return false
  if (filters.assigneeId && !task.assignees?.some((a) => a.id === filters.assigneeId)) return false
  if (!filters.search) return true
  const needle = filters.search.toLowerCase()
  return (
    task.title.toLowerCase().includes(needle) ||
    task.description?.toLowerCase().includes(needle) === true ||
    task.tags?.some((t) => t.toLowerCase().includes(needle)) === true
  )
}

export function useTasks(store: Store<TTaskBoardState>) {
  return useStore(store, (s) => s.tasks.filter((t) => matchFilters(t, s.filters)))
}

export function useTaskCounts(store: Store<TTaskBoardState>) {
  return useStore(store, (s) => {
    const counts: Record<TStatus, number> = {
      [EStatus.Backlog]: 0,
      [EStatus.Todo]: 0,
      [EStatus.InProgress]: 0,
      [EStatus.Review]: 0,
      [EStatus.Done]: 0,
    }
    for (const t of s.tasks) counts[t.status] += 1
    return counts
  })
}

export function useFilters(store: Store<TTaskBoardState>) {
  return useStore(store, (s) => s.filters)
}
