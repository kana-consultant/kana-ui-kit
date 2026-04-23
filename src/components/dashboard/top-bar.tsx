import type { HTMLAttributes, ReactNode } from 'react'
import { Bell, Search } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ThemeToggle } from './theme-toggle'

export type TTopBarProps = HTMLAttributes<HTMLElement> & {
  title?: string
  subtitle?: string
  searchPlaceholder?: string
  unreadCount?: number
  user?: { name: string; avatarUrl?: string; email?: string }
  actions?: ReactNode
}

export function TopBar({
  title = 'Dashboard',
  subtitle,
  searchPlaceholder = 'Search tasks, projects, people...',
  unreadCount,
  user,
  actions,
  className,
  ...props
}: TTopBarProps) {
  const initials = user?.name
    ?.split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <header
      className={cn(
        'flex h-16 items-center justify-between gap-4 border-b border-border bg-surface/80 px-6 backdrop-blur',
        className,
      )}
      {...props}
    >
      <div className='min-w-0'>
        <h1 className='truncate text-lg font-semibold tracking-tight text-foreground'>{title}</h1>
        {subtitle && <p className='truncate text-xs text-muted-foreground'>{subtitle}</p>}
      </div>
      <div className='flex items-center gap-3'>
        <div className='hidden w-72 md:block'>
          <Input
            placeholder={searchPlaceholder}
            leadingIcon={<Search />}
            trailingIcon={<Kbd>⌘K</Kbd>}
          />
        </div>
        {actions}
        <ThemeToggle />
        <Button variant='ghost' size='icon' aria-label='Notifications' className='relative'>
          <Bell />
          {unreadCount !== undefined && unreadCount > 0 && (
            <span className='absolute right-1.5 top-1.5 inline-flex size-2 rounded-full bg-danger ring-2 ring-surface' />
          )}
        </Button>
        {user && (
          <Avatar size='sm'>
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} alt={user.name} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  )
}
