import { useFormContext } from './form-context'
import { Button } from '@/components/ui/button'
import type { TButtonProps } from '@/components/ui/button'

export type TSubmitButtonProps = Omit<TButtonProps, 'type' | 'loading' | 'disabled'> & {
  disabledWhenPristine?: boolean
}

export function SubmitButton({ children, disabledWhenPristine, ...props }: TSubmitButtonProps) {
  const form = useFormContext()
  return (
    <form.Subscribe
      selector={(state) => ({
        canSubmit: state.canSubmit,
        isSubmitting: state.isSubmitting,
        isDirty: state.isDirty,
      })}
    >
      {({ canSubmit, isSubmitting, isDirty }) => (
        <Button
          type='submit'
          loading={isSubmitting}
          disabled={!canSubmit || (disabledWhenPristine && !isDirty)}
          {...props}
        >
          {children}
        </Button>
      )}
    </form.Subscribe>
  )
}

export type TResetButtonProps = Omit<TButtonProps, 'type' | 'onClick'>

export function ResetButton({ children = 'Reset', variant = 'ghost', ...props }: TResetButtonProps) {
  const form = useFormContext()
  return (
    <Button
      type='button'
      variant={variant}
      onClick={() => form.reset()}
      {...props}
    >
      {children}
    </Button>
  )
}
