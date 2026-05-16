import { createContext, forwardRef, useContext } from 'react'
import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

export type TAlertTone = 'default' | 'info' | 'success' | 'warning' | 'danger'

const AlertToneContext = createContext<TAlertTone>('default')

const alertVariants = cva(
  'relative flex items-start gap-4 rounded-xl border border-l-4 bg-surface p-4 text-foreground shadow-soft',
  {
    variants: {
      tone: {
        default: 'border-border border-l-border-strong',
        info: 'border-border border-l-info',
        success: 'border-border border-l-success',
        warning: 'border-border border-l-warning',
        danger: 'border-border border-l-danger',
      },
    },
    defaultVariants: { tone: 'default' },
  },
)

export type TAlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>

export const Alert = forwardRef<HTMLDivElement, TAlertProps>(function Alert(
  { className, tone, role = 'alert', children, ...props },
  ref,
) {
  const resolvedTone: TAlertTone = tone ?? 'default'
  return (
    <AlertToneContext.Provider value={resolvedTone}>
      <div
        ref={ref}
        role={role}
        data-tone={resolvedTone}
        className={cn(alertVariants({ tone: resolvedTone }), className)}
        {...props}
      >
        {children}
      </div>
    </AlertToneContext.Provider>
  )
})

const alertIconVariants = cva(
  'inline-flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg]:size-5 [&_svg]:shrink-0',
  {
    variants: {
      tone: {
        default: 'bg-muted text-muted-foreground',
        info: 'bg-info/15 text-info',
        success: 'bg-success/15 text-success',
        warning: 'bg-warning/20 text-warning-foreground dark:text-warning',
        danger: 'bg-danger/15 text-danger',
      },
    },
    defaultVariants: { tone: 'default' },
  },
)

export type TAlertIconProps = HTMLAttributes<HTMLDivElement> &
  Partial<VariantProps<typeof alertIconVariants>>

export const AlertIcon = forwardRef<HTMLDivElement, TAlertIconProps>(function AlertIcon(
  { className, tone, children, ...props },
  ref,
) {
  const ctxTone = useContext(AlertToneContext)
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(alertIconVariants({ tone: tone ?? ctxTone }), className)}
      {...props}
    >
      {children}
    </div>
  )
})

export type TAlertContentProps = HTMLAttributes<HTMLDivElement>

export const AlertContent = forwardRef<HTMLDivElement, TAlertContentProps>(function AlertContent(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn('flex min-w-0 flex-1 flex-col gap-1', className)} {...props} />
})

export type TAlertTitleProps = HTMLAttributes<HTMLHeadingElement>

export const AlertTitle = forwardRef<HTMLHeadingElement, TAlertTitleProps>(function AlertTitle(
  { className, ...props },
  ref,
) {
  return (
    <h5
      ref={ref}
      className={cn('text-base font-semibold leading-tight tracking-tight text-foreground', className)}
      {...props}
    />
  )
})

export type TAlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>

export const AlertDescription = forwardRef<HTMLParagraphElement, TAlertDescriptionProps>(
  function AlertDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn('text-sm leading-relaxed text-muted-foreground', className)} {...props} />
  },
)

export type TAlertActionsProps = HTMLAttributes<HTMLDivElement>

export const AlertActions = forwardRef<HTMLDivElement, TAlertActionsProps>(function AlertActions(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('mt-2 flex flex-wrap items-center justify-end gap-2', className)}
      {...props}
    />
  )
})

export { alertVariants, alertIconVariants }
