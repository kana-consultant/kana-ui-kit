import { Separator } from '@kana-consultant/ui-kit'

export function SeparatorHorizontalDemo() {
  return (
    <div className='w-full max-w-sm'>
      <div>
        <h4 className='text-sm font-semibold'>@kana-consultant/ui-kit</h4>
        <p className='text-sm text-muted-foreground'>A UI kit for back-office apps.</p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center gap-4 text-sm'>
        <span>Docs</span>
        <Separator orientation='vertical' />
        <span>Storybook</span>
        <Separator orientation='vertical' />
        <span>GitHub</span>
      </div>
    </div>
  )
}
