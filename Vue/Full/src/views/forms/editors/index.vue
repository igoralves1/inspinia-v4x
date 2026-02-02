<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Editors" subTitle="Forms" />
        </BContainer>
        <BContainer>
            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Vue Quill</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Quill is a modern WYSIWYG editor built for compatibility and extensibility
                            </p>
                            <a class="btn btn-link p-0 fw-semibold" href="https://vueup.github.io/vue-quill/"
                                target="_blank">
                                Vue Quill →
                            </a>
                        </BCardBody>

                        <div class="border-top border-dashed"></div>

                        <BCardBody>
                            <h5 class="mb-2">Snow Editor</h5>
                            <p class="text-muted">Snow is a clean, flat toolbar theme.</p>

                            <QuillEditor v-model:content="content" theme="snow" content-type="html" :toolbar="modules"/>

                        </BCardBody>

                        <div class="border-top border-dashed"></div>

                        <BCardBody>
                            <h5 class="mb-2">Bubble Editor</h5>
                            <p class="text-muted">Bubble is a simple tooltip based theme.</p>

                            <QuillEditor v-model:content="bubbleValue" :toolbar="bubbleToolbar" theme="bubble"
                                content-type="html" style="height: 300px" />
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { BCard, BCardBody, BCol, BContainer } from 'bootstrap-vue-next'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { QuillEditor } from '@vueup/vue-quill'
import { Icon } from '@iconify/vue'

const modules = [
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'super' }, { script: 'sub' }],
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
]

const bubbleToolbar = [
    ['bold', 'italic', 'underline'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
]


// Editor content

const bubbleValue = ref(`<h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3><p><br /></p><ul><li>Fully responsive layout with a sleek and modern design.</li><li>Multiple pre-built pages such as login, registration, dashboard, charts, tables, and more.</li><li>Includes various components like modals, alerts, navigation menus, etc.</li><li>Easy to customize and extend to suit your project’s needs.</li><li>Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.</li></ul><p><br /></p><p>Inspinia Admin is the perfect choice for your next admin project. Get started today and create a stunning interface for your application.</p>`)
const content = ref(`<h3>A powerful and responsive admin dashboard template built on Bootstrap.</h3><p><br /></p><ul><li>Fully responsive layout with a sleek and modern design.</li><li>Multiple pre-built pages such as login, registration, dashboard, charts, tables, and more.</li><li>Includes various components like modals, alerts, navigation menus, etc.</li><li>Easy to customize and extend to suit your project’s needs.</li><li>Built with Bootstrap 5x, ensuring compatibility with a wide range of devices.</li></ul><p><br /></p><p>Inspinia Admin is the perfect choice for your next admin project. Get started today and create a stunning interface for your application.</p>`)

usePageMeta('Editors')
</script>
