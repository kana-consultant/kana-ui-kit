import { useState } from 'react'
import { Switch, Label } from '@kana-consultant/ui-kit'

export function SwitchBasicDemo() {
  const [on, setOn] = useState(true)
  return (
    <div className='flex items-center gap-3'>
      <Switch id='sw1' checked={on} onCheckedChange={setOn} />
      <Label htmlFor='sw1'>Email notifications</Label>
    </div>
  )
}

export function SwitchGroupDemo() {
  const [notify, setNotify] = useState(true)
  const [digest, setDigest] = useState(false)
  const [marketing, setMarketing] = useState(false)
  return (
    <div className='flex w-full max-w-sm flex-col gap-3'>
      <Row label='Email notifications' description='Task updates, mentions, assignments.' checked={notify} onChange={setNotify} id='sw2' />
      <Row label='Weekly digest' description='Summary of activity every Monday.' checked={digest} onChange={setDigest} id='sw3' />
      <Row label='Marketing' description='Product announcements and news.' checked={marketing} onChange={setMarketing} id='sw4' />
    </div>
  )
}

type TRowProps = {
  id: string
  label: string
  description: string
  checked: boolean
  onChange: (v: boolean) => void
}

function Row({ id, label, description, checked, onChange }: TRowProps) {
  return (
    <div className='flex items-center justify-between gap-4 rounded-lg border border-border bg-surface p-3'>
      <div>
        <Label htmlFor={id} className='leading-none'>{label}</Label>
        <p className='mt-0.5 text-xs text-muted-foreground'>{description}</p>
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onChange} />
    </div>
  )
}
