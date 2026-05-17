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
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { cn } from '@/lib/cn'

export const Sheet = Root
export const SheetTrigger = Trigger
export const SheetClose = Close

export type TSheetOverlayProps = ComponentPropsWithoutRef<typeof Overlay>

export const SheetOverlay = forwardRef<HTMLDivElement, TSheetOverlayProps>(function SheetOverlay(
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

const sheetVariants = cva(
  'fixed z-50 flex flex-col gap-4 border-border bg-surface p-6 shadow-overlay outline-none',
  {
    variants: {
      side: {
        right:
          'inset-y-0 right-0 h-full w-[92vw] max-w-md border-l data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right',
        left:
          'inset-y-0 left-0 h-full w-[92vw] max-w-md border-r data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left',
        top:
          'inset-x-0 top-0 w-full border-b data-[state=open]:animate-in data-[state=open]:slide-in-from-top data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top',
        bottom:
          'inset-x-0 bottom-0 w-full border-t data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export type TSheetContentProps = ComponentPropsWithoutRef<typeof Content> &
  VariantProps<typeof sheetVariants> & {
    hideClose?: boolean
  }

export const SheetContent = forwardRef<HTMLDivElement, TSheetContentProps>(function SheetContent(
  { className, side, hideClose, children, ...props },
  ref,
) {
  return (
    <Portal>
      <SheetOverlay />
      <Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
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

export function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1.5 text-left', className)} {...props} />
}

export function SheetFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mt-auto flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export type TSheetTitleProps = ComponentPropsWithoutRef<typeof Title>

export const SheetTitle = forwardRef<HTMLHeadingElement, TSheetTitleProps>(function SheetTitle(
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

export type TSheetDescriptionProps = ComponentPropsWithoutRef<typeof Description>

export const SheetDescription = forwardRef<HTMLParagraphElement, TSheetDescriptionProps>(
  function SheetDescription({ className, ...props }, ref) {
    return (
      <Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
    )
  },
)

export { sheetVariants }
