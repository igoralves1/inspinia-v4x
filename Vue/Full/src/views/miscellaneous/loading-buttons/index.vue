<template>
    <MainLayout>
    <BContainer fluid>
        <PageBreadcrumb title="Loading Button" subtitle="Miscellaneous" />

        <BRow class="justify-content-center">
            <BCol lg="8">
                <UICard title="Ladda">

                    <div class="table-responsive-sm">
                        <table class="table mb-0">
                            <tbody>
                                <tr>
                                    <td style="width: 50%;">
                                        <h5 class="mb-0">Expand Left</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-primary"
                                            data-style="expand-left">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Expand Right</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-primary"
                                            data-style="expand-right">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Expand Up</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-primary"
                                            data-style="expand-up">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Expand Down</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-primary"
                                            data-style="expand-down">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Contract</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-warning"
                                            data-style="contract">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Zoom In</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-warning"
                                            data-style="zoom-in">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Zoom Out</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-warning"
                                            data-style="zoom-out">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Slide Left</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-info"
                                            data-style="slide-left">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Slide Right</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-info"
                                            data-style="slide-right">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Slide Up</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-info" data-style="slide-up">Submit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Slide Down</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-info"
                                            data-style="slide-down">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Expand Right (Progress)</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-danger"
                                            data-style="expand-right">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Contract (Progress)</h5>
                                    </td>
                                    <td><button class="ladda-button btn btn-danger"
                                            data-style="contract">Submit</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5 class="mb-0">Zoom In (API demo)</h5>
                                    </td>
                                    <td><button class="ladda-button ladda-button-demo btn btn-primary"
                                            data-style="zoom-in">Submit</button></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </UICard>
            </BCol>
        </BRow>
    </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
import MainLayout from '@/layouts/MainLayout.vue'
import * as Ladda from 'ladda'
import { onMounted } from 'vue'

onMounted(() => {
    Ladda.bind('.ladda-button', { timeout: 2000 })
})

usePageMeta('Loading Buttons')
</script>