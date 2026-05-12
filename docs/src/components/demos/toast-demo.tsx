import { useState } from 'react'
import {
  Button,
  Toast,
  ToastAction,
  ToastBody,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@kana-consultant/ui-kit'
import { AlertCircle, CheckCircle2, Mail } from 'lucide-react'

function useReopen() {
  const [open, setOpen] = useState(false)
  const fire = () => {
    setOpen(false)
    requestAnimationFrame(() => setOpen(true))
  }
  return { open, setOpen, fire }
}

export function ToastBasicDemo() {
  const t = useReopen()
  return (
    <ToastProvider swipeDirection='right'>
      <div className='flex justify-center'>
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
}

export function ToastWithActionDemo() {
  const t = useReopen()
  return (
    <ToastProvider swipeDirection='right'>
      <div className='flex justify-center'>
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
}

export function ToastDangerDemo() {
  const t = useReopen()
  return (
    <ToastProvider swipeDirection='right'>
      <div className='flex justify-center'>
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
}
