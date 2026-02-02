<template>
    <BContainer fluid>
        <PageBreadcrumb title="Complete Table" subtitle="Tables" />

        <BRow>
            <BCol xs="12">
                <TableWithSearch />
            </BCol>
        </BRow>
        <BRow>
            <BCol xs="12">
                <TableWithCheckBoxSelect />
            </BCol>
        </BRow>
        <BRow>
            <BCol xs="12">
                <TableWithDeleteButton />
            </BCol>
        </BRow>
        <BRow>
            <BCol xs="12">
                <TableWithSort />
            </BCol>
        </BRow>
        <BRow>
            <BCol xs="12">
                <CompleteTable />
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
import { BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';
import CompleteTable from './components/CompleteTable.vue';
import TableWithSearch from './components/TableWithSearch.vue';
import TableWithCheckBoxSelect from './components/TableWithCheckBoxSelect.vue';
import TableWithDeleteButton from './components/TableWithDeleteButton.vue';
import TableWithSort from './components/TableWithSort.vue';

usePageTitle('Custom Tables')
</script>

<style scoped></style>