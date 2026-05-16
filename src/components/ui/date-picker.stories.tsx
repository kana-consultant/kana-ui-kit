import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DatePicker, DateRangePicker, type TDateRange } from './date-picker'
import { Label } from './label'

const meta: Meta<typeof DatePicker> = {
  title: 'Primitives/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className='flex min-h-[720px] w-full justify-center bg-background p-8'>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof DatePicker>

export const Single: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 24))
    return (
      <div className='flex w-[320px] flex-col gap-4'>
        <div className='flex flex-col gap-1.5'>
          <span className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            Single date
          </span>
          <p className='text-sm text-muted-foreground'>Pick a task deadline.</p>
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label htmlFor='due'>Due date</Label>
          <DatePicker value={date} onValueChange={setDate} placeholder='Select due date' />
        </div>
      </div>
    )
  },
}

export const Empty: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    return (
      <div className='w-[320px]'>
        <Label htmlFor='due'>Due date</Label>
        <div className='mt-1.5'>
          <DatePicker value={date} onValueChange={setDate} placeholder='Pick a date' />
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className='w-[320px]'>
      <Label>Disabled</Label>
      <div className='mt-1.5'>
        <DatePicker value={new Date(2026, 4, 24)} disabled placeholder='Pick a date' />
      </div>
    </div>
  ),
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<TDateRange | undefined>({
      from: new Date(2026, 4, 12),
      to: new Date(2026, 5, 8),
    })
    return (
      <div className='flex w-[640px] flex-col gap-4'>
        <div className='flex flex-col gap-1.5'>
          <span className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
            Date range
          </span>
          <p className='text-sm text-muted-foreground'>Filter reports by period.</p>
        </div>
        <div className='flex flex-col gap-1.5'>
          <Label>Date range</Label>
          <DateRangePicker value={range} onValueChange={setRange} placeholder='Pick a date' />
        </div>
      </div>
    )
  },
}

export const RangeEmpty: Story = {
  render: () => {
    const [range, setRange] = useState<TDateRange | undefined>(undefined)
    return (
      <div className='w-[640px]'>
        <Label>Date range</Label>
        <div className='mt-1.5'>
          <DateRangePicker value={range} onValueChange={setRange} placeholder='Pick a date' />
        </div>
      </div>
    )
  },
}
