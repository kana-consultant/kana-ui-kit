import { Children, cloneElement, isValidElement } from 'react'
import type { HTMLAttributes, ReactElement } from 'react'
import { Avatar, AvatarFallback } from './avatar'
import { cn } from '@/lib/cn'
import type { TAvatarProps } from './avatar'

export type TAvatarGroupProps = HTMLAttributes<HTMLDivElement> & {
  max?: number
  size?: TAvatarProps['size']
}

export function AvatarGroup({ children, max = 4, size = 'sm', className, ...props }: TAvatarGroupProps) {
  const all = Children.toArray(children).filter(isValidElement) as ReactElement<TAvatarProps>[]
  const shown = all.slice(0, max)
  const extra = all.length - shown.length

  return (
    <div className={cn('flex items-center -space-x-2', className)} {...props}>
      {shown.map((child, i) =>
        cloneElement(child, {
          key: i,
          size,
          className: cn('ring-2 ring-surface', child.props.className),
        }),
      )}
      {extra > 0 && (
        <Avatar size={size} className='ring-2 ring-surface'>
          <AvatarFallback>+{extra}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
