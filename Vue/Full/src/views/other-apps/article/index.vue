<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Article" subtitle="Apps" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardBody class="p-lg-5">
                            <BRow class="g-5">
                                <BCol lg="8">
                                    <h1 class="h3 mb-0">
                                        Mastering the Art of Focus: Tools & Strategies for Deep Work
                                    </h1>

                                    <p class="d-flex flex-wrap gap-3 text-muted mb-0 mt-3 align-items-center fs-base">
                                        <span class="badge text-bg-dark badge-label">Productivity</span>
                                        <span class="d-flex align-items-center gap-1">
                                            <Icon icon="tabler:calendar" class="fs-md" />
                                            <span>Mar 18, 2025</span>
                                        </span>
                                        <span class="d-flex align-items-center gap-1">
                                            <Icon icon="tabler:message-circle" class="fs-md" />
                                            <RouterLink to="#" class="link-reset">42</RouterLink>
                                        </span>
                                        <span class="d-flex align-items-center gap-1">
                                            <Icon icon="tabler:eye" class="fs-md" />
                                            <span>982</span>
                                        </span>
                                    </p>

                                    <img :src="blogPost" width="802" height="451" class="img-fluid rounded mt-4"
                                        alt="blog-img" />

                                    <div class="fs-md">
                                        <p class="mt-4">In a world full of constant notifications and distractions,
                                            developing the ability to focus has become a superpower. This article dives
                                            into
                                            proven methods for cultivating deep work and staying productive in a digital
                                            age.</p>
                                        <p>Eliminating distractions and building a workflow that encourages
                                            uninterrupted
                                            focus can drastically improve your efficiency. Whether you're coding,
                                            writing,
                                            or designing — deep work leads to higher quality output and greater
                                            satisfaction.</p>
                                        <p>Some effective strategies include time-blocking your calendar, using tools
                                            like
                                            Pomodoro timers, and creating a distraction-free workspace. Even just 90
                                            minutes
                                            of intentional, focused work per day can compound into massive progress over
                                            time.</p>
                                        <p class="mb-0">By embracing stillness and training your attention, <mark>you’ll
                                                uncover a new level of clarity and creativity</mark> that transforms how
                                            you
                                            work and what you’re capable of achieving.</p>
                                    </div>

                                    <div
                                        class="bg-light-subtle border border-light rounded d-md-flex justify-content-between align-items-center text-center p-3 mt-5">
                                        <h5 class="mb-0">Was this article helpful?</h5>
                                        <p class="py-3 p-md-0 mb-0">
                                            <b>41</b> out of <b>72</b> found this helpful
                                        </p>

                                        <div class="btn-group" role="group">
                                            <input type="radio" class="btn-check" id="yes" value="yes"
                                                v-model="helpful" />
                                            <label class="btn btn-soft-success btn-sm mb-0" for="yes">
                                                <Icon icon="tabler:thumb-up" class="me-1" /> Yes
                                            </label>

                                            <input type="radio" class="btn-check" id="no" value="no"
                                                v-model="helpful" />
                                            <label class="btn btn-soft-danger btn-sm mb-0" for="no">
                                                No
                                                <Icon icon="tabler:thumb-down" class="ms-1" />
                                            </label>
                                        </div>
                                    </div>

                                    <div
                                        class="d-flex align-items-center gap-4 border mt-4 border-dashed p-4 rounded mb-14">
                                        <div class="text-center flex-shrink-0 me-7 me-lg-13">
                                            <div class="mb-2">
                                                <img :src="user1" width="48" height="48"
                                                    class="avatar-xl rounded-circle" alt="author" />
                                            </div>
                                            <div>
                                                <RouterLink to="#" class="fw-bold fs-sm">Nathan Brooks</RouterLink>
                                                <span class="text-muted fs-6 fw-semibold d-block mt-1">Productivity
                                                    Coach</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="text-muted fw-medium lh-base mb-2">
                                                Nathan is passionate about helping creators, developers, and
                                                entrepreneurs
                                                reclaim their time and do meaningful work. He writes regularly about
                                                mindful
                                                productivity and digital wellness.
                                            </div>
                                            <RouterLink to="#" class="fw-semibold link-primary">Author’s Profile
                                            </RouterLink>
                                        </div>
                                    </div>

                                    <div class="my-4 text-center">
                                        <h5 class="mb-3 text-uppercase fw-bold">Share This:</h5>
                                        <div class="d-flex justify-content-center gap-2">
                                            <RouterLink v-for="(item, idx) in socialLinks" :key="idx" :to="item.link"
                                                :class="`btn btn-icon rounded-circle btn-${item.variant}`">
                                                <Icon :icon="item.icon" class="fs-xl" />
                                            </RouterLink>
                                        </div>
                                    </div>
                                </BCol>

                                <BCol lg="4">
                                    <h5 class="mb-3 text-uppercase fw-bold">Search</h5>
                                    <div class="app-search">
                                        <BFormInput type="text" class="bg-light-subtle border-light"
                                            placeholder="Search post..." />
                                        <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                    </div>

                                    <div class="mt-5">
                                        <h5 class="mb-3 text-uppercase fw-bold">Related posts:</h5>
                                        <ul class="list-group list-group-flush fs-sm">
                                            <li v-for="(post, idx) in relatedPosts" :key="idx"
                                                class="list-group-item ps-0">
                                                <RouterLink to="#" class="link-reset fw-medium">
                                                    {{ post.title }}
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="mt-5">
                                        <h5 class="mb-3 text-uppercase fw-bold">Popular Tags:</h5>
                                        <div class="d-flex flex-wrap gap-1">
                                            <BButton v-for="(tag, idx) in tags" :key="idx" variant="light" size="sm">
                                                {{ tag }}
                                            </BButton>
                                        </div>
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
import { ref } from 'vue'

import blogPost from '@/assets/images/blog/blog-post.jpg'
import user1 from '@/assets/images/users/user-1.jpg'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { BButton, BCardBody, BCol, BContainer, BFormInput, BRow } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'

// Social links
const socialLinks = [
    { icon: 'lucide:facebook', title: 'Facebook', link: '#', variant: 'purple' },
    { icon: 'tabler:brand-x', title: 'Twitter-x', link: '#', variant: 'info' },
    { icon: 'lucide:instagram', title: 'Instagram', link: '#', variant: 'danger' },
    { icon: 'lucide:dribbble', title: 'Dribbble', link: '#', variant: 'success' },
    { icon: 'lucide:linkedin', title: 'Linkedin', link: '#', variant: 'secondary' },
    { icon: 'lucide:youtube', title: 'Youtube', link: '#', variant: 'danger' },
]

const relatedPosts = [
    { title: 'Unlocking the Secrets of Modern UI Design', url: '#' },
    { title: 'How to Build a Portfolio with Tailwind CSS', url: '#' },
    { title: 'Boost Productivity with These Web Dev Tools', url: '#' },
    { title: 'The Future of Frontend: Trends to Watch in 2025', url: '#' },
    { title: 'Essential Tips for Clean and Maintainable Code', url: '#' },
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

const helpful = ref('')

usePageMeta('Artical')
</script>