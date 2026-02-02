<template>
    <UICard title="Top 10 Countries" isCloseable isCollapsable isReloadable>
        <div v-for="(country, idx) in countriesData" :key="country.code" :class="[
            'd-flex align-items-center gap-2',
            idx !== countriesData.length - 1 ? 'mb-3' : ''
        ]">
            <span class="fs-sm fw-medium fst-italic text-muted">
                {{ country.rank.toString().padStart(2, '0') }}.
            </span>

            <img :src="country.flag" :alt="country.name" class="avatar-xxs rounded" height="16" width="16" />

            <h5 class="mb-0 fw-medium">
                <RouterLink to="" class="link-reset">
                    {{ country.name }}
                </RouterLink>
            </h5>

            <div class="ms-auto">
                <div class="d-flex align-items-center gap-3">
                    <p class="mb-0 fw-medium">
                        {{ country.visitors.toLocaleString() }}
                    </p>
                    <p class="badge badge-label fs-xxs mb-0" :class="`badge-soft-${country.trend.type}`">
                        <span v-if="country.trend.type === 'danger'">-</span>
                        {{ country.trend.value }}%
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center mt-2">
            <RouterLink to="/chat" class="link-reset text-decoration-underline fw-semibold link-offset-3">
                View all Countries
                <Icon icon="tabler:world" width="13" />
            </RouterLink>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import UICard from '@/components/UICard.vue';
import { countriesData } from './data';
import { Icon } from '@iconify/vue';




</script>