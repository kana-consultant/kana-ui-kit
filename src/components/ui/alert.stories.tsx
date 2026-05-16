import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertCircle, AlertTriangle, CheckCircle2, Info as InfoIcon } from 'lucide-react'
import {
  Alert,
  AlertActions,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from './alert'
import { Button } from './button'

const meta: Meta<typeof Alert> = {
  title: 'Primitives/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: { tone: 'info' },
  render: (args) => (
    <Alert {...args} className='w-[420px]'>
      <AlertIcon>
        <InfoIcon />
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
  ),
}

export const Success: Story = {
  args: { tone: 'success' },
  render: (args) => (
    <Alert {...args} className='w-[420px]'>
      <AlertIcon>
        <CheckCircle2 />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Project synced</AlertTitle>
        <AlertDescription>All tasks were updated across the workspace.</AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const Warning: Story = {
  args: { tone: 'warning' },
  render: (args) => (
    <Alert {...args} className='w-[420px]'>
      <AlertIcon>
        <AlertTriangle />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>Archive old attachments before the next import.</AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const Danger: Story = {
  args: { tone: 'danger' },
  render: (args) => (
    <Alert {...args} className='w-[420px]'>
      <AlertIcon>
        <AlertCircle />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Update billing details to keep automations running.</AlertDescription>
      </AlertContent>
    </Alert>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className='flex w-[460px] flex-col gap-3'>
      <Alert tone='info'>
        <AlertIcon>
          <InfoIcon />
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
  ),
}
