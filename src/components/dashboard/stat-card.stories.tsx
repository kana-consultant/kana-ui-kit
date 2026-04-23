import type { Meta, StoryObj } from '@storybook/react-vite'
import { StatCard } from './stat-card'
import { fxStats } from '@/stories/fixtures'

const meta: Meta<typeof StatCard> = {
  title: 'Dashboard/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof StatCard>

export const Single: Story = {
  args: fxStats[0],
  decorators: [(Story) => <div className='w-72'><Story /></div>],
}

export const Grid: Story = {
  render: () => (
    <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {fxStats.map((s) => (
        <StatCard key={s.id} {...s} />
      ))}
    </div>
  ),
}
