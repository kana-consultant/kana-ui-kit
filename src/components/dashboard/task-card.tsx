import { forwardRef } from 'react'
import { Calendar, MessageSquare, Paperclip, ListChecks } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AvatarGroup } from '@/components/ui/avatar-group'
import { Checkbox } from '@/components/ui/checkbox'
import { EPriority, EStatus } from './types'
import type { TPriority, TStatus, TTask } from './types'

export type TTaskCardProps = {
  task: TTask
  onToggle?: (id: string, next: boolean) => void
  className?: string
}

const priorityTone: Record<TPriority, 'neutral' | 'info' | 'warning' | 'danger'> = {
  [EPriority.Low]: 'neutral',
  [EPriority.Medium]: 'info',
  [EPriority.High]: 'warning',
  [EPriority.Urgent]: 'danger',
}

const statusLabel: Record<TStatus, string> = {
  [EStatus.Backlog]: 'Backlog',
  [EStatus.Todo]: 'To do',
  [EStatus.InProgress]: 'In progress',
  [EStatus.Review]: 'In review',
  [EStatus.Done]: 'Done',
}

export const TaskCard = forwardRef<HTMLDivElement, TTaskCardProps>(function TaskCard(
  { task, onToggle, className },
  ref,
) {
  const done = task.status === EStatus.Done
  return (
    <Card ref={ref} className={cn('p-4 transition-all hover:shadow-raised', className)}>
      <div className='flex items-start gap-3'>
        <Checkbox
          checked={done}
          onCheckedChange={(v) => onToggle?.(task.id, v === true)}
          className='mt-0.5'
          aria-label='Mark as complete'
        />
        <div className='min-w-0 flex-1 space-y-2'>
          <div className='flex items-start justify-between gap-3'>
            <div className='min-w-0 flex-1'>
              <p
                className={cn(
                  'truncate text-sm font-medium text-foreground',
                  done && 'text-muted-foreground line-through',
                )}
              >
                {task.title}
              </p>
              {task.projectName && (
                <p className='mt-0.5 text-xs text-muted-foreground'>{task.projectName}</p>
              )}
            </div>
            <Badge tone={priorityTone[task.priority]} size='sm' dot>
              {task.priority}
            </Badge>
          </div>
          {task.description && (
            <p className='line-clamp-2 text-xs text-muted-foreground'>{task.description}</p>
          )}
          {task.tags && task.tags.length > 0 && (
            <div className='flex flex-wrap gap-1.5'>
              {task.tags.map((t) => (
                <Badge key={t} tone='outline' size='sm'>
                  {t}
                </Badge>
              ))}
            </div>
          )}
          <div className='flex items-center justify-between gap-3'>
            <div className='flex items-center gap-3 text-xs text-muted-foreground'>
              {task.dueDate && (
                <span className='inline-flex items-center gap-1'>
                  <Calendar className='size-3.5' /> {task.dueDate}
                </span>
              )}
              {task.subtasks && (
                <span className='inline-flex items-center gap-1'>
                  <ListChecks className='size-3.5' /> {task.subtasks.done}/{task.subtasks.total}
                </span>
              )}
              {task.comments !== undefined && task.comments > 0 && (
                <span className='inline-flex items-center gap-1'>
                  <MessageSquare className='size-3.5' /> {task.comments}
                </span>
              )}
              {task.attachments !== undefined && task.attachments > 0 && (
                <span className='inline-flex items-center gap-1'>
                  <Paperclip className='size-3.5' /> {task.attachments}
                </span>
              )}
              <span className='inline-flex'>
                <Badge tone='neutral' size='sm'>
                  {statusLabel[task.status]}
                </Badge>
              </span>
            </div>
            {task.assignees && task.assignees.length > 0 && (
              <AvatarGroup size='xs' max={3}>
                {task.assignees.map((m) => (
                  <Avatar key={m.id}>
                    {m.avatarUrl && <AvatarImage src={m.avatarUrl} alt={m.name} />}
                    <AvatarFallback>{m.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
})
