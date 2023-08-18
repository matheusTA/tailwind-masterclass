'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInputContext } from './Root'

type FileInputControlProps = ComponentProps<'input'>

export function FileInputControl({
  multiple = false,
  ...props
}: FileInputControlProps) {
  const { id, onFilesSelected } = useFileInputContext()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)
    onFilesSelected(files, multiple)
  }
  return (
    <input
      id={id}
      type="file"
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
