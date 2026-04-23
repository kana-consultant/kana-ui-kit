import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table'
import { MoreHorizontal, Plus } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTablePagination } from './data-table-pagination'
import { DataTableToolbar } from './data-table-toolbar'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Badge } from './badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'

type TUser = {
  id: string
  name: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  status: 'active' | 'invited' | 'disabled'
  lastSeen: string
}

const data: TUser[] = [
  { id: '1', name: 'Ava Chen', email: 'ava@kana.co', role: 'admin', status: 'active', lastSeen: '2m ago' },
  { id: '2', name: 'Marcus Lee', email: 'marcus@kana.co', role: 'editor', status: 'active', lastSeen: '1h ago' },
  { id: '3', name: 'Priya Patel', email: 'priya@kana.co', role: 'admin', status: 'active', lastSeen: 'Yesterday' },
  { id: '4', name: 'Diego Ramos', email: 'diego@kana.co', role: 'viewer', status: 'invited', lastSeen: '—' },
  { id: '5', name: 'Kenji Yamamoto', email: 'kenji@kana.co', role: 'editor', status: 'active', lastSeen: '3d ago' },
  { id: '6', name: 'Sofia Rossi', email: 'sofia@kana.co', role: 'admin', status: 'disabled', lastSeen: '2w ago' },
  { id: '7', name: 'Jon Snow', email: 'jon@kana.co', role: 'viewer', status: 'active', lastSeen: 'Just now' },
  { id: '8', name: 'Hermione Granger', email: 'hermione@kana.co', role: 'editor', status: 'invited', lastSeen: '—' },
  { id: '9', name: 'Tony Stark', email: 'tony@kana.co', role: 'admin', status: 'active', lastSeen: '4m ago' },
  { id: '10', name: 'Bruce Wayne', email: 'bruce@kana.co', role: 'editor', status: 'disabled', lastSeen: '1mo ago' },
  { id: '11', name: 'Clark Kent', email: 'clark@kana.co', role: 'viewer', status: 'active', lastSeen: '5h ago' },
  { id: '12', name: 'Diana Prince', email: 'diana@kana.co', role: 'admin', status: 'active', lastSeen: '30m ago' },
]

const statusTone = {
  active: 'success',
  invited: 'info',
  disabled: 'neutral',
} as const

const columns: ColumnDef<TUser>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Name' />,
    cell: ({ row }) => <span className='font-medium'>{row.getValue('name')}</span>,
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Email' />,
    cell: ({ row }) => <span className='text-muted-foreground'>{row.getValue('email')}</span>,
  },
  {
    accessorKey: 'role',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Role' />,
    cell: ({ row }) => <Badge tone='outline'>{row.getValue('role')}</Badge>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />,
    cell: ({ row }) => {
      const status = row.getValue('status') as TUser['status']
      return (
        <Badge tone={statusTone[status]} dot>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'lastSeen',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Last seen' />,
    cell: ({ row }) => <span className='text-muted-foreground'>{row.getValue('lastSeen')}</span>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='icon-sm' aria-label='Actions'>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Reset password</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className='text-danger data-[highlighted]:bg-danger/10 data-[highlighted]:text-danger'>
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

const meta: Meta = {
  title: 'Primitives/DataTable',
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj

export const FullFeatured: Story = {
  render: () => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: { sorting, columnFilters, columnVisibility, rowSelection },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      initialState: { pagination: { pageSize: 5 } },
    })

    return (
      <div className='flex w-full flex-col gap-3'>
        <DataTableToolbar
          table={table}
          searchColumn='name'
          searchPlaceholder='Search users...'
          actions={<Button size='sm' leadingIcon={<Plus />}>Invite</Button>}
        />
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center text-muted-foreground'>
                  No results.
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
      </div>
    )
  },
}
