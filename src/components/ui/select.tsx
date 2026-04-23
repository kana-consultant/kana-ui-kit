import { forwardRef } from 'react'
import {
  Root,
  Group,
  Value,
  Trigger,
  Content,
  Label,
  Item,
  ItemText,
  ItemIndicator,
  Portal,
  Icon,
  Separator,
  ScrollUpButton,
  ScrollDownButton,
  Viewport,
} from '@radix-ui/react-select'
import type { ComponentPropsWithoutRef } from 'react'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/cn'

export const Select = Root
export const SelectGroup = Group
export const SelectValue = Value

export type TSelectTriggerProps = ComponentPropsWithoutRef<typeof Trigger>

export const SelectTrigger = forwardRef<HTMLButtonElement, TSelectTriggerProps>(function SelectTrigger(
  { className, children, ...props },
  ref,
) {
  return (
    <Trigger
      ref={ref}
      className={cn(
        'flex h-9 w-full items-center justify-between gap-2 rounded-md border border-border bg-surface px-3 text-sm text-foreground shadow-soft transition-colors',
        'placeholder:text-muted-foreground',
        'focus:border-primary focus:ring-2 focus:ring-ring/30 focus:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[placeholder]:text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
      <Icon asChild>
        <ChevronDown className='size-4 opacity-70' />
      </Icon>
    </Trigger>
  )
})

export type TSelectContentProps = ComponentPropsWithoutRef<typeof Content>

export const SelectContent = forwardRef<HTMLDivElement, TSelectContentProps>(function SelectContent(
  { className, children, position = 'popper', ...props },
  ref,
) {
  return (
    <Portal>
      <Content
        ref={ref}
        position={position}
        className={cn(
          'relative z-50 max-h-[min(20rem,var(--radix-select-content-available-height))] min-w-[8rem] overflow-hidden rounded-lg border border-border bg-surface text-sm shadow-overlay',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
          position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
          className,
        )}
        {...props}
      >
        <ScrollUpButton className='flex h-6 items-center justify-center bg-surface text-muted-foreground'>
          <ChevronUp className='size-3.5' />
        </ScrollUpButton>
        <Viewport
          className={cn(
            'p-1',
            position === 'popper' && 'w-full min-w-[var(--radix-select-trigger-width)]',
          )}
        >
          {children}
        </Viewport>
        <ScrollDownButton className='flex h-6 items-center justify-center bg-surface text-muted-foreground'>
          <ChevronDown className='size-3.5' />
        </ScrollDownButton>
      </Content>
    </Portal>
  )
})

export type TSelectLabelProps = ComponentPropsWithoutRef<typeof Label>

export const SelectLabel = forwardRef<HTMLDivElement, TSelectLabelProps>(function SelectLabel(
  { className, ...props },
  ref,
) {
  return <Label ref={ref} className={cn('px-2 py-1.5 text-xs font-semibold text-muted-foreground', className)} {...props} />
})

export type TSelectItemProps = ComponentPropsWithoutRef<typeof Item>

export const SelectItem = forwardRef<HTMLDivElement, TSelectItemProps>(function SelectItem(
  { className, children, ...props },
  ref,
) {
  return (
    <Item
      ref={ref}
      className={cn(
        'relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none transition-colors',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'data-[highlighted]:bg-muted data-[highlighted]:text-foreground',
        className,
      )}
      {...props}
    >
      <span className='absolute left-2 flex size-4 items-center justify-center'>
        <ItemIndicator>
          <Check className='size-3.5' />
        </ItemIndicator>
      </span>
      <ItemText>{children}</ItemText>
    </Item>
  )
})

export type TSelectSeparatorProps = ComponentPropsWithoutRef<typeof Separator>

export const SelectSeparator = forwardRef<HTMLDivElement, TSelectSeparatorProps>(function SelectSeparator(
  { className, ...props },
  ref,
) {
  return <Separator ref={ref} className={cn('my-1 h-px bg-border', className)} {...props} />
})
