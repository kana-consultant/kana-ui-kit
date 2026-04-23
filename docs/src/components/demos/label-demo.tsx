import { Label, Input, Checkbox } from '@kana-consultant/ui-kit'

export function LabelBasicDemo() {
  return (
    <div className='w-full max-w-sm space-y-1.5'>
      <Label htmlFor='l1'>Full name</Label>
      <Input id='l1' placeholder='Priya Patel' />
    </div>
  )
}

export function LabelRequiredDemo() {
  return (
    <div className='w-full max-w-sm space-y-1.5'>
      <Label htmlFor='l2' required>Email</Label>
      <Input id='l2' type='email' placeholder='you@company.com' />
    </div>
  )
}

export function LabelInlineDemo() {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='l3' />
      <Label htmlFor='l3'>I agree to the terms</Label>
    </div>
  )
}
