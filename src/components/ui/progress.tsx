import { forwardRef } from 'react'
import { Root, Indicator } from '@radix-ui/react-progress'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type TProgressTone = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export type TProgressProps = ComponentPropsWithoutRef<typeof Root> & {
  tone?: TProgressTone
  indicatorClassName?: string
}

const toneMap: Record<TProgressTone, string> = {
  primary: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  info: 'bg-info',
}

export const Progress = forwardRef<HTMLDivElement, TProgressProps>(function Progress(
  { className, tone = 'primary', value, indicatorClassName, ...props },
  ref,
) {
  const isIndeterminate = value === null || value === undefined
  const pct = isIndeterminate ? 0 : Math.min(100, Math.max(0, value))
  return (
    <Root
      ref={ref}
      value={value}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-muted', className)}
      {...props}
    >
      <Indicator
        className={cn('h-full rounded-full transition-all duration-500 ease-out', toneMap[tone], indicatorClassName)}
        style={{ width: `${pct}%` }}
      />
    </Root>
  )
})
