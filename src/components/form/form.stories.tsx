import type { Meta, StoryObj } from '@storybook/react-vite'
import { z } from 'zod'
import { useAppForm } from './form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const titleSchema = z.string().min(3, 'Title must be at least 3 characters')
const descriptionSchema = z.string().max(200, 'Keep it under 200 characters')

type TTaskFormValues = {
  title: string
  description: string
  priority: string
  notify: boolean
  remindMe: boolean
}

const meta: Meta = {
  title: 'Form/Tanstack Form',
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj

export const CreateTaskForm: Story = {
  render: () => {
    const form = useAppForm({
      defaultValues: {
        title: '',
        description: '',
        priority: 'medium',
        notify: true,
        remindMe: false,
      } satisfies TTaskFormValues,
      onSubmit: async ({ value }) => {
        await new Promise((r) => setTimeout(r, 700))
        alert(`Submitted: ${JSON.stringify(value, null, 2)}`)
      },
    })

    return (
      <Card className='w-[480px]'>
        <CardHeader>
          <CardTitle>Create task</CardTitle>
          <CardDescription>Uses TanStack Form with Zod validation.</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className='flex flex-col gap-4'
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              void form.handleSubmit()
            }}
          >
            <form.AppField name='title' validators={{ onChange: titleSchema, onBlur: titleSchema }}>
              {(field) => (
                <field.TextField
                  label='Title'
                  required
                  placeholder='What needs doing?'
                />
              )}
            </form.AppField>
            <form.AppField name='description' validators={{ onChange: descriptionSchema }}>
              {(field) => (
                <field.TextareaField
                  label='Description'
                  description='Optional context for the assignee.'
                  placeholder='Add details...'
                />
              )}
            </form.AppField>
            <form.AppField name='notify'>
              {(field) => (
                <field.SwitchField
                  label='Notify assignees'
                  description='Send an email when this task is created.'
                />
              )}
            </form.AppField>
            <form.AppField name='remindMe'>
              {(field) => (
                <field.CheckboxField
                  label='Remind me 1 hour before due'
                />
              )}
            </form.AppField>
            <form.AppForm>
              <div className='mt-2 flex justify-end gap-2'>
                <form.ResetButton>Reset</form.ResetButton>
                <form.SubmitButton>Create task</form.SubmitButton>
              </div>
            </form.AppForm>
          </form>
        </CardContent>
      </Card>
    )
  },
}
