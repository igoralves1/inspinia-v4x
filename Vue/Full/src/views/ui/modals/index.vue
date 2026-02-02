<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Modals" subtitle="Base UI" />
        </BContainer>

        <div class="container-xl">
            <BRow>
                <BCol lg="12">
                    <BCard no-body>
                        <BCardHeader>
                            <h4 class="card-title">Examples</h4>
                        </BCardHeader>

                        <BCardBody>
                            <p class="text-muted mb-2">
                                Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user
                                notifications, or completely custom content.
                            </p>

                            <a class="btn btn-link p-0"
                                href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/modal.html"
                                target="_blank">
                                Modals on vue Bootstrap
                                <Icon icon="tabler:chevron-right" class="ms-1" />
                            </a>
                        </BCardBody>
                    </BCard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Bootstrap Modals" isCollapsable>
                        <p class="text-muted">
                            A rendered modal with header, body, and set of actions in the footer.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <!-- Standard  modal -->
                            <b-button type="button" variant="primary" @click="standardModal = !standardModal">Standard
                                Modal</b-button>
                            <!-- Large modal -->
                            <b-button type="button" variant="info" @click="largeModal = !largeModal">Large
                                Modal</b-button>
                            <!-- Small modal -->
                            <b-button type="button" variant="success" @click="smallModal = !smallModal">Small
                                Modal</b-button>
                            <!-- Full width modal -->
                            <b-button type="button" variant="primary" @click="fullModal = !fullModal">Full Width
                                Modal</b-button>
                            <!-- Scrollable modal -->
                            <b-button type="button" variant="secondary"
                                @click="scrollableModal = !scrollableModal">Scrollable
                                Modal</b-button>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Modal Position" isCollapsable>
                        <p class="text-muted">Specify the position for the modal. You can display modal at top, bottom,
                            or center of page by specifying
                            classes <code>modal-top</code>, <code>modal-bottom</code>and
                            <code>modal-dialog-centered</code>
                            respectively.
                        </p>

                        <div class="d-flex flex-wrap gap-2">
                            <BButton variant="secondary" type="button" @click="topModal = !topModal">Top Modal</BButton>
                            <BButton variant="secondary" type="button" @click="bottomModal = !bottomModal">Bottom Modal
                            </BButton>
                            <BButton variant="secondary" type="button" @click="centerModal = !centerModal">Center modal
                            </BButton>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Multiple Modal" isCollapsable>
                        <p class="text-muted">Display a series of modals one by one to guide your users on multiple
                            aspects
                            or take step wise input.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="primary" @click="multipleModal = !multipleModal">Multiple
                                Modal</b-button>
                        </div>
                    </UICard>
                </BCol>

                <BCol xl="12">
                    <UICard title="Toggle Between Modals" isCollapsable>
                        <p class="text-muted">Toggle between multiple modals with some clever placement of the
                            <code>data-bs-target</code> and <code>data-bs-toggle</code> attributes.
                        </p>
                        <b-button variant="secondary" @click="toggleModal1 = !toggleModal1">Open First Modal</b-button>
                    </UICard>
                </BCol>
                <BCol xl="12">
                    <UICard title="Fullscreen Modal" isCollapsable>
                        <p class="text-muted">Another override is the option to pop up a modal that covers the user
                            viewport, available via modifier classes that are placed on a <code>.modal-dialog</code></p>
                        <div class="hstack gap-2 flex-wrap">
                            <b-button type="button" variant="primary" @click="fsModal = !fsModal">Fullscreen
                                Modal</b-button>
                            <b-button type="button" variant="primary" @click="fsBSMModal = !fsBSMModal">Full Screen
                                Below
                                sm</b-button>
                            <b-button type="button" variant="primary" @click="fsBMDModal = !fsBMDModal">Full Screen
                                Below
                                md</b-button>
                            <b-button type="button" variant="primary" @click="fsBLGModal = !fsBLGModal">Full Screen
                                Below
                                lg</b-button>
                            <b-button type="button" variant="primary" @click="fsBXLModal = !fsBXLModal">Full Screen
                                Below
                                xl</b-button>
                            <b-button type="button" variant="primary" @click="fsBXXLModal = !fsBXXLModal">Full Screen
                                Below
                                xxl</b-button>
                        </div>
                    </UICard>
                </BCol>
                <BCol xl="12">
                    <UICard title="Static Backdrop" isCollapsable>
                        <p class="text-muted">When backdrop is set to static, the modal will not close when clicking
                            outside it. Click the button below to try it.</p>
                        <div class="d-flex flex-wrap gap-2">
                            <b-button type="button" variant="info" @click="staticBackdropModal = !staticBackdropModal">
                                Static
                                Backdrop </b-button>
                        </div>
                    </UICard>
                </BCol>
                <BCol xl="12">
                    <UICard title="Varying Modal Content" isCollapsable>
                        <div class="hstack gap-2 flex-wrap">
                            <b-button type="button" variant="primary"
                                @click="varyingModalModal = !varyingModalModal">Open
                                modal
                                for
                                @mdo</b-button>
                            <b-button type="button" variant="primary"
                                @click="varyingModalModal = !varyingModalModal">Open
                                modal
                                for
                                @fat</b-button>
                            <b-button type="button" variant="primary"
                                @click="varyingModalModal = !varyingModalModal">Open
                                modal
                                for
                                @getbootstrap</b-button>
                        </div>
                    </UICard>
                </BCol>
            </BRow>
        </div>
    </MainLayout>

    <!-- Standard Modal -->
    <b-modal v-model="standardModal" title="Modal Heading" title-tag="h4" ok-title="Save changes" cancel-title="Close"
        cancel-variant="light">
        <h5>Text in a modal</h5>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <hr>
        <h5>Overflowing text to show scroll behavior</h5>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
        <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
            fringilla.
        </p>
    </b-modal>

    <!-- Large Modal -->
    <b-modal v-model="largeModal" title="Large modal" title-tag="h4" size="lg" hide-footer> ... </b-modal>

    <!-- Small Modal -->
    <b-modal v-model="smallModal" title="Small modal" title-tag="h4" size="sm" hide-footer> ... </b-modal>

    <!-- Full Width Modal -->
    <b-modal v-model="fullModal" title="Modal Heading" title-tag="h4" dialog-class="modal-full-width"
        ok-title="Save changes" cancel-title="Close" cancel-variant="light">
        <h5>Text in a modal</h5>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
        <hr>
        <h5>Overflowing text to show scroll behavior</h5>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor.</p>
        <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
            fringilla.</p>
    </b-modal>

    <!-- Scrollable Modal -->
    <b-modal v-model="scrollableModal" title="Modal title" title-tag="h4" ok-title="Save changes" cancel-title="Close"
        cancel-variant="secondary" scrollable>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue
            laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
            nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue
            laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
            nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue
            laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
            nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue
            laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
            nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue
            laoreet rutrum faucibus dolor auctor.</p>
        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
            nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas
            eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
            augue
            laoreet rutrum faucibus dolor auctor.</p>
        <p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl
            consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
    </b-modal>

    <!-- Top Modal -->
    <b-modal v-model="topModal" title="Modal Heading" title-tag="h4" ok-title="Save changes" cancel-title="Close"
        cancel-variant="light" dialog-class="modal-top">
        <h5 class="mt-0">Text in a modal</h5>
        <p class="my-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    </b-modal>

    <!-- Bottom Modal -->
    <b-modal v-model="bottomModal" title="Modal Heading" title-tag="h4" ok-title="Save changes" cancel-title="Close"
        cancel-variant="light" dialog-class="modal-bottom">
        <h5 class="mt-0">Text in a modal</h5>
        <p class="my-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    </b-modal>

    <!-- Center Modal -->
    <b-modal v-model="centerModal" title="Center Modal" title-tag="h4" ok-title="Save changes" cancel-title="Close"
        cancel-variant="light" hide-footer centered>
        <h5 class="mt-0">Overflowing text to show scroll behavior</h5>
        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        <p class="mb-0">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </b-modal>

    <!-- Multiple Modal -->
    <b-modal v-model="multipleModal" title="Modal Heading" title-tag="h4" ok-title="Next" ok-only @ok="handleOk">
        <h5 class="mt-0">Text in a modal</h5>
        <p class="my-0">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    </b-modal>

    <b-modal v-model="multipleModal1" title="Modal Heading" title-tag="h4" ok-title="Close" ok-only>
        <h5>Text in a modal</h5>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
    </b-modal>

    <!-- Toggle Between Modals -->
    <b-modal v-model="toggleModal1" title="Modal 1" title-tag="h4" ok-title="Open second modal" ok-only
        @ok="handleToggles" centered>
        Show a second modal and hide this one with the button below.
    </b-modal>

    <b-modal v-model="toggleModal2" title="Modal 2" title-tag="h4" ok-title="Back To First" ok-only @ok="handleToggles"
        centered>
        Hide this modal and show the first with the button below.
    </b-modal>

    <!-- Fullscreen Modal -->
    <b-modal v-model="fsModal" title="Full Screen Modal" ok-title="Save Changes" cancel-title="Close"
        cancel-variant="light" fullscreen> ... </b-modal>
    <!-- Full Screen Below sm -->
    <b-modal v-model="fsBSMModal" title="Full screen below sm" ok-title="Save Changes" cancel-title="Close"
        cancel-variant="light" fullscreen="sm"> ... </b-modal>
    <!-- Full Screen Below md -->
    <b-modal v-model="fsBMDModal" title="Full screen below md" ok-title="Save Changes" cancel-title="Close"
        cancel-variant="light" fullscreen="md"> ... </b-modal>
    <!-- Full Screen Below lg -->
    <b-modal v-model="fsBLGModal" title="Full screen below lg" ok-title="Save Changes" cancel-title="Close"
        cancel-variant="light" fullscreen="lg"> ... </b-modal>
    <!-- Full Screen Below xl -->
    <b-modal v-model="fsBXLModal" title="Full screen below xl" ok-title="Save Changes" cancel-title="Close"
        cancel-variant="light" fullscreen="xl"> ... </b-modal>
    <!-- Full Screen Below xxl -->
    <b-modal v-model="fsBXXLModal" title="Full screen below xxl" ok-title="Save Changes" cancel-title="Close"
        cancel-variant="light" fullscreen="xxl"> ... </b-modal>

    <!-- Static Backdrop -->
    <b-modal v-model="staticBackdropModal" title="Modal title" ok-title="Understood" cancel-title="Close"
        :noCloseOnBackdrop="true">
        I will not close if you click outside me. Don't even try to press escape key.
    </b-modal>

    <!-- Varying Modal Content -->
    <b-modal v-model="varyingModalModal" title="New message" ok-title="Send Message" cancel-title="Close">
        <form>
            <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Recipient:</label>
                <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="mb-3">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea class="form-control" id="message-text"></textarea>
            </div>
        </form>
    </b-modal>

</template>
<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { BButton, BCard, BCardHeader, BCol, BContainer, BRow } from "bootstrap-vue-next";
import { ref } from "vue";
import PageBreadcrumb from "@/components/PageBreadcrumb.vue";
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';
import UICard from '@/components/UICard.vue';


const standardModal = ref(false);
const largeModal = ref(false);
const smallModal = ref(false);
const fullModal = ref(false);
const scrollableModal = ref(false);

const topModal = ref(false);
const bottomModal = ref(false);
const centerModal = ref(false);


const multipleModal = ref(false);
const multipleModal1 = ref(false);

const handleOk = () => {
    multipleModal.value = !multipleModal.value;
    multipleModal1.value = !multipleModal1.value;
};

const toggleModal1 = ref(false);
const toggleModal2 = ref(false);

const handleToggles = () => {
    toggleModal1.value = !toggleModal1.value;
    toggleModal2.value = !toggleModal2.value;
};

const fsModal = ref(false);
const fsBSMModal = ref(false);
const fsBMDModal = ref(false);
const fsBLGModal = ref(false);
const fsBXLModal = ref(false);
const fsBXXLModal = ref(false);

const staticBackdropModal = ref(false);
const varyingModalModal = ref(false);

usePageMeta('Modals')
</script>