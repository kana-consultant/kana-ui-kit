import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type TKbdProps = HTMLAttributes<HTMLElement>

export function Kbd({ className, children, ...props }: TKbdProps) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-semibold text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </kbd>
  )
}
