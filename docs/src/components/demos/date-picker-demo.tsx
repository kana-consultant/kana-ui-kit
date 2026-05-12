import { useState } from 'react'
import {
  DatePicker,
  DateRangePicker,
  Label,
} from '@kana-consultant/ui-kit'
import type { TDateRange } from '@kana-consultant/ui-kit'

export function DatePickerSingleDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 4, 24))
  return (
    <div className='w-[320px]'>
      <Label htmlFor='due'>Due date</Label>
      <div className='mt-1.5'>
        <DatePicker value={date} onValueChange={setDate} placeholder='Select due date' />
      </div>
    </div>
  )
}

export function DatePickerRangeDemo() {
  const [range, setRange] = useState<TDateRange | undefined>({
    from: new Date(2026, 4, 12),
    to: new Date(2026, 5, 8),
  })
  return (
    <div className='w-[640px] max-w-full'>
      <Label>Date range</Label>
      <div className='mt-1.5'>
        <DateRangePicker value={range} onValueChange={setRange} placeholder='Pick a date' />
      </div>
    </div>
  )
}
