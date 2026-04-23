import { forwardRef } from 'react'
import { CalendarDays, CheckCircle2, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { AvatarGroup } from '@/components/ui/avatar-group'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import type { TProject } from './types'

export type TProjectCardProps = {
  project: TProject
  className?: string
  onOpen?: (id: string) => void
}

export const ProjectCard = forwardRef<HTMLDivElement, TProjectCardProps>(function ProjectCard(
  { project, className, onOpen },
  ref,
) {
  const completion = Math.round((project.tasksDone / Math.max(1, project.tasksTotal)) * 100)
  return (
    <Card
      ref={ref}
      className={cn('group relative overflow-hidden p-5 transition-all hover:shadow-raised', className)}
    >
      <div
        className='absolute inset-x-0 top-0 h-1'
        style={{ backgroundColor: project.color }}
        aria-hidden='true'
      />
      <div className='flex items-start justify-between gap-3'>
        <button
          type='button'
          onClick={() => onOpen?.(project.id)}
          className='min-w-0 flex-1 text-left focus-visible:outline-none'
        >
          <div className='flex items-center gap-2.5'>
            <span
              className='inline-flex size-9 items-center justify-center rounded-lg text-sm font-semibold'
              style={{
                backgroundColor: `${project.color}20`,
                color: project.color,
              }}
            >
              {project.name.slice(0, 2).toUpperCase()}
            </span>
            <div className='min-w-0'>
              <p className='truncate text-sm font-semibold text-foreground'>{project.name}</p>
              {project.dueDate && (
                <p className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
                  <CalendarDays className='size-3' /> Due {project.dueDate}
                </p>
              )}
            </div>
          </div>
        </button>
        <Button variant='ghost' size='icon-sm' aria-label='Project actions'>
          <MoreHorizontal />
        </Button>
      </div>

      <div className='mt-5 space-y-2'>
        <div className='flex items-center justify-between text-xs'>
          <span className='text-muted-foreground'>Progress</span>
          <span className='font-medium text-foreground'>{completion}%</span>
        </div>
        <Progress value={project.progress ?? completion} tone='primary' />
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <AvatarGroup size='xs' max={4}>
          {project.members.map((m) => (
            <Avatar key={m.id}>
              {m.avatarUrl && <AvatarImage src={m.avatarUrl} alt={m.name} />}
              <AvatarFallback>{m.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarGroup>
        <span className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
          <CheckCircle2 className='size-3.5 text-success' />
          {project.tasksDone}/{project.tasksTotal}
        </span>
      </div>
    </Card>
  )
})
