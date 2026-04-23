import type { Meta, StoryObj } from '@storybook/react-vite'
import { TaskCard } from './task-card'
import { TaskList } from './task-list'
import { fxTasks } from '@/stories/fixtures'

const meta: Meta<typeof TaskCard> = {
  title: 'Dashboard/TaskCard',
  component: TaskCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof TaskCard>

export const Single: Story = {
  args: { task: fxTasks[0] },
  decorators: [(Story) => <div className='w-[420px]'><Story /></div>],
}

export const List: Story = {
  render: () => (
    <div className='w-[480px]'>
      <TaskList tasks={fxTasks} />
    </div>
  ),
}
