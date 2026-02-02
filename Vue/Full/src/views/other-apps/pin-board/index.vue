<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Pin Board" subtitle="Apps" />

            <BRow>
                <BCol cols="12">
                    <BCard no-body class="bg-transparent">
                        <BCardHeader class="d-flex justify-content-between align-items-center">
                            <BCardTitle tag="h5">Manage Your Notes</BCardTitle>
                            <BButton variant="success" class="rounded-pill">
                                Add New
                            </BButton>
                        </BCardHeader>

                        <BCardBody>
                            <div class="pin-board d-flex flex-wrap">
                                <div v-for="note in notes" :key="note.id" class="pin-board-item"
                                    :class="`bg-${note.variant}-subtle`">
                                    <p class="text-end fs-10">{{ note.timestamp }}</p>
                                    <h4 class="fs-md">{{ note.title }}</h4>
                                    <p>{{ note.content }}</p>
                                    <RouterLink to="" class="pin-board-delete fs-lg" @click="deleteNote(note.id)">
                                        <Icon icon="tabler:trash" />
                                    </RouterLink>
                                </div>
                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { BButton, BCard, BCardBody, BCardHeader, BCardTitle, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import { pinNotes, type PinNoteType } from './data'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { Icon } from '@iconify/vue'

const notes = ref<PinNoteType[]>(pinNotes)

const deleteNote = (id: string) => {
    notes.value = notes.value.filter((note: PinNoteType) => note.id !== id)
}

usePageMeta('Pin Board')
</script>