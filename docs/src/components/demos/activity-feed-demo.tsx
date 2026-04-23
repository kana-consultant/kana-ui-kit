import { ActivityFeed } from '@kana-consultant/ui-kit'
import { activity } from './fixtures'

export function ActivityFeedDemo() {
  return (
    <div className='w-full max-w-md rounded-xl border border-border bg-surface p-5'>
      <ActivityFeed items={activity} />
    </div>
  )
}
