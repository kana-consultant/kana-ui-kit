import { useFieldContext } from './form-context'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import type { TInputProps } from '@/components/ui/input'
import type { TTextareaProps } from '@/components/ui/textarea'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type TBaseFieldProps = {
  label?: string
  description?: string
  required?: boolean
  className?: string
}

function FieldError({ errors }: { errors: unknown[] }) {
  const first = errors.find(Boolean)
  if (!first) return null
  const text = typeof first === 'string' ? first : (first as { message?: string }).message
  if (!text) return null
  return <p className='text-xs text-danger'>{text}</p>
}

function FieldFrame({
  label,
  description,
  required,
  htmlFor,
  error,
  className,
  children,
}: TBaseFieldProps & { htmlFor?: string; error: ReactNode; children: ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      )}
      {children}
      {description && !error && <p className='text-xs text-muted-foreground'>{description}</p>}
      {error}
    </div>
  )
}

export type TTextFieldProps = TBaseFieldProps & Omit<TInputProps, 'value' | 'onChange' | 'name'>

export function TextField({ label, description, required, className, ...inputProps }: TTextFieldProps) {
  const field = useFieldContext<string>()
  const id = field.name
  const errors = field.state.meta.errors as unknown[]
  const invalid = errors.length > 0 && field.state.meta.isTouched
  return (
    <FieldFrame
      label={label}
      description={description}
      required={required}
      htmlFor={id}
      className={className}
      error={invalid ? <FieldError errors={errors} /> : null}
    >
      <Input
        id={id}
        name={field.name}
        value={field.state.value ?? ''}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        invalid={invalid}
        {...inputProps}
      />
    </FieldFrame>
  )
}

export type TTextareaFieldProps = TBaseFieldProps & Omit<TTextareaProps, 'value' | 'onChange' | 'name'>

export function TextareaField({
  label,
  description,
  required,
  className,
  ...textareaProps
}: TTextareaFieldProps) {
  const field = useFieldContext<string>()
  const id = field.name
  const errors = field.state.meta.errors as unknown[]
  const invalid = errors.length > 0 && field.state.meta.isTouched
  return (
    <FieldFrame
      label={label}
      description={description}
      required={required}
      htmlFor={id}
      className={className}
      error={invalid ? <FieldError errors={errors} /> : null}
    >
      <Textarea
        id={id}
        name={field.name}
        value={field.state.value ?? ''}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        invalid={invalid}
        {...textareaProps}
      />
    </FieldFrame>
  )
}

export type TCheckboxFieldProps = TBaseFieldProps

export function CheckboxField({ label, description, className }: TCheckboxFieldProps) {
  const field = useFieldContext<boolean>()
  const id = field.name
  return (
    <div className={cn('flex items-start gap-2.5', className)}>
      <Checkbox
        id={id}
        checked={field.state.value}
        onCheckedChange={(v) => field.handleChange(v === true)}
      />
      <div className='flex flex-col gap-0.5'>
        {label && (
          <Label htmlFor={id} className='leading-none'>
            {label}
          </Label>
        )}
        {description && <p className='text-xs text-muted-foreground'>{description}</p>}
      </div>
    </div>
  )
}

export type TSwitchFieldProps = TBaseFieldProps

export function SwitchField({ label, description, className }: TSwitchFieldProps) {
  const field = useFieldContext<boolean>()
  const id = field.name
  return (
    <div className={cn('flex items-center justify-between gap-3', className)}>
      <div className='flex flex-col gap-0.5'>
        {label && (
          <Label htmlFor={id} className='leading-none'>
            {label}
          </Label>
        )}
        {description && <p className='text-xs text-muted-foreground'>{description}</p>}
      </div>
      <Switch id={id} checked={field.state.value} onCheckedChange={(v) => field.handleChange(v)} />
    </div>
  )
}
