import {
  StatCard,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Button,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  Progress,
} from '@kana-consultant/ui-kit'
import {
  CheckCircle2,
  Flame,
  ListTodo,
  Clock,
  Calendar,
  MessageSquare,
} from 'lucide-react'

export function PreviewCard() {
  return (
    <div className='grid gap-4 p-5 md:grid-cols-3'>
      <StatCard
        id='s1'
        label='Active'
        value={42}
        icon={ListTodo}
        tone='primary'
        delta={{ value: 12, direction: 'up' }}
      />
      <StatCard
        id='s2'
        label='Done'
        value={128}
        icon={CheckCircle2}
        tone='success'
        delta={{ value: 8, direction: 'up' }}
      />
      <StatCard
        id='s3'
        label='Overdue'
        value={5}
        icon={Flame}
        tone='warning'
        delta={{ value: -3, direction: 'down' }}
      />

      <Card className='md:col-span-2'>
        <CardHeader className='flex-row items-center justify-between'>
          <div>
            <CardTitle>Active sprint</CardTitle>
            <p className='text-xs text-muted-foreground'>3 projects shipping</p>
          </div>
          <Button variant='ghost' size='sm'>View all</Button>
        </CardHeader>
        <CardContent className='flex flex-col gap-3'>
          <PreviewRow title='Tasko Redesign' due='May 12' progress={72} tone='primary' />
          <PreviewRow title='Mobile App v2' due='Jun 2' progress={41} tone='info' />
          <PreviewRow title='Onboarding Flow' due='Apr 30' progress={88} tone='success' />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Up next</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col gap-3 text-sm'>
          <PreviewTask title='Review PR #142' meta='Today' badge='urgent' tone='danger' />
          <PreviewTask title='Sync with design' meta='Tomorrow' badge='high' tone='warning' />
          <PreviewTask title='Ship changelog' meta='Apr 28' badge='medium' tone='info' />
        </CardContent>
      </Card>
    </div>
  )
}

type TRowProps = { title: string; due: string; progress: number; tone: 'primary' | 'info' | 'success' }

function PreviewRow({ title, due, progress, tone }: TRowProps) {
  return (
    <div className='flex items-center gap-4'>
      <div className='min-w-0 flex-1'>
        <div className='flex items-center justify-between'>
          <p className='truncate text-sm font-medium'>{title}</p>
          <span className='text-xs text-muted-foreground'>{progress}%</span>
        </div>
        <Progress value={progress} tone={tone} className='mt-1.5' />
      </div>
      <AvatarGroup size='xs' max={3}>
        <Avatar><AvatarFallback>AC</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>PP</AvatarFallback></Avatar>
      </AvatarGroup>
      <span className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
        <Calendar className='size-3' />
        {due}
      </span>
    </div>
  )
}

type TTaskProps = { title: string; meta: string; badge: string; tone: 'danger' | 'warning' | 'info' }

function PreviewTask({ title, meta, badge, tone }: TTaskProps) {
  return (
    <div className='flex items-start justify-between gap-3'>
      <div className='min-w-0 flex-1'>
        <p className='truncate text-sm font-medium'>{title}</p>
        <p className='inline-flex items-center gap-1 text-xs text-muted-foreground'>
          <Clock className='size-3' /> {meta}
          <MessageSquare className='size-3' /> 2
        </p>
      </div>
      <Badge tone={tone} size='sm' dot>{badge}</Badge>
    </div>
  )
}
