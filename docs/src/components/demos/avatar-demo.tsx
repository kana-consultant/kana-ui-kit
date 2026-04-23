import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from '@kana-consultant/ui-kit'

export function AvatarSizesDemo() {
  return (
    <div className='flex items-end gap-4'>
      <Avatar size='xs'><AvatarFallback>XS</AvatarFallback></Avatar>
      <Avatar size='sm'><AvatarFallback>SM</AvatarFallback></Avatar>
      <Avatar size='md'><AvatarFallback>MD</AvatarFallback></Avatar>
      <Avatar size='lg'><AvatarFallback>LG</AvatarFallback></Avatar>
      <Avatar size='xl'><AvatarFallback>XL</AvatarFallback></Avatar>
    </div>
  )
}

export function AvatarImageDemo() {
  return (
    <div className='flex items-center gap-3'>
      <Avatar>
        <AvatarImage src='https://i.pravatar.cc/80?u=ava' alt='Ava' />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar size='lg'>
        <AvatarImage src='https://i.pravatar.cc/100?u=marcus' alt='Marcus' />
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarGroupDemo() {
  return (
    <AvatarGroup size='md' max={4}>
      <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>PP</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>DR</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>KY</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>SR</AvatarFallback></Avatar>
    </AvatarGroup>
  )
}
