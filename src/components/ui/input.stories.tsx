import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mail, Search } from 'lucide-react'
import { Input } from './input'
import { Label } from './label'

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter value...',
    sizeVariant: 'md',
  },
  argTypes: {
    sizeVariant: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => (
    <div className='w-72 space-y-1.5'>
      <Label htmlFor='f1'>Email</Label>
      <Input id='f1' {...args} />
    </div>
  ),
}

export const WithIcons: Story = {
  render: (args) => (
    <div className='w-72 space-y-3'>
      <Input {...args} leadingIcon={<Search />} placeholder='Search tasks...' />
      <Input {...args} leadingIcon={<Mail />} placeholder='you@company.com' />
    </div>
  ),
}

export const Invalid: Story = {
  args: { invalid: true, defaultValue: 'not-an-email', placeholder: 'Email' },
  render: (args) => (
    <div className='w-72 space-y-1.5'>
      <Label htmlFor='f2' required>
        Email
      </Label>
      <Input id='f2' {...args} />
      <p className='text-xs text-danger'>Please enter a valid email.</p>
    </div>
  ),
}
