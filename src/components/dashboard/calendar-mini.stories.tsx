import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { CalendarMini } from './calendar-mini'

const meta: Meta<typeof CalendarMini> = {
  title: 'Dashboard/CalendarMini',
  component: CalendarMini,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof CalendarMini>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date())
    const marks = [new Date(), new Date(Date.now() + 86400000 * 2), new Date(Date.now() + 86400000 * 5)]
    return (
      <div className='w-80 rounded-xl border border-border bg-surface p-5'>
        <CalendarMini selected={date} onSelect={setDate} markedDates={marks} />
      </div>
    )
  },
}
