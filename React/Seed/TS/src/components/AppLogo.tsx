import { Image } from 'react-bootstrap'
import { Link } from 'react-router'

import logoDark from '@/assets/images/logo-black.png'
import logo from '@/assets/images/logo.png'

const AppLogo = () => {
  return (
    <>
      <Link to="/" className="logo-dark">
        <Image src={logoDark} alt="dark logo" height="32" />
      </Link>
      <Link to="/" className="logo-light">
        <Image src={logo} alt="logo" height="32" />
      </Link>
    </>
  )
}

export default AppLogo
