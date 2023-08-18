'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextValue = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onDeleteFile: (file: File) => void
}

const FileInputContext = createContext({} as FileInputContextValue)

type FileInputRootProps = ComponentProps<'div'>

export function FileInputRoot(props: FileInputRootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  function onDeleteFile(file: File) {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file))
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onDeleteFile }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInputContext = () => useContext(FileInputContext)
