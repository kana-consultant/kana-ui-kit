import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

const meta: Meta<typeof Dialog> = {
  title: 'Primitives/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription>Add a task to your board. You can edit or delete it later.</DialogDescription>
        </DialogHeader>
        <div className='mt-4 flex flex-col gap-3'>
          <div className='flex flex-col gap-1.5'>
            <Label htmlFor='title' required>Title</Label>
            <Input id='title' placeholder='What needs doing?' />
          </div>
        </div>
        <DialogFooter>
          <Button variant='ghost'>Cancel</Button>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
