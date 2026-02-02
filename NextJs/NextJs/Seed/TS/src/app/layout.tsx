import type { Metadata } from 'next'

import AppWrapper from '@/components/AppWrapper'

import favicon from '@/assets/images/favicon.ico'
import { appDescription, appTitle } from '@/helpers'
import { ChildrenType } from '@/types'

import 'flatpickr/dist/flatpickr.min.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'simplebar-react/dist/simplebar.min.css'

import '@/assets/scss/app.scss'

import { Open_Sans, Roboto } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    default: appTitle,
    template: '%s | ' + appTitle,
  },
  description: appDescription,
  icons: [favicon.src],
}

const RootLayout = ({ children }: ChildrenType) => {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}

export default RootLayout
