<template>
    <simplebar no-body class="card w-100 h-100 mb-0 rounded-0 border-0 ">
        <div class="h-100 position-relative">
            <BCardBody>
                <BButton variant="danger" class="fw-medium w-100"> Upload Files </BButton>

                <BListGroup flush class="list-custom mt-3">
                    <BListGroupItem v-for="(item, idx) in items" :key="item.name" :to="''" action
                        :class="idx === 0 ? 'active' : ''">
                        <Icon :icon="item.icon" class="align-middle me-1 opacity-75 fs-lg" />
                        <span class="align-middle">{{ item.name }}</span>

                        <span v-if="item.badge" :class="[
                            'badge align-middle float-end fs-xxs',
                            `bg-${item.badge.variant}-subtle`,
                            `text-${item.badge.variant}`,
                        ]">
                            {{ item.badge.text }}
                        </span>
                    </BListGroupItem>

                    <BListGroupItem class="mt-2">
                        <span class="align-middle">Categories</span>
                    </BListGroupItem>

                    <BListGroupItem v-for="item in categories" :key="item.name" :to="''" action>
                        <Icon :icon="item.icon" size="14"
                            :class="`align-middle me-1 opacity-75 fs-lg text-${item.variant ?? 'primary'}`" />
                        <span class="align-middle">{{ item.name }}</span>
                    </BListGroupItem>
                </BListGroup>
            </BCardBody>

            <div class="position-absolute bottom-0 start-0 w-100 overflow-hidden" style="pointer-events: none">
                <svg viewBox="0 0 600 560" preserveAspectRatio="xMinYMax meet" width="100%" height="100%" fill="none"
                    xmlns="http://www.w3.org/2000/svg" style="opacity: 0.05">
                    <circle cx="50" cy="480" r="40" fill="#FF4C3E" />
                    <path d="M140 440 C130 470, 100 470, 90 440 S50 410, 40 440" stroke="#089df1" stroke-width="2"
                        fill="none" />
                    <path d="M100 360 L50 410 L0 360 Z" fill="#f9bf59" />
                    <ellipse cx="80" cy="280" rx="30" ry="50" fill="#7b70ef" />
                    <path d="M140 240 Q130 260 110 250 Q90 240 100 220 Q110 200 130 210 Q150 220 140 240 Z"
                        fill="#089df1" />
                    <path d="M130 150 C140 170, 110 180, 90 170 C70 160, 60 140, 80 120 C100 100, 120 110, 130 150 Z"
                        fill="#f7577e" />
                    <path d="M220 480 L212 460 H190 L208 445 L200 425 L220 437 L240 425 L232 445 L250 460 H228 Z"
                        fill="#7b70ef" />
                    <path d="M310 460 C300 470, 290 450, 300 440 C310 430, 330 430, 340 440 C350 450, 350 470, 340 480"
                        stroke="#089df1" stroke-width="2" fill="none" />
                    <path d="M280 360 L270 350 L280 330 L300 330 L310 350 Z" fill="#f7577e" />
                    <circle cx="140" cy="310" r="20" stroke="#089df1" stroke-width="3" fill="none" />
                </svg>
            </div>
        </div>
    </simplebar>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'


// Item type
type SideBarItemType = {
    name: string
    icon: string
    variant?: string
    badge?: {
        text: string
        variant: string
    }
}

const items: SideBarItemType[] = [
    { name: 'My Files', icon: 'tabler:folder', badge: { text: '12', variant: 'danger' } },
    { name: 'Shared with Me', icon: 'tabler:share' },
    { name: 'Recent', icon: 'tabler:clock' },
    { name: 'Favourites', icon: 'tabler:star' },
    { name: 'Downloads', icon: 'tabler:download' },
    { name: 'Trash', icon: 'tabler:trash' },
]

const categories: SideBarItemType[] = [
    { name: 'Work', icon: 'tabler:chart-donut-filled', variant: 'primary' },
    { name: 'Projects', icon: 'tabler:chart-donut-filled', variant: 'purple' },
    { name: 'Media', icon: 'tabler:chart-donut-filled', variant: 'info' },
    { name: 'Documents', icon: 'tabler:chart-donut-filled', variant: 'warning' },
]
</script>
