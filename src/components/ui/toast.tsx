import { createContext, forwardRef, useContext } from 'react'
import {
  Provider,
  Viewport,
  Root,
  Title,
  Description,
  Action,
  Close,
} from '@radix-ui/react-toast'
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'

export type TToastTone = 'default' | 'info' | 'success' | 'warning' | 'danger'

const ToastToneContext = createContext<TToastTone>('default')

export const ToastProvider = Provider

export type TToastViewportProps = ComponentPropsWithoutRef<typeof Viewport>

export const ToastViewport = forwardRef<HTMLOListElement, TToastViewportProps>(
  function ToastViewport({ className, ...props }, ref) {
    return (
      <Viewport
        ref={ref}
        className={cn(
          'fixed bottom-0 right-0 z-[100] flex max-h-screen w-full max-w-[420px] flex-col gap-2 p-4 outline-none',
          className,
        )}
        {...props}
      />
    )
  },
)

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl border border-border bg-surface p-3 pr-2 text-foreground shadow-overlay transition-all',
  {
    variants: {
      tone: {
        default: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
      },
    },
    defaultVariants: { tone: 'default' },
  },
)

export type TToastProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof toastVariants>

export const Toast = forwardRef<HTMLLIElement, TToastProps>(function Toast(
  { className, tone, children, ...props },
  ref,
) {
  const resolvedTone: TToastTone = tone ?? 'default'
  return (
    <ToastToneContext.Provider value={resolvedTone}>
      <Root
        ref={ref}
        data-tone={resolvedTone}
        className={cn(
          toastVariants({ tone: resolvedTone }),
          'data-[state=open]:animate-in data-[state=open]:slide-in-from-right-full',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
          'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
          'data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform',
          'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out data-[swipe=end]:fade-out-80',
          className,
        )}
        {...props}
      >
        {children}
      </Root>
    </ToastToneContext.Provider>
  )
})

const toastIconVariants = cva(
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

export type TToastIconProps = HTMLAttributes<HTMLDivElement> &
  Partial<VariantProps<typeof toastIconVariants>>

export const ToastIcon = forwardRef<HTMLDivElement, TToastIconProps>(function ToastIcon(
  { className, tone, children, ...props },
  ref,
) {
  const ctxTone = useContext(ToastToneContext)
  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(toastIconVariants({ tone: tone ?? ctxTone }), className)}
      {...props}
    >
      {children}
    </div>
  )
})

export type TToastBodyProps = HTMLAttributes<HTMLDivElement>

export const ToastBody = forwardRef<HTMLDivElement, TToastBodyProps>(function ToastBody(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn('flex min-w-0 flex-1 flex-col gap-0.5 py-0.5', className)} {...props} />
})

export type TToastTitleProps = ComponentPropsWithoutRef<typeof Title>

export const ToastTitle = forwardRef<HTMLDivElement, TToastTitleProps>(function ToastTitle(
  { className, ...props },
  ref,
) {
  return (
    <Title
      ref={ref}
      className={cn('text-sm font-semibold leading-tight tracking-tight text-foreground', className)}
      {...props}
    />
  )
})

export type TToastDescriptionProps = ComponentPropsWithoutRef<typeof Description>

export const ToastDescription = forwardRef<HTMLDivElement, TToastDescriptionProps>(
  function ToastDescription({ className, ...props }, ref) {
    return (
      <Description
        ref={ref}
        className={cn('text-sm leading-snug text-muted-foreground', className)}
        {...props}
      />
    )
  },
)

const toastActionVariants = cva(
  'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-xs font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
  {
    variants: {
      tone: {
        default: 'border-border text-foreground hover:bg-muted',
        info: 'border-info/40 text-info hover:bg-info/10',
        success: 'border-success/40 text-success hover:bg-success/10',
        warning: 'border-warning/40 text-warning hover:bg-warning/10',
        danger: 'border-danger/40 text-danger hover:bg-danger/10',
      },
    },
    defaultVariants: { tone: 'default' },
  },
)

export type TToastActionProps = ComponentPropsWithoutRef<typeof Action> &
  Partial<VariantProps<typeof toastActionVariants>>

export const ToastAction = forwardRef<HTMLButtonElement, TToastActionProps>(function ToastAction(
  { className, tone, ...props },
  ref,
) {
  const ctxTone = useContext(ToastToneContext)
  return (
    <Action
      ref={ref}
      className={cn(toastActionVariants({ tone: tone ?? ctxTone }), className)}
      {...props}
    />
  )
})

export type TToastCloseProps = ComponentPropsWithoutRef<typeof Close>

export const ToastClose = forwardRef<HTMLButtonElement, TToastCloseProps>(function ToastClose(
  { className, ...props },
  ref,
) {
  return (
    <Close
      ref={ref}
      toast-close=''
      aria-label='Close'
      className={cn(
        'inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors',
        'hover:bg-muted hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
        className,
      )}
      {...props}
    >
      <X className='size-3.5' />
      <span className='sr-only'>Close</span>
    </Close>
  )
})

export { toastVariants, toastIconVariants, toastActionVariants }
