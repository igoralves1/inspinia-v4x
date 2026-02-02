<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Forum Post" subtitle="Apps" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow>
                        <BCol xl="9">
                            <BCard no-body>
                                <BCardBody>
                                    <div class="d-flex gap-4 align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="text-center">
                                                <p class="text-muted text-uppercase my-2 fw-semibold">#Development Talk
                                                </p>
                                                <h4 class="fs-xxl mb-3">What's the best JavaScript framework in 2025?
                                                </h4>
                                            </div>

                                            <div class="fs-sm">
                                                <p>
                                                    With the ever-evolving front-end landscape, JavaScript frameworks
                                                    are at
                                                    the heart of most
                                                    web development stacks. In 2025, options like React, Vue 3, Angular,
                                                    Svelte, SolidJS, and even
                                                    newer players continue to battle for dominance in terms of
                                                    performance,
                                                    developer experience,
                                                    ecosystem, and community support.
                                                </p>
                                                <p>
                                                    React remains a popular choice due to its strong community, wide
                                                    adoption, and extensive tooling,
                                                    while Vue 3 continues to grow thanks to its approachable syntax and
                                                    composition API. On the other
                                                    hand, Svelte and SolidJS are gaining attention for their
                                                    compile-time
                                                    optimization and ultra-fast
                                                    runtime performance.
                                                </p>
                                                <p>
                                                    We'd love to hear your experience: Which framework do you use and
                                                    why?
                                                    Are you prioritizing
                                                    performance, learning curve, community support, or integration
                                                    capabilities? Share your insights,
                                                    real-world comparisons, and predictions for the future!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p
                                        class="d-flex flex-wrap gap-3 text-muted mt-3 mb-0 pb-3 align-items-center justify-content-between fs-sm">
                                        <span class="d-flex align-items-center gap-2">
                                            <img :src="user5" width="32" height="32" alt="avatar-5"
                                                class="img-fluid avatar-sm rounded" />
                                            <span class="text-body">
                                                <a href="#" class="link-reset fw-semibold lh-sm d-block">James
                                                    Milton</a>
                                                <span class="text-muted small">1 hour ago</span>
                                            </span>
                                        </span>

                                        <span class="d-flex align-items-center gap-1">
                                            <Icon icon="tabler:message-reply" />
                                            <a href="#" class="link-reset">Answers: 45</a>
                                        </span>

                                        <span class="d-flex align-items-center gap-1">
                                            <Icon icon="tabler:clock" />
                                            <span>Ends in: 3 days</span>
                                        </span>

                                        <span class="d-flex align-items-center gap-1">
                                            <Icon icon="tabler:users" />
                                            <span>Votes: 732</span>
                                        </span>
                                    </p>

                                    <div class="border-bottom border-dashed mb-3"></div>

                                    <BForm class="mb-3">
                                        <div class="mb-3">
                                            <BFormTextarea rows="4" class="bg-light-subtle"
                                                placeholder="Enter your messages..." />
                                        </div>
                                        <div class="text-end">
                                            <BButton variant="secondary" type="submit">
                                                Submit
                                                <Icon icon="tabler:send-2" class="align-baseline ms-1" />
                                            </BButton>
                                        </div>
                                    </BForm>

                                    <h4>Replies(15)</h4>
                                    <div class="border-bottom border-dashed my-3"></div>

                                    <div class="d-flex mb-2 border border-dashed rounded p-3">
                                        <div class="flex-shrink-0">
                                            <img :src="user8" height="32" width="32" alt=""
                                                class="avatar-sm rounded-circle shadow-sm" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h5 class="mb-1">Liam Carter <small class="text-muted">15 Apr 2025 ·
                                                    09:20AM</small></h5>
                                            <p class="mb-2">
                                                Customers are reporting that the checkout page freezes after submitting
                                                their payment information.
                                            </p>
                                            <RouterLink to=""
                                                class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                                <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                                            </RouterLink>

                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img :src="user10" height="32" width="32" alt=""
                                                        class="avatar-sm rounded-circle shadow-sm" />
                                                </div>
                                                <div class="flex-grow-1 ms-2">
                                                    <h5 class="mb-1">Nina Bryant <small class="text-muted">15 Apr 2025 ·
                                                            11:47AM</small></h5>
                                                    <p class="mb-2">
                                                        That might be caused by the third-party payment gateway. I
                                                        recommend
                                                        testing in incognito mode
                                                        and checking for any JS errors in the console.
                                                    </p>
                                                    <RouterLink to=""
                                                        class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                                        <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                                                    </RouterLink>
                                                </div>
                                            </div>

                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img :src="user3" height="32" width="32" alt=""
                                                        class="avatar-sm rounded-circle shadow-sm" />
                                                </div>
                                                <div class="flex-grow-1 ms-2">
                                                    <h5 class="mb-1">Sophie Allen <small class="text-muted">16 Apr 2025
                                                            ·
                                                            10:15AM</small></h5>
                                                    <p class="mb-2">
                                                        We’ve noticed this issue before when the CDN cache hasn't been
                                                        cleared properly. Try purging the
                                                        cache and reloading the page.
                                                    </p>
                                                    <RouterLink to=""
                                                        class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                                        <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                                                    </RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex mb-2 border border-dashed rounded p-3">
                                        <div class="flex-shrink-0">
                                            <img :src="user6" height="32" width="32" alt=""
                                                class="avatar-sm rounded-circle shadow-sm" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h5 class="mb-1">Daniel West <small class="text-muted">14 Apr 2025 ·
                                                    04:15PM</small></h5>
                                            <p class="mb-2">
                                                You can also clear the browser cache or try a different browser. We had
                                                a
                                                similar issue with Chrome
                                                extensions interfering before.
                                            </p>
                                            <RouterLink to=""
                                                class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                                <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                                            </RouterLink>
                                        </div>
                                    </div>

                                    <div class="d-flex mb-3 border border-dashed rounded p-3">
                                        <div class="flex-shrink-0">
                                            <img :src="user10" height="32" width="32" alt=""
                                                class="avatar-sm rounded-circle shadow-sm" />
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <h5 class="mb-1">Nina Bryant <small class="text-muted">16 Apr 2025 ·
                                                    08:04AM</small></h5>
                                            <p>
                                                The <RouterLink to="" class="text-decoration-underline">System Status
                                                    Page</RouterLink> has
                                                been updated. We're
                                                actively monitoring and will release a patch within 24 hours.
                                            </p>

                                            <RouterLink to=""
                                                class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                                <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                                            </RouterLink>

                                            <div class="d-flex mt-4">
                                                <div class="flex-shrink-0">
                                                    <img :src="user6" height="32" width="32" alt=""
                                                        class="avatar-sm rounded-circle shadow-sm" />
                                                </div>
                                                <div class="flex-grow-1 ms-2">
                                                    <h5 class="mb-1">Daniel West <small class="text-muted">16 Apr 2025 ·
                                                            08:30AM</small></h5>
                                                    <p>Thanks for the update! We'll notify the customers and let them
                                                        know
                                                        the issue is being resolved.</p>
                                                    <RouterLink to=""
                                                        class="badge bg-light text-muted d-inline-flex align-items-center gap-1">
                                                        <Icon icon="tabler:arrow-back-up" class="fs-lg" /> Reply
                                                    </RouterLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <BPagination v-model="currentPage" first-number last-number :total-rows="100"
                                        :per-page="10"
                                        class="pagination-rounded pagination-boxed justify-content-center mb-0">
                                        <template #prev-text>
                                            <Icon icon="tabler:chevron-left" />
                                        </template>
                                        <template #next-text>
                                            <Icon icon="tabler:chevron-right" />
                                        </template>
                                    </BPagination>
                                </BCardBody>
                            </BCard>
                        </BCol>

                        <BCol lg="3">
                            <BButton variant="primary" size="lg" class="mb-3 w-100">Ask Question</BButton>

                            <BCard no-body>
                                <BCardBody class="border-bottom border-dashed">
                                    <h5 class="mb-3 text-uppercase fw-bold">Search</h5>
                                    <div class="app-search">
                                        <BFormInput type="text" class="bg-light-subtle"
                                            placeholder="Search issues..." />
                                        <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                    </div>
                                </BCardBody>

                                <BCardBody class="border-bottom border-dashed">
                                    <h5 class="mb-3 text-uppercase fw-bold">Category:</h5>
                                    <ul class="list-group list-group-flush fs-sm">
                                        <li v-for="(item, idx) in categories" :key="idx" class="list-group-item ps-0">
                                            <RouterLink :to="item.url" class="link-reset fw-medium">{{ item.title }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </BCardBody>

                                <BCardBody class="border-bottom border-dashed">
                                    <h5 class="mb-3 text-uppercase fw-bold">Popular Questions:</h5>
                                    <ul class="list-group list-group-flush fs-sm">
                                        <li v-for="(question, idx) in questions" :key="idx"
                                            class="list-group-item ps-0">
                                            <RouterLink :to="question.url" class="link-reset fw-medium">{{
                                                question.title }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </BCardBody>

                                <BCardBody>
                                    <h5 class="mb-3 text-uppercase fw-bold">Popular Tags:</h5>
                                    <div class="d-flex flex-wrap gap-1">
                                        <BButton v-for="(tag, idx) in tags" :key="idx" variant="light" size="sm">
                                            {{ tag }}
                                        </BButton>
                                    </div>
                                </BCardBody>
                            </BCard>
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BButton, BCardBody, BCol, BContainer, BFormInput, BFormTextarea, BRow } from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'

import user10 from '@/assets/images/users/user-10.jpg'
import user3 from '@/assets/images/users/user-3.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'
import user8 from '@/assets/images/users/user-8.jpg'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { Icon } from '@iconify/vue'

type QuickLinkType = {
    title: string
    url: string
}

const categories: QuickLinkType[] = [
    { title: 'Development Talk', url: '' },
    { title: 'AI & Ethics', url: '' },
    { title: 'Product Design', url: '' },
    { title: 'Career Growth', url: '' },
    { title: 'Open Source', url: '' },
]

const questions: QuickLinkType[] = [
    { title: 'Unlocking the Secrets of Modern UI Design', url: '' },
    { title: 'How to Build a Portfolio with Tailwind CSS', url: '' },
    { title: 'Boost Productivity with These Web Dev Tools', url: '' },
    { title: 'The Future of Frontend: Trends to Watch in 2025', url: '' },
    { title: 'Essential Tips for Clean and Maintainable Code', url: '' },
]

const tags = [
    'Web Design',
    'Frontend',
    'Tailwind CSS',
    'JavaScript',
    'React',
    'Startup',
    'DevTools',
    'Open Source',
    'Performance',
    'UX/UI',
    'SEO',
]

const currentPage = ref(1)


usePageMeta('Forum Post')
</script>
