import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { TaskCard } from './task-card'
import type { TTask } from './types'

export type TTaskListProps = Omit<HTMLAttributes<HTMLDivElement>, 'onToggle'> & {
  tasks: TTask[]
  onToggle?: (id: string, next: boolean) => void
  emptyMessage?: string
}

export function TaskList({
  tasks,
  onToggle,
  emptyMessage = 'No tasks to show',
  className,
  ...props
}: TTaskListProps) {
  if (tasks.length === 0) {
    return (
      <div
        className={cn(
          'flex h-32 items-center justify-center rounded-xl border border-dashed border-border bg-surface-muted text-sm text-muted-foreground',
          className,
        )}
      >
        {emptyMessage}
      </div>
    )
  }
  return (
    <div className={cn('flex flex-col gap-3', className)} {...props}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  )
}
