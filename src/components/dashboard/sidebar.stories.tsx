import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { fxNav, fxNavSecondary } from '@/stories/fixtures'

const meta: Meta<typeof Sidebar> = {
  title: 'Dashboard/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard')
    return (
      <div className='h-[720px]'>
        <Sidebar
          items={fxNav}
          secondaryItems={fxNavSecondary}
          activeId={active}
          onNavigate={setActive}
          footer={
            <div className='flex items-center gap-3'>
              <Avatar size='sm'>
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-medium'>Priya Patel</p>
                <p className='truncate text-xs text-muted-foreground'>Engineering Lead</p>
              </div>
              <Button variant='ghost' size='icon-sm' aria-label='Sign out' />
            </div>
          }
        />
      </div>
    )
  },
}
