import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { AvatarGroup } from './avatar-group'

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { size: 'md' },
  argTypes: { size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] } },
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>KA</AvatarFallback>
    </Avatar>
  ),
}

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src='https://i.pravatar.cc/80?u=ava' alt='Ava' />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup size='sm' max={3}>
      <Avatar>
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>ML</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>KY</AvatarFallback>
      </Avatar>
    </AvatarGroup>
  ),
}
