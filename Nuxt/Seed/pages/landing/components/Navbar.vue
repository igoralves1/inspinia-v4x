<template>
  <BAlert
      v-model="showDismissibleAlert"
      variant="primary"
      class="top-alert mb-0 rounded-0 w-100 position-relative"
      body-class="d-flex align-items-center justify-content-center w-100"
  >
    <div class="fst-italic fw-medium text-center">
      🚀 INSPINIA 4.x is here! Now with Bootstrap 5, dark mode, and a refreshed UI.
      Upgrade today for the best experience!
      <NuxtLink
          to="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
          target="_blank"
          class="fw-semibold fst-normal text-white text-decoration-underline link-offset-3 ms-2"
      >
        Buy Now!
      </NuxtLink>
    </div>
    <button
class="btn-close btn-close-white position-absolute end-0 me-3"
            style="top: 50%; transform: translateY(-50%);"
            @click="closeAlert"/>
  </BAlert>

  <header>
    <BNavbar
        id="landing-navbar"
        :container="false"
        toggleable="lg"
        :class="['py-3', 'sticky-top', isSticky ? 'top-scroll-up top-fixed' : '']"
    >
      <div class="container">
        <div class="auth-brand d-inline-block mb-0">
          <NuxtLink to="/" class="logo-dark">
            <img src="/images/logo-black.png" alt="dark logo" height="32">
          </NuxtLink>
          <NuxtLink to="/" class="logo-light">
            <img src="/images/logo.png" alt="logo" height="32">
          </NuxtLink>
        </div>

        <BNavbarToggle target="nav-collapse"/>

        <BCollapse id="nav-collapse" v-model="isCollapsed" is-nav>
          <BNavbarNav class="fw-medium gap-2 fs-sm mx-auto mt-2 mt-lg-0">
            <BNavItem
                v-for="item in navItems"
                :key="item"
                href="javascript:void(0)"
                @click="scroll.scrollTo(item)"
            >
              {{ item }}
            </BNavItem>
          </BNavbarNav>

          <div class="d-flex align-items-center">
            <BButton
                variant="link"
                class="btn-icon fw-semibold text-body"
                @click="toggleTheme"
            >
              <Icon name="tabler:contrast" class="fs-22"/>
            </BButton>
            <NuxtLink to="/auth-1/sign-in" class="btn btn-link fw-semibold text-body ps-2">
              SIGN IN
            </NuxtLink>
            <NuxtLink to="/auth-1/sign-up" class="btn btn-sm btn-primary">
              Sign Up
            </NuxtLink>
          </div>
        </BCollapse>
      </div>
    </BNavbar>
  </header>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useLayout} from "~/stores/layout";

const showDismissibleAlert = ref(true)
const isCollapsed = ref(false)
const isSticky = ref(false)
const {layout, setTheme} = useLayout()

const navItems = ['Home', 'Services', 'Features', 'Plans', 'Reviews', 'Blog', 'Contact']

const scroll = {
  scrollTo: (section: string) => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({behavior: 'smooth'})
  },
}


const toggleTheme = () => {
  if (layout.theme === "dark") {
    return setTheme("light");
  }
  return setTheme("dark");
}


const closeAlert = () => {
  showDismissibleAlert.value = false
}
onMounted(() => {
  window.addEventListener('scroll', () => {
    isSticky.value = window.scrollY > 20
  })
})
</script>

<style scoped>

</style>