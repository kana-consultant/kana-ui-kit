import { Kbd } from '@kana-consultant/ui-kit'

export function KbdDemo() {
  return (
    <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground'>
      <span className='inline-flex items-center gap-1'>Open search <Kbd>⌘K</Kbd></span>
      <span className='inline-flex items-center gap-1'>
        Save <Kbd>⌘</Kbd><Kbd>S</Kbd>
      </span>
      <span className='inline-flex items-center gap-1'>
        Undo <Kbd>⌘</Kbd><Kbd>Z</Kbd>
      </span>
      <span className='inline-flex items-center gap-1'>
        Escape <Kbd>Esc</Kbd>
      </span>
    </div>
  )
}
