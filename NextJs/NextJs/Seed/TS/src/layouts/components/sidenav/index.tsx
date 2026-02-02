'use client'
import logoDark from '@/assets/images/logo-black.png'
import logoSm from '@/assets/images/logo-sm.png'
import logo from '@/assets/images/logo.png'
import SimplebarClient from '@/components/client-wrapper/SimplebarClient'
import { useLayoutContext } from '@/context/useLayoutContext'
import AppMenu from '@/layouts/components/sidenav/components/AppMenu'
import UserProfile from '@/layouts/components/sidenav/components/UserProfile'
import Image from 'next/image'
import Link from 'next/link'
import { TbMenu4, TbX } from 'react-icons/tb'

const Sidenav = () => {
  const { sidenav, hideBackdrop, changeSideNavSize } = useLayoutContext()

  const toggleSidebar = () => {
    changeSideNavSize(sidenav.size === 'on-hover-active' ? 'on-hover' : 'on-hover-active')
  }

  const closeSidebar = () => {
    const html = document.documentElement
    html.classList.toggle('sidebar-enable')
    hideBackdrop()
  }

  return (
    <div className="sidenav-menu">
      <Link href="/" className="logo">
        <span className="logo logo-light">
          <span className="logo-lg">
            <Image src={logo.src} alt="logo" width={92.3} height={26} />
          </span>
          <span className="logo-sm">
            <Image src={logoSm.src} alt="small logo" width={30.55} height={26} />
          </span>
        </span>

        <span className="logo logo-dark">
          <span className="logo-lg">
            <Image src={logoDark.src} alt="dark logo" width={92.3} height={26} />
          </span>
          <span className="logo-sm">
            <Image src={logoSm.src} alt="small logo" width={30.55} height={26} />
          </span>
        </span>
      </Link>

      <button className="button-on-hover">
        <TbMenu4 onClick={toggleSidebar} className="ti ti-menu-4 fs-22 align-middle" />
      </button>

      <button className="button-close-offcanvas">
        <TbX onClick={closeSidebar} className="align-middle" />
      </button>

      <SimplebarClient id="sidenav" className="scrollbar">
        {sidenav.user && <UserProfile />}
        <AppMenu />
      </SimplebarClient>
    </div>
  )
}

export default Sidenav
