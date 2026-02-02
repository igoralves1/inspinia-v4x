<template>
    <MainLayout>
        <div class="container-fluid">
            <PageBreadcrumb subTitle="Miscellaneous" title="Clipboard" />

            <BRow class="justify-content-center">
                <BCol lg="8">
                    <UICard title="Examples">
                        <div class="table-responsive-sm">
                            <table class="table mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy from Element</h5>
                                            <p class="text-muted mb-0">
                                                Use <code>ref</code> to copy text from a specific element.
                                            </p>
                                        </td>
                                        <td>
                                            <p class="text-primary fw-bold" ref="copytext">
                                                Click the button to copy this promotional text.
                                            </p>
                                            <button class="btn btn-sm btn-primary" @click="copyFromElement(copytext)">
                                                <Icon icon="tabler:copy" class="me-1" /> Copy Text
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Cut from Textarea</h5>
                                            <p class="text-muted mb-0">
                                                Use <code>cut</code> to remove and copy content.
                                            </p>
                                        </td>
                                        <td>
                                            <textarea class="form-control" ref="cutArea">
This content will be cut and removed from this textarea.</textarea>
                                            <button class="btn btn-sm btn-primary mt-3" @click="cutFromInput(cutArea)">
                                                <Icon icon="tabler:scissors" class="me-1" /> Cut Content
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy Email Address</h5>
                                            <p class="text-muted mb-0">Click to copy email:</p>
                                        </td>
                                        <td>
                                            <span ref="copyEmail"
                                                class="d-block text-primary fw-bold">support@example.com</span>
                                            <button class="btn btn-sm btn-primary mt-2"
                                                @click="copyFromElement(copyEmail)">
                                                <Icon icon="tabler:copy" class="me-1" /> Copy Email
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Cut Input Value</h5>
                                        </td>
                                        <td>
                                            <input ref="cutInput" type="text" class="form-control"
                                                value="Temporary token: 8GDF-393K-L99Z" />
                                            <button class="btn btn-sm btn-danger mt-2" @click="cutFromInput(cutInput)">
                                                <Icon icon="tabler:scissors" class="me-1" /> Cut Token
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy Code Snippet</h5>
                                        </td>
                                        <td>
                                            <pre><code ref="codeSnippet">npm install clipboard --save</code></pre>
                                            <button class="btn btn-sm btn-success"
                                                @click="copyFromElement(codeSnippet)">
                                                <Icon icon="tabler:copy" class="me-1" /> Copy Command
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy from Input Group</h5>
                                        </td>
                                        <td>
                                            <div class="input-group">
                                                <input ref="copyLink" type="text" class="form-control"
                                                    value="https://example.com/invite?ref=12345" readonly />
                                                <button class="btn btn-icon btn-secondary"
                                                    @click="copyFromElement(copyLink)">
                                                    <Icon icon="tabler:copy" class="fs-lg" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy Username</h5>
                                        </td>
                                        <td>
                                            <span ref="copyUsername"
                                                class="d-block text-primary fw-bold">john_doe_92</span>
                                            <button class="btn btn-sm btn-primary mt-2"
                                                @click="copyFromElement(copyUsername)">
                                                <Icon icon="tabler:copy" class="me-1" /> Copy Username
                                            </button>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy Discount Code</h5>
                                        </td>
                                        <td>
                                            <div class="input-group">
                                                <input ref="discountCode" type="text" class="form-control"
                                                    value="SAVE20NOW" readonly />
                                                <button class="btn btn-icon btn-warning"
                                                    @click="copyFromElement(discountCode)">
                                                    <Icon icon="tabler:copy" class="fs-lg" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h5 class="mb-1">Copy HTML Template</h5>
                                        </td>
                                        <td>
                                            <pre><code ref="htmlTemplate">&lt;button class="btn btn-primary"&gt;Click Me&lt;/button&gt;</code></pre>
                                            <button class="btn btn-sm btn-info" @click="copyFromElement(htmlTemplate)">
                                                <Icon icon="tabler:copy" class="me-1" /> Copy HTML
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'
import UICard from '@/components/UICard.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useClipboard } from '@/composables/useClipboard'

const { copyText, cutText, highlightElementText } = useClipboard()

// Refs for DOM elements
const copytext = ref<HTMLElement | null>(null)
const cutArea = ref<HTMLTextAreaElement | null>(null)
const copyEmail = ref<HTMLElement | null>(null)
const cutInput = ref<HTMLInputElement | null>(null)
const codeSnippet = ref<HTMLElement | null>(null)
const copyLink = ref<HTMLInputElement | null>(null)
const copyUsername = ref<HTMLElement | null>(null)
const discountCode = ref<HTMLInputElement | null>(null)
const htmlTemplate = ref<HTMLElement | null>(null)

const copyFromElement = (el: HTMLElement | null) => {
    if (!el) return
    const value = (el as HTMLInputElement).value || el.innerText
    highlightElementText(el)
    copyText(value)
}

const cutFromInput = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
    if (!el) return
    cutText(el)
}

usePageMeta('Clipboard')
</script>