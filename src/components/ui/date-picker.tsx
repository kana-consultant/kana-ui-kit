import { forwardRef, useEffect, useMemo, useState } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
} from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import {
  WEEKDAY_LABELS,
  addDays,
  addMonths,
  buildMonthGrid,
  endOfMonth,
  formatDate,
  formatMonthHeader,
  isBefore,
  isSameDay,
  isSameMonth,
  isWithin,
  startOfDay,
  startOfMonth,
} from '@/lib/date'

export type TDateRange = { from?: Date; to?: Date }

type TTriggerProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> & {
  placeholder?: string
  display: ReactNode
  hasValue: boolean
  trailingIcon?: ReactNode
}

const DatePickerTrigger = forwardRef<HTMLButtonElement, TTriggerProps>(function DatePickerTrigger(
  { className, placeholder, display, hasValue, trailingIcon, disabled, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      className={cn(
        'inline-flex h-10 w-full items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-foreground shadow-soft transition-colors',
        'hover:border-border-strong',
        'focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30',
        'data-[state=open]:border-primary data-[state=open]:ring-2 data-[state=open]:ring-ring/30',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Calendar className='size-4 shrink-0 text-muted-foreground' />
      <span className={cn('flex-1 truncate text-left', !hasValue && 'text-muted-foreground')}>
        {hasValue ? display : placeholder}
      </span>
      {trailingIcon ?? <ChevronDown className='size-4 shrink-0 text-muted-foreground' />}
    </button>
  )
})

type TDayCellProps = {
  date: Date
  viewMonth: Date
  isSelected: boolean
  isInRange: boolean
  isRangeStart: boolean
  isRangeEnd: boolean
  isToday: boolean
  disabled?: boolean
  onClick: (d: Date) => void
  onHover?: (d: Date | undefined) => void
}

function DayCell({
  date,
  viewMonth,
  isSelected,
  isInRange,
  isRangeStart,
  isRangeEnd,
  isToday,
  disabled,
  onClick,
  onHover,
}: TDayCellProps) {
  const isOutside = !isSameMonth(date, viewMonth)
  const isSingleDayRange = isRangeStart && isRangeEnd
  const isMid = isInRange && !isRangeStart && !isRangeEnd
  const isPrimary = isSelected || isRangeStart || isRangeEnd
  const showSoftFull = isMid
  const showSoftRightHalf = isRangeStart && !isSingleDayRange
  const showSoftLeftHalf = isRangeEnd && !isSingleDayRange
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={() => onClick(date)}
      onMouseEnter={() => onHover?.(date)}
      onMouseLeave={() => onHover?.(undefined)}
      aria-label={formatDate(date)}
      aria-pressed={isPrimary || isInRange ? true : undefined}
      aria-current={isToday ? 'date' : undefined}
      className={cn(
        'group/day relative inline-flex h-9 w-full items-center justify-center text-sm font-medium',
        'focus-visible:outline-none focus-visible:[&>span:last-child]:ring-2 focus-visible:[&>span:last-child]:ring-ring/40',
        'disabled:cursor-not-allowed disabled:opacity-40',
      )}
    >
      {showSoftFull && (
        <span className='pointer-events-none absolute inset-y-0.5 inset-x-0 bg-primary/15' aria-hidden />
      )}
      {showSoftRightHalf && (
        <span className='pointer-events-none absolute inset-y-0.5 left-1/2 right-0 bg-primary/15' aria-hidden />
      )}
      {showSoftLeftHalf && (
        <span className='pointer-events-none absolute inset-y-0.5 left-0 right-1/2 bg-primary/15' aria-hidden />
      )}
      <span
        className={cn(
          'relative z-10 inline-flex size-8 items-center justify-center rounded-md transition-colors',
          isPrimary && 'bg-primary text-primary-foreground',
          !isPrimary && isToday && 'ring-1 ring-inset ring-primary/70',
          !isPrimary && !isMid && 'group-hover/day:bg-muted',
          !isPrimary && isOutside && 'text-muted-foreground/40',
          !isPrimary && !isOutside && 'text-foreground',
        )}
      >
        {date.getDate()}
      </span>
    </button>
  )
}

type TCalendarMonthProps = {
  viewMonth: Date
  selected?: Date
  range?: TDateRange
  hoverEnd?: Date
  showHeaderNav: boolean
  showHeaderLabel?: boolean
  onPrev?: () => void
  onNext?: () => void
  onDayClick: (d: Date) => void
  onDayHover?: (d: Date | undefined) => void
}

function CalendarMonth({
  viewMonth,
  selected,
  range,
  hoverEnd,
  showHeaderNav,
  showHeaderLabel = true,
  onPrev,
  onNext,
  onDayClick,
  onDayHover,
}: TCalendarMonthProps) {
  const days = useMemo(() => buildMonthGrid(viewMonth), [viewMonth])
  const today = useMemo(() => startOfDay(new Date()), [])

  const effectiveRange = useMemo<TDateRange | undefined>(() => {
    if (!range) return undefined
    if (range.from && !range.to && hoverEnd) {
      const from = range.from
      const to = hoverEnd
      return isBefore(to, from) ? { from: to, to: from } : { from, to }
    }
    return range
  }, [range, hoverEnd])

  return (
    <div className='flex w-[260px] flex-col gap-3'>
      {showHeaderLabel && (
        <div className='relative flex h-8 items-center justify-center'>
          {showHeaderNav && (
            <button
              type='button'
              onClick={onPrev}
              className='absolute left-0 inline-flex size-8 items-center justify-center rounded-md border border-border bg-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'
              aria-label='Previous month'
            >
              <ChevronLeft className='size-4' />
            </button>
          )}
          <div className='text-sm font-semibold text-foreground'>
            {formatMonthHeader(viewMonth)}
          </div>
          {showHeaderNav && (
            <button
              type='button'
              onClick={onNext}
              className='absolute right-0 inline-flex size-8 items-center justify-center rounded-md border border-border bg-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'
              aria-label='Next month'
            >
              <ChevronRight className='size-4' />
            </button>
          )}
        </div>
      )}
      <div className='grid grid-cols-7 text-center text-xs font-medium text-muted-foreground'>
        {WEEKDAY_LABELS.map((label, idx) => (
          <span key={idx} className='inline-flex h-8 items-center justify-center'>
            {label}
          </span>
        ))}
      </div>
      <div className='grid grid-cols-7 gap-y-1'>
        {days.map((day) => {
          const isSelected = isSameDay(selected, day)
          const isRangeStart = !!effectiveRange?.from && isSameDay(effectiveRange.from, day)
          const isRangeEnd = !!effectiveRange?.to && isSameDay(effectiveRange.to, day)
          const isInRange =
            !!effectiveRange?.from &&
            !!effectiveRange?.to &&
            isWithin(day, effectiveRange.from, effectiveRange.to)
          return (
            <DayCell
              key={day.toISOString()}
              date={day}
              viewMonth={viewMonth}
              isSelected={isSelected}
              isInRange={isInRange}
              isRangeStart={isRangeStart}
              isRangeEnd={isRangeEnd}
              isToday={isSameDay(today, day)}
              onClick={onDayClick}
              onHover={onDayHover}
            />
          )
        })}
      </div>
    </div>
  )
}

export type TDatePickerProps = {
  value?: Date
  onValueChange?: (value: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function DatePicker({
  value,
  onValueChange,
  placeholder = 'Select date',
  disabled,
  className,
}: TDatePickerProps) {
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState<Date | undefined>(value)
  const [viewMonth, setViewMonth] = useState<Date>(startOfMonth(value ?? new Date()))

  useEffect(() => {
    if (open) {
      setPending(value)
      setViewMonth(startOfMonth(value ?? new Date()))
    }
  }, [open, value])

  const apply = () => {
    onValueChange?.(pending)
    setOpen(false)
  }
  const clear = () => {
    setPending(undefined)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <DatePickerTrigger
          className={className}
          disabled={disabled}
          placeholder={placeholder}
          hasValue={!!value}
          display={value ? formatDate(value) : null}
        />
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' sideOffset={8} className='w-[300px] p-3'>
        <CalendarMonth
          viewMonth={viewMonth}
          selected={pending}
          showHeaderNav
          onPrev={() => setViewMonth((m) => addMonths(m, -1))}
          onNext={() => setViewMonth((m) => addMonths(m, 1))}
          onDayClick={(d) => {
            setPending(startOfDay(d))
            if (!isSameMonth(d, viewMonth)) setViewMonth(startOfMonth(d))
          }}
        />
        <div className='mt-3 flex items-center justify-between border-t border-border pt-3'>
          <Button variant='ghost' size='sm' onClick={clear}>
            Clear
          </Button>
          <Button size='sm' onClick={apply}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

type TPreset = {
  id: string
  label: string
  icon: ReactNode
  getRange: (now: Date) => TDateRange
}

const RANGE_PRESETS: TPreset[] = [
  {
    id: 'today',
    label: 'Today',
    icon: <Calendar className='size-4' />,
    getRange: (now) => ({ from: startOfDay(now), to: startOfDay(now) }),
  },
  {
    id: 'last-7',
    label: 'Last 7 days',
    icon: <Clock className='size-4' />,
    getRange: (now) => ({ from: startOfDay(addDays(now, -6)), to: startOfDay(now) }),
  },
  {
    id: 'this-month',
    label: 'This month',
    icon: <Calendar className='size-4' />,
    getRange: (now) => ({ from: startOfMonth(now), to: endOfMonth(now) }),
  },
]

const CUSTOM_PRESET_ID = 'custom'

function matchPreset(range: TDateRange | undefined, now: Date): string {
  if (!range?.from || !range?.to) return CUSTOM_PRESET_ID
  for (const p of RANGE_PRESETS) {
    const r = p.getRange(now)
    if (isSameDay(r.from, range.from) && isSameDay(r.to, range.to)) return p.id
  }
  return CUSTOM_PRESET_ID
}

export type TDateRangePickerProps = {
  value?: TDateRange
  onValueChange?: (value: TDateRange | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function DateRangePicker({
  value,
  onValueChange,
  placeholder = 'Select range',
  disabled,
  className,
}: TDateRangePickerProps) {
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState<TDateRange | undefined>(value)
  const [hoverEnd, setHoverEnd] = useState<Date | undefined>(undefined)
  const [viewMonth, setViewMonth] = useState<Date>(startOfMonth(value?.from ?? new Date()))
  const [presetId, setPresetId] = useState<string>(() => matchPreset(value, new Date()))

  useEffect(() => {
    if (open) {
      setPending(value)
      setHoverEnd(undefined)
      setViewMonth(startOfMonth(value?.from ?? new Date()))
      setPresetId(matchPreset(value, new Date()))
    }
  }, [open, value])

  const nextMonth = useMemo(() => addMonths(viewMonth, 1), [viewMonth])

  const handleDayClick = (d: Date) => {
    setPresetId(CUSTOM_PRESET_ID)
    const day = startOfDay(d)
    if (!pending?.from || (pending.from && pending.to)) {
      setPending({ from: day })
      return
    }
    if (isBefore(day, pending.from)) {
      setPending({ from: day, to: pending.from })
      return
    }
    setPending({ from: pending.from, to: day })
  }

  const applyPreset = (id: string) => {
    setPresetId(id)
    if (id === CUSTOM_PRESET_ID) return
    const preset = RANGE_PRESETS.find((p) => p.id === id)
    if (!preset) return
    const r = preset.getRange(new Date())
    setPending(r)
    if (r.from) setViewMonth(startOfMonth(r.from))
  }

  const apply = () => {
    onValueChange?.(pending)
    setOpen(false)
  }
  const clear = () => {
    setPending(undefined)
    setPresetId(CUSTOM_PRESET_ID)
  }

  const hasValue = !!value?.from
  const fromLabel = value?.from ? formatDate(value.from) : null
  const toLabel = value?.to ? formatDate(value.to) : null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type='button'
          disabled={disabled}
          aria-label={
            hasValue
              ? `Date range: ${fromLabel}${toLabel ? ` to ${toLabel}` : ''}`
              : 'Select date range'
          }
          className={cn(
            'group inline-flex w-full items-stretch gap-2 rounded-md text-left text-sm transition-colors',
            'disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
        >
          <span
            className={cn(
              'flex h-10 flex-1 items-center gap-2 rounded-md border border-border bg-surface px-3 shadow-soft transition-colors',
              'group-hover:border-border-strong',
              'group-data-[state=open]:border-primary group-data-[state=open]:ring-2 group-data-[state=open]:ring-ring/30',
            )}
          >
            <Calendar className='size-4 shrink-0 text-muted-foreground' />
            <span className={cn('flex-1 truncate', !hasValue && 'text-muted-foreground')}>
              {fromLabel ?? placeholder}
            </span>
          </span>
          <span className='inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-muted-foreground shadow-soft'>
            <ArrowRight className='size-4' />
          </span>
          <span
            className={cn(
              'flex h-10 flex-1 items-center gap-2 rounded-md border border-border bg-surface px-3 shadow-soft transition-colors',
              'group-hover:border-border-strong',
              'group-data-[state=open]:border-primary group-data-[state=open]:ring-2 group-data-[state=open]:ring-ring/30',
            )}
          >
            <Calendar className='size-4 shrink-0 text-muted-foreground' />
            <span className={cn('flex-1 truncate', !toLabel && 'text-muted-foreground')}>
              {toLabel ?? placeholder}
            </span>
            <ChevronDown className='size-4 shrink-0 text-muted-foreground' />
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        side='bottom'
        sideOffset={8}
        collisionPadding={16}
        className='w-auto p-3'
      >
        <div className='flex gap-4'>
          <div className='flex w-40 shrink-0 flex-col gap-1 border-r border-border pr-3'>
            {RANGE_PRESETS.map((p) => {
              const active = presetId === p.id
              return (
                <button
                  key={p.id}
                  type='button'
                  onClick={() => applyPreset(p.id)}
                  className={cn(
                    'inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
                    active
                      ? 'bg-primary-soft text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {p.icon}
                  {p.label}
                </button>
              )
            })}
            <button
              type='button'
              onClick={() => applyPreset(CUSTOM_PRESET_ID)}
              className={cn(
                'inline-flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
                presetId === CUSTOM_PRESET_ID
                  ? 'bg-primary-soft text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Calendar className='size-4' />
              Custom
            </button>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => setViewMonth((m) => addMonths(m, -1))}
                className='inline-flex size-8 items-center justify-center rounded-md border border-border bg-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'
                aria-label='Previous month'
              >
                <ChevronLeft className='size-4' />
              </button>
              <div className='flex flex-1 items-center justify-around gap-6 text-sm font-semibold text-foreground'>
                <span className='w-[260px] text-center'>{formatMonthHeader(viewMonth)}</span>
                <span className='w-[260px] text-center'>{formatMonthHeader(nextMonth)}</span>
              </div>
              <button
                type='button'
                onClick={() => setViewMonth((m) => addMonths(m, 1))}
                className='inline-flex size-8 items-center justify-center rounded-md border border-border bg-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40'
                aria-label='Next month'
              >
                <ChevronRight className='size-4' />
              </button>
            </div>
            <div className='flex gap-6'>
              <CalendarMonth
                viewMonth={viewMonth}
                range={pending}
                hoverEnd={pending?.from && !pending?.to ? hoverEnd : undefined}
                showHeaderNav={false}
                showHeaderLabel={false}
                onDayClick={handleDayClick}
                onDayHover={setHoverEnd}
              />
              <CalendarMonth
                viewMonth={nextMonth}
                range={pending}
                hoverEnd={pending?.from && !pending?.to ? hoverEnd : undefined}
                showHeaderNav={false}
                showHeaderLabel={false}
                onDayClick={handleDayClick}
                onDayHover={setHoverEnd}
              />
            </div>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-between border-t border-border pt-3'>
          <Button variant='ghost' size='sm' onClick={clear}>
            Clear
          </Button>
          <Button size='sm' leadingIcon={<Check />} onClick={apply}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
