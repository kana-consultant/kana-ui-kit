import { useState } from 'react'
import { TaskCard, TaskList, EStatus } from '@kana-consultant/ui-kit'
import type { TTask } from '@kana-consultant/ui-kit'
import { tasks as fxTasks } from './fixtures'

export function TaskCardSingleDemo() {
  const [task, setTask] = useState(fxTasks[0])
  return (
    <div className='w-full max-w-lg'>
      <TaskCard
        task={task}
        onToggle={(_id, done) =>
          setTask((t) => ({ ...t, status: done ? EStatus.Done : EStatus.Todo }))
        }
      />
    </div>
  )
}

export function TaskListDemo() {
  const [tasks, setTasks] = useState<TTask[]>(fxTasks)
  return (
    <div className='w-full max-w-xl'>
      <TaskList
        tasks={tasks}
        onToggle={(id, done) =>
          setTasks((ts) =>
            ts.map((t) =>
              t.id === id ? { ...t, status: done ? EStatus.Done : EStatus.Todo } : t,
            ),
          )
        }
      />
    </div>
  )
}
