import { forwardRef } from 'react'
import { Root, Indicator } from '@radix-ui/react-checkbox'
import type { ComponentPropsWithoutRef } from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/cn'

export type TCheckboxProps = ComponentPropsWithoutRef<typeof Root>

export const Checkbox = forwardRef<HTMLButtonElement, TCheckboxProps>(function Checkbox(
  { className, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      className={cn(
        'peer inline-flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-border bg-surface shadow-soft transition-colors',
        'hover:border-border-strong',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <Indicator className='flex items-center justify-center text-current'>
        {props.checked === 'indeterminate' ? (
          <Minus className='size-3' strokeWidth={3} />
        ) : (
          <Check className='size-3' strokeWidth={3} />
        )}
      </Indicator>
    </Root>
  )
})
