import { useState } from 'react'
import { KanbanColumn, EStatus } from '@kana-consultant/ui-kit'
import type { TTask } from '@kana-consultant/ui-kit'
import { tasks as fxTasks } from './fixtures'

const columns = [
  { title: 'To do', status: EStatus.Todo, color: '#94a3b8' },
  { title: 'In progress', status: EStatus.InProgress, color: '#7c3aed' },
  { title: 'In review', status: EStatus.Review, color: '#f59e0b' },
  { title: 'Done', status: EStatus.Done, color: '#10b981' },
]

export function KanbanBoardDemo() {
  const [tasks, setTasks] = useState<TTask[]>(fxTasks)
  return (
    <div className='flex w-full gap-4 overflow-x-auto pb-2'>
      {columns.map((c) => (
        <KanbanColumn
          key={c.status}
          title={c.title}
          color={c.color}
          status={c.status}
          tasks={tasks.filter((t) => t.status === c.status)}
          onToggle={(id, done) =>
            setTasks((ts) =>
              ts.map((t) =>
                t.id === id ? { ...t, status: done ? EStatus.Done : EStatus.Todo } : t,
              ),
            )
          }
        />
      ))}
    </div>
  )
}
