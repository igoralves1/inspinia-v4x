<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Accordions" subtitle="UI" />
        </BContainer>
        <div class="container-xl">
            <BRow>
                <BCol xl="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Build vertically collapsing accordions in combination with our Collapse JavaScript
                                plugin.
                            </p>

                            <a class="btn btn-link p-0 fw-semibold"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/accordion.html"
                                target="_blank">
                                Accordions on Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Default Accordions" isCollapsable>
                        <BAccordion>
                            <BAccordionItem v-for="(item, idx) in accordionData" :key="idx"
                                :title="item.question + '#' + (idx + 1)" :visible="idx == 0">
                                <div v-html="item.answer"></div>
                            </BAccordionItem>
                        </BAccordion>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Flush Accordions" isCollapsable>
                        <BAccordion flush>
                            <BAccordionItem v-for="(item, idx) in accordionData" :key="idx"
                                :title="item.question + '#' + (idx + 1)" :visible="idx == 0">
                                <div v-html="item.answer"></div>
                            </BAccordionItem>
                        </BAccordion>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Always Open Accordions" isCollapsable>
                        <BAccordion free>
                            <BAccordionItem v-for="(item, idx) in accordionData" :key="idx"
                                :title="item.question + '#' + (idx + 1)" :visible="idx == 0">
                                <div v-html="item.answer"></div>
                            </BAccordionItem>
                        </BAccordion>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Accordion Without Arrow" isCollapsable>
                        <BAccordion class="accordion-arrow-none">
                            <BAccordionItem v-for="(item, idx) in accordionData" :key="idx"
                                :title="item.question + '#' + (idx + 1)" :visible="idx == 0">
                                <div v-html="item.answer"></div>
                            </BAccordionItem>
                        </BAccordion>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Bordered Accordions" isCollapsable>
                        <BAccordion class="accordion-bordered">
                            <BAccordionItem v-for="(item, idx) in accordionData" :key="idx"
                                :title="item.question + '#' + (idx + 1)" :visible="idx == 0">
                                <div v-html="item.answer"></div>
                            </BAccordionItem>
                        </BAccordion>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Custom Icon Accordion" isCollapsable>
                        <BAccordion v-model="activeItem" class="accordion-custom-icon accordion-arrow-none">
                            <BAccordionItem id="0">
                                <template #title>
                                    Accordion item with tabler icons
                                    <Icon icon="tabler:plus" class="accordion-icon accordion-icon-on" />
                                    <Icon icon="tabler:minus" class="accordion-icon accordion-icon-off" />
                                </template>

                                <div>
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until
                                    the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify
                                    any of
                                    this with
                                    custom CSS or overriding our default variables. It's also worth noting that just
                                    about
                                    any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </BAccordionItem>

                            <BAccordionItem id="1">
                                <template #title>
                                    Accordion item with lucid icons
                                    <Icon icon="lucide:plus-circle"
                                        class="accordion-icon accordion-icon-on avatar-xxs" />
                                    <Icon icon="lucide:minus-circle"
                                        class="accordion-icon accordion-icon-off avatar-xxs" />
                                </template>

                                <div>
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                    until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify
                                    any of
                                    this with
                                    custom CSS or overriding our default variables. It's also worth noting that just
                                    about
                                    any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </BAccordionItem>

                            <BAccordionItem id="2">
                                <template #title>
                                    Accordion item with tabler icons
                                    <Icon icon="tabler:arrow-down" class="accordion-icon accordion-icon-on" />
                                    <Icon icon="tabler:arrow-up" class="accordion-icon accordion-icon-off" />
                                </template>

                                <div>
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                    until
                                    the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes
                                    control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify
                                    any of
                                    this with
                                    custom CSS or overriding our default variables. It's also worth noting that just
                                    about
                                    any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </BAccordionItem>
                        </BAccordion>
                    </UICard>
                </BCol>
            </BRow>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BAccordion, BAccordionItem, BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import UICard from '@/components/UICard.vue';
import { ref } from 'vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';

const activeItem = ref('0')

interface AccordionType {
    question: string
    answer: string
}

const accordionData: AccordionType[] = [
    {
        question: 'Accordion Item ',
        answer:
            "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
        question: 'Accordion Item ',
        answer:
            "<strong>This is the second item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
    {
        question: 'Accordion Item ',
        answer:
            "<strong>This is the third item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
    },
]

usePageMeta('Accordions')
</script>

<style scoped></style>