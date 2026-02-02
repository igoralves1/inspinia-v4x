<template>
    <BContainer fluid>
        <PageBreadcrumb title="Activity Stream" subtitle="Projects" />

        <BRow>
            <BCol xxl="6">
                <BasicActivity />
            </BCol>

            <BCol xxl="6">
                <ExpandedActivity />
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';
import BasicActivity from './components/BasicActivity.vue';
import ExpandedActivity from './components/ExpandedActivity.vue';

usePageTitle('Activity Stream')
</script>

<style scoped></style>