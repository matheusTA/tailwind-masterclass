import { ComponentProps } from 'react'

type TextInputRootProps = ComponentProps<'div'>

export function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
