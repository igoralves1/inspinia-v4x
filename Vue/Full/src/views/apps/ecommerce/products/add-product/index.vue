<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Add Product" subTitle="Ecommerce" />
            <BRow class="justify-content-center">
                <BCol xxl="10">
                    <BRow>
                        <BCol xxl="8">
                            <BCard no-body>
                                <BCardHeader class="d-block p-3">
                                    <h4 class="card-title mb-1">Product Information</h4>
                                    <p class="text-muted mb-0">
                                        To add a new product, please provide the necessary details in the fields below.
                                    </p>
                                </BCardHeader>

                                <BCardBody>
                                    <BRow>
                                        <BCol cols="12">
                                            <div class="mb-3">
                                                <label for="productName" class="form-label">
                                                    Product Name <span class="text-danger">*</span>
                                                </label>
                                                <BFormInput id="productName" type="text"
                                                    placeholder="Enter product name" required />
                                            </div>
                                        </BCol>

                                        <BCol lg="6">
                                            <div class="mb-3">
                                                <label for="skuId" class="form-label">
                                                    SKU <span class="text-danger">*</span>
                                                </label>
                                                <BFormInput id="skuId" type="text" placeholder="SOFA-10058" required />
                                            </div>
                                        </BCol>

                                        <BCol lg="6">
                                            <div class="mb-3">
                                                <label for="stockNumber" class="form-label">
                                                    Stock <span class="text-danger">*</span>
                                                </label>
                                                <BFormInput id="stockNumber" type="number" placeholder="250" />
                                            </div>
                                        </BCol>

                                        <BCol cols="12">
                                            <div class="mb-3">
                                                <label for="description" class="form-label">
                                                    Product Description <span class="text-muted">(Optional)</span>
                                                </label>
                                                <QuillEditor v-model:content="content"
                                                    :toolbar="[['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', { list: 'ordered' }, 'link', 'image']]"
                                                    theme="snow" />


                                            </div>
                                        </BCol>
                                    </BRow>
                                </BCardBody>
                            </BCard>

                            <BCard no-body>
                                <BCardHeader class="d-block p-3">
                                    <h4 class="card-title mb-1">Product Image</h4>
                                    <p class="text-muted mb-0">
                                        To upload a product image, please use the option below.
                                    </p>
                                </BCardHeader>

                                <BCardBody>

                                    <FileUploader />
                                </BCardBody>
                            </BCard>
                        </BCol>

                        <BCol xxl="4">
                            <BCard no-body>
                                <BCardHeader class="d-block p-3">
                                    <h4 class="card-title mb-1">Pricing</h4>
                                    <p class="text-muted mb-0">Set the base price and applicable discount for the
                                        product
                                        using the options below..</p>
                                </BCardHeader>

                                <BCardBody>
                                    <div class="mb-3">
                                        <label for="basePrice" class="form-label">Base Price *</label>
                                        <BFormInput id="basePrice" type="number"
                                            placeholder="Enter base price (199.99)" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="discount" class="form-label">Discount Type</label>
                                        <BFormSelect id="discount"
                                            :options="['No Discount', 'Flat Discount', 'Percentage Discount']" />
                                    </div>

                                    <div>
                                        <label for="discountValue" class="form-label">Discount Value</label>
                                        <BFormInput id="discountValue" type="number" placeholder="Enter discount" />
                                    </div>
                                </BCardBody>
                            </BCard>

                            <BCard no-body>
                                <BCardHeader class="d-block p-3">
                                    <h4 class="card-title mb-1">Organize</h4>
                                    <p class="text-muted mb-0">Select brand, category, and status.</p>
                                </BCardHeader>

                                <div class="card-body">
                                    <div class="mb-3">
                                        <label for="brand" class="form-label">Brand</label>
                                        <div class="app-search">
                                            <input type="text" class="form-control" id="brand"
                                                placeholder="Enter brand name">
                                            <Icon icon="lucide:layers" class="app-search-icon text-muted" />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="category" class="form-label">Category <span
                                                class="text-danger">*</span></label>
                                        <div class="app-search">
                                            <select class="form-select form-control my-1 my-md-0" id="category">
                                                <option selected>Choose Category</option>
                                                <option value="Furniture">Furniture</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Fashion">Fashion</option>
                                            </select>
                                            <Icon icon="lucide:grid" class="app-search-icon text-muted" />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="subCategory" class="form-label">Sub Category <span
                                                class="text-danger">*</span></label>
                                        <div class="app-search">
                                            <select class="form-select form-control my-1 my-md-0" id="subCategory">
                                                <option selected>Choose Sub Category</option>
                                                <option value="Chairs">Chairs</option>
                                                <option value="Sofas">Sofas</option>
                                                <option value="Tables">Tables</option>
                                            </select>
                                            <Icon icon="lucide:list" class="app-search-icon text-muted" />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="statusOne" class="form-label">Status <span
                                                class="text-danger">*</span></label>
                                        <div class="app-search">
                                            <select class="form-select form-control my-1 my-md-0" id="statusOne">
                                                <option selected>Choose Status</option>
                                                <option value="Published">Published</option>
                                                <option value="Inactive">Inactive</option>
                                                <option value="Schedule">Schedule</option>
                                                <option value="Draft">Draft</option>
                                            </select>
                                            <Icon icon="lucide:toggle-right" class="app-search-icon text-muted" />
                                        </div>
                                    </div>

                                    <div class="mb-0">
                                        <label for="tags" class="form-label">Tags</label>
                                        <div class="app-search">
                                            <input type="text" class="form-control" id="tags"
                                                placeholder="Enter tags separated by commas">
                                            <Icon icon="lucide:tag" class="app-search-icon text-muted" />
                                        </div>
                                    </div>
                                </div>
                            </BCard>
                        </BCol>
                    </BRow>

                    <div class="mt-2 mb-4 d-flex gap-2 justify-content-center">
                        <BButton variant="link" class="text-danger fw-semibold">
                            <Icon icon="lucide:clipboard-x" class="fs-sm me-2" /> Discard
                        </BButton>
                        <button class="btn btn-soft-purple">
                            <Icon icon="lucide:save" class="fs-sm me-2" /> Save as Draft
                        </button>
                        <BButton variant="success">
                            <Icon icon="lucide:plus" class="fs-sm me-2" /> Publish
                        </BButton>
                    </div>
                </BCol>
            </BRow>
        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BFormInput,
    BFormSelect,
    BButton,
    BContainer
} from "bootstrap-vue-next"

import { QuillEditor } from '@vueup/vue-quill'
import { ref } from "vue";
import { usePageMeta } from "@/composables/usePageMeta";
import { Icon } from "@iconify/vue";
import FileUploader from "@/components/FileUploader.vue";
import PageBreadcrumb from "@/components/PageBreadcrumb.vue";
import MainLayout from "@/layouts/MainLayout.vue";


const content = ref(`<div class="ql-editor" contenteditable="true"><p>Introducing the <strong><em>Azure Comfort Single Sofa</em></strong>, a perfect blend of modern design and luxurious comfort.</p><p>This premium blue single sofa is designed to elevate any living space with its sleek profile and rich, durable fabric. It’s the perfect seating option for your living room, lounge area, or cozy reading nook.</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Crafted with a solid mahogany frame for enhanced durability.</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span>Upholstered in a high-quality blue fabric that offers both style and comfort.</li></ol></div>`)

usePageMeta('Add Product')
</script>
