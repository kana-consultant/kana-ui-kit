import { Tabs, TabsContent, TabsList, TabsTrigger } from '@kana-consultant/ui-kit'

export function TabsBasicDemo() {
  return (
    <Tabs defaultValue='all' className='w-full max-w-md'>
      <TabsList>
        <TabsTrigger value='all'>All</TabsTrigger>
        <TabsTrigger value='mine'>Mine</TabsTrigger>
        <TabsTrigger value='completed'>Completed</TabsTrigger>
      </TabsList>
      <TabsContent value='all'>
        <p className='rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground'>
          Every task across projects. Includes unassigned.
        </p>
      </TabsContent>
      <TabsContent value='mine'>
        <p className='rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground'>
          Tasks assigned to you. 12 open, 3 overdue.
        </p>
      </TabsContent>
      <TabsContent value='completed'>
        <p className='rounded-md border border-border bg-surface p-4 text-sm text-muted-foreground'>
          Completed this week — 18 tasks.
        </p>
      </TabsContent>
    </Tabs>
  )
}
