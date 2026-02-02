import React from 'react'

export type ChildrenType = Readonly<{ children: React.ReactNode }>

export type FileType = File & {
  path?: string
  preview?: string
  formattedSize?: string
}

export type VariantType = 'primary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'secondary' | 'purple' | 'light'
