import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Button,
  Kbd,
} from '@kana-consultant/ui-kit'
import { Plus, Settings } from 'lucide-react'

export function TooltipBasicDemo() {
  return (
    <TooltipProvider>
      <div className='flex items-center gap-3'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='secondary' size='icon' aria-label='Add'>
              <Plus />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Create new task</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='secondary' size='icon' aria-label='Settings'>
              <Settings />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Workspace settings</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export function TooltipWithShortcutDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='secondary'>Save</Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className='inline-flex items-center gap-2'>
            Save draft
            <span className='inline-flex items-center gap-1'>
              <Kbd>⌘</Kbd><Kbd>S</Kbd>
            </span>
          </span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
