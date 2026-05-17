import { forwardRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Check, ChevronsUpDown, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './command'
import { Badge } from './badge'

export type TComboboxOption = {
  value: string
  label: string
  disabled?: boolean
}

export type TComboboxProps = {
  options: TComboboxOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: ReactNode
  disabled?: boolean
  className?: string
  contentClassName?: string
  triggerWidth?: string | number
}

export const Combobox = forwardRef<HTMLButtonElement, TComboboxProps>(function Combobox(
  {
    options,
    value,
    onChange,
    placeholder = 'Select option…',
    searchPlaceholder = 'Search…',
    emptyMessage = 'No results found.',
    disabled,
    className,
    contentClassName,
    triggerWidth = 240,
  },
  ref,
) {
  const [open, setOpen] = useState(false)
  const selected = options.find((o) => o.value === value)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={ref}
          variant='secondary'
          role='combobox'
          aria-expanded={open}
          disabled={disabled}
          className={cn('justify-between font-normal', className)}
          style={{ width: triggerWidth }}
        >
          <span className={cn('truncate', !selected && 'text-muted-foreground')}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown className='size-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        className={cn('w-(--radix-popover-trigger-width) p-0', contentClassName)}
        style={{ width: 'var(--radix-popover-trigger-width)' }}
      >
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  disabled={option.disabled}
                  onSelect={() => {
                    onChange?.(option.value === value ? '' : option.value)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 size-4',
                      option.value === value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <span className='truncate'>{option.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
})

export type TMultiComboboxProps = Omit<TComboboxProps, 'value' | 'onChange'> & {
  value?: string[]
  onChange?: (value: string[]) => void
  maxBadges?: number
}

export const MultiCombobox = forwardRef<HTMLButtonElement, TMultiComboboxProps>(
  function MultiCombobox(
    {
      options,
      value = [],
      onChange,
      placeholder = 'Select options…',
      searchPlaceholder = 'Search…',
      emptyMessage = 'No results found.',
      disabled,
      className,
      contentClassName,
      triggerWidth = 280,
      maxBadges = 2,
    },
    ref,
  ) {
    const [open, setOpen] = useState(false)
    const selectedOptions = options.filter((o) => value.includes(o.value))
    const toggle = (val: string) => {
      const next = value.includes(val) ? value.filter((v) => v !== val) : [...value, val]
      onChange?.(next)
    }
    const remove = (val: string, e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      onChange?.(value.filter((v) => v !== val))
    }
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant='secondary'
            role='combobox'
            aria-expanded={open}
            disabled={disabled}
            className={cn('h-auto min-h-9 justify-between gap-2 font-normal', className)}
            style={{ width: triggerWidth }}
          >
            <div className='flex flex-wrap items-center gap-1'>
              {selectedOptions.length === 0 && (
                <span className='text-muted-foreground'>{placeholder}</span>
              )}
              {selectedOptions.slice(0, maxBadges).map((o) => (
                <Badge key={o.value} tone='primary' className='gap-1 pr-1'>
                  {o.label}
                  <span
                    role='button'
                    aria-label={`Remove ${o.label}`}
                    onClick={(e) => remove(o.value, e)}
                    className='inline-flex size-3.5 items-center justify-center rounded hover:bg-foreground/10'
                  >
                    <X className='size-3' />
                  </span>
                </Badge>
              ))}
              {selectedOptions.length > maxBadges && (
                <Badge tone='primary'>+{selectedOptions.length - maxBadges}</Badge>
              )}
            </div>
            <ChevronsUpDown className='size-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          className={cn('p-0', contentClassName)}
          style={{ width: 'var(--radix-popover-trigger-width)' }}
        >
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = value.includes(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      disabled={option.disabled}
                      onSelect={() => toggle(option.value)}
                    >
                      <Check
                        className={cn('mr-2 size-4', isSelected ? 'opacity-100' : 'opacity-0')}
                      />
                      <span className='truncate'>{option.label}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  },
)
