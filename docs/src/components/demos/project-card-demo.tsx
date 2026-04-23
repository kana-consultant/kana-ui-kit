import { ProjectCard } from '@kana-consultant/ui-kit'
import { projects } from './fixtures'

export function ProjectCardSingleDemo() {
  return (
    <div className='w-full max-w-sm'>
      <ProjectCard project={projects[0]} />
    </div>
  )
}

export function ProjectCardGridDemo() {
  return (
    <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
