import { forwardRef } from 'react'
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from '@radix-ui/react-dialog'
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'

export const Dialog = Root
export const DialogTrigger = Trigger
export const DialogClose = Close

export type TDialogOverlayProps = ComponentPropsWithoutRef<typeof Overlay>

export const DialogOverlay = forwardRef<HTMLDivElement, TDialogOverlayProps>(function DialogOverlay(
  { className, ...props },
  ref,
) {
  return (
    <Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/40 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        className,
      )}
      {...props}
    />
  )
})

export type TDialogContentProps = ComponentPropsWithoutRef<typeof Content> & {
  hideClose?: boolean
}

export const DialogContent = forwardRef<HTMLDivElement, TDialogContentProps>(function DialogContent(
  { className, children, hideClose, ...props },
  ref,
) {
  return (
    <Portal>
      <DialogOverlay />
      <Content
        ref={ref}
        className={cn(
          'fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-surface p-6 shadow-overlay',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          className,
        )}
        {...props}
      >
        {children}
        {!hideClose && (
          <Close
            className={cn(
              'absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40',
            )}
          >
            <X className='size-4' />
            <span className='sr-only'>Close</span>
          </Close>
        )}
      </Content>
    </Portal>
  )
})

export function DialogHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1.5', className)} {...props} />
}

export function DialogFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export type TDialogTitleProps = ComponentPropsWithoutRef<typeof Title>

export const DialogTitle = forwardRef<HTMLHeadingElement, TDialogTitleProps>(function DialogTitle(
  { className, ...props },
  ref,
) {
  return (
    <Title
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})

export type TDialogDescriptionProps = ComponentPropsWithoutRef<typeof Description>

export const DialogDescription = forwardRef<HTMLParagraphElement, TDialogDescriptionProps>(
  function DialogDescription({ className, ...props }, ref) {
    return <Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  },
)
