import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { children: 'Badge', tone: 'primary', size: 'md' },
  argTypes: {
    tone: {
      control: 'select',
      options: ['neutral', 'primary', 'accent', 'success', 'warning', 'danger', 'info', 'outline'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Tones: Story = {
  render: (args) => (
    <div className='flex flex-wrap gap-2'>
      <Badge {...args} tone='neutral'>Neutral</Badge>
      <Badge {...args} tone='primary'>Primary</Badge>
      <Badge {...args} tone='accent'>Accent</Badge>
      <Badge {...args} tone='success'>Success</Badge>
      <Badge {...args} tone='warning'>Warning</Badge>
      <Badge {...args} tone='danger'>Danger</Badge>
      <Badge {...args} tone='info'>Info</Badge>
      <Badge {...args} tone='outline'>Outline</Badge>
    </div>
  ),
}

export const WithDot: Story = {
  args: { dot: true },
  render: (args) => (
    <div className='flex flex-wrap gap-2'>
      <Badge {...args} tone='success'>Live</Badge>
      <Badge {...args} tone='warning'>Draft</Badge>
      <Badge {...args} tone='danger'>Urgent</Badge>
    </div>
  ),
}
