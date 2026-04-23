import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo, useState } from 'react'
import { Plus, Filter, Search } from 'lucide-react'

import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { Sidebar } from '@/components/dashboard/sidebar'
import { TopBar } from '@/components/dashboard/top-bar'
import { StatCard } from '@/components/dashboard/stat-card'
import { ProjectCard } from '@/components/dashboard/project-card'
import { TaskList } from '@/components/dashboard/task-list'
import { ActivityFeed } from '@/components/dashboard/activity-feed'
import { CalendarMini } from '@/components/dashboard/calendar-mini'
import { TeamMemberCard } from '@/components/dashboard/team-member-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

import {
  fxActivity,
  fxMembers,
  fxNav,
  fxNavSecondary,
  fxProjects,
  fxStats,
  fxTasks,
} from './fixtures'
import { EStatus } from '@/components/dashboard/types'
import type { TTask } from '@/components/dashboard/types'

const meta: Meta = {
  title: 'Dashboard/Tasko Composition',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full Tasko-style dashboard composed from kana-ui-kit primitives + dashboard blocks.',
      },
    },
  },
}
export default meta

type Story = StoryObj

export const FullDashboard: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard')
    const [tab, setTab] = useState('all')
    const [tasks, setTasks] = useState<TTask[]>(fxTasks)

    const filteredTasks = useMemo(() => {
      if (tab === 'all') return tasks
      if (tab === 'progress') return tasks.filter((t) => t.status === EStatus.InProgress)
      if (tab === 'done') return tasks.filter((t) => t.status === EStatus.Done)
      return tasks
    }, [tab, tasks])

    const handleToggle = (id: string, done: boolean) =>
      setTasks((ts) =>
        ts.map((t) => (t.id === id ? { ...t, status: done ? EStatus.Done : EStatus.Todo } : t)),
      )

    return (
      <div className='h-screen'>
        <DashboardShell
          sidebar={
            <Sidebar
              items={fxNav}
              secondaryItems={fxNavSecondary}
              activeId={active}
              onNavigate={setActive}
              footer={
                <div className='flex items-center gap-3'>
                  <Avatar size='sm'>
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                  <div className='min-w-0 flex-1'>
                    <p className='truncate text-sm font-medium'>Priya Patel</p>
                    <p className='truncate text-xs text-muted-foreground'>Engineering Lead</p>
                  </div>
                </div>
              }
            />
          }
          topBar={
            <TopBar
              title='Dashboard'
              subtitle='Welcome back, Priya. Here’s what your team is up to today.'
              unreadCount={3}
              user={{ name: 'Priya Patel' }}
              actions={<Button leadingIcon={<Plus />}>New task</Button>}
            />
          }
        >
          <div className='mx-auto flex w-full max-w-[1400px] flex-col gap-6'>
            <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
              {fxStats.map((s) => (
                <StatCard key={s.id} {...s} />
              ))}
            </section>

            <section className='grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]'>
              <div className='flex flex-col gap-6'>
                <Card>
                  <CardHeader className='flex-row items-center justify-between'>
                    <div>
                      <CardTitle>Active projects</CardTitle>
                      <p className='mt-1 text-sm text-muted-foreground'>3 projects shipping this sprint</p>
                    </div>
                    <Button variant='ghost' size='sm'>View all</Button>
                  </CardHeader>
                  <CardContent className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                    {fxProjects.map((p) => (
                      <ProjectCard key={p.id} project={p} />
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className='gap-3'>
                    <div className='flex flex-wrap items-center justify-between gap-3'>
                      <CardTitle>My tasks</CardTitle>
                      <div className='flex items-center gap-2'>
                        <Input
                          sizeVariant='sm'
                          leadingIcon={<Search />}
                          placeholder='Search tasks'
                          className='w-48'
                        />
                        <Button variant='secondary' size='sm' leadingIcon={<Filter />}>
                          Filter
                        </Button>
                      </div>
                    </div>
                    <Tabs value={tab} onValueChange={setTab}>
                      <TabsList>
                        <TabsTrigger value='all'>All ({tasks.length})</TabsTrigger>
                        <TabsTrigger value='progress'>
                          In progress ({tasks.filter((t) => t.status === EStatus.InProgress).length})
                        </TabsTrigger>
                        <TabsTrigger value='done'>
                          Done ({tasks.filter((t) => t.status === EStatus.Done).length})
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardHeader>
                  <CardContent>
                    <TaskList tasks={filteredTasks} onToggle={handleToggle} />
                  </CardContent>
                </Card>
              </div>

              <aside className='flex flex-col gap-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CalendarMini
                      selected={new Date()}
                      markedDates={[
                        new Date(),
                        new Date(Date.now() + 86400000 * 2),
                        new Date(Date.now() + 86400000 * 4),
                      ]}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ActivityFeed items={fxActivity} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Team</CardTitle>
                  </CardHeader>
                  <CardContent className='flex flex-col gap-2'>
                    {fxMembers.slice(0, 4).map((m, i) => (
                      <TeamMemberCard key={m.id} member={m} online={i % 2 === 0} />
                    ))}
                  </CardContent>
                </Card>
              </aside>
            </section>
          </div>
        </DashboardShell>
      </div>
    )
  },
}
