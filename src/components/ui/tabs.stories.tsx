import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Primitives/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='all' className='w-[420px]'>
      <TabsList>
        <TabsTrigger value='all'>All</TabsTrigger>
        <TabsTrigger value='mine'>Mine</TabsTrigger>
        <TabsTrigger value='completed'>Completed</TabsTrigger>
      </TabsList>
      <TabsContent value='all'>
        <p className='rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground'>
          Every task across projects.
        </p>
      </TabsContent>
      <TabsContent value='mine'>
        <p className='rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground'>
          Tasks assigned to you.
        </p>
      </TabsContent>
      <TabsContent value='completed'>
        <p className='rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground'>
          Completed this week.
        </p>
      </TabsContent>
    </Tabs>
  ),
}
