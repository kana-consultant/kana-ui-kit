import { Button } from '@kana-consultant/ui-kit'
import { Plus, Sparkles, Trash2 } from 'lucide-react'

export function ButtonVariantsDemo() {
  return (
    <div className='flex flex-wrap justify-center gap-3'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='soft'>Soft</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='link'>Link</Button>
    </div>
  )
}

export function ButtonSizesDemo() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon' aria-label='Add'><Plus /></Button>
    </div>
  )
}

export function ButtonIconsDemo() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <Button leadingIcon={<Plus />}>New task</Button>
      <Button variant='secondary' trailingIcon={<Sparkles />}>AI actions</Button>
      <Button variant='destructive' leadingIcon={<Trash2 />}>Delete</Button>
    </div>
  )
}

export function ButtonLoadingDemo() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <Button loading>Saving...</Button>
      <Button variant='secondary' loading>Uploading</Button>
    </div>
  )
}
