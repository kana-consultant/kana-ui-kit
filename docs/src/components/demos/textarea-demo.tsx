import { Textarea, Label } from '@kana-consultant/ui-kit'

export function TextareaBasicDemo() {
  return (
    <div className='w-full max-w-md space-y-1.5'>
      <Label htmlFor='ta1'>Description</Label>
      <Textarea id='ta1' placeholder='Add details for this task...' />
    </div>
  )
}

export function TextareaInvalidDemo() {
  return (
    <div className='w-full max-w-md space-y-1.5'>
      <Label htmlFor='ta2' required>Commit message</Label>
      <Textarea id='ta2' invalid defaultValue='wip' />
      <p className='text-xs text-danger'>Commit message must be at least 10 characters.</p>
    </div>
  )
}
