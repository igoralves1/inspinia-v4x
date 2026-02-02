<template>
  <BOffcanvas
    v-model="customizer.isCustomizerOpen"
    placement="end"
    class="overflow-hidden"
    header-class="p-0"
    body-class="p-0"
  >
    <template #header>
      <div
        class="d-flex justify-content-between text-bg-primary gap-2 p-3"
        :style="{ backgroundImage: `url(${bgPattern})` }"
      >
        <div>
          <h5 class="mb-1 fw-bold text-white text-uppercase">Admin Customizer</h5>
          <p class="text-white text-opacity-75 fst-italic fw-medium mb-0">
            Easily configure layout, styles, and preferences for your admin interface.
          </p>
        </div>

        <div class="flex-grow-0">
          <button
            type="button"
            class="d-block btn btn-sm bg-white bg-opacity-25 text-white rounded-circle btn-icon"
            @click="customizer.toggleCustomizer"
          >
            <Icon icon="tabler:x" class="fs-lg" />
          </button>
        </div>
      </div>
    </template>

    <simplebar class="p-0 h-100" data-simplebar>
      <div class="p-3 border-bottom border-dashed">
        <h5 class="mb-3 fw-bold">Select Theme</h5>
        <BRow class="g-3">
          <BCol v-for="(item, idx) in skinOptions" :key="idx" cols="6">
            <div class="form-check card-radio">
              <input
                :id="`skin-${item.skin}`"
                class="form-check-input"
                type="radio"
                name="data-skin"
                :disabled="item.disabled || false"
                :value="item.skin"
                :checked="layout.skin === item.skin"
                @change="() => setSkin(item.skin)"
              />
              <label class="form-check-label p-0 w-100" :for="`skin-${item.skin}`">
                <img :src="item.image" alt="layout-img" class="img-fluid w-100" />
              </label>
            </div>
            <h5 class="text-center text-muted mt-2 mb-0">{{ toPascalCase(item.skin) }}</h5>
          </BCol>
        </BRow>
      </div>

      <div class="p-3 border-bottom border-dashed">
        <h5 class="mb-3 fw-bold">Color Scheme</h5>
        <BRow>
          <BCol v-for="(item, idx) in themeOptions" :key="idx" cols="4">
            <div class="form-check card-radio">
              <input
                :id="`theme-${item.theme}`"
                class="form-check-input"
                type="radio"
                name="data-bs-theme"
                :value="item.theme"
                :checked="layout.theme === item.theme"
                @change="() => setTheme(item.theme)"
              />
              <label class="form-check-label p-0 w-100" :for="`theme-${item.theme}`">
                <img :src="item.image" alt="layout-img" class="img-fluid" />
              </label>
            </div>
            <h5 class="text-center text-muted mt-2 mb-0">{{ toPascalCase(item.theme) }}</h5>
          </BCol>
        </BRow>
      </div>

      <div class="p-3 border-bottom border-dashed">
        <h5 class="mb-3 fw-bold">Orientation</h5>
        <BRow>
          <BCol v-for="(item, idx) in orientationOptions" :key="idx" cols="4">
            <div class="form-check card-radio">
              <input
                :id="`orientation-${item.orientation}`"
                class="form-check-input"
                type="radio"
                name="data-layout"
                :value="item.orientation"
                :checked="layout.orientation === item.orientation"
                @change="() => setOrientation(item.orientation)"
              />
              <label class="form-check-label p-0 w-100" :for="`orientation-${item.orientation}`">
                <img :src="item.image" alt="layout-img" class="img-fluid" />
              </label>
            </div>
            <h5 class="text-center text-muted mt-2 mb-0">{{ toPascalCase(item.orientation) }}</h5>
          </BCol>
        </BRow>
      </div>

      <div class="p-3 border-bottom border-dashed">
        <h5 class="mb-3 fw-bold">Topbar Color</h5>

        <BRow class="g-3">
          <BCol v-for="(item, idx) in topBarColorOptions" :key="idx" cols="4">
            <div class="form-check card-radio">
              <input
                :id="`topbar-color-${item.color}`"
                class="form-check-input"
                type="radio"
                name="data-topbar-color"
                :value="item.color"
                :checked="layout.topBar.color === item.color"
                @change="() => setTopBarColor(item.color)"
              />
              <label class="form-check-label p-0 w-100" :for="`topbar-color-${item.color}`">
                <img :src="item.image" alt="layout-img" class="img-fluid" />
              </label>
            </div>
            <h5 class="text-center text-muted mt-2 mb-0">{{ toPascalCase(item.color) }}</h5>
          </BCol>
        </BRow>
      </div>

      <div class="p-3 border-bottom border-dashed">
        <h5 class="mb-3 fw-bold">Sidenav Color</h5>

        <BRow class="g-3">
          <BCol v-for="(item, idx) in sidenavColorOptions" :key="idx" cols="4">
            <div class="form-check card-radio">
              <input
                :id="`sidenav-color-${item.color}`"
                class="form-check-input"
                type="radio"
                name="data-menu-color"
                :value="item.color"
                :checked="layout.sidenav.color === item.color"
                @change="() => setSideNavColor(item.color)"
              />
              <label class="form-check-label p-0 w-100" :for="`sidenav-color-${item.color}`">
                <img :src="item.image" alt="layout-img" class="img-fluid" />
              </label>
            </div>
            <h5 class="text-center text-muted mt-2 mb-0">{{ toPascalCase(item.color) }}</h5>
          </BCol>
        </BRow>
      </div>

      <div class="p-3 border-bottom border-dashed">
        <h5 class="mb-3 fw-bold">Sidebar Size</h5>

        <BRow class="row g-3">
          <BCol v-for="(item, idx) in sidenavSizeOptions" :key="idx" cols="4">
            <div class="form-check card-radio">
              <input
                :id="`sidenav-size-${item.size}`"
                class="form-check-input"
                type="radio"
                name="data-sidenav-size"
                :value="item.size"
                :checked="layout.sidenav.size === item.size"
                @change="() => setSideNavSize(item.size)"
              />
              <label class="form-check-label p-0 w-100" :for="`sidenav-size-${item.size}`">
                <img :src="item.image" alt="layout-img" class="img-fluid" />
              </label>
            </div>
            <h5 class="text-center text-muted mt-2 mb-0">{{ toPascalCase(item.label) }}</h5>
          </BCol>
        </BRow>
      </div>

      <div class="p-3 border-bottom border-dashed">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="fw-bold mb-0">Layout Position</h5>

          <div class="btn-group radio" role="group">
            <template v-for="(item, idx) in layoutPositionOptions" :key="idx">
              <input
                :id="`layout-position-${item.position}`"
                type="radio"
                class="btn-check"
                name="data-layout-position"
                :value="item.position"
                :checked="layout.position === item.position"
                @change="() => setPosition(item.position)"
              />
              <label
                class="btn btn-sm btn-soft-warning w-sm"
                :for="`layout-position-${item.position}`"
                >{{ toPascalCase(item.position) }}</label
              >
            </template>
          </div>
        </div>
      </div>

      <div class="p-3">
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="mb-0">
            <label class="fw-bold m-0" for="sidenav-user">Sidebar User Info</label>
          </h5>

          <div class="form-check form-switch fs-lg">
            <input
              id="sidenav-user"
              :checked="layout.sidenav.user"
              type="checkbox"
              class="form-check-input"
              name="data-sidenav-user"
              @change="() => toggleSideNavUser()"
            />
          </div>
        </div>
      </div>
    </simplebar>

    <template #footer>
      <div class="border-top p-3 text-center">
        <BRow>
          <BCol cols="6">
            <BButton variant="light" class="fw-semibold py-2 w-100" @click="reset">Reset</BButton>
          </BCol>
          <BCol cols="6">
            <a
              href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
              target="_blank"
              class="btn btn-danger bg-gradient py-2 fw-semibold w-100"
              >Buy Now</a
            >
          </BCol>
        </BRow>
      </div>
    </template>
  </BOffcanvas>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'
import { Icon } from '@iconify/vue'
import type {
  LayoutOrientationType,
  LayoutPositionType,
  LayoutSkinType,
  LayoutThemeType,
  SideNavType,
  TopBarType,
} from '@/types/layout'
import { toPascalCase } from '@/helpers/casing'
import { useLayout } from '@/stores/layout.ts'

import bgPattern from '@/assets/images/user-bg-pattern.png'

import classicImg from '@/assets/images/layouts/themes/theme-classic.png'
import materialImg from '@/assets/images/layouts/themes/theme-material.png'
import modernImg from '@/assets/images/layouts/themes/theme-modern.png'
import saasImg from '@/assets/images/layouts/themes/theme-saas.png'
import flatImg from '@/assets/images/layouts/themes/theme-flat.png'
import minimalImg from '@/assets/images/layouts/themes/theme-minimal.png'
import galaxyImg from '@/assets/images/layouts/themes/theme-galaxy.png'

import light from '@/assets/images/layouts/light.svg'
import lightSideNavImg from '@/assets/images/layouts/light.svg'
import dark from '@/assets/images/layouts/dark.svg'
import system from '@/assets/images/layouts/system.svg'

import lightTopBarImg from '@/assets/images/layouts/topbar-light.svg'
import darkTopBarImg from '@/assets/images/layouts/topbar-dark.svg'
import grayTopBarImg from '@/assets/images/layouts/topbar-gray.svg'
import gradientTopBarImg from '@/assets/images/layouts/topbar-gradient.svg'
import darkSideNavImg from '@/assets/images/layouts/side-dark.svg'
import graySideNavImg from '@/assets/images/layouts/side-gray.svg'
import gradientSideNavImg from '@/assets/images/layouts/side-gradient.svg'
import imageSideNavImg from '@/assets/images/layouts/side-image.svg'

import compactSideNavImg from '@/assets/images/layouts/sidebar-compact.svg'
import smallSideNavImg from '@/assets/images/layouts/sidebar-sm.svg'
import fullSideNavImg from '@/assets/images/layouts/sidebar-full.svg'

type SkinOptionType = {
  skin: LayoutSkinType
  image: string
  disabled?: boolean
}

type ThemeOptionType = {
  theme: LayoutThemeType
  image: string
}

type OrientationOptionType = {
  orientation: LayoutOrientationType
  image: string
}

type TopBarColorOptionType = {
  color: TopBarType['color']
  image: string
}

type SideNavColorOptionType = {
  color: SideNavType['color']
  image: string
}

type SideNavSizeOptionType = {
  label: string
  size: SideNavType['size']
  image: string
}

const skinOptions: SkinOptionType[] = [
  { skin: 'classic', image: classicImg },
  { skin: 'material', image: materialImg },
  { skin: 'modern', image: modernImg },
  { skin: 'saas', image: saasImg },
  { skin: 'flat', image: flatImg },
  { skin: 'minimal', image: minimalImg },
  { skin: 'galaxy', image: galaxyImg, disabled: true },
]

const themeOptions: ThemeOptionType[] = [
  { theme: 'light', image: light },
  { theme: 'dark', image: dark },
  { theme: 'system', image: system },
]

const orientationOptions: OrientationOptionType[] = [
  { orientation: 'vertical', image: darkSideNavImg },
  { orientation: 'horizontal', image: fullSideNavImg },
]

const topBarColorOptions: TopBarColorOptionType[] = [
  { color: 'light', image: lightTopBarImg },
  { color: 'dark', image: darkTopBarImg },
  { color: 'gray', image: grayTopBarImg },
  { color: 'gradient', image: gradientTopBarImg },
]

const sidenavColorOptions: SideNavColorOptionType[] = [
  { color: 'light', image: lightSideNavImg },
  { color: 'dark', image: darkSideNavImg },
  { color: 'gray', image: graySideNavImg },
  { color: 'gradient', image: gradientSideNavImg },
  { color: 'image', image: imageSideNavImg },
]

const sidenavSizeOptions: SideNavSizeOptionType[] = [
  { size: 'default', image: lightSideNavImg, label: 'Default' },
  { size: 'compact', image: compactSideNavImg, label: 'Compact' },
  { size: 'condensed', image: smallSideNavImg, label: 'Condensed' },
  { size: 'on-hover', image: smallSideNavImg, label: 'On Hover' },
  { size: 'on-hover-active', image: lightSideNavImg, label: 'On Hover - Show' },
  { size: 'offcanvas', image: fullSideNavImg, label: 'Offcanvas' },
]

const layoutPositionOptions: { position: LayoutPositionType }[] = [
  { position: 'fixed' },
  { position: 'scrollable' },
]

const {
  layout,
  customizer,
  setSkin,
  setTheme,
  setOrientation,
  setTopBarColor,
  setSideNavColor,
  setSideNavSize,
  setPosition,
  toggleSideNavUser,
  reset,
} = useLayout()
</script>
