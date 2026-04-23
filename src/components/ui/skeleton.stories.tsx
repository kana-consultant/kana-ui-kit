import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Skeleton>

export const Card: Story = {
  render: () => (
    <div className='w-72 space-y-3 rounded-xl border border-border bg-surface p-4'>
      <div className='flex items-center gap-3'>
        <Skeleton className='size-10 rounded-full' />
        <div className='flex-1 space-y-2'>
          <Skeleton className='h-3 w-32' />
          <Skeleton className='h-3 w-20' />
        </div>
      </div>
      <Skeleton className='h-3 w-full' />
      <Skeleton className='h-3 w-5/6' />
      <Skeleton className='h-8 w-24 rounded-md' />
    </div>
  ),
}
