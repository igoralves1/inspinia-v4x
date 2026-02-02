import Loader from '@/components/Loader'
import { useLayoutContext } from '@/context/useLayoutContext'
import HorizontalLayout from '@/layouts/HorizontalLayout'
import VerticalLayout from '@/layouts/VerticalLayout'
import { Fragment, useEffect, useState } from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  const { orientation } = useLayoutContext()

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return <Loader height="100vh" />

  return (
    <Fragment>
      {orientation === 'vertical' && (
        <VerticalLayout>
          <Outlet />
        </VerticalLayout>
      )}
      {orientation === 'horizontal' && (
        <HorizontalLayout>
          <Outlet />
        </HorizontalLayout>
      )}
    </Fragment>
  )
}

export default MainLayout
