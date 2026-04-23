import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-separator'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type TSeparatorProps = ComponentPropsWithoutRef<typeof Root>

export const Separator = forwardRef<HTMLDivElement, TSeparatorProps>(function Separator(
  { className, orientation = 'horizontal', decorative = true, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      orientation={orientation}
      decorative={decorative}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  )
})
