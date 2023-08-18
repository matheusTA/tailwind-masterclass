import { ComponentProps } from 'react'

type TextInputControlProps = ComponentProps<'input'>

export function TextInputControl(props: TextInputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}
