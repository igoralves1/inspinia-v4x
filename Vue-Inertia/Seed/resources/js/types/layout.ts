export type LayoutSkinType =
  | 'classic'
  | 'material'
  | 'modern'
  | 'saas'
  | 'flat'
  | 'minimal'
  | 'galaxy'

export type LayoutThemeType = 'light' | 'dark' | 'system'

export type LayoutOrientationType = 'vertical' | 'horizontal'

export type TopBarType = {
  color: 'light' | 'dark' | 'gray' | 'gradient'
}

export type SideNavType = {
  size: 'default' | 'compact' | 'condensed' | 'on-hover' | 'on-hover-active' | 'offcanvas'
  color: 'light' | 'dark' | 'gray' | 'gradient' | 'image'
  user: boolean
}

export type LayoutPositionType = 'fixed' | 'scrollable'

export type LayoutWidthType = 'fluid' | 'boxed'

export type LayoutType = {
  skin: LayoutSkinType
  theme: LayoutThemeType
  orientation: LayoutOrientationType
  topBar: TopBarType
  sidenav: SideNavType
  position: LayoutPositionType
  width: LayoutWidthType
  isMobileMenuOpen: boolean
}

export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  parentKey?: string
  target?: string
  isDisabled?: boolean
  isSpecial?: boolean
  children?: MenuItemType[]
}
