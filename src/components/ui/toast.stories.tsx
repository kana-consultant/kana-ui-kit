import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircle, CheckCircle2, Mail } from 'lucide-react'
import {
  Toast,
  ToastAction,
  ToastBody,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast'
import { Button } from './button'

const meta: Meta<typeof Toast> = {
  title: 'Primitives/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta

type Story = StoryObj<typeof Toast>

function useToastTrigger() {
  const [open, setOpen] = useState(false)
  const fire = () => {
    setOpen(false)
    requestAnimationFrame(() => setOpen(true))
  }
  return { open, setOpen, fire }
}

export const Success: Story = {
  render: () => {
    const t = useToastTrigger()
    return (
      <ToastProvider swipeDirection='right'>
        <div className='flex min-h-[320px] items-center justify-center p-8'>
          <Button onClick={t.fire}>Show toast</Button>
        </div>
        <Toast tone='success' open={t.open} onOpenChange={t.setOpen} duration={6000}>
          <ToastIcon>
            <CheckCircle2 />
          </ToastIcon>
          <ToastBody>
            <ToastTitle>Task created</ToastTitle>
            <ToastDescription>The task was added to Backlog.</ToastDescription>
          </ToastBody>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
  },
}

export const WithAction: Story = {
  render: () => {
    const t = useToastTrigger()
    return (
      <ToastProvider swipeDirection='right'>
        <div className='flex min-h-[320px] items-center justify-center p-8'>
          <Button onClick={t.fire}>Send invite</Button>
        </div>
        <Toast tone='info' open={t.open} onOpenChange={t.setOpen} duration={6000}>
          <ToastIcon>
            <Mail />
          </ToastIcon>
          <ToastBody>
            <ToastTitle>Invite sent</ToastTitle>
            <ToastDescription>Ava Chen will receive an email shortly.</ToastDescription>
          </ToastBody>
          <ToastAction altText='Undo invite'>Undo</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
  },
}

export const Danger: Story = {
  render: () => {
    const t = useToastTrigger()
    return (
      <ToastProvider swipeDirection='right'>
        <div className='flex min-h-[320px] items-center justify-center p-8'>
          <Button variant='destructive' onClick={t.fire}>Trigger sync failure</Button>
        </div>
        <Toast tone='danger' open={t.open} onOpenChange={t.setOpen} duration={6000}>
          <ToastIcon>
            <AlertCircle />
          </ToastIcon>
          <ToastBody>
            <ToastTitle>Sync failed</ToastTitle>
            <ToastDescription>Retry connection to update the board.</ToastDescription>
          </ToastBody>
          <ToastAction altText='Retry sync'>Retry</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
  },
}

export const Stack: Story = {
  render: () => {
    const [created, setCreated] = useState(true)
    const [invited, setInvited] = useState(true)
    const [failed, setFailed] = useState(true)
    return (
      <ToastProvider swipeDirection='right' duration={1_000_000}>
        <div className='flex min-h-[420px] items-center justify-center p-8'>
          <div className='flex flex-col gap-2'>
            <Button size='sm' onClick={() => setCreated(true)}>Show success</Button>
            <Button size='sm' onClick={() => setInvited(true)}>Show info</Button>
            <Button size='sm' variant='destructive' onClick={() => setFailed(true)}>Show danger</Button>
          </div>
        </div>
        <Toast tone='success' open={created} onOpenChange={setCreated}>
          <ToastIcon>
            <CheckCircle2 />
          </ToastIcon>
          <ToastBody>
            <ToastTitle>Task created</ToastTitle>
            <ToastDescription>The task was added to Backlog.</ToastDescription>
          </ToastBody>
          <ToastClose />
        </Toast>
        <Toast tone='info' open={invited} onOpenChange={setInvited}>
          <ToastIcon>
            <Mail />
          </ToastIcon>
          <ToastBody>
            <ToastTitle>Invite sent</ToastTitle>
            <ToastDescription>Ava Chen will receive an email shortly.</ToastDescription>
          </ToastBody>
          <ToastAction altText='Undo invite'>Undo</ToastAction>
          <ToastClose />
        </Toast>
        <Toast tone='danger' open={failed} onOpenChange={setFailed}>
          <ToastIcon>
            <AlertCircle />
          </ToastIcon>
          <ToastBody>
            <ToastTitle>Sync failed</ToastTitle>
            <ToastDescription>Retry connection to update the board.</ToastDescription>
          </ToastBody>
          <ToastAction altText='Retry sync'>Retry</ToastAction>
          <ToastClose />
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
  },
}
