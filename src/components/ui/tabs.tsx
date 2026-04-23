import { forwardRef } from 'react'
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export const Tabs = Root

export type TTabsListProps = ComponentPropsWithoutRef<typeof List>

export const TabsList = forwardRef<HTMLDivElement, TTabsListProps>(function TabsList(
  { className, ...props },
  ref,
) {
  return (
    <List
      ref={ref}
      className={cn(
        'inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-muted p-1 text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
})

export type TTabsTriggerProps = ComponentPropsWithoutRef<typeof Trigger>

export const TabsTrigger = forwardRef<HTMLButtonElement, TTabsTriggerProps>(function TabsTrigger(
  { className, ...props },
  ref,
) {
  return (
    <Trigger
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-surface data-[state=active]:text-foreground data-[state=active]:shadow-soft',
        className,
      )}
      {...props}
    />
  )
})

export type TTabsContentProps = ComponentPropsWithoutRef<typeof Content>

export const TabsContent = forwardRef<HTMLDivElement, TTabsContentProps>(function TabsContent(
  { className, ...props },
  ref,
) {
  return (
    <Content
      ref={ref}
      className={cn('mt-3 focus-visible:outline-none', className)}
      {...props}
    />
  )
})
