import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-label'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/cn'

export type TLabelProps = ComponentPropsWithoutRef<typeof Root> & {
  required?: boolean
}

export const Label = forwardRef<HTMLLabelElement, TLabelProps>(function Label(
  { className, required, children, ...props },
  ref,
) {
  return (
    <Root
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 text-sm font-medium text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
      {required && <span className='text-danger'>*</span>}
    </Root>
  )
})
