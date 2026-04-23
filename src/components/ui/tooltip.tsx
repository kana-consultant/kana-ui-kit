import { forwardRef } from 'react'
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
} from '@radix-ui/react-tooltip'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export const TooltipProvider = Provider
export const Tooltip = Root
export const TooltipTrigger = Trigger

export type TTooltipContentProps = ComponentPropsWithoutRef<typeof Content>

export const TooltipContent = forwardRef<HTMLDivElement, TTooltipContentProps>(
  function TooltipContent({ className, sideOffset = 6, ...props }, ref) {
    return (
      <Portal>
        <Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            'z-50 overflow-hidden rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground shadow-overlay',
            'data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95',
            className,
          )}
          {...props}
        />
      </Portal>
    )
  },
)
