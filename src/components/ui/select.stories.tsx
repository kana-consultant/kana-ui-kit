import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

const meta: Meta<typeof Select> = {
  title: 'Primitives/Select',
  component: Select,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <div className='w-60'>
      <Select defaultValue='medium'>
        <SelectTrigger>
          <SelectValue placeholder='Pick priority' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='low'>Low</SelectItem>
          <SelectItem value='medium'>Medium</SelectItem>
          <SelectItem value='high'>High</SelectItem>
          <SelectItem value='urgent'>Urgent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}
