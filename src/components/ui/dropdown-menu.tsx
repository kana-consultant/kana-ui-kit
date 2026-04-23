import { forwardRef } from 'react'
import {
  Root,
  Trigger,
  Group,
  Portal,
  Sub,
  RadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu'
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { cn } from '@/lib/cn'

export const DropdownMenu = Root
export const DropdownMenuTrigger = Trigger
export const DropdownMenuGroup = Group
export const DropdownMenuPortal = Portal
export const DropdownMenuSub = Sub
export const DropdownMenuRadioGroup = RadioGroup

const itemBase =
  'relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2.5 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-muted data-[highlighted]:text-foreground'

export type TDropdownMenuContentProps = ComponentPropsWithoutRef<typeof Content>

export const DropdownMenuContent = forwardRef<HTMLDivElement, TDropdownMenuContentProps>(
  function DropdownMenuContent({ className, sideOffset = 6, ...props }, ref) {
    return (
      <Portal>
        <Content
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            'z-50 min-w-[10rem] overflow-hidden rounded-lg border border-border bg-surface p-1 text-sm shadow-overlay',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            className,
          )}
          {...props}
        />
      </Portal>
    )
  },
)

export type TDropdownMenuItemProps = ComponentPropsWithoutRef<typeof Item> & { inset?: boolean }

export const DropdownMenuItem = forwardRef<HTMLDivElement, TDropdownMenuItemProps>(
  function DropdownMenuItem({ className, inset, ...props }, ref) {
    return <Item ref={ref} className={cn(itemBase, inset && 'pl-8', className)} {...props} />
  },
)

export type TDropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<typeof CheckboxItem>

export const DropdownMenuCheckboxItem = forwardRef<HTMLDivElement, TDropdownMenuCheckboxItemProps>(
  function DropdownMenuCheckboxItem({ className, children, checked, ...props }, ref) {
    return (
      <CheckboxItem
        ref={ref}
        checked={checked}
        className={cn(itemBase, 'pl-8', className)}
        {...props}
      >
        <span className='absolute left-2 flex size-4 items-center justify-center'>
          <ItemIndicator>
            <Check className='size-3.5' />
          </ItemIndicator>
        </span>
        {children}
      </CheckboxItem>
    )
  },
)

export type TDropdownMenuRadioItemProps = ComponentPropsWithoutRef<typeof RadioItem>

export const DropdownMenuRadioItem = forwardRef<HTMLDivElement, TDropdownMenuRadioItemProps>(
  function DropdownMenuRadioItem({ className, children, ...props }, ref) {
    return (
      <RadioItem ref={ref} className={cn(itemBase, 'pl-8', className)} {...props}>
        <span className='absolute left-2 flex size-4 items-center justify-center'>
          <ItemIndicator>
            <Circle className='size-2 fill-current' />
          </ItemIndicator>
        </span>
        {children}
      </RadioItem>
    )
  },
)

export type TDropdownMenuLabelProps = ComponentPropsWithoutRef<typeof Label> & { inset?: boolean }

export const DropdownMenuLabel = forwardRef<HTMLDivElement, TDropdownMenuLabelProps>(
  function DropdownMenuLabel({ className, inset, ...props }, ref) {
    return (
      <Label
        ref={ref}
        className={cn('px-2.5 py-1.5 text-xs font-semibold text-muted-foreground', inset && 'pl-8', className)}
        {...props}
      />
    )
  },
)

export type TDropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof Separator>

export const DropdownMenuSeparator = forwardRef<HTMLDivElement, TDropdownMenuSeparatorProps>(
  function DropdownMenuSeparator({ className, ...props }, ref) {
    return <Separator ref={ref} className={cn('my-1 h-px bg-border', className)} {...props} />
  },
)

export type TDropdownMenuShortcutProps = HTMLAttributes<HTMLSpanElement>

export function DropdownMenuShortcut({ className, ...props }: TDropdownMenuShortcutProps) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
}

export type TDropdownMenuSubTriggerProps = ComponentPropsWithoutRef<typeof SubTrigger> & { inset?: boolean }

export const DropdownMenuSubTrigger = forwardRef<HTMLDivElement, TDropdownMenuSubTriggerProps>(
  function DropdownMenuSubTrigger({ className, inset, children, ...props }, ref) {
    return (
      <SubTrigger ref={ref} className={cn(itemBase, 'data-[state=open]:bg-muted', inset && 'pl-8', className)} {...props}>
        {children}
        <ChevronRight className='ml-auto size-4' />
      </SubTrigger>
    )
  },
)

export type TDropdownMenuSubContentProps = ComponentPropsWithoutRef<typeof SubContent>

export const DropdownMenuSubContent = forwardRef<HTMLDivElement, TDropdownMenuSubContentProps>(
  function DropdownMenuSubContent({ className, ...props }, ref) {
    return (
      <SubContent
        ref={ref}
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-surface p-1 text-sm shadow-overlay',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          className,
        )}
        {...props}
      />
    )
  },
)
