import type { AriaAttributes } from 'react'
import type { Column, SortDirection } from '@tanstack/react-table'
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Button } from './button'
import { cn } from '@/lib/cn'

export function getAriaSort(isSorted: false | SortDirection): AriaAttributes['aria-sort'] {
  if (isSorted === 'asc') return 'ascending'
  if (isSorted === 'desc') return 'descending'
  return 'none'
}

export type TDataTableColumnHeaderProps<TData, TValue> = {
  column: Column<TData, TValue>
  title: string
  className?: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: TDataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort() && !column.getCanHide()) {
    return <div className={cn('font-semibold text-muted-foreground', className)}>{title}</div>
  }

  const sorted = column.getIsSorted()

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='sm'
            className='-ml-2 h-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground data-[state=open]:bg-muted'
          >
            <span>{title}</span>
            {sorted === 'desc' ? (
              <ArrowDown className='ml-1' />
            ) : sorted === 'asc' ? (
              <ArrowUp className='ml-1' />
            ) : (
              <ChevronsUpDown className='ml-1 opacity-60' />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start'>
          {column.getCanSort() && (
            <>
              <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                <ArrowUp className='size-3.5 text-muted-foreground' />
                Ascending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                <ArrowDown className='size-3.5 text-muted-foreground' />
                Descending
              </DropdownMenuItem>
            </>
          )}
          {column.getCanSort() && column.getCanHide() && <DropdownMenuSeparator />}
          {column.getCanHide() && (
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeOff className='size-3.5 text-muted-foreground' />
              Hide column
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
