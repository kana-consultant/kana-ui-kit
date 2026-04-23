import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium [&_svg]:size-3 [&_svg]:shrink-0',
  {
    variants: {
      tone: {
        neutral: 'bg-muted text-muted-foreground',
        primary: 'bg-primary-soft text-primary',
        accent: 'bg-accent/15 text-accent-foreground dark:text-accent',
        success: 'bg-success/15 text-success',
        warning: 'bg-warning/20 text-warning-foreground dark:text-warning',
        danger: 'bg-danger/15 text-danger',
        info: 'bg-info/15 text-info',
        outline: 'border border-border text-foreground',
      },
      size: {
        sm: 'h-5 text-[10px] px-2',
        md: 'h-6 text-xs',
        lg: 'h-7 text-sm px-3',
      },
    },
    defaultVariants: {
      tone: 'neutral',
      size: 'md',
    },
  },
)

export type TBadgeVariants = VariantProps<typeof badgeVariants>

export type TBadgeProps = HTMLAttributes<HTMLSpanElement> &
  TBadgeVariants & {
    dot?: boolean
  }

export const Badge = forwardRef<HTMLSpanElement, TBadgeProps>(function Badge(
  { className, tone, size, dot, children, ...props },
  ref,
) {
  return (
    <span ref={ref} className={cn(badgeVariants({ tone, size }), className)} {...props}>
      {dot && <span className='size-1.5 rounded-full bg-current opacity-80' />}
      {children}
    </span>
  )
})

export { badgeVariants }
