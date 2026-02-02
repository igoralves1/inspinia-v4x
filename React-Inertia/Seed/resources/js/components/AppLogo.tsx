import { Link } from '@inertiajs/react';

import logoDark from '@/images/logo-black.png'
import logo from '@/images/logo.png'

const AppLogo = () => {
  return (
    <>
      <Link href="/" className="logo-dark">
        <img src={logoDark} alt="dark logo" height="32" />
      </Link>
      <Link href="/" className="logo-light">
        <img src={logo} alt="logo" height="32" />
      </Link>
    </>
  )
}

export default AppLogo  
