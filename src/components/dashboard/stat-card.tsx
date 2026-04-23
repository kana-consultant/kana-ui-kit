import { forwardRef } from 'react'
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Card } from '@/components/ui/card'
import type { TStat } from './types'

export type TStatCardProps = TStat & {
  className?: string
}

const toneRingMap = {
  primary: 'bg-primary-soft text-primary',
  accent: 'bg-accent/15 text-accent-foreground dark:text-accent',
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/20 text-warning-foreground dark:text-warning',
  info: 'bg-info/15 text-info',
  neutral: 'bg-muted text-muted-foreground',
} as const

export const StatCard = forwardRef<HTMLDivElement, TStatCardProps>(function StatCard(
  { label, value, icon: Icon, tone = 'primary', delta, hint, className },
  ref,
) {
  const deltaIcon =
    delta?.direction === 'up' ? ArrowUpRight : delta?.direction === 'down' ? ArrowDownRight : Minus
  const DeltaIcon = deltaIcon
  const deltaTone =
    delta?.direction === 'up'
      ? 'text-success'
      : delta?.direction === 'down'
        ? 'text-danger'
        : 'text-muted-foreground'

  return (
    <Card ref={ref} className={cn('p-5', className)}>
      <div className='flex items-start justify-between gap-4'>
        <div className='space-y-1'>
          <p className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>{label}</p>
          <p className='text-3xl font-semibold tracking-tight text-foreground'>{value}</p>
          {hint && <p className='text-xs text-muted-foreground'>{hint}</p>}
        </div>
        <span
          className={cn(
            'inline-flex size-10 items-center justify-center rounded-xl [&_svg]:size-5',
            toneRingMap[tone],
          )}
        >
          <Icon />
        </span>
      </div>
      {delta && (
        <div className={cn('mt-3 inline-flex items-center gap-1 text-xs font-medium', deltaTone)}>
          <DeltaIcon className='size-3.5' />
          <span>{delta.value > 0 ? `+${delta.value}` : delta.value}%</span>
          <span className='text-muted-foreground'>vs last week</span>
        </div>
      )}
    </Card>
  )
})
