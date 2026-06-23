import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Dialog, DialogContent } from './dialog'
import type { TDialogContentProps } from './dialog'

export type TCommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>

export const Command = forwardRef<HTMLDivElement, TCommandProps>(function Command(
  { className, ...props },
  ref,
) {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-xl bg-surface text-foreground',
        className,
      )}
      {...props}
    />
  )
})

export type TCommandDialogProps = ComponentPropsWithoutRef<typeof Dialog> & {
  contentProps?: TDialogContentProps
}

export function CommandDialog({ children, contentProps, ...props }: TCommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent
        {...contentProps}
        className={cn('overflow-hidden p-0', contentProps?.className)}
      >
        <Command className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

export type TCommandInputProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Input>

export const CommandInput = forwardRef<HTMLInputElement, TCommandInputProps>(function CommandInput(
  { className, ...props },
  ref,
) {
  return (
    <div className='flex items-center gap-2 border-b border-border px-3' cmdk-input-wrapper=''>
      <Search className='size-4 shrink-0 text-muted-foreground' />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
})

export type TCommandListProps = ComponentPropsWithoutRef<typeof CommandPrimitive.List>

export const CommandList = forwardRef<HTMLDivElement, TCommandListProps>(function CommandList(
  { className, ...props },
  ref,
) {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn('max-h-[320px] overflow-y-auto overflow-x-hidden p-1', className)}
      {...props}
    />
  )
})

export type TCommandEmptyProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>

export const CommandEmpty = forwardRef<HTMLDivElement, TCommandEmptyProps>(function CommandEmpty(
  { className, ...props },
  ref,
) {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className={cn('py-6 text-center text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})

export type TCommandGroupProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Group>

export const CommandGroup = forwardRef<HTMLDivElement, TCommandGroupProps>(function CommandGroup(
  { className, ...props },
  ref,
) {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground',
        '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
})

export type TCommandSeparatorProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>

export const CommandSeparator = forwardRef<HTMLDivElement, TCommandSeparatorProps>(
  function CommandSeparator({ className, ...props }, ref) {
    return (
      <CommandPrimitive.Separator
        ref={ref}
        className={cn('-mx-1 h-px bg-border', className)}
        {...props}
      />
    )
  },
)

export type TCommandItemProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Item>

export const CommandItem = forwardRef<HTMLDivElement, TCommandItemProps>(function CommandItem(
  { className, ...props },
  ref,
) {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none',
        'data-[selected=true]:bg-muted data-[selected=true]:text-foreground',
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        '[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
})

export function CommandShortcut({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
}
