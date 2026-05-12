import {
  Alert,
  AlertActions,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from '@kana-consultant/ui-kit'
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react'

export function AlertTonesDemo() {
  return (
    <div className='flex w-full max-w-[460px] flex-col gap-3'>
      <Alert tone='info'>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Sprint report ready</AlertTitle>
          <AlertDescription>Velocity and carry-over metrics are available for review.</AlertDescription>
          <AlertActions>
            <Button variant='ghost' size='sm'>Dismiss</Button>
            <Button variant='soft' size='sm'>View report</Button>
          </AlertActions>
        </AlertContent>
      </Alert>
      <Alert tone='success'>
        <AlertIcon>
          <CheckCircle2 />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Project synced</AlertTitle>
          <AlertDescription>All tasks were updated across the workspace.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert tone='warning'>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Storage almost full</AlertTitle>
          <AlertDescription>Archive old attachments before the next import.</AlertDescription>
        </AlertContent>
      </Alert>
      <Alert tone='danger'>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>Payment failed</AlertTitle>
          <AlertDescription>Update billing details to keep automations running.</AlertDescription>
        </AlertContent>
      </Alert>
    </div>
  )
}
