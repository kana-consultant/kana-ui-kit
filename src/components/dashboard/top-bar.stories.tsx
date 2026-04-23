import type { Meta, StoryObj } from '@storybook/react-vite'
import { TopBar } from './top-bar'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

const meta: Meta<typeof TopBar> = {
  title: 'Dashboard/TopBar',
  component: TopBar,
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof TopBar>

export const Default: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Welcome back, Priya. 5 tasks due today.',
    unreadCount: 3,
    user: { name: 'Priya Patel' },
  },
  render: (args) => (
    <div className='h-16'>
      <TopBar
        {...args}
        actions={<Button leadingIcon={<Plus />}>New task</Button>}
      />
    </div>
  ),
}
