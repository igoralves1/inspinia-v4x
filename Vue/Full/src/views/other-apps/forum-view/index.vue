<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Forum View" subtitle="Apps" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow>
                        <BCol xl="9">
                            <h4 class="mb-3">All Questions</h4>

                            <ForumCard v-for="(item, idx) in forumPosts" :key="item.id" :item="item"
                                :class="idx !== forumPosts.length - 1 ? 'mb-1' : ''" />

                            <BPagination v-model="currentPage" :total-rows="100" :per-page="10" first-number last-number
                                class="pagination-rounded pagination-boxed justify-content-center mt-3">
                                <template #prev-text>
                                    <Icon icon="tabler:chevron-left" />
                                </template>
                                <template #next-text>
                                    <Icon icon="tabler:chevron-right" />
                                </template>
                            </BPagination>
                        </BCol>

                        <BCol lg="3">
                            <BButton variant="primary" size="lg" class="mb-3 w-100">
                                Ask Question
                            </BButton>

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
                                            <RouterLink :to="item.url" class="link-reset fw-medium">
                                                {{ item.title }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </BCardBody>

                                <BCardBody class="border-bottom border-dashed">
                                    <h5 class="mb-3 text-uppercase fw-bold">Popular Questions:</h5>

                                    <ul class="list-group list-group-flush fs-sm">
                                        <li v-for="(question, idx) in questions" :key="idx"
                                            class="list-group-item ps-0">
                                            <RouterLink :to="question.url" class="link-reset fw-medium">
                                                {{ question.title }}
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
import { BButton, BCard, BCardBody, BFormInput, BPagination } from 'bootstrap-vue-next'
import { forumPosts } from './data'
import ForumCard from './components/ForumCard.vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'

const currentPage = ref(1)

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

const tags = ['Web Design', 'Frontend', 'Tailwind CSS', 'JavaScript', 'React', 'Startup', 'DevTools', 'Open Source', 'Performance', 'UX/UI', 'SEO']

usePageMeta('Forum View')
</script>
