import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type TDashboardShellProps = HTMLAttributes<HTMLDivElement> & {
  sidebar: ReactNode
  topBar: ReactNode
}

export function DashboardShell({
  sidebar,
  topBar,
  children,
  className,
  ...props
}: TDashboardShellProps) {
  return (
    <div className={cn('flex h-full min-h-[600px] bg-background text-foreground', className)} {...props}>
      {sidebar}
      <div className='flex min-w-0 flex-1 flex-col'>
        {topBar}
        <main className='min-h-0 flex-1 overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  )
}
