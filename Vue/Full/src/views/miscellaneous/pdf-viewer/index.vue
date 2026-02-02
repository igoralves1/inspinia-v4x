<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="PDF Viewer" subTitle="Miscellaneous" />

            <BRow>
                <BCol xs="12">
                    <BCard>
                        <BCardBody>

                            <div class="text-center overflow-auto mt-3">
                                <div class="pdfcanvas border rounded-3">
                                    <PDF ref="pdfRef" :src="pdfSrc" :show-progress="true" pdf-width="920"
                                        @num-pages="onNumPages" />
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
import { BCard, BCardBody, BCol, BContainer, BRow } from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import PDF from "pdf-vue3";

// PDF file
const pdfSrc =
    'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf'

// refs
const pdfRef = ref<any>(null)
const totalPages = ref(0)

// get total pages when loaded
const onNumPages = (pages: number) => {
    totalPages.value = pages
}


usePageMeta('PDF Viewer')
</script>

<style scoped></style>
