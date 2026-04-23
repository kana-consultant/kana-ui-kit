import { Skeleton } from '@kana-consultant/ui-kit'

export function SkeletonCardDemo() {
  return (
    <div className='w-full max-w-sm space-y-3 rounded-xl border border-border bg-surface p-4'>
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
  )
}

export function SkeletonListDemo() {
  return (
    <div className='w-full max-w-sm space-y-2'>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className='flex items-center gap-3 rounded-lg border border-border bg-surface p-3'>
          <Skeleton className='size-8 rounded-full' />
          <div className='flex-1 space-y-1.5'>
            <Skeleton className='h-3 w-1/2' />
            <Skeleton className='h-2.5 w-1/3' />
          </div>
          <Skeleton className='h-5 w-12 rounded-full' />
        </div>
      ))}
    </div>
  )
}
