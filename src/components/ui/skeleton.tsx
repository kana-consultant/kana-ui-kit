import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type TSkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: TSkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)}
      aria-hidden='true'
      {...props}
    />
  )
}
