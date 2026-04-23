import type { Meta, StoryObj } from '@storybook/react-vite'
import { KanbanColumn } from './kanban-column'
import { EStatus } from './types'
import { fxTasks } from '@/stories/fixtures'

const meta: Meta<typeof KanbanColumn> = {
  title: 'Dashboard/KanbanColumn',
  component: KanbanColumn,
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof KanbanColumn>

export const Board: Story = {
  render: () => {
    const columns = [
      { title: 'To do', status: EStatus.Todo, color: '#94a3b8' },
      { title: 'In progress', status: EStatus.InProgress, color: '#7c3aed' },
      { title: 'In review', status: EStatus.Review, color: '#f59e0b' },
      { title: 'Done', status: EStatus.Done, color: '#10b981' },
    ]
    return (
      <div className='flex gap-4 overflow-x-auto pb-2'>
        {columns.map((c) => (
          <KanbanColumn
            key={c.status}
            title={c.title}
            color={c.color}
            status={c.status}
            tasks={fxTasks.filter((t) => t.status === c.status)}
          />
        ))}
      </div>
    )
  },
}
