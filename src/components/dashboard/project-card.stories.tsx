import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProjectCard } from './project-card'
import { fxProjects } from '@/stories/fixtures'

const meta: Meta<typeof ProjectCard> = {
  title: 'Dashboard/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof ProjectCard>

export const Single: Story = {
  args: { project: fxProjects[0] },
  decorators: [(Story) => <div className='w-80'><Story /></div>],
}

export const Grid: Story = {
  render: () => (
    <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {fxProjects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  ),
}
