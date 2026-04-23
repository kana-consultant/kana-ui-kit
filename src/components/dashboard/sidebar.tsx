import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Badge } from '@/components/ui/badge'
import type { TNavItem } from './types'

export type TSidebarProps = HTMLAttributes<HTMLElement> & {
  logo?: ReactNode
  brandName?: string
  items: TNavItem[]
  secondaryItems?: TNavItem[]
  activeId?: string
  onNavigate?: (id: string) => void
  footer?: ReactNode
}

export function Sidebar({
  logo,
  brandName = 'Kana',
  items,
  secondaryItems,
  activeId,
  onNavigate,
  footer,
  className,
  ...props
}: TSidebarProps) {
  return (
    <aside
      className={cn(
        'flex h-full w-[260px] shrink-0 flex-col border-r border-border bg-surface',
        className,
      )}
      {...props}
    >
      <div className='flex items-center gap-2.5 px-5 py-5'>
        <span className='inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft'>
          {logo ?? <span className='text-sm font-bold'>K</span>}
        </span>
        <div className='flex flex-col'>
          <span className='text-sm font-semibold tracking-tight text-foreground'>{brandName}</span>
          <span className='text-[11px] text-muted-foreground'>Workspace</span>
        </div>
      </div>
      <nav className='flex-1 overflow-y-auto px-3 py-2'>
        <SidebarGroup label='Main'>
          {items.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
              active={item.id === activeId}
              onNavigate={onNavigate}
            />
          ))}
        </SidebarGroup>
        {secondaryItems && (
          <SidebarGroup label='Workspace'>
            {secondaryItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                active={item.id === activeId}
                onNavigate={onNavigate}
              />
            ))}
          </SidebarGroup>
        )}
      </nav>
      {footer && <div className='border-t border-border p-4'>{footer}</div>}
    </aside>
  )
}

type TSidebarGroupProps = {
  label: string
  children: ReactNode
}

function SidebarGroup({ label, children }: TSidebarGroupProps) {
  return (
    <div className='mb-4'>
      <p className='mb-1 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground'>
        {label}
      </p>
      <ul className='flex flex-col gap-0.5'>{children}</ul>
    </div>
  )
}

type TSidebarItemProps = {
  item: TNavItem
  active?: boolean
  onNavigate?: (id: string) => void
}

function SidebarItem({ item, active, onNavigate }: TSidebarItemProps) {
  const Icon = item.icon
  return (
    <li>
      <button
        type='button'
        onClick={() => onNavigate?.(item.id)}
        className={cn(
          'group flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
          active
            ? 'bg-primary text-primary-foreground shadow-soft'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        )}
      >
        <Icon className='size-4 shrink-0' />
        <span className='flex-1 text-left'>{item.label}</span>
        {item.badge !== undefined && (
          <Badge tone={active ? 'outline' : 'primary'} size='sm' className={active ? 'border-white/40 text-primary-foreground' : ''}>
            {item.badge}
          </Badge>
        )}
      </button>
    </li>
  )
}
