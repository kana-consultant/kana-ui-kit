import { forwardRef } from 'react'
import {
  Root,
  Trigger,
  Portal,
  Content,
  Anchor,
  Close,
  Arrow,
} from '@radix-ui/react-popover'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export const Popover = Root
export const PopoverTrigger = Trigger
export const PopoverAnchor = Anchor
export const PopoverClose = Close
export const PopoverArrow = Arrow

export type TPopoverContentProps = ComponentPropsWithoutRef<typeof Content>

export const PopoverContent = forwardRef<HTMLDivElement, TPopoverContentProps>(
  function PopoverContent(
    { className, align = 'start', sideOffset = 6, collisionPadding = 8, ...props },
    ref,
  ) {
    return (
      <Portal>
        <Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          className={cn(
            'z-50 rounded-xl border border-border bg-surface p-4 text-foreground shadow-overlay outline-none',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1',
            'data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
            className,
          )}
          {...props}
        />
      </Portal>
    )
  },
)
