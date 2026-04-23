import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/dashboard/theme-toggle'

export function Playground() {
  return (
    <div className='mx-auto flex h-full max-w-5xl flex-col items-center justify-center gap-6 p-8'>
      <h1 className='text-3xl font-bold tracking-tight'>kana-ui-kit</h1>
      <p className='text-muted-foreground'>
        Run <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>pnpm storybook</code> to
        browse components.
      </p>
      <div className='flex items-center gap-3'>
        <Button>Get started</Button>
        <Button variant='secondary'>Docs</Button>
        <ThemeToggle />
      </div>
    </div>
  )
}
