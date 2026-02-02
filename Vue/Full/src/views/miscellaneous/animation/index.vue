<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Animation" subTitle="Miscellaneous" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <UICard title="Animate.css">
                        <p class="text-muted">
                            A cross-browser library of CSS animations. Animate.css is a bunch of cool, fun, and
                            cross-browser
                            animations for you to use in your projects. Great for emphasis, home pages, sliders, and
                            general
                            just-add-water-awesomeness.
                        </p>

                        <BRow class="g-lg-4">
                            <BCol sm="4">
                                <BCard no-body class="card-top-sticky overflow-hidden">
                                    <BCardBody>
                                        <div ref="imageRef">
                                            <img :src="blogImg" width="375" height="281" class="img-fluid rounded"
                                                alt="user" />
                                        </div>
                                        <p class="mt-3 text-muted text-center mb-0">
                                            Example box for animation effect.
                                        </p>
                                    </BCardBody>
                                </BCard>
                            </BCol>

                            <BCol lg="8">
                                <BAlert :model-value="true" variant="info">
                                    Click any of the buttons below to see the animation effect applied to the box on the
                                    left.
                                </BAlert>

                                <BAccordion v-model="activeKey">
                                    <BAccordionItem v-for="(item, idx) in animationGroups"
                                        :model-value="idx === 0 ? true : false"
                                        body-class="p-2 m-0 d-flex flex-wrap gap-0" :key="idx" :title="item.name"
                                        :event-key="idx.toString()">
                                        <BButton v-for="animation in item.animations" :key="animation" variant="light"
                                            class="animation_select m-1" @click="animate(animation)">
                                            {{ animation }}
                                        </BButton>
                                    </BAccordionItem>
                                </BAccordion>
                            </BCol>
                        </BRow>
                    </UICard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import {
    BAccordion,
    BAccordionItem,
    BAlert,
    BButton,
    BCard,
    BCardBody,
    BCol,
    BContainer,
    BRow
} from 'bootstrap-vue-next'


import blogImg from '@/assets/images/blog/blog-1.jpg'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import UICard from '@/components/UICard.vue'
import { animationGroups } from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { ref } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'

const imageRef = ref<HTMLElement | null>(null)
const activeKey = ref('0')

const animate = (animation: string) => {
    if (imageRef.value) {
        imageRef.value.classList.add('animate__animated', `animate__${animation}`)

        const handleEnd = () => {
            imageRef.value?.classList.remove('animate__animated', `animate__${animation}`)
            imageRef.value?.removeEventListener('animationend', handleEnd)
        }

        imageRef.value.addEventListener('animationend', handleEnd, { once: true })
    }
}

usePageMeta('Animation')
</script>
