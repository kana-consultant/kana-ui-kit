import { TeamMemberCard } from '@kana-consultant/ui-kit'
import { members } from './fixtures'

export function TeamMemberCardSingleDemo() {
  return (
    <div className='w-full max-w-sm'>
      <TeamMemberCard member={members[0]} online />
    </div>
  )
}

export function TeamMemberCardGridDemo() {
  return (
    <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2'>
      {members.map((m, i) => (
        <TeamMemberCard key={m.id} member={m} online={i % 2 === 0} />
      ))}
    </div>
  )
}
