<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Roles" subTitle="Users" />

            <BRow class="justify-content-center">
                <BCol xxl="10">

                    <div class="d-flex align-items-sm-center flex-sm-row flex-column mb-3">
                        <div class="flex-grow-1">
                            <h4 class="fs-xl mb-1">Manage Roles</h4>
                            <p class="text-muted mb-0">Manage roles for smoother operations and secure access.</p>
                        </div>

                        <div class="text-end">
                            <RouterLink to="" class="btn btn-success">
                                <Icon icon="tabler:plus" class="me-1" /> Add New Role
                            </RouterLink>
                        </div>
                    </div>

                    <BRow>
                        <BCol v-for="(member, idx) in memberRoles" :key="idx" md="6" lg="3">
                            <MemberRoleCard :member="member" />
                        </BCol>
                    </BRow>

                    <BRow>
                        <BCol xs="12">
                            <UserTable />
                        </BCol>
                    </BRow>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import MemberRoleCard from './components/MemberRoleCard.vue';
import { memberRoles } from './components/data';
import UserTable from './components/UserTable.vue';
import { Icon } from '@iconify/vue';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';

usePageMeta('User Roles')
</script>

<style scoped></style>