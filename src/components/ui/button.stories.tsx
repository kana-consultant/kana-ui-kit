import type { Meta, StoryObj } from '@storybook/react-vite'
import { Plus, Sparkles, Trash2 } from 'lucide-react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Create task',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'soft', 'ghost', 'outline', 'destructive', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'icon', 'icon-sm'] },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div className='flex flex-wrap gap-3'>
      <Button {...args} variant='primary'>Primary</Button>
      <Button {...args} variant='secondary'>Secondary</Button>
      <Button {...args} variant='soft'>Soft</Button>
      <Button {...args} variant='outline'>Outline</Button>
      <Button {...args} variant='ghost'>Ghost</Button>
      <Button {...args} variant='destructive'>Destructive</Button>
      <Button {...args} variant='link'>Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className='flex items-center gap-3'>
      <Button {...args} size='sm'>Small</Button>
      <Button {...args} size='md'>Medium</Button>
      <Button {...args} size='lg'>Large</Button>
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className='flex flex-wrap gap-3'>
      <Button {...args} leadingIcon={<Plus />}>New task</Button>
      <Button {...args} variant='secondary' trailingIcon={<Sparkles />}>AI actions</Button>
      <Button {...args} variant='destructive' leadingIcon={<Trash2 />}>Delete</Button>
      <Button {...args} size='icon' aria-label='Add'>
        <Plus />
      </Button>
    </div>
  ),
}

export const Loading: Story = {
  args: { loading: true, children: 'Saving...' },
}
