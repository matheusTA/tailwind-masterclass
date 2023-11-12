import { formatBytes } from '@/utils/format-bytes'
import { UploadCloud, Trash2, CheckCircle2 } from 'lucide-react'
import { Button } from '../../Button'
import { useFileInputContext } from './Root'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },
  variants: {
    state: {
      error: {
        container: 'border-red-500 bg-red-50',
        icon: 'bg-red-100 text-red-600',
        deleteButton: 'text-red-700 hover:text-red-900',
      },
      progress: {
        container: 'border-violet-200 bg-violet-50',
      },
      complete: {
        container: 'border-green-500 bg-green-50',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  file: File
}

export function FileItem({ file, state }: FileItemProps) {
  const { onDeleteFile } = useFileInputContext()
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-700">
              Upload falhou, tente novamente
            </span>
            <span className="text-sm text-red-600">{file.name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-red-700 hover:text-red-900"
          >
            Tente novamente
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">
              {file.name}
            </span>
            <span className="text-sm text-zinc-500">
              {formatBytes(file.size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-violet-100">
              <div
                className="h-2 w-4/5 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>

            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          type="button"
          variant="ghost"
          className={deleteButton()}
          onClick={() => onDeleteFile(file)}
        >
          <Trash2 className="h-5 w-5 " />
        </Button>
      )}
    </div>
  )
}
