import type { ReactNode } from 'react'
import type { Table } from '@tanstack/react-table'
import { Search, X } from 'lucide-react'
import { Button } from './button'
import { Input } from './input'
import { DataTableViewOptions } from './data-table-view-options'

export type TDataTableToolbarProps<TData> = {
  table: Table<TData>
  searchColumn?: string
  searchPlaceholder?: string
  actions?: ReactNode
  filters?: ReactNode
  viewOptions?: boolean
}

export function DataTableToolbar<TData>({
  table,
  searchColumn,
  searchPlaceholder = 'Search...',
  actions,
  filters,
  viewOptions = true,
}: TDataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const column = searchColumn ? table.getColumn(searchColumn) : undefined
  const value = (column?.getFilterValue() as string) ?? ''

  return (
    <div className='flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center'>
      <div className='flex flex-1 flex-wrap items-center gap-2'>
        {column && (
          <Input
            sizeVariant='sm'
            className='max-w-xs'
            placeholder={searchPlaceholder}
            value={value}
            onChange={(e) => column.setFilterValue(e.target.value)}
            leadingIcon={<Search />}
          />
        )}
        {filters}
        {isFiltered && (
          <Button
            variant='ghost'
            size='sm'
            onClick={() => table.resetColumnFilters()}
            trailingIcon={<X />}
          >
            Reset
          </Button>
        )}
      </div>
      <div className='flex items-center gap-2'>
        {actions}
        {viewOptions && <DataTableViewOptions table={table} />}
      </div>
    </div>
  )
}
