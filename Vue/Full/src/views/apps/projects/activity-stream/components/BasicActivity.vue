<template>
    <BCard no-body class="card-h-100">
        <BCardHeader>
            <BCardTitle as="h4">Basic Activity Stream</BCardTitle>
        </BCardHeader>
        <BCardBody>
            <div v-for="(activity, idx) in basicActivities" :key="idx" class="py-1 d-flex gap-3 align-items-center">
                <span :class="`badge badge-label text-bg-${activity.variant}`">
                    {{ activity.status }}
                </span>

                <span class="text-muted">{{ activity.time }}</span>

                <RouterLink to="/pages/profile" class="link-reset fw-semibold d-flex align-items-center gap-1">
                    <img :src="activity.avatar" :alt="activity.name" class="rounded-circle avatar-xxs" />
                    {{ activity.name }}
                </RouterLink>

                <span>{{ activity.action }}</span>
            </div>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCardTitle } from 'bootstrap-vue-next'
import { basicActivities } from './data';
</script>