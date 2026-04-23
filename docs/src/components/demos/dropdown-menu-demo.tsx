import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
} from '@kana-consultant/ui-kit'
import { Archive, MoreHorizontal, Pencil, Trash2, User } from 'lucide-react'

export function DropdownBasicDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>
          <User className='size-4' /> Account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Priya Patel</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-danger data-[highlighted]:bg-danger/10 data-[highlighted]:text-danger'>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function DropdownActionsDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Task actions'>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem><Pencil className='size-4' /> Edit</DropdownMenuItem>
        <DropdownMenuItem><Archive className='size-4' /> Archive</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='text-danger data-[highlighted]:bg-danger/10 data-[highlighted]:text-danger'>
          <Trash2 className='size-4' /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function DropdownCheckboxDemo() {
  const [compact, setCompact] = useState(false)
  const [autosave, setAutosave] = useState(true)
  const [view, setView] = useState('grid')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>View options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Display</DropdownMenuLabel>
        <DropdownMenuCheckboxItem checked={compact} onCheckedChange={setCompact}>
          Compact mode
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={autosave} onCheckedChange={setAutosave}>
          Autosave
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Layout</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={view} onValueChange={setView}>
          <DropdownMenuRadioItem value='grid'>Grid</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='list'>List</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='board'>Board</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
