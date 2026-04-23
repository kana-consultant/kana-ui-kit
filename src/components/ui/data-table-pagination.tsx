import type { Table } from '@tanstack/react-table'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from './button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

export type TDataTablePaginationProps<TData> = {
  table: Table<TData>
  pageSizes?: number[]
  showSelectedCount?: boolean
}

export function DataTablePagination<TData>({
  table,
  pageSizes = [10, 20, 30, 50, 100],
  showSelectedCount = true,
}: TDataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const pageCount = table.getPageCount()
  const selected = table.getFilteredSelectedRowModel().rows.length
  const total = table.getFilteredRowModel().rows.length

  return (
    <div className='flex flex-col items-start justify-between gap-3 px-2 py-2 sm:flex-row sm:items-center'>
      <div className='flex-1 text-xs text-muted-foreground'>
        {showSelectedCount && selected > 0 ? (
          <span>
            <span className='font-medium text-foreground'>{selected}</span> of{' '}
            <span className='font-medium text-foreground'>{total}</span> row(s) selected
          </span>
        ) : (
          <span>
            <span className='font-medium text-foreground'>{total}</span> row(s)
          </span>
        )}
      </div>
      <div className='flex flex-wrap items-center gap-4 text-xs'>
        <div className='flex items-center gap-2'>
          <span className='text-muted-foreground'>Rows per page</span>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger className='h-8 w-[70px]'>
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {pageSizes.map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex items-center gap-1 text-muted-foreground'>
          <span>Page</span>
          <span className='font-medium text-foreground'>{pageIndex + 1}</span>
          <span>of</span>
          <span className='font-medium text-foreground'>{Math.max(1, pageCount)}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Button
            variant='outline'
            size='icon-sm'
            aria-label='First page'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft />
          </Button>
          <Button
            variant='outline'
            size='icon-sm'
            aria-label='Previous page'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant='outline'
            size='icon-sm'
            aria-label='Next page'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </Button>
          <Button
            variant='outline'
            size='icon-sm'
            aria-label='Last page'
            onClick={() => table.setPageIndex(pageCount - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
