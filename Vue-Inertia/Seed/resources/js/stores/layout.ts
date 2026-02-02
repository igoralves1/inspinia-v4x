import { defineStore } from 'pinia'
import type {
  LayoutOrientationType,
  LayoutPositionType,
  LayoutSkinType,
  LayoutThemeType,
  LayoutType,
  LayoutWidthType,
  SideNavType,
  TopBarType,
} from '@/types/layout'
import { toggleAttribute } from '@/helpers/layout'
import { useSystemTheme } from '@/composables/useSystemTheme'
import { ref } from 'vue'

const INIT_STATE: LayoutType = {
  skin: 'classic',
  theme: 'light',
  orientation: 'vertical',
  sidenav: {
    size: 'default',
    color: 'dark',
    user: true,
  },
  topBar: {
    color: 'light',
  },
  position: 'fixed',
  width: 'fluid',
  isMobileMenuOpen: false,
}

export const useLayout = defineStore(
  'layout',
  () => {
    const layout = ref<LayoutType>({ ...INIT_STATE })

    const systemTheme = useSystemTheme()

    const setSkin = (nSkin: LayoutSkinType, persist = true) => {
      toggleAttribute('data-skin', nSkin)
      if (persist) layout.value.skin = nSkin
    }

    const setTheme = (nTheme: LayoutThemeType, persist = true) => {
      const resolvedTheme = nTheme === 'system' ? systemTheme.value : nTheme
      toggleAttribute('data-bs-theme', resolvedTheme)
      if (persist) layout.value.theme = nTheme
    }

    const setOrientation = (nOrientation: LayoutOrientationType, persist = true) => {
      toggleAttribute('data-layout', nOrientation === 'horizontal' ? 'topnav' : '')
      if (persist) layout.value.orientation = nOrientation
    }

    const setTopBarColor = (nColor: TopBarType['color'], persist = true) => {
      toggleAttribute('data-topbar-color', nColor)
      if (persist) layout.value.topBar = { ...layout.value.topBar, color: nColor }
    }

    const setSideNavColor = (nColor: SideNavType['color'], persist = true) => {
      toggleAttribute('data-menu-color', nColor)
      if (persist) layout.value.sidenav = { ...layout.value.sidenav, color: nColor }
    }

    const setSideNavSize = (nSize: SideNavType['size'], persist = true) => {
      toggleAttribute('data-sidenav-size', nSize)
      if (persist) layout.value.sidenav = { ...layout.value.sidenav, size: nSize }
    }

    const setSideNavUser = (nValue: SideNavType['user'], persist = true) => {
      toggleAttribute('data-sidenav-user', `${nValue}`)
      if (persist) layout.value.sidenav = { ...layout.value.sidenav, user: nValue }
    }

    const toggleSideNavUser = (persist = true) => {
      setSideNavUser(!layout.value.sidenav.user, persist)
    }

    const toggleMobileMenu = () => {
      layout.value.isMobileMenuOpen = !layout.value.isMobileMenuOpen
      const html = document.documentElement
      html.classList.toggle('sidebar-enable', layout.value.isMobileMenuOpen)
    }

    const setPosition = (nPosition: LayoutPositionType, persist = true) => {
      toggleAttribute('data-layout-position', nPosition)
      if (persist) layout.value.position = nPosition
    }

    const setWidth = (nWidth: LayoutWidthType, persist = true) => {
      toggleAttribute('data-layout-width', nWidth)
      if (persist) layout.value.width = nWidth
    }

    const isCustomizerOpen = ref<boolean>(false)

    const toggleCustomizer = () => {
      isCustomizerOpen.value = !isCustomizerOpen.value
    }

    const customizer = {
      isCustomizerOpen,
      toggleCustomizer,
    }

    const init = () => {
      setSkin(layout.value.skin)
      setTheme(layout.value.theme)
      setOrientation(layout.value.orientation)
      setTopBarColor(layout.value.topBar.color)
      setSideNavColor(layout.value.sidenav.color)
      setSideNavSize(layout.value.sidenav.size)
      setSideNavUser(layout.value.sidenav.user)
      setPosition(layout.value.position)
      setWidth(layout.value.width)
    }

    const reset = () => {
      setSkin(INIT_STATE.skin)
      setTheme(INIT_STATE.theme)
      setOrientation(INIT_STATE.orientation)
      setTopBarColor(INIT_STATE.topBar.color)
      setSideNavColor(INIT_STATE.sidenav.color)
      setSideNavSize(INIT_STATE.sidenav.size)
      setSideNavUser(INIT_STATE.sidenav.user)
      setPosition(INIT_STATE.position)
      setWidth(INIT_STATE.width)
    }

    return {
      layout,
      setSkin,
      setTheme,
      setOrientation,
      setTopBarColor,
      setSideNavColor,
      setSideNavSize,
      setSideNavUser,
      toggleSideNavUser,
      toggleMobileMenu,
      setPosition,
      setWidth,
      isCustomizerOpen,
      toggleCustomizer,
      init,
      reset,
      customizer,
    }
  },
  {
    persist: true,
  },
)
