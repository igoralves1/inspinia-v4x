import Image from 'next/image'
import Link from 'next/link'

import logoDark from '@/assets/images/logo-black.png'
import logo from '@/assets/images/logo.png'

const AppLogo = () => {
  return (
    <>
      <Link href="/" className="logo-dark">
        <Image src={logoDark} alt="dark logo" height="32" />
      </Link>
      <Link href="/" className="logo-light">
        <Image src={logo} alt="logo" height="32" />
      </Link>
    </>
  )
}

export default AppLogo
