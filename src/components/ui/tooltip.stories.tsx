import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { Button } from './button'

const meta: Meta<typeof Tooltip> = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='secondary'>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Tasks assigned this week</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}
