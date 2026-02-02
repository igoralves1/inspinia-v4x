<template>
  <footer class="section-custom section-footer pb-2">
    <BContainer>
      <BRow class="g-4 justify-content-between">
        <BCol lg="3">
          <img :src="logoWhite" alt="logo" height="30" />
          <p class="mt-3 fs-sm">
            INSPINIA is the top-selling admin dashboard template on WrapBootstrap, known for its
            sleek design, flexibility, and powerful features. Build modern web applications with
            ease using the best in class!
          </p>

          <div class="d-flex gap-2 mt-4 mb-2">
            <RouterLink
              v-for="(link, i) in socialLinks"
              :key="i"
              :to="link.url"
              class="btn btn-sm btn-icon rounded-circle btn-dark"
              :title="link.title"
            >
              <Icon :icon="link.icon" class="fs-lg" />
            </RouterLink>
          </div>
        </BCol>

        <BCol lg="8" xxl="7">
          <BRow class="g-4">
            <BCol cols="6" md="4" v-for="(section, i) in footerLinks" :key="i">
              <h5 class="text-white mb-4 ps-2">{{ section.title }}</h5>
              <ul class="nav flex-column">
                <li class="nav-item" v-for="(link, index) in section.links" :key="index">
                  <RouterLink class="nav-link" :class="{ 'pt-0': index === 0 }" :to="link.url">
                    {{ link.name }}
                    <span
                      v-if="link.badge"
                      class="ms-2"
                      :class="`badge text-bg-${link.badge.variant}`"
                    >
                      {{ link.badge.title }}
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </BCol>
          </BRow>
        </BCol>
      </BRow>

      <BRow class="mt-5">
        <div class="col-12 text-center">
          <p class="mb-4">
            © 2014 - {{ currentYear }} Inspinia By
            <span class="fw-semibold">{{ author }}</span>
          </p>
        </div>
      </BRow>
    </BContainer>
  </footer>
</template>

<script setup lang="ts">
import { author, currentYear } from '@/helpers'
import { Icon } from '@iconify/vue'

import logoWhite from '@/assets/images/logo-white.png'

const socialLinks = [
  { title: 'Facebook', icon: 'tabler-brand-facebook', url: '#' },
  { title: 'Twitter-x', icon: 'tabler-brand-x', url: '#' },
  { title: 'Instagram', icon: 'tabler-brand-instagram', url: '#' },
  { title: 'WhatsApp', icon: 'tabler-brand-whatsapp', url: '#' },
]

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'Our Story', url: '#' },
      { name: 'Leadership Team', url: '#' },
      {
        name: 'Careers',
        url: '#',
        badge: { title: "We're Hiring", variant: 'warning' },
      },
      { name: 'Press & Media', url: '#' },
      { name: 'Investor Relations', url: '#' },
      { name: 'Sustainability', url: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Community Forum', url: '#' },
      { name: 'Events & Meetups', url: '#' },
      { name: 'Ambassadors', url: '#' },
      { name: 'Customer Stories', url: '#' },
      { name: 'Open Source', url: '#' },
      { name: 'Code of Conduct', url: '#' },
    ],
  },
  {
    title: 'Admin',
    links: [
      { name: 'Dashboard', url: '#' },
      { name: 'User Management', url: '#' },
      { name: 'Roles & Permissions', url: '#' },
      { name: 'System Logs', url: '#' },
      { name: 'Settings', url: '#' },
      { name: 'API Access', url: '#' },
    ],
  },
]
</script>
