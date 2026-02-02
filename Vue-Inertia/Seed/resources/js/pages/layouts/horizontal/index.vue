<template>
    <MainLayout>
    <Head title="Horizontal Layout" />
        <BContainer fluid>
            <PageBreadcrumb title="Horizontal" />
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'

import { onBeforeUnmount, onMounted } from 'vue'
import { useLayout } from '@/stores/layout.ts'
import { Head } from '@inertiajs/vue3'

const { setOrientation, reset } = useLayout()


onMounted(() => {
    setOrientation('horizontal')
})

onBeforeUnmount(() => {
    reset()
})
</script>
