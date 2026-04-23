import { forwardRef } from 'react'
import { Root, Thumb } from '@radix-ui/react-switch'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type TSwitchProps = ComponentPropsWithoutRef<typeof Root>

export const Switch = forwardRef<HTMLButtonElement, TSwitchProps>(function Switch(
  { className, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      className={cn(
        'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors shadow-soft',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}
    >
      <Thumb
        className={cn(
          'pointer-events-none block size-4 rounded-full bg-surface shadow-raised ring-0 transition-transform',
          'data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        )}
      />
    </Root>
  )
})
