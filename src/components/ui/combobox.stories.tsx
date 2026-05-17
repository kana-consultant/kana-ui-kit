import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Combobox, MultiCombobox } from './combobox'
import type { TComboboxOption } from './combobox'

const meta: Meta<typeof Combobox> = {
  title: 'Primitives/Combobox',
  component: Combobox,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Combobox>

const frameworks: TComboboxOption[] = [
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'tanstack', label: 'TanStack Start' },
  { value: 'vite', label: 'Vite' },
  { value: 'nuxt', label: 'Nuxt' },
]

const tags: TComboboxOption[] = [
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' },
  { value: 'docs', label: 'Documentation' },
  { value: 'chore', label: 'Chore' },
  { value: 'discussion', label: 'Discussion' },
  { value: 'wontfix', label: "Won't fix", disabled: true },
]

export const Single: Story = {
  render: function SingleRender() {
    const [value, setValue] = useState('')
    return (
      <div className='flex flex-col items-start gap-2'>
        <Combobox
          options={frameworks}
          value={value}
          onChange={setValue}
          placeholder='Pick a framework…'
        />
        <p className='text-xs text-muted-foreground'>Selected: {value || '—'}</p>
      </div>
    )
  },
}

export const Multi: Story = {
  render: function MultiRender() {
    const [value, setValue] = useState<string[]>([])
    return (
      <div className='flex flex-col items-start gap-2'>
        <MultiCombobox
          options={tags}
          value={value}
          onChange={setValue}
          placeholder='Filter by tags…'
        />
        <p className='text-xs text-muted-foreground'>
          Selected: {value.length ? value.join(', ') : '—'}
        </p>
      </div>
    )
  },
}
