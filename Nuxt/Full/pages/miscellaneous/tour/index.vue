<template>
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
                                            <NuxtLink to="" class="logo-dark">
                                                <NuxtImg src="/images/logo-black.png" alt="dark logo" height="32" />
                                            </NuxtLink>
                                            <NuxtLink to="" class="logo-light">
                                                <NuxtImg src="/images/logo.png" alt="logo" height="32" />
                                            </NuxtLink>
                                        </div>

                                        <h5 class="fs-lg mb-2">Powerful & Flexible Admin Panel Template</h5>
                                        <p class="text-muted fs-sm">
                                            Our admin panel provides a robust foundation for modern web apps. With
                                            support for multiple frameworks and over a dozen demo variations, developers
                                            can build exactly what they need, fast and easily. Customize with ease and
                                            enjoy consistent UI across projects.
                                        </p>


                                        <div class="d-flex justify-content-center mt-4 flex-wrap gap-2">
                                            <button  @click="startTour" class="btn btn-primary">
                                                <Icon name="tabler:player-play" class="me-1" /> Start Tour
                                            </button>
                                            <v-tour name="myTour" :steps="steps"/>
                                            <a href="#" class="btn btn-dark" id="exploreFeatures">
                                                <Icon name="tabler:compass" class="me-1" /> Explore Features
                                            </a>

                                            <a href="https://wrapbootstrap.com/theme/inspinia-multipurpose-admin-dashboard-template-WB0R5L90S?ref=inspinia"
                                                target="_blank" class="btn btn-danger" id="buyNow">
                                                <Icon name="tabler:shopping-cart" class="me-1"></Icon> Buy Now
                                            </a>
                                        </div>
                                    </div>
                                </BCol>

                            </BRow>


                            <BContainer data-tg-order="3"
                                data-tg-tour="Learn more about the versatile services and modules we provide to enhance development."
                                data-tg-title="Core Features">
                                <BRow >
                                    <BCol xs="12" class="text-center">
                                        <span class="text-muted rounded-3 d-inline-block">🚀 Empowering your digital
                                            journey</span>
                                        <h3 class="mt-3 fw-bold mb-5">Framework <mark>Support & Core</mark> Features
                                        </h3>
                                    </BCol>
                                </BRow>

                                <BRow id="coreFeatures">
                                    <BCol v-for="(item, idx) in features" xl="3" :key="idx">
                                        <BCard no-body class="border-0 p-2 card-h-100">
                                            <BCardBody class="pb-0">
                                                <div class="avatar-xl mb-3">
                                                    <span class="avatar-title text-bg-secondary rounded-circle fs-22">
                                                        <Icon :name="item.icon" />
                                                    </span>
                                                </div>
                                                <h4 class="fw-semibold mb-2">{{ item.title }}</h4>
                                                <p class="text-muted mb-3">{{ item.description }}</p>
                                            </BCardBody>
                                            <BCardFooter class="border-0 pt-0">
                                                <NuxtLink class="link-primary fw-semibold" to="">Know more
                                                    <Icon name="tabler:arrow-right" class="ms-2 align-middle" />
                                                </NuxtLink>
                                            </BCardFooter>
                                        </BCard>
                                    </BCol>
                                </BRow>
                            </BContainer>

                            <div class="text-center my-4">
                                <button class="btn btn-success" id="documentation">
                                    <Icon name="tabler:file-dots" class="me-1"/> Documentation
                                </button>
                            </div>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardFooter, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import { features } from './data';


import { ref } from 'vue'

const steps = ref([
    {
        header: { title: 'Getting Started' },
        content: 'Click here to get started and explore our framework-rich admin panel. 🚀',
        target: '#exploreFeatures',
        placement: 'left',
      
    },
    {
        header: { title: 'Buy Now' },
        content: 'Ready to supercharge your project ? Click here to purchase the template!',
        target: '#buyNow',
        placement: 'left',
    },
    {
        header: { title: 'Core Features' },
        content: 'Learn more about the versatile services and modules we provide to enhance development',
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

    const nuxtApp = useNuxtApp()
    if (nuxtApp.vueApp.config.globalProperties.$tours) {
        nuxtApp.vueApp.config.globalProperties.$tours['myTour']?.start()
    }
}

usePageTitle('Tour')
</script>

<style scoped></style>