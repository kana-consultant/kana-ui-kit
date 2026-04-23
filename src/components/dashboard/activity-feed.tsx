import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { TActivity } from './types'

export type TActivityFeedProps = HTMLAttributes<HTMLUListElement> & {
  items: TActivity[]
}

export function ActivityFeed({ items, className, ...props }: TActivityFeedProps) {
  return (
    <ul className={cn('flex flex-col gap-4', className)} {...props}>
      {items.map((a, idx) => (
        <li key={a.id} className='relative flex gap-3'>
          <div className='relative shrink-0'>
            <Avatar size='sm'>
              {a.actor.avatarUrl && <AvatarImage src={a.actor.avatarUrl} alt={a.actor.name} />}
              <AvatarFallback>{a.actor.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            {idx < items.length - 1 && (
              <span className='absolute left-1/2 top-10 h-[calc(100%-8px)] w-px -translate-x-1/2 bg-border' />
            )}
          </div>
          <div className='flex-1 pb-1'>
            <p className='text-sm text-foreground'>
              <span className='font-medium'>{a.actor.name}</span>{' '}
              <span className='text-muted-foreground'>{a.verb}</span>{' '}
              {a.target && <span className='font-medium'>{a.target}</span>}
            </p>
            <p className='mt-0.5 text-xs text-muted-foreground'>{a.at}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
