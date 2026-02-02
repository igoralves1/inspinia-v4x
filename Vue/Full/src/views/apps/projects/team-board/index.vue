<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Team Board" subtitle="Projects" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <div class="d-flex align-items-sm-center flex-sm-row flex-column mb-3">
                        <div class="flex-grow-1">
                            <h4 class="fs-xl mb-1">Manage Teams</h4>
                            <p class="text-muted mb-0">
                                Assign roles to streamline teamwork and secure access.
                            </p>
                        </div>

                        <div class="text-end">
                            <RouterLink to="" class="btn btn-success">
                                <Icon icon="tabler:plus" class="me-1" />
                                Add New Team
                            </RouterLink>
                        </div>
                    </div>

                    <BRow>
                        <BCol v-for="(team, idx) in teams" :key="idx" md="6" lg="4">
                            <TeamCard :team="team" />
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import {
    BContainer,
    BRow,
    BCol
} from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { teams } from './data';
import TeamCard from './components/TeamCard.vue';
import { Icon } from '@iconify/vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('Team Board')
</script>