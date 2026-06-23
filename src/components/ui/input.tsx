import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type TInputSize = 'sm' | 'md' | 'lg'

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  sizeVariant?: TInputSize
}

const sizeMap: Record<TInputSize, string> = {
  sm: 'h-8 text-xs',
  md: 'h-9 text-sm',
  lg: 'h-11 text-sm',
}

export const Input = forwardRef<HTMLInputElement, TInputProps>(function Input(
  { className, invalid, leadingIcon, trailingIcon, sizeVariant = 'md', type = 'text', ...props },
  ref,
) {
  const base = cn(
    'flex w-full items-center rounded-md border bg-surface shadow-soft transition-colors',
    'border-border focus-within:border-primary focus-within:ring-2 focus-within:ring-ring/30',
    invalid && 'border-danger focus-within:border-danger focus-within:ring-danger/30',
    sizeMap[sizeVariant],
    className,
  )
  return (
    <div className={base}>
      {leadingIcon && (
        <span className='pl-3 text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0'>{leadingIcon}</span>
      )}
      <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        className={cn(
          'w-full bg-transparent px-3 text-foreground placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50',
          leadingIcon && 'pl-2',
          trailingIcon && 'pr-2',
        )}
        {...props}
      />
      {trailingIcon && (
        <span className='pr-3 text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0'>{trailingIcon}</span>
      )}
    </div>
  )
})
