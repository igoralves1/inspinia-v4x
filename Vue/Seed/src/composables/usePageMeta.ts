import { appDescription, appFavicon, appTitle, author } from '@/helpers'
import { useHead } from '@vueuse/head'

export const usePageMeta = (pageTitle?: string, pageDescription?: string, pageFavicon?: string) => {
  useHead({
    title: pageTitle ? `${pageTitle} | ${appTitle}` : appTitle,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'author', content: author },
      { name: 'description', content: pageDescription ?? appDescription },
    ],
    link: [{ rel: 'shortcut icon', href: pageFavicon ?? appFavicon }],
  })
}
