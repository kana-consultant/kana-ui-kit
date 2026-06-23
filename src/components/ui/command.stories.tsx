import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Calendar,
  CreditCard,
  Mail,
  MessageSquare,
  Plus,
  Settings,
  Smile,
  User,
} from 'lucide-react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from './command'
import { Button } from './button'
import { Kbd } from './kbd'

const meta: Meta<typeof Command> = {
  title: 'Primitives/Command',
  component: Command,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className='w-[400px] rounded-xl border border-border shadow-soft'>
      <CommandInput placeholder='Type a command or search…' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search emoji</span>
          </CommandItem>
          <CommandItem>
            <Plus />
            <span>New task</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Palette: Story = {
  render: function PaletteRender() {
    const [open, setOpen] = useState(false)
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((o) => !o)
        }
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    }, [])
    return (
      <div className='flex flex-col items-start gap-3'>
        <p className='text-sm text-muted-foreground'>
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open
        </p>
        <Button onClick={() => setOpen(true)}>Open palette</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder='Type a command or search…' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Quick actions'>
              <CommandItem>
                <Mail />
                <span>Compose message</span>
              </CommandItem>
              <CommandItem>
                <MessageSquare />
                <span>New chat</span>
              </CommandItem>
              <CommandItem>
                <Plus />
                <span>New task</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    )
  },
}
