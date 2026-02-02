<template>
    <div class="auth-box d-flex align-items-center">
        <BContainer fluid="xxl">
            <BRow class="align-items-center justify-content-center">
                <BCol xl="10">
                    <BCard no-body class="rounded-3 p-0 rounded-4">
                        <BCardBody class="p-0">
                            <BRow class="justify-content-between g-0">
                                <BCol lg="7">
                                    <BCard no-body class="mb-0 border-0 rounded-4">
                                        <BCardBody>
                                            <div class="auth-brand text-center mb-3">
                                                <AuthLogo />
                                            </div>

                                            <div class="p-2 text-center">
                                                <h3 class="fw-bold my-2">Big things are on the Way</h3>
                                                <p class="text-muted mb-0">We're crafting something awesome. Stay tuned!
                                                </p>

                                                <BRow class="text-center justify-content-center my-4 g-2">
                                                    <BCol sm="4" md="3" cols="6" class="col-lg">
                                                        <div
                                                            class="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                                            <h2 class="fw-bold text-primary fs-36">{{ days }}</h2>
                                                            <p class="fw-semibold fs-xs mb-0">Days</p>
                                                        </div>
                                                    </BCol>

                                                    <BCol sm="4" md="3" cols="6" class="col-lg">
                                                        <div
                                                            class="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                                            <h3 class="fw-bold text-primary fs-36">{{ hours }}</h3>
                                                            <p class="fw-semibold fs-xs mb-0">Hours</p>
                                                        </div>
                                                    </BCol>

                                                    <BCol sm="4" md="3" cols="6" class="col-lg">
                                                        <div
                                                            class="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                                            <h3 class="fw-bold text-primary fs-36">{{ minutes }}</h3>
                                                            <p class="fw-semibold fs-xs mb-0">Minutes</p>
                                                        </div>
                                                    </BCol>

                                                    <BCol sm="4" md="3" cols="6" class="col-lg">
                                                        <div
                                                            class="bg-light bg-opacity-10 px-2 py-4 rounded shadow-inner">
                                                            <h3 class="fw-bold text-primary fs-36">{{ seconds }}</h3>
                                                            <p class="fw-semibold fs-xs mb-0">Seconds</p>
                                                        </div>
                                                    </BCol>
                                                </BRow>

                                                <div class="error-glitch fs-xl">Stay tunned!</div>

                                                <div
                                                    class="app-search app-search-pill w-xl-75 mx-auto input-group mt-3 rounded-pill">
                                                    <BFormInput type="text" class="py-2" placeholder="Enter email..." />
                                                    <Icon icon="lucide:mail" class="app-search-icon text-muted" />
                                                    <BButton variant="secondary" type="button">Notify me!</BButton>
                                                </div>
                                            </div>

                                            <p class="text-center text-muted mt-5 mb-0">
                                                © 2014 - {{ currentYear }} INSPINIA — by <span class="fw-bold">{{ author
                                                    }}</span>
                                            </p>
                                        </BCardBody>
                                    </BCard>
                                </BCol>

                                <BCol lg="5" class="d-none d-lg-block">
                                    <div
                                        class="h-100 position-relative card-side-img rounded-end-4 rounded-end rounded-0 overflow-hidden">
                                        <div
                                            class="p-4 card-img-overlay rounded-4 rounded-start-0 auth-overlay d-flex align-items-end justify-content-center">
                                        </div>
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </div>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import { Icon } from '@iconify/vue'
import { BContainer, BRow, BCol, BCard, BCardBody, BButton, BFormInput } from 'bootstrap-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const author = 'Your Name'
const currentYear = new Date().getFullYear()

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let interval: any = null

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 10)

const updateCountdown = () => {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
    updateCountdown()
    interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
    clearInterval(interval)
})

usePageMeta('Coming Soon')
</script>
