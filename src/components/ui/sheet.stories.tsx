import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

const meta: Meta<typeof Sheet> = {
  title: 'Primitives/Sheet',
  component: Sheet,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Sheet>

const SheetForm = () => (
  <div className='mt-4 flex flex-col gap-3'>
    <div className='flex flex-col gap-1.5'>
      <Label htmlFor='name'>Name</Label>
      <Input id='name' placeholder='Jane Doe' />
    </div>
    <div className='flex flex-col gap-1.5'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' type='email' placeholder='jane@example.com' />
    </div>
  </div>
)

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open right sheet</Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile and save when ready.</SheetDescription>
        </SheetHeader>
        <SheetForm />
        <SheetFooter>
          <Button variant='ghost'>Cancel</Button>
          <Button>Save</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary'>Open left sheet</Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow down the list with filters.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary'>Open top sheet</Button>
      </SheetTrigger>
      <SheetContent side='top'>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>You have 3 unread messages.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='secondary'>Open bottom sheet</Button>
      </SheetTrigger>
      <SheetContent side='bottom'>
        <SheetHeader>
          <SheetTitle>Quick actions</SheetTitle>
          <SheetDescription>Pick an action to perform on the selected items.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
