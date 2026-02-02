<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Flags" subTitle="Icons" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="justify-content-between">
                            <div>
                                <h4 class="card-title mb-1 d-flex align-items-center gap-2">
                                    Flags Listing (SVG)
                                </h4>
                                <p class="mb-0 text-muted">We offer a set of scalable SVG flags, perfect for language
                                    selectors and international content.</p>
                            </div>
                            <div class="app-search">
                                <input type="search" class="form-control" placeholder="Search country..."
                                    v-model="searchQuery">
                                <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                            </div>
                        </BCardHeader>

                        <BCardBody>

                            <BTable bordered show-empty :filter="searchQuery" empty-text="Nothing found."
                                thead-class="align-middle" hover :fields="fields" :items="allCountries"
                                :per-page="perPage" :current-page="currentPage" @filtered="onFiltered" responsive
                                class="align-middle text-center w-100">
                                <template #head()="data">
                                    <span class="fs-xxs">{{ data.label }}</span>
                                </template>
                                <template #cell(flag)="{ item }">
                                    <img :src="item.flag" :alt="item.name" height="18" class="rounded" />
                                </template>
                                <template #cell(path)="{ item }">
                                    <code>@/assets/images/flags/{{ item.code }}.svg</code>
                                </template>
                                <template #cell(code)="{ item }">
                                    {{ item.code.toUpperCase() }}
                                </template>
                            </BTable>
                            <BCardFooter class="border-0">
                                <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                    :total-items="totalRows" label="categories" class="mb-0 pb-0" />
                            </BCardFooter>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow, type TableFieldRaw } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import TablePagination from '@/components/TablePagination.vue';
import { countries, type CountryType } from './data';
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';

const fields: Exclude<TableFieldRaw<CountryType>, string>[] = [
    { key: 'flag', label: 'Flag' },
    { key: 'name', label: 'Country Name' },
    { key: 'path', label: 'Path' },
    { key: 'code', label: 'Code' },
]

const searchQuery = ref('')


const currentPage = ref(1)
const perPage = ref(50)
const totalRows = ref(countries.length)
const allCountries = ref<CountryType[]>(countries)

function onFiltered(filteredItems: CountryType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}


usePageMeta('Flags')

</script>

<style scoped></style>