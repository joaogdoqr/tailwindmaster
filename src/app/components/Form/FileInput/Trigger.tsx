'use client'

import { UploadCloudIcon } from 'lucide-react'
import { useFileInput } from './Root'

export const Trigger = () => {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-r-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloudIcon className="h-5 w-5 text-zinc-600 group-hover:to-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">Click to upload</span>{' '}
          or drag and drop
        </span>
        <span className="text-sx">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
