import { Input, Label } from '@kana-consultant/ui-kit'
import { Mail, Search, Lock } from 'lucide-react'

export function InputBasicDemo() {
  return (
    <div className='w-full max-w-sm space-y-1.5'>
      <Label htmlFor='demo-email' required>Email</Label>
      <Input id='demo-email' type='email' placeholder='you@company.com' leadingIcon={<Mail />} />
    </div>
  )
}

export function InputSizesDemo() {
  return (
    <div className='w-full max-w-sm space-y-3'>
      <Input sizeVariant='sm' placeholder='Small input' />
      <Input sizeVariant='md' placeholder='Medium input' />
      <Input sizeVariant='lg' placeholder='Large input' />
    </div>
  )
}

export function InputIconsDemo() {
  return (
    <div className='w-full max-w-sm space-y-3'>
      <Input placeholder='Search tasks...' leadingIcon={<Search />} />
      <Input type='password' placeholder='Password' leadingIcon={<Lock />} />
    </div>
  )
}

export function InputInvalidDemo() {
  return (
    <div className='w-full max-w-sm space-y-1.5'>
      <Label htmlFor='demo-invalid' required>Email</Label>
      <Input id='demo-invalid' defaultValue='not-an-email' invalid />
      <p className='text-xs text-danger'>Please enter a valid email.</p>
    </div>
  )
}
