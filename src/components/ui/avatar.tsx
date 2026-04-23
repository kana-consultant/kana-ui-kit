import { forwardRef } from 'react'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import type { ComponentPropsWithoutRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const avatarVariants = cva('inline-flex shrink-0 overflow-hidden rounded-full bg-muted', {
  variants: {
    size: {
      xs: 'size-6 text-[10px]',
      sm: 'size-8 text-xs',
      md: 'size-10 text-sm',
      lg: 'size-12 text-base',
      xl: 'size-16 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TAvatarVariants = VariantProps<typeof avatarVariants>

export type TAvatarProps = ComponentPropsWithoutRef<typeof Root> & TAvatarVariants

export const Avatar = forwardRef<HTMLSpanElement, TAvatarProps>(function Avatar(
  { className, size, ...props },
  ref,
) {
  return <Root ref={ref} className={cn(avatarVariants({ size }), className)} {...props} />
})

export type TAvatarImageProps = ComponentPropsWithoutRef<typeof Image>

export const AvatarImage = forwardRef<HTMLImageElement, TAvatarImageProps>(function AvatarImage(
  { className, ...props },
  ref,
) {
  return <Image ref={ref} className={cn('size-full object-cover', className)} {...props} />
})

export type TAvatarFallbackProps = ComponentPropsWithoutRef<typeof Fallback>

export const AvatarFallback = forwardRef<HTMLSpanElement, TAvatarFallbackProps>(
  function AvatarFallback({ className, ...props }, ref) {
    return (
      <Fallback
        ref={ref}
        className={cn(
          'flex size-full items-center justify-center bg-primary-soft font-semibold text-primary',
          className,
        )}
        {...props}
      />
    )
  },
)
