import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  Button,
  Input,
  Label,
  Textarea,
} from '@kana-consultant/ui-kit'

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription>
            Add a task to your board. You can edit or delete it later.
          </DialogDescription>
        </DialogHeader>
        <div className='mt-4 flex flex-col gap-3'>
          <div className='flex flex-col gap-1.5'>
            <Label htmlFor='title' required>Title</Label>
            <Input id='title' placeholder='What needs doing?' />
          </div>
          <div className='flex flex-col gap-1.5'>
            <Label htmlFor='desc'>Description</Label>
            <Textarea id='desc' placeholder='Optional context...' />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='ghost'>Cancel</Button>
          </DialogClose>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function DialogDestructiveDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>Delete project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This permanently removes the project and all its tasks. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='ghost'>Cancel</Button>
          </DialogClose>
          <Button variant='destructive'>Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
