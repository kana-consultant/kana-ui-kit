import { createFormHook } from '@tanstack/react-form'
import { fieldContext, formContext } from './form-context'
import { CheckboxField, SwitchField, TextField, TextareaField } from './form-field'
import { ResetButton, SubmitButton } from './form-actions'

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    TextField,
    TextareaField,
    CheckboxField,
    SwitchField,
  },
  formComponents: {
    SubmitButton,
    ResetButton,
  },
  fieldContext,
  formContext,
})
