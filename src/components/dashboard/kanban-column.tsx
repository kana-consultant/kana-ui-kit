import type { HTMLAttributes } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TaskCard } from './task-card'
import type { TStatus, TTask } from './types'

export type TKanbanColumnProps = Omit<HTMLAttributes<HTMLDivElement>, 'onToggle'> & {
  title: string
  status: TStatus
  tasks: TTask[]
  color?: string
  onAdd?: (status: TStatus) => void
  onToggle?: (id: string, next: boolean) => void
}

export function KanbanColumn({
  title,
  status,
  tasks,
  color,
  onAdd,
  onToggle,
  className,
  ...props
}: TKanbanColumnProps) {
  return (
    <section
      className={cn(
        'flex min-w-72 max-w-80 flex-col gap-3 rounded-xl border border-border bg-surface-muted p-3',
        className,
      )}
      {...props}
    >
      <header className='flex items-center justify-between px-1'>
        <div className='flex items-center gap-2'>
          {color && (
            <span
              className='inline-block size-2.5 rounded-full'
              style={{ backgroundColor: color }}
              aria-hidden='true'
            />
          )}
          <h3 className='text-sm font-semibold text-foreground'>{title}</h3>
          <Badge tone='outline' size='sm'>
            {tasks.length}
          </Badge>
        </div>
        <Button
          variant='ghost'
          size='icon-sm'
          aria-label={`Add to ${title}`}
          onClick={() => onAdd?.(status)}
        >
          <Plus />
        </Button>
      </header>
      <div className='flex flex-col gap-2'>
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} onToggle={onToggle} />
        ))}
        {tasks.length === 0 && (
          <div className='rounded-lg border border-dashed border-border bg-transparent p-6 text-center text-xs text-muted-foreground'>
            Drop tasks here
          </div>
        )}
      </div>
    </section>
  )
}
