import { useState } from 'react'
import {
  DashboardShell,
  Sidebar,
  TopBar,
  StatCard,
  Button,
  Avatar,
  AvatarFallback,
} from '@kana-consultant/ui-kit'
import { Plus } from 'lucide-react'
import { nav, navSecondary, stats } from './fixtures'

export function DashboardShellDemo() {
  const [active, setActive] = useState('dashboard')
  return (
    <div className='h-[560px] overflow-hidden rounded-xl border border-border'>
      <DashboardShell
        sidebar={
          <Sidebar
            items={nav}
            secondaryItems={navSecondary}
            activeId={active}
            onNavigate={setActive}
            footer={
              <div className='flex items-center gap-3'>
                <Avatar size='sm'><AvatarFallback>PP</AvatarFallback></Avatar>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-medium'>Priya Patel</p>
                  <p className='truncate text-xs text-muted-foreground'>Eng Lead</p>
                </div>
              </div>
            }
          />
        }
        topBar={
          <TopBar
            title='Dashboard'
            subtitle='All systems green. 5 tasks due today.'
            unreadCount={3}
            user={{ name: 'Priya Patel' }}
            actions={<Button leadingIcon={<Plus />}>New task</Button>}
          />
        }
      >
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((s) => (
            <StatCard key={s.id} {...s} />
          ))}
        </div>
      </DashboardShell>
    </div>
  )
}
