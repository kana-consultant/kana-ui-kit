import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Switch } from './switch'
import { Label } from './label'

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  component: Switch,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render: () => {
    const [on, setOn] = useState(true)
    return (
      <div className='flex items-center gap-2'>
        <Switch id='s1' checked={on} onCheckedChange={setOn} />
        <Label htmlFor='s1'>Email notifications</Label>
      </div>
    )
  },
}
