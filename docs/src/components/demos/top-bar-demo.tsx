import { TopBar, Button } from '@kana-consultant/ui-kit'
import { Plus } from 'lucide-react'

export function TopBarDemo() {
  return (
    <div className='w-full overflow-hidden rounded-xl border border-border bg-background'>
      <TopBar
        title='Dashboard'
        subtitle='Welcome back, Priya. 5 tasks due today.'
        unreadCount={3}
        user={{ name: 'Priya Patel' }}
        actions={<Button leadingIcon={<Plus />}>New task</Button>}
      />
    </div>
  )
}
