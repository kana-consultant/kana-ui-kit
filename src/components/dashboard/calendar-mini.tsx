import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/button'

export type TCalendarMiniProps = {
  selected?: Date
  markedDates?: Date[]
  onSelect?: (date: Date) => void
  className?: string
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function buildMonth(base: Date) {
  const year = base.getFullYear()
  const month = base.getMonth()
  const firstDow = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (Date | null)[] = []
  for (let i = 0; i < firstDow; i += 1) cells.push(null)
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(new Date(year, month, d))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

export function CalendarMini({ selected, markedDates = [], onSelect, className }: TCalendarMiniProps) {
  const [cursor, setCursor] = useState(() => selected ?? new Date())
  const cells = useMemo(() => buildMonth(cursor), [cursor])
  const today = new Date()

  return (
    <div className={cn('w-full select-none', className)}>
      <div className='mb-3 flex items-center justify-between'>
        <p className='text-sm font-semibold text-foreground'>
          {cursor.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
        </p>
        <div className='flex items-center gap-1'>
          <Button
            size='icon-sm'
            variant='ghost'
            aria-label='Previous month'
            onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
          >
            <ChevronLeft />
          </Button>
          <Button
            size='icon-sm'
            variant='ghost'
            aria-label='Next month'
            onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-1 text-center'>
        {WEEKDAYS.map((d) => (
          <div key={d} className='py-1 text-[10px] font-medium uppercase text-muted-foreground'>
            {d}
          </div>
        ))}
        {cells.map((cell, i) => {
          if (!cell) return <div key={i} />
          const isSelected = selected && sameDay(cell, selected)
          const isToday = sameDay(cell, today)
          const marked = markedDates.some((m) => sameDay(m, cell))
          return (
            <button
              key={i}
              type='button'
              onClick={() => onSelect?.(cell)}
              className={cn(
                'relative flex aspect-square items-center justify-center rounded-md text-xs font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
                isSelected
                  ? 'bg-primary text-primary-foreground'
                  : isToday
                    ? 'bg-primary-soft text-primary'
                    : 'text-foreground hover:bg-muted',
              )}
            >
              {cell.getDate()}
              {marked && !isSelected && (
                <span className='absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary' />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
