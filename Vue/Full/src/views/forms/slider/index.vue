<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Range Slider" subTitle="Forms" />
        </BContainer>

        <BContainer>

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader>
                            <BCardTitle tag="h4">Examples</BCardTitle>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                vue-slider is a lightweight, ARIA-accessible JavaScript range slider with multi-touch
                                and
                                keyboard support. It is fully GPU animated: no reflows, so it is fast; even on older
                                devices. It also fits wonderfully in responsive designs and has no dependencies
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://vue-3-slider-component.netlify.app/?path=/docs/vue-3-slider-component--docs"
                                target="_blank">
                                View Official Website
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>

                        <BCardBody>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Basic Range Slider</h5>
                                    <p class="text-muted mb-0">A simple single-value slider.</p>
                                </BCol>
                                <BCol lg="8">
                                    <div class="vue-slider-sm">
                                        <VueSlider v-model="basic" :min="0" :max="300" />
                                    </div>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Sizes</h5>
                                    <p class="text-muted mb-0">Adjust element size using different slider sizes.</p>
                                </BCol>
                                <BCol lg="8">
                                    <div data-slider-size="sm">
                                        <VueSlider v-model="small" />
                                    </div>
                                    <VueSlider v-model="large" height="8px" class="mt-4" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Line Style</h5>
                                    <p class="text-muted mb-0">Customize line handle style using sliders.</p>
                                </BCol>
                                <BCol lg="8">
                                    <VueSlider v-model="line" tooltip="none" data-slider-style="line"
                                        data-slider-size="sm" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Color Scheme Sliders</h5>
                                </BCol>
                                <BCol lg="8">
                                    <VueSlider v-model="primary" class="mb-3 text-primary" />
                                    <VueSlider v-model="secondary" class="mb-3 text-secondary"
                                        data-slider-color="secondary" />
                                    <VueSlider v-model="success" class="mb-3 text-success"
                                        data-slider-color="success" />
                                    <VueSlider v-model="danger" class="mb-3 text-danger" data-slider-color="danger" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Multi Elements Range</h5>
                                </BCol>
                                <BCol lg="8">
                                    <VueSlider v-model="range" :min="0" :max="100" :dot-size="14" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Value Range Slider (nonlinear)</h5>
                                </BCol>
                                <BCol lg="8">
                                    <VueSlider v-model="nonlinear" :min="0" :max="200" :interval="10" />
                                    <div class="d-flex justify-content-between mt-2">
                                        <span>{{ nonlinear[0] }}</span>
                                        <span>{{ nonlinear[1] }}</span>
                                    </div>
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Tooltip Slider</h5>
                                </BCol>
                                <BCol lg="8">
                                    <VueSlider v-model="tooltip" :tooltip="'always'" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Soft Limits Slider</h5>
                                </BCol>
                                <BCol lg="8">
                                    <VueSlider v-model="soft" :min="0" :max="200" :lazy="true" />
                                </BCol>
                            </BRow>

                            <div class="my-4 border-top border-dashed"></div>

                            <BRow class="g-3">
                                <BCol lg="4">
                                    <h5 class="mb-1">Vertical Sliders</h5>
                                </BCol>
                                <BCol lg="8">
                                    <div class="d-flex gap-5">
                                        <VueSlider v-model="vertical" direction="ttb" height="150px"
                                            class="vue-slider-vertical" />
                                        <VueSlider v-model="vertical2" direction="btt" height="150px"
                                            class="vue-slider-vertical" data-slider-color="warning" />
                                        <VueSlider v-model="vertical3" direction="ttb" height="150px"
                                            class="vue-slider-vertical" />
                                    </div>
                                </BCol>
                            </BRow>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'
import { Icon } from '@iconify/vue'
import { BCard, BCardBody, BCardHeader, BCardTitle, BCol, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'

// Example states
const basic = ref(50)
const small = ref(80)
const large = ref(90)
const line = ref(80)
const primary = ref(80)
const secondary = ref(70)
const success = ref(90)
const danger = ref(70)
const range = ref([30, 70])
const nonlinear = ref([20, 80])

const tooltip = ref([20, 50])
const soft = ref(150)
const vertical = ref(50)
const vertical2 = ref(30)
const vertical3 = ref(70)

usePageMeta('Form Slider')
</script>


<style scoped></style>