import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './progress'

const meta: Meta<typeof Progress> = {
  title: 'Primitives/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: { value: 64, tone: 'primary' },
  argTypes: {
    tone: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  decorators: [(Story) => <div className='w-80'><Story /></div>],
}
export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {}

export const Tones: Story = {
  render: (args) => (
    <div className='flex w-80 flex-col gap-3'>
      <Progress {...args} tone='primary' />
      <Progress {...args} tone='success' />
      <Progress {...args} tone='warning' />
      <Progress {...args} tone='danger' />
      <Progress {...args} tone='info' />
    </div>
  ),
}
