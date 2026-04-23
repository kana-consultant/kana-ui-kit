import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type TCardProps = HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, TCardProps>(function Card(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-border bg-surface text-foreground shadow-soft',
        className,
      )}
      {...props}
    />
  )
})

export const CardHeader = forwardRef<HTMLDivElement, TCardProps>(function CardHeader(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn('flex flex-col gap-1.5 p-5', className)} {...props} />
})

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  function CardTitle({ className, ...props }, ref) {
    return (
      <h3
        ref={ref}
        className={cn('text-base font-semibold leading-none tracking-tight', className)}
        {...props}
      />
    )
  },
)

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  function CardDescription({ className, ...props }, ref) {
    return <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  },
)

export const CardContent = forwardRef<HTMLDivElement, TCardProps>(function CardContent(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn('px-5 pb-5', className)} {...props} />
})

export const CardFooter = forwardRef<HTMLDivElement, TCardProps>(function CardFooter(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('flex items-center gap-2 border-t border-border px-5 py-4', className)}
      {...props}
    />
  )
})
