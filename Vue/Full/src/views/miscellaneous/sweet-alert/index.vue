<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Miscellaneous" subTitle="SweetAlert2" />

            <BRow class="justify-content-center">
                <BCol lg="8">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>

                            <div class="table-responsive-sm">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">Basic</h5>
                                                <p class="text-muted mb-0">Displays a simple SweetAlert popup.</p>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-primary"
                                                    @click="executeExample('basicMessage')">Click me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">Title</h5>
                                                <p class="text-muted mb-0">A popup with a title and supporting text.</p>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-primary"
                                                    @click="executeExample('titleText')">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">HTML</h5>
                                                <p class="text-muted mb-0">Shows a popup with custom HTML content.</p>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-primary"
                                                    @click="executeExample('customHtml')">Toggle HTML
                                                    SweetAlert</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">All States</h5>
                                                <p class="text-muted mb-0">Examples of SweetAlert in different alert
                                                    states.
                                                </p>
                                            </td>
                                            <td>
                                                <div class="d-flex flex-wrap gap-2">
                                                    <button type="button" class="btn btn-sm btn-info"
                                                        @click="executeExample('info')">Toggle Info</button>
                                                    <button type="button" class="btn btn-sm btn-warning"
                                                        @click="executeExample('warning')">Toggle Warning</button>
                                                    <button type="button" class="btn btn-sm btn-danger"
                                                        @click="executeExample('error')">Toggle Error</button>
                                                    <button type="button" @click="executeExample('success')"
                                                        class="btn btn-sm btn-success">Toggle Success</button>
                                                    <button type="button" @click="executeExample('question')"
                                                        class="btn btn-sm btn-primary">Toggle Question</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">Long Content</h5>
                                                <p class="text-muted mb-0">A popup with extended content for
                                                    demonstration.
                                                </p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('longContent')"
                                                    class="btn btn-sm btn-secondary">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">With Confirm Button</h5>
                                                <p class="text-muted mb-0">A confirmation dialog with an attached
                                                    action.
                                                </p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('confirmButton')"
                                                    class="btn btn-sm btn-secondary">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">With Cancel Button</h5>
                                                <p class="text-muted mb-0">Includes cancel and confirm options with
                                                    different actions.</p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('cancelButton')"
                                                    class="btn btn-sm btn-secondary">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">With Image Header (Logo)</h5>
                                                <p class="text-muted mb-0">Custom popup with a logo or image header.</p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('customImage')"
                                                    class="btn btn-sm btn-secondary">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">Auto Close</h5>
                                                <p class="text-muted mb-0">Displays a popup that closes automatically
                                                    after
                                                    a timeout.</p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('timer')"
                                                    class="btn btn-sm btn-secondary">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">Position</h5>
                                                <p class="text-muted mb-0">Shows the alert in different screen
                                                    positions.
                                                </p>
                                            </td>
                                            <td>
                                                <div class="d-flex flex-wrap gap-2">
                                                    <button class="btn btn-sm btn-primary"
                                                        @click="openAlertWithPosition('top-start')">Top
                                                        Start</button>
                                                    <button class="btn btn-sm btn-primary"
                                                        @click="openAlertWithPosition('top-end')">Top
                                                        End</button>
                                                    <button class="btn btn-sm btn-primary"
                                                        @click="openAlertWithPosition('bottom-start')">Bottom
                                                        Start</button>
                                                    <button class="btn btn-sm btn-primary"
                                                        @click="openAlertWithPosition('bottom-end')">Bottom
                                                        End</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">With Custom Padding, Background</h5>
                                                <p class="text-muted mb-0">Popup with custom dimensions, padding, and
                                                    background style.</p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('customBackground')"
                                                    class="btn btn-sm btn-secondary">Click Me</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5 class="mb-1">Ajax Request</h5>
                                                <p class="text-muted mb-0">Demonstrates an alert with an Ajax request.
                                                </p>
                                            </td>
                                            <td>
                                                <button type="button" @click="executeExample('ajaxRequest')"
                                                    class="btn btn-sm btn-secondary">Click
                                                    Me</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </BCardBody>
                    </BCard>
                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BContainer, BRow } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import logoSm from '@/assets/images/logo-sm.png'

import Swal, { type SweetAlertPosition } from 'sweetalert2'
import MainLayout from '@/layouts/MainLayout.vue';
import { usePageMeta } from '@/composables/usePageMeta';

type TVueSwalInstance = typeof Swal & typeof Swal.fire

const openAlertWithPosition = (position: SweetAlertPosition) => {
    Swal.fire({
        icon: 'success',
        text: 'Saved successfully!',
        showConfirmButton: false,
        timer: 1500,
        position: position,
    })
}

const executeExample = (sub: any) => {
    switch (sub) {
        case 'basicMessage':
            ; (Swal as TVueSwalInstance).fire({
                title: 'Simple Alert',
                text: 'This is a basic SweetAlert dialog.',
            })
            return

        case 'titleText':
            ; (Swal as TVueSwalInstance).fire({
                title: 'Notice',
                text: 'This is a titled alert with additional details.',
                icon: 'question',
                showCloseButton: true,
            })
            return

        case 'errorType':
            ; (Swal as TVueSwalInstance).fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
            return

        case 'customHtml':
            ; (Swal as TVueSwalInstance).fire({
                title: '<i>HTML</i> <u>Alert</u>',
                html: 'Use <b>bold</b>, <a to="#">links</a>, and other HTML here.',
                icon: 'info',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            })
            return

        case 'longContent':
            ; (Swal as TVueSwalInstance).fire({
                imageUrl: 'https://placehold.co/300x1000/1ab394/white',
                imageHeight: 1000,
                imageAlt: 'Very tall content image',
                showCloseButton: true,
                customClass: { confirmButton: 'btn btn-secondary mt-2' },
            })
            return

        case 'confirmButton':
            ; (Swal as TVueSwalInstance)
                .fire({
                    title: 'Confirm Deletion',
                    text: 'Are you sure you want to delete this item?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    showCloseButton: true,
                    buttonsStyling: false,
                    customClass: {
                        confirmButton: 'btn btn-primary me-2 mt-2',
                        cancelButton: 'btn btn-danger mt-2',
                    },
                }).then((result: any) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your item has been successfully removed.',
                            icon: 'success',
                        })
                    }
                })
            return


        case 'cancelButton':
            ; (Swal as TVueSwalInstance).fire({
                title: 'Delete File?',
                text: 'This action cannot be undone!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                showCloseButton: true,
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-primary mt-2 me-2',
                    cancelButton: 'btn btn-danger mt-2',
                },
            }).then((result: any) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'The file has been deleted.',
                        icon: 'success',
                    })
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire({
                        title: 'Action Cancelled',
                        text: 'Your file is safe.',
                        icon: 'error',
                    })
                }
            })
            return

        case 'customImage':
            ; (Swal as TVueSwalInstance).fire({
                title: 'Custom Branding',
                text: 'This alert includes a logo.',
                imageUrl: logoSm,
                imageHeight: 40,
                showCloseButton: true,
            })
            return

        case 'timer': {
            (Swal as TVueSwalInstance)
                .fire({
                    title: 'Auto Dismiss',
                    html: 'Closing in <b></b> seconds...',
                    timer: 2000,
                    timerProgressBar: true,
                    showCloseButton: true,
                })
            return
        }

        case 'customBackground': {
            (Swal as TVueSwalInstance)
                .fire({
                    title: 'Custom Design',
                    html: '<p class="text-white">This alert has custom size, padding, and background.</p>',
                    width: 600,
                    padding: '100px',
                    color: '#fff',
                    background: `var(--ins-secondary-bg) url('/images/landing-cta.jpg') no-repeat center`,
                })
            return
        }


        case 'ajaxRequest':
            ; (Swal as TVueSwalInstance)
                .fire({
                    title: 'Submit your Github username',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Look up',
                    showLoaderOnConfirm: true,
                    preConfirm: (login: any) => {
                        return fetch(`//api.github.com/users/${login}`)
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(response.statusText)
                                }
                                return response.json()
                            })
                            .catch((error) => {
                                ; (Swal as TVueSwalInstance).showValidationMessage(`Request failed: ${error}`)
                            })
                    },
                    allowOutsideClick: () => !(Swal as TVueSwalInstance).isLoading()
                })
                .then((result: any) => {
                    if (result.isConfirmed) {
                        ; (Swal as TVueSwalInstance).fire({
                            title: `${result.value.login}'s avatar`,
                            imageUrl: result.value.avatar_url
                        })
                    }
                })
            return

        case 'success':
            ; (Swal as TVueSwalInstance).fire({
                text: 'Action completed successfully!',
                icon: 'success',
                confirmButtonText: 'Great!',
                customClass: { confirmButton: 'btn btn-success' },
            })
            return

        case 'error':
            ; (Swal as TVueSwalInstance).fire({
                text: 'An unexpected error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'Dismiss',
                customClass: { confirmButton: 'btn btn-danger' },
            })
            return

        case 'warning':
            ; (Swal as TVueSwalInstance).fire({
                text: 'Heads up! Something might require your attention.',
                icon: 'warning',
                confirmButtonText: 'Got it',
                customClass: { confirmButton: 'btn btn-warning' },
            })
            return

        case 'info':
            ; (Swal as TVueSwalInstance).fire({
                text: 'This is an informational message to keep you updated.',
                icon: 'info',
                confirmButtonText: 'Understood',
                customClass: { confirmButton: 'btn btn-info' },
            })
            return

        case 'question':
            ; (Swal as TVueSwalInstance).fire({
                text: 'Do you need more information about this feature?',
                icon: 'question',
                confirmButtonText: 'Yes, please',
            })
            return
    }
}


usePageMeta('Sweet Alert')
</script>

<style scoped></style>