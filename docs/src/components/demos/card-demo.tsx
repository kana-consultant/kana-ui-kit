import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, Badge } from '@kana-consultant/ui-kit'

export function CardBasicDemo() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Sprint velocity</CardTitle>
        <CardDescription>Last 4 sprints averaged 38 points/sprint.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>
          Consistent improvement over the quarter with reduced carry-over.
        </p>
      </CardContent>
      <CardFooter className='justify-end'>
        <Button variant='ghost' size='sm'>Dismiss</Button>
        <Button size='sm'>View report</Button>
      </CardFooter>
    </Card>
  )
}

export function CardMinimalDemo() {
  return (
    <Card className='w-full max-w-sm p-5'>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-xs font-medium uppercase tracking-wider text-muted-foreground'>Revenue</p>
          <p className='mt-1 text-3xl font-semibold tracking-tight'>$24,580</p>
          <p className='mt-1 text-xs text-muted-foreground'>This month</p>
        </div>
        <Badge tone='success' dot>+12%</Badge>
      </div>
    </Card>
  )
}
