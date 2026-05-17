import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/cn'

export type TBreadcrumbProps = ComponentPropsWithoutRef<'nav'> & {
  separator?: ReactNode
}

export const Breadcrumb = forwardRef<HTMLElement, TBreadcrumbProps>(function Breadcrumb(
  { ...props },
  ref,
) {
  return <nav ref={ref} aria-label='breadcrumb' {...props} />
})

export const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<'ol'>>(
  function BreadcrumbList({ className, ...props }, ref) {
    return (
      <ol
        ref={ref}
        className={cn(
          'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2',
          className,
        )}
        {...props}
      />
    )
  },
)

export const BreadcrumbItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<'li'>>(
  function BreadcrumbItem({ className, ...props }, ref) {
    return <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
  },
)

export type TBreadcrumbLinkProps = ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean
}

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, TBreadcrumbLinkProps>(
  function BreadcrumbLink({ asChild, className, ...props }, ref) {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        ref={ref}
        className={cn('transition-colors hover:text-foreground', className)}
        {...props}
      />
    )
  },
)

export const BreadcrumbPage = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  function BreadcrumbPage({ className, ...props }, ref) {
    return (
      <span
        ref={ref}
        role='link'
        aria-disabled='true'
        aria-current='page'
        className={cn('font-medium text-foreground', className)}
        {...props}
      />
    )
  },
)

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li
      role='presentation'
      aria-hidden='true'
      className={cn('inline-flex items-center text-muted-foreground [&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

export function BreadcrumbEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      role='presentation'
      aria-hidden='true'
      className={cn('inline-flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <span className='sr-only'>More</span>
    </span>
  )
}
