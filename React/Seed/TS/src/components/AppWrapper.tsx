import { LayoutProvider } from '@/context/useLayoutContext'
import { type ChildrenType } from '@/types'

const AppWrapper = ({ children }: ChildrenType) => {
  return <LayoutProvider>{children}</LayoutProvider>
}

export default AppWrapper
