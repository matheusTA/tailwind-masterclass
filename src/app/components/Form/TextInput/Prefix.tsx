import { ComponentProps } from 'react'

type TextInputPrefixProps = ComponentProps<'div'>

export function TextInputPrefix(props: TextInputPrefixProps) {
  return <div {...props} />
}
