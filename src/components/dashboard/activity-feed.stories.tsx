import type { Meta, StoryObj } from '@storybook/react-vite'
import { ActivityFeed } from './activity-feed'
import { fxActivity } from '@/stories/fixtures'

const meta: Meta<typeof ActivityFeed> = {
  title: 'Dashboard/ActivityFeed',
  component: ActivityFeed,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof ActivityFeed>

export const Default: Story = {
  args: { items: fxActivity },
  decorators: [(Story) => <div className='w-96 rounded-xl border border-border bg-surface p-5'><Story /></div>],
}
