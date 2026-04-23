import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Checkbox } from './checkbox'
import { Label } from './label'

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>(false)
    return (
      <div className='flex items-center gap-2'>
        <Checkbox id='c1' checked={checked} onCheckedChange={setChecked} />
        <Label htmlFor='c1'>Notify me</Label>
      </div>
    )
  },
}

export const Indeterminate: Story = {
  render: () => (
    <div className='flex items-center gap-2'>
      <Checkbox id='c2' checked='indeterminate' />
      <Label htmlFor='c2'>Some selected</Label>
    </div>
  ),
}
