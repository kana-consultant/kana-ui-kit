import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-soft hover:brightness-110 active:brightness-95',
        secondary:
          'bg-surface text-foreground border border-border shadow-soft hover:bg-muted',
        soft:
          'bg-primary-soft text-primary hover:bg-primary-soft/70',
        ghost:
          'bg-transparent text-foreground hover:bg-muted',
        outline:
          'bg-transparent text-foreground border border-border hover:bg-muted',
        destructive:
          'bg-danger text-danger-foreground shadow-soft hover:brightness-110',
        link:
          'bg-transparent text-primary underline-offset-4 hover:underline h-auto p-0',
      },
      size: {
        sm: 'h-8 px-3 text-xs [&_svg]:size-3.5',
        md: 'h-9 px-4 text-sm [&_svg]:size-4',
        lg: 'h-11 px-5 text-sm [&_svg]:size-4',
        icon: 'size-9 [&_svg]:size-4',
        'icon-sm': 'size-8 [&_svg]:size-3.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export type TButtonVariants = VariantProps<typeof buttonVariants>

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  TButtonVariants & {
    asChild?: boolean
    loading?: boolean
    leadingIcon?: ReactNode
    trailingIcon?: ReactNode
  }

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(function Button(
  { className, variant, size, asChild, loading, leadingIcon, trailingIcon, children, disabled, ...props },
  ref,
) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className='animate-spin' /> : leadingIcon}
      {children}
      {!loading && trailingIcon}
    </Comp>
  )
})

export { buttonVariants }
