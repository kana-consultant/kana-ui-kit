import type { Meta, StoryObj } from '@storybook/react-vite'
import { TeamMemberCard } from './team-member-card'
import { fxMembers } from '@/stories/fixtures'

const meta: Meta<typeof TeamMemberCard> = {
  title: 'Dashboard/TeamMemberCard',
  component: TeamMemberCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof TeamMemberCard>

export const Grid: Story = {
  render: () => (
    <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2'>
      {fxMembers.map((m, i) => (
        <TeamMemberCard key={m.id} member={m} online={i % 2 === 0} />
      ))}
    </div>
  ),
}
