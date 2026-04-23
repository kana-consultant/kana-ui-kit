import { useState } from 'react'
import { CalendarMini } from '@kana-consultant/ui-kit'

export function CalendarMiniDemo() {
  const [date, setDate] = useState<Date>(new Date())
  const marks = [
    new Date(),
    new Date(Date.now() + 86400000 * 2),
    new Date(Date.now() + 86400000 * 4),
    new Date(Date.now() + 86400000 * 9),
  ]
  return (
    <div className='w-80 rounded-xl border border-border bg-surface p-5'>
      <CalendarMini selected={date} onSelect={setDate} markedDates={marks} />
      <p className='mt-3 text-xs text-muted-foreground'>
        Selected: {date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
      </p>
    </div>
  )
}
