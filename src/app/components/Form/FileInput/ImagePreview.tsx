'use client'

import { User } from 'lucide-react'
import { useMemo } from 'react'
import { useFileInput } from './Root'

export const ImagePreview = () => {
  const { files } = useFileInput()

  // recalculate it only if change the files, it's expensive for the browser, so it's caching
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }
    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-800" />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previewURL}
      alt="Selected file for preview"
      className="h-16 w-16 rounded-full object-cover"
    ></img>
  )
}
