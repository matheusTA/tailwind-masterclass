import { ComponentProps } from 'react'

type TextAreaInputProps = ComponentProps<'textarea'>

export function TextAreaInput(props: TextAreaInputProps) {
  return (
    <textarea
      {...props}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-2 py-2 shadow-sm"
    />
  )
}
