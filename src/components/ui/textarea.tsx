import { forwardRef } from 'react'
import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TTextareaProps>(function Textarea(
  { className, invalid, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'flex min-h-20 w-full rounded-md border bg-surface px-3 py-2 text-sm text-foreground shadow-soft transition-colors',
        'placeholder:text-muted-foreground',
        'border-border focus:border-primary focus:ring-2 focus:ring-ring/30 focus:outline-none',
        invalid && 'border-danger focus:border-danger focus:ring-danger/30',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
})
