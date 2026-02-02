<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Vote List" subtitle="Apps" />

            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between d-flex flex-wrap gap-2">
                            <div class="app-search">
                                <input type="text" class="form-control" placeholder="Search topics..."
                                    v-model="search" />
                                <Icon icon="lucide:search" class="app-search-icon text-muted"  />
                            </div>

                            <div class="d-flex align-items-center gap-2 flex-wrap">
                                <span class="me-2 fw-semibold">Filter By:</span>

                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option>Sort By</option>
                                        <option value="latest">Latest</option>
                                        <option value="popular">Popular</option>
                                        <option value="low">Low Votes</option>
                                        <option value="high">High Votes</option>
                                    </select>
                                    <Icon icon="lucide:list-filter"  class="app-search-icon text-muted" />
                                </div>

                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option>Vote Status</option>
                                        <option value="Voted">Voted</option>
                                        <option value="Not Voted">Not Voted</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Disqualified">Disqualified</option>
                                    </select>
                                    <Icon icon="lucide:check-circle"  class="app-search-icon text-muted" />
                                </div>

                                <BButton variant="success" type="button">
                                    Add New Topics
                                </BButton>
                            </div>
                        </BCardHeader>

                        <BCardBody class="p-0">
                            <div v-for="(item, idx) in filteredList" :key="idx"
                                :class="['px-4 py-3', idx !== filteredList.length - 1 ? 'border-bottom border-dashed' : '']">
                                <VoteListItem :item="item" />
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BButton } from 'bootstrap-vue-next'
import { voteList, type VoteListItemType } from './data'
import VoteListItem from './components/VoteListItem.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { Icon } from '@iconify/vue'
import MainLayout from '@/layouts/MainLayout.vue'

// State
const search = ref('')


// Filtering + sorting
const filteredList = computed<VoteListItemType[]>(() => {
    let list = voteList.filter((item: VoteListItemType) =>
        item.title.toLowerCase().includes(search.value.toLowerCase())
    )

    list = list.sort((a: VoteListItemType, b: VoteListItemType) => {
        return b.votes - a.votes
    })

    return list
})

usePageMeta('Vote List')
</script>
