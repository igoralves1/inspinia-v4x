<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Static Tables" subtitle="Tables" />

            <BRow class="justify-content-center">
                <BCol xxl="9">
                    <BasicTable />
                    <CustomTable />
                    <TableVariants />
                    <StripedRowTable />
                    <StripedColumnTable />
                    <HoverableRowsTable />
                    <ActiveRowTable />
                    <BorderedTable />
                    <BorderlessTable />
                    <SmallTable />
                    <TableGroupDividers />
                    <NestedTable />
                    <TableHead />
                    <TableCaption />
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import BasicTable from './components/BasicTable.vue';
import CustomTable from './components/CustomTable.vue';
import TableVariants from './components/TableVariants.vue';
import StripedRowTable from './components/StripedRowTable.vue';
import StripedColumnTable from './components/StripedColumnTable.vue';
import HoverableRowsTable from './components/HoverableRowsTable.vue';
import ActiveRowTable from './components/ActiveRowTable.vue';
import BorderedTable from './components/BorderedTable.vue';
import BorderlessTable from './components/BorderlessTable.vue';
import SmallTable from './components/SmallTable.vue';
import TableGroupDividers from './components/TableGroupDividers.vue';
import NestedTable from './components/NestedTable.vue';
import TableHead from './components/TableHead.vue';
import TableCaption from './components/TableCaption.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

usePageMeta('Static Tables')
</script>
