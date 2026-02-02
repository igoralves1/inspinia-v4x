<template>
    <BContainer fluid>
        <PageBreadcrumb title="Alerts" subtitle="UI" />
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
                            Provide contextual feedback messages for typical user actions with the handful of available
                            and flexible alert messages.
                        </p>

                        <a class="btn btn-link p-0 fw-semibold"
                            href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/alert.html"
                            target="_blank">
                            Alerts on Bootstrap
                            <Icon name="tabler:chevron-right" class="ms-1" />
                        </a>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="12">
                <UICard no-body title="Default Alert" isCollapsable>
                    <BAlert :model-value="true" variant="primary" role="alert">
                        This is a primary alert—something important you should know!
                    </BAlert>

                    <BAlert :model-value="true" variant="secondary" role="alert">
                        This is a secondary alert—some additional context.
                    </BAlert>

                    <BAlert :model-value="true" variant="success" role="alert">
                        Success! Your operation was completed successfully.
                    </BAlert>

                    <BAlert :model-value="true" variant="danger" role="alert">
                        Error! Something went wrong—please try again.
                    </BAlert>

                    <BAlert :model-value="true" variant="warning" role="alert">
                        Warning! Please double-check your inputs.
                    </BAlert>

                    <BAlert :model-value="true" variant="info" role="alert">
                        Info: Here's something you might find useful.
                    </BAlert>

                    <BAlert :model-value="true" variant="light" role="alert">
                        Light alert—just a subtle notification.
                    </BAlert>

                    <BAlert :model-value="true" variant="dark" role="alert">
                        Dark alert—use for general-purpose messages.
                    </BAlert>

                    <BAlert :model-value="true" class="mb-0 alert-purple" role="alert">
                        Purple alert—use for general-purpose messages.
                    </BAlert>
                </UICard>
            </BCol>

            <BCol xl="12">
                <UICard title="Dismissing Alert with Solid Colors" isCollapsable>

                    <BAlert variant="primary" dismissible show class="text-bg-primary " role="alert">
                        <div>Heads up! This is a primary alert with important information.</div>
                    </BAlert>

                    <BAlert variant="secondary" dismissible show class="text-bg-secondary " role="alert">
                        <div>Notice: This is a secondary alert with supporting details.</div>
                    </BAlert>

                    <BAlert variant="success" dismissible show class="text-bg-success " role="alert">
                        <div>Success! Your action was completed successfully.</div>
                    </BAlert>

                    <BAlert variant="danger" dismissible show class="text-bg-danger " role="alert">
                        <div>Error! Something went wrong—please try again later.</div>
                    </BAlert>

                    <BAlert variant="warning" dismissible show class="text-bg-warning " role="alert">
                        <div>Warning! Please review your input before proceeding.</div>
                    </BAlert>

                    <BAlert variant="info" dismissible show class="text-bg-info " role="alert">
                        <div>Info: Here’s something you might find helpful.</div>
                    </BAlert>

                    <BAlert variant="light" dismissible show class="text-bg-light " role="alert">
                        <div>Note: This is a light alert with a subtle message.</div>
                    </BAlert>

                    <BAlert variant="dark" dismissible show class="text-bg-dark " role="alert">
                        <div>Notice: This dark alert is great for general messages.</div>
                    </BAlert>

                    <BAlert dismissible show class="text-bg-purple alert-purple mb-0" role="alert">
                        <div>Heads up: This purple alert is perfect for catching attention with general information.
                        </div>
                    </BAlert>
                </UICard>
            </BCol>

            <BCol xl="12">
                <UICard title="Link Color" isCollapsable>
                    <BAlert show variant="primary" role="alert">
                        Need more info? Check out <NuxtLink to="#" class="alert-link">this primary link</NuxtLink> for
                        important
                        details.
                    </BAlert>

                    <BAlert show variant="secondary" role="alert">
                        Here's a secondary message with <NuxtLink to="#" class="alert-link">a helpful link</NuxtLink>
                        for
                        additional context.
                    </BAlert>

                    <BAlert show variant="success" role="alert">
                        Operation successful! View the results <NuxtLink to="#" class="alert-link">by clicking here
                        </NuxtLink>.
                    </BAlert>

                    <BAlert show variant="danger" role="alert">
                        Something went wrong. Learn more <NuxtLink to="#" class="alert-link">through this alert link
                        </NuxtLink>.
                    </BAlert>

                    <BAlert show variant="warning" role="alert">
                        Heads up! You might want to check <NuxtLink to="#" class="alert-link">this warning link
                        </NuxtLink>.
                    </BAlert>

                    <BAlert show variant="info" role="alert">
                        Here’s some information that may help—click <NuxtLink to="#" class="alert-link">this link
                        </NuxtLink> to
                        read more.
                    </BAlert>

                    <BAlert show variant="light" role="alert">
                        Just a light reminder with <NuxtLink to="#" class="alert-link">a gentle link</NuxtLink> to
                        explore.
                    </BAlert>

                    <BAlert show variant="dark" role="alert">
                        This is a general dark alert. Find out more <NuxtLink to="#" class="alert-link">by clicking
                            here</NuxtLink>.
                    </BAlert>

                    <BAlert show class="mb-0 alert-purple" role="alert">
                        Important notice: For more information, <NuxtLink to="#" class="alert-link">click here
                        </NuxtLink>.
                    </BAlert>
                </UICard>
            </BCol>

            <BCol xl="12">
                <UICard title="Additional Content" isCollapsable>
                    <BAlert variant="success" show class="p-3" role="alert">
                        <h4 class="alert-heading">Great job!</h4>
                        <p>You’ve successfully read this important alert message. The text is intentionally a bit
                            longer to demonstrate how spacing behaves in this kind of layout.</p>
                        <hr class="border-success border-opacity-25">
                        <p class="mb-0">Use margin utilities to keep your content clean and organized.</p>
                    </BAlert>

                    <BAlert variant="secondary" show class="p-3" role="alert">
                        <div class=" d-flex">
                            <Icon name="tabler:alarm-average" class="fs-1 me-2" />
                            <div>
                                <h4 class="alert-heading">Heads up!</h4>
                                <p>This alert message gives additional information with a longer message to show content
                                    spacing within an alert.</p>
                                <hr class="border-secondary border-opacity-25">
                                <p class="mb-0">Apply spacing classes wisely to maintain structure and clarity.</p>
                            </div>
                        </div>
                    </BAlert>

                    <BAlert show class="p-3 mb-0 alert-purple" role="alert">
                        <div class=" d-flex">
                            <Icon name="tabler:phone-ringing" class="fs-1 me-2 d-inline-flex" />
                            <div>
                                <h4 class="alert-heading">Notice!</h4>
                                <p>You’ve just read through a primary alert message. The extra length helps show how
                                    well the layout handles content spacing.</p>
                                <button type="button" class="btn btn-primary btn-sm">Got it</button>
                            </div>
                        </div>
                    </BAlert>
                </UICard>
            </BCol>

            <BCol xl="12">
                <UICard title="Custom Alerts" isCollapsable>
                    <BAlert variant="primary" dismissible show class="border border-primary" role="alert">
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <div>A primary alert with a full border!</div>
                    </BAlert>

                    <BAlert dismissible variant="secondary" show class="alert-bordered border-start border-secondary"
                        role="alert">
                        <div>A secondary alert with a left border only!</div>
                    </BAlert>

                    <BAlert variant="dark" dismissible show class="alert-bordered border-bottom border-dark"
                        role="alert">
                        <div>A dark alert with a bottom border!</div>
                    </BAlert>

                    <BAlert dismissible show class="border-2 alert-purple border border-dashed border-purple"
                        role="alert">
                        <div>A purple alert with a dashed border!</div>
                    </BAlert>

                    <BAlert variant="danger" dismissible show class="border-2  border-danger" role="alert">
                        <div>A danger alert with a thick border!</div>
                    </BAlert>

                    <BAlert variant="warning" dismissible header-class="w-100" close-variant="warning" close-class="btn btn-sm bg-warning rounded-circle"
                        body-class="d-flex w-100 align-items-center justify-content-between" show
                        alert-class="d-flex w-100 align-items-center" role="alert">
                        <div>A warning alert with a custom close button!</div>
                    </BAlert>

                    <BAlert variant="info" dismissible show class="d-flex align-items-center gap-2" role="alert">
                        <Icon name="tabler:alert-octagon" class="fs-xl" /> An info alert with a custom icon!
                    </BAlert>

                    <BAlert variant="light" show class="border-2 d-flex align-items-center p-3 mb-0" role="alert">
                        <Icon name="tabler:phone-ringing" class="text-success fs-2 me-3" />
                        <div>
                            <h4 class="alert-heading">Notice!</h4>
                            <p class="m-0">You’ve just read through a primary alert message. The extra length helps
                                show how well the layout handles content spacing.</p>
                        </div>
                    </BAlert>
                </UICard>
            </BCol>

            <BCol xl="12">
                <UICard title="Live Alerts" isCollapsable>
                    <BAlert :show="showLiveAlert" variant="success" dismissible role="alert">
                        <div>Nice, you triggered this alert message!</div>
                    </BAlert>
                    <BButton variant="primary" @click="showLiveAlert = !showLiveAlert">Show live alert</BButton>
                </UICard>
            </BCol>
        </BRow>
    </div>
</template>

<script setup lang="ts">
import { BAlert, BButton, BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';
import UICard from '~/components/UICard.vue';

const showLiveAlert = ref(false)
usePageTitle('Alerts')
</script>

<style scoped></style>