import { forwardRef } from 'react'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import type { TMember } from './types'

export type TTeamMemberCardProps = {
  member: TMember
  online?: boolean
  className?: string
}

export const TeamMemberCard = forwardRef<HTMLDivElement, TTeamMemberCardProps>(function TeamMemberCard(
  { member, online, className },
  ref,
) {
  return (
    <Card ref={ref} className={cn('flex items-center gap-3 p-4', className)}>
      <div className='relative'>
        <Avatar>
          {member.avatarUrl && <AvatarImage src={member.avatarUrl} alt={member.name} />}
          <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        {online && (
          <span className='absolute -bottom-0.5 -right-0.5 inline-flex size-3 items-center justify-center rounded-full bg-success ring-2 ring-surface' />
        )}
      </div>
      <div className='min-w-0 flex-1'>
        <p className='truncate text-sm font-semibold text-foreground'>{member.name}</p>
        <p className='truncate text-xs text-muted-foreground'>{member.role ?? member.email}</p>
      </div>
      <Button variant='ghost' size='icon-sm' aria-label='Message'>
        <Mail />
      </Button>
    </Card>
  )
})
