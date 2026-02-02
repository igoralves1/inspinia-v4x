import MainLayout from '@/layouts/MainLayout'
import { ChildrenType } from '@/types'

const Layout = ({ children }: ChildrenType) => {
  return <MainLayout>{children}</MainLayout>
}

export default Layout
