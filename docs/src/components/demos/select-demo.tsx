import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Label,
} from '@kana-consultant/ui-kit'

export function SelectBasicDemo() {
  return (
    <div className='w-full max-w-sm space-y-1.5'>
      <Label htmlFor='s1'>Priority</Label>
      <Select defaultValue='medium'>
        <SelectTrigger id='s1'>
          <SelectValue placeholder='Pick priority' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='low'>Low</SelectItem>
          <SelectItem value='medium'>Medium</SelectItem>
          <SelectItem value='high'>High</SelectItem>
          <SelectItem value='urgent'>Urgent</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export function SelectGroupedDemo() {
  return (
    <div className='w-full max-w-sm space-y-1.5'>
      <Label htmlFor='s2'>Assign to</Label>
      <Select>
        <SelectTrigger id='s2'>
          <SelectValue placeholder='Pick a teammate' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Engineering</SelectLabel>
            <SelectItem value='marcus'>Marcus Lee</SelectItem>
            <SelectItem value='priya'>Priya Patel</SelectItem>
            <SelectItem value='kenji'>Kenji Yamamoto</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Design</SelectLabel>
            <SelectItem value='ava'>Ava Chen</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Product</SelectLabel>
            <SelectItem value='sofia'>Sofia Rossi</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
