import { Progress } from '@kana-consultant/ui-kit'

export function ProgressTonesDemo() {
  return (
    <div className='flex w-full max-w-sm flex-col gap-3'>
      <LabeledBar label='Primary' value={72} tone='primary' />
      <LabeledBar label='Success' value={92} tone='success' />
      <LabeledBar label='Warning' value={55} tone='warning' />
      <LabeledBar label='Danger' value={28} tone='danger' />
      <LabeledBar label='Info' value={64} tone='info' />
    </div>
  )
}

type TRowProps = {
  label: string
  value: number
  tone: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}

function LabeledBar({ label, value, tone }: TRowProps) {
  return (
    <div>
      <div className='mb-1 flex items-center justify-between text-xs'>
        <span className='text-muted-foreground'>{label}</span>
        <span className='font-medium'>{value}%</span>
      </div>
      <Progress value={value} tone={tone} />
    </div>
  )
}
