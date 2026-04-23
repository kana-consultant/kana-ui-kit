import { Button, Badge, Switch, Checkbox, Progress, Avatar, AvatarFallback, AvatarGroup } from '@kana-consultant/ui-kit'
import { Plus, Sparkles, Trash2 } from 'lucide-react'

export function PrimitivesDemo() {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      <Button size='sm' leadingIcon={<Plus />}>New</Button>
      <Button size='sm' variant='secondary' trailingIcon={<Sparkles />}>AI</Button>
      <Button size='sm' variant='destructive' leadingIcon={<Trash2 />}>Delete</Button>
      <Button size='sm' variant='soft'>Soft</Button>
      <Badge tone='success' dot>Live</Badge>
      <Badge tone='warning' dot>Draft</Badge>
      <Badge tone='info'>Beta</Badge>
    </div>
  )
}

export function FormFieldsDemo() {
  return (
    <div className='flex flex-col gap-3'>
      <label className='flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-muted px-3 py-2'>
        <span className='text-xs font-medium'>Email notifications</span>
        <Switch defaultChecked />
      </label>
      <label className='flex items-center justify-between gap-3 rounded-lg border border-border bg-surface-muted px-3 py-2'>
        <span className='text-xs font-medium'>Weekly digest</span>
        <Switch />
      </label>
      <label className='flex items-center gap-2 rounded-lg border border-border bg-surface-muted px-3 py-2'>
        <Checkbox defaultChecked />
        <span className='text-xs font-medium'>Remember me</span>
      </label>
    </div>
  )
}

export function DashboardDemo() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center gap-3 rounded-lg border border-border bg-surface-muted p-3'>
        <AvatarGroup size='xs' max={3}>
          <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>PP</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>DR</AvatarFallback></Avatar>
        </AvatarGroup>
        <div className='min-w-0 flex-1'>
          <p className='truncate text-xs font-semibold'>Tasko Redesign</p>
          <Progress value={72} tone='primary' className='mt-1 h-1.5' />
        </div>
        <span className='text-[10px] font-medium text-muted-foreground'>72%</span>
      </div>
      <div className='flex items-center gap-3 rounded-lg border border-border bg-surface-muted p-3'>
        <AvatarGroup size='xs' max={3}>
          <Avatar><AvatarFallback>KY</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>SR</AvatarFallback></Avatar>
        </AvatarGroup>
        <div className='min-w-0 flex-1'>
          <p className='truncate text-xs font-semibold'>Mobile v2</p>
          <Progress value={41} tone='info' className='mt-1 h-1.5' />
        </div>
        <span className='text-[10px] font-medium text-muted-foreground'>41%</span>
      </div>
    </div>
  )
}
