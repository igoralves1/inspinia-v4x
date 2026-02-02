<template>
  <MainLayout>
    <BContainer fluid>
      <PageBreadcrumb title="Tour" subTitle="Miscellaneous" />

      <BRow>
        <BCol lg="12">
          <BCard no-body>
            <BCardBody>
              <div>
                <BRow class="justify-content-center">
                  <BCol lg="5">
                    <div class="text-center mt-4 mb-5">
                      <div class="auth-brand text-center mb-4">
                        <RouterLink to="" class="logo-dark">
                          <img :src="darkLogo" alt="dark logo" height="32" />
                        </RouterLink>
                        <RouterLink to="" class="logo-light">
                          <img :src="logo" alt="logo" height="32" />
                        </RouterLink>
                      </div>

                      <h5 class="fs-lg mb-2">Powerful & Flexible Admin Panel Template</h5>
                      <p class="text-muted fs-sm">
                        Our admin panel provides a robust foundation for modern web apps. With support for multiple
                        frameworks and over a dozen demo variations, developers can build exactly what they need, fast
                        and easily. Customize with ease and enjoy consistent UI across projects.
                      </p>

                      <div class="d-flex justify-content-center mt-4 flex-wrap gap-2">
                        <button @click="startTour" class="btn btn-primary">
                          <Icon icon="tabler:player-play" class="me-1" /> Start Tour
                        </button>
                        <a href="#" class="btn btn-dark" id="exploreFeatures">
                          <Icon icon="tabler:compass" class="me-1" /> Explore Features
                        </a>
                        <a
                          href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
                          target="_blank"
                          class="btn btn-danger"
                          id="buyNow"
                        >
                          <Icon icon="tabler:shopping-cart" class="me-1"></Icon> Buy Now
                        </a>
                      </div>
                    </div>
                  </BCol>
                </BRow>

                <BContainer >
                  <BRow>
                    <BCol xs="12" class="text-center">
                      <span class="text-muted rounded-3 d-inline-block">🚀 Empowering your digital journey</span>
                      <h3 class="mt-3 fw-bold mb-5">Framework <mark>Support & Core</mark> Features</h3>
                    </BCol>
                  </BRow>

                  <BRow id="coreFeatures">
                    <BCol v-for="(item, idx) in features" xl="3" :key="idx" >
                      <BCard no-body class="border-0 p-2 card-h-100">
                        <BCardBody class="pb-0">
                          <div class="avatar-xl mb-3">
                            <span class="avatar-title text-bg-secondary rounded-circle fs-22">
                              <Icon :icon="item.icon" />
                            </span>
                          </div>
                          <h4 class="fw-semibold mb-2">{{ item.title }}</h4>
                          <p class="text-muted mb-3">{{ item.description }}</p>
                        </BCardBody>
                        <BCardFooter class="border-0 pt-0">
                          <RouterLink class="link-primary fw-semibold" to="">
                            Know more
                            <Icon icon="tabler:arrow-right" class="ms-2 align-middle" />
                          </RouterLink>
                        </BCardFooter>
                      </BCard>
                    </BCol>
                  </BRow>
                </BContainer>

                <div class="text-center my-4">
                  <button class="btn btn-success" id="documentation">
                    <Icon icon="tabler:file-dots" class="me-1" /> Documentation
                  </button>
                </div>
              </div>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>

      <!-- Tour Component -->
      <v-tour name="myTour" :steps="steps" />
    </BContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { BCard, BCardBody, BCardFooter, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { features } from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta'

import darkLogo from '@/assets/images/logo-black.png'
import logo from '@/assets/images/logo.png'

const app = getCurrentInstance()

const steps = ref([
  {
    header: { title: 'Getting Started' },
    content: 'Click here to get started and explore our framework-rich admin panel. 🚀',
    target: '#exploreFeatures',
    placement: 'left',
  },
  {
    header: { title: 'Buy Now' },
    content: 'Ready to supercharge your project? Click here to purchase the template!',
    target: '#buyNow',
    placement: 'left',
  },
  {
    header: { title: 'Core Features' },
    content: 'Learn more about the versatile services and modules we provide to enhance development.',
    target: '#coreFeatures',
    placement: 'top',
  },
  {
    header: { title: 'Documentation' },
    content: 'Thanks for exploring! Read the documentation to get the most out of this template.',
    target: '#documentation',
    placement: 'top',
  },
])

function startTour() {
  app?.proxy?.$tours['myTour'].start()
}

usePageMeta('Tour')
</script>

<style scoped></style>
