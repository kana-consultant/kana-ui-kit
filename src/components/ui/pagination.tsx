import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, HTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/cn'
import { buttonVariants } from './button'

export type TPaginationProps = ComponentPropsWithoutRef<'nav'>

export const Pagination = forwardRef<HTMLElement, TPaginationProps>(function Pagination(
  { className, ...props },
  ref,
) {
  return (
    <nav
      ref={ref}
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
})

export const PaginationContent = forwardRef<HTMLUListElement, ComponentPropsWithoutRef<'ul'>>(
  function PaginationContent({ className, ...props }, ref) {
    return <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  },
)

export const PaginationItem = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<'li'>>(
  function PaginationItem({ className, ...props }, ref) {
    return <li ref={ref} className={cn('', className)} {...props} />
  },
)

export type TPaginationLinkProps = ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean
  isActive?: boolean
  size?: 'sm' | 'md' | 'icon' | 'icon-sm'
}

export const PaginationLink = forwardRef<HTMLAnchorElement, TPaginationLinkProps>(
  function PaginationLink({ asChild, className, isActive, size = 'icon', ...props }, ref) {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        className={cn(
          buttonVariants({ variant: isActive ? 'secondary' : 'ghost', size }),
          'cursor-pointer',
          className,
        )}
        {...props}
      />
    )
  },
)

export function PaginationFirst({ className, ...props }: TPaginationLinkProps) {
  return (
    <PaginationLink aria-label='Go to first page' size='icon' className={className} {...props}>
      <ChevronsLeft className='size-4' />
    </PaginationLink>
  )
}

export function PaginationPrevious({ className, ...props }: TPaginationLinkProps) {
  return (
    <PaginationLink aria-label='Go to previous page' size='icon' className={className} {...props}>
      <ChevronLeft className='size-4' />
    </PaginationLink>
  )
}

export function PaginationNext({ className, ...props }: TPaginationLinkProps) {
  return (
    <PaginationLink aria-label='Go to next page' size='icon' className={className} {...props}>
      <ChevronRight className='size-4' />
    </PaginationLink>
  )
}

export function PaginationLast({ className, ...props }: TPaginationLinkProps) {
  return (
    <PaginationLink aria-label='Go to last page' size='icon' className={className} {...props}>
      <ChevronsRight className='size-4' />
    </PaginationLink>
  )
}

export function PaginationEllipsis({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden='true'
      className={cn('flex size-9 items-center justify-center text-muted-foreground', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <span className='sr-only'>More pages</span>
    </span>
  )
}
