import { Input, Label } from '@kana-consultant/ui-kit'
import { Mail, Search } from 'lucide-react'

export function InputBasicDemo() {
  return (
    <div className='w-full max-w-sm space-y-3'>
      <div className='space-y-1.5'>
        <Label htmlFor='demo-email' required>
          Email
        </Label>
        <Input id='demo-email' type='email' placeholder='you@company.com' leadingIcon={<Mail />} />
      </div>
    </div>
  )
}

export function InputSearchDemo() {
  return (
    <div className='w-full max-w-sm'>
      <Input placeholder='Search tasks...' leadingIcon={<Search />} />
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
