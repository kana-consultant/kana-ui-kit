import { Badge } from '@kana-consultant/ui-kit'

export function BadgeTonesDemo() {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <Badge tone='neutral'>Neutral</Badge>
      <Badge tone='primary'>Primary</Badge>
      <Badge tone='accent'>Accent</Badge>
      <Badge tone='success'>Success</Badge>
      <Badge tone='warning'>Warning</Badge>
      <Badge tone='danger'>Danger</Badge>
      <Badge tone='info'>Info</Badge>
      <Badge tone='outline'>Outline</Badge>
    </div>
  )
}

export function BadgeSizesDemo() {
  return (
    <div className='flex items-center gap-2'>
      <Badge tone='primary' size='sm'>Small</Badge>
      <Badge tone='primary' size='md'>Medium</Badge>
      <Badge tone='primary' size='lg'>Large</Badge>
    </div>
  )
}

export function BadgeDotDemo() {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <Badge tone='success' dot>Live</Badge>
      <Badge tone='warning' dot>Draft</Badge>
      <Badge tone='danger' dot>Urgent</Badge>
      <Badge tone='info' dot>Beta</Badge>
    </div>
  )
}
