import { StatCard } from '@kana-consultant/ui-kit'
import { stats } from './fixtures'

export function StatCardSingleDemo() {
  return (
    <div className='w-full max-w-sm'>
      <StatCard {...stats[0]} />
    </div>
  )
}

export function StatCardGridDemo() {
  return (
    <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((s) => (
        <StatCard key={s.id} {...s} />
      ))}
    </div>
  )
}
