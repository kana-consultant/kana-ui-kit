import type { Meta, StoryObj } from '@storybook/react-vite'
import { MoreHorizontal, Pencil, Trash2, Archive } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { Button } from './button'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Primitives/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Actions'>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Task actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Pencil className='size-4' /> Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Archive className='size-4' /> Archive
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-danger data-[highlighted]:bg-danger/10 data-[highlighted]:text-danger'>
          <Trash2 className='size-4' /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
