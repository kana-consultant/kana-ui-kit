import { useState } from 'react'
import { Sidebar, Avatar, AvatarFallback, Button } from '@kana-consultant/ui-kit'
import { LogOut } from 'lucide-react'
import { nav, navSecondary } from './fixtures'

export function SidebarDemo() {
  const [active, setActive] = useState('dashboard')
  return (
    <div className='h-[560px] overflow-hidden rounded-xl border border-border bg-background'>
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
              <p className='truncate text-xs text-muted-foreground'>Engineering Lead</p>
            </div>
            <Button variant='ghost' size='icon-sm' aria-label='Sign out'>
              <LogOut />
            </Button>
          </div>
        }
      />
    </div>
  )
}
