'use client'

import { useFileInputContext } from './Root'

import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInputContext()

  return (
    <div className="mt-4 space-y-4">
      {files.map((file) => (
        <FileItem key={file.name} file={file} state="error" />
      ))}
    </div>
  )
}
