'use client'
import type { ChildrenType } from '@/types'
import SimpleBar, { Props } from 'simplebar-react'

type SimplebarClientProps = ChildrenType & Props

const SimplebarClient = ({ children, ...restProps }: SimplebarClientProps) => {
  return <SimpleBar {...restProps}> {children}</SimpleBar>
}

export default SimplebarClient
