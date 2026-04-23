import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toggleTheme, useResolvedTheme } from '@/stores/theme-store'

export type TThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: TThemeToggleProps) {
  const resolved = useResolvedTheme()
  const isDark = resolved === 'dark'
  return (
    <Button
      variant='ghost'
      size='icon'
      aria-label='Toggle theme'
      onClick={toggleTheme}
      className={className}
    >
      <span className='relative inline-flex size-4 items-center justify-center'>
        <Sun
          className={
            'absolute inset-0 transition-all ' +
            (isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100')
          }
        />
        <Moon
          className={
            'absolute inset-0 transition-all ' +
            (isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0')
          }
        />
      </span>
    </Button>
  )
}
