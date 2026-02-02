<template>
    <UICard title="Top 10 Countries" isCloseable isCollapsable isReloadable>
        <div v-for="(country, idx) in countriesData" :key="idx"
            :class="['d-flex align-items-center gap-2', countriesData.length - 1 !== idx ? 'mb-3' : '']">
            <span class="fs-sm fw-medium fst-italic text-muted">
                {{ country.rank.toString().padStart(2, '0') }}.
            </span>

            <NuxtImg :src="country.flag" :alt="country.name" class="avatar-xxs rounded" width="16" height="16" />

            <h5 class="mb-0 fw-medium">
                <NuxtLink to="" class="link-reset">
                    {{ country.name }}
                </NuxtLink>
            </h5>

            <div class="ms-auto">
                <div class="d-flex align-items-center gap-3">
                    <p class="mb-0 fw-medium">{{ country.visitors.toLocaleString() }}</p>
                    <p class="badge badge-label fs-xxs mb-0" :class="`badge-soft-${country.trend.type}`">
                        {{ country.trend.type === 'danger' ? '-' : country.trend.type === 'success' ? '+' : '' }}
                        {{ country.trend.value }}%
                    </p>
                </div>
            </div>
        </div>

        <div class="text-center mt-2">
            <NuxtLink to="/chat" class="link-reset text-decoration-underline fw-semibold link-offset-3">
                View all Countries
                <Icon name="tabler:world" size="13" />
            </NuxtLink>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import UICard from '~/components/UICard.vue';
import { countriesData } from './data';


</script>

<style scoped></style>