<template>
    <UICard title="Personal Information">
        <div>
            <div v-for="(item, idx) in personalInfo" :key="idx" class="d-flex align-items-center gap-2"
                :class="{ 'mb-2': idx !== personalInfo.length - 1 }">
                <div class="avatar-sm bg-light d-flex align-items-center justify-content-center rounded">
                    <Icon :icon="item.icon" class="fs-xl text-secondary" />
                </div>
                <p class="mb-0 fs-sm" v-html="item.info"></p>
            </div>

            <div class="d-flex justify-content-center gap-2 mt-4 mb-2">
                <RouterLink v-for="(item, idx) in socialLinks" :key="idx" :to="item.link"
                    class="btn btn-icon rounded-circle" :class="`btn-${item.variant}`">
                    <Icon :icon="item.icon" class="fs-xl" />
                </RouterLink>
            </div>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import UICard from '@/components/UICard.vue'
import { Icon } from '@iconify/vue'


type InfoType = {
    icon: string
    info: string | { __html: string }
}

type SocialLinkType = {
    icon: string
    title: string
    link: string
    variant: string
}

const personalInfo: InfoType[] = [
    {
        icon: 'tabler:briefcase',
        info: 'UI/UX Designer & Full-Stack Developer',
    },
    {
        icon: 'tabler:school',
        info: 'Studied at <span class="text-dark fw-semibold">Stanford University</span>',
    },
    {
        icon: 'tabler:map-pin',
        info: 'Lives in <span class="text-dark fw-semibold">San Francisco, CA</span>',
    },
    {
        icon: 'tabler:users',
        info: 'Followed by <span class="text-dark fw-semibold">25.3k People</span>',
    },
    {
        icon: 'tabler:mail',
        info: 'Email <a href="mailto:hello@example.com" class="text-primary fw-semibold">hello@example.com</a>',
    },
    {
        icon: 'tabler:link',
        info: 'Website <a href="https://www.example.dev" target="_blank" class="text-primary fw-semibold">www.example.dev</a>',
    },
    {
        icon: 'tabler:world',
        info: 'Languages <span class="text-dark fw-semibold">English, Hindi, Japanese</span>',
    },
]

const socialLinks: SocialLinkType[] = [
    { icon: 'lucide:facebook', title: 'Facebook', link: '', variant: 'purple' },
    { icon: 'tabler:brand-x', title: 'Twitter-x', link: '', variant: 'info' },
    { icon: 'lucide:instagram', title: 'Instagram', link: '', variant: 'danger' },
    { icon: 'lucide:dribbble', title: 'Dribbble', link: '', variant: 'success' },
    { icon: 'lucide:linkedin', title: 'Linkedin', link: '', variant: 'secondary' },
    { icon: 'lucide:youtube', title: 'Youtube', link: '', variant: 'danger' },
]
</script>
