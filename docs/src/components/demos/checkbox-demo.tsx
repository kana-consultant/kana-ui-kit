import { useState } from 'react'
import { Checkbox, Label } from '@kana-consultant/ui-kit'

export function CheckboxDemo() {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false)
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='c1' checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor='c1'>Email me about new releases</Label>
    </div>
  )
}

export function CheckboxIndeterminateDemo() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <Checkbox id='c2' checked='indeterminate' />
        <Label htmlFor='c2' className='font-semibold'>Select all (3 of 5)</Label>
      </div>
      <div className='ml-6 flex flex-col gap-1.5'>
        <div className='flex items-center gap-2'>
          <Checkbox id='c3' defaultChecked />
          <Label htmlFor='c3'>Project A</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='c4' defaultChecked />
          <Label htmlFor='c4'>Project B</Label>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox id='c5' />
          <Label htmlFor='c5'>Project C</Label>
        </div>
      </div>
    </div>
  )
}

export function CheckboxDisabledDemo() {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='c6' disabled defaultChecked />
      <Label htmlFor='c6'>Disabled</Label>
    </div>
  )
}
