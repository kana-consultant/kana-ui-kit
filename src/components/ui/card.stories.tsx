import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'
import { Button } from './button'

const meta: Meta<typeof Card> = {
  title: 'Primitives/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Card>

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card className='w-80'>
      <CardHeader>
        <CardTitle>Sprint velocity</CardTitle>
        <CardDescription>Last 4 sprints averaged 38 points/sprint.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>
          Consistent improvement over the last quarter with reduced carry-over tickets.
        </p>
      </CardContent>
      <CardFooter className='justify-end'>
        <Button variant='ghost' size='sm'>Dismiss</Button>
        <Button size='sm'>View report</Button>
      </CardFooter>
    </Card>
  ),
}
