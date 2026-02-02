        <template>
            <MainLayout>
                <BContainer fluid>
                    <PageBreadcrumb title="Products" />
                    <BRow class="row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center g-1">

                        <BCol v-for="(stat, index) in statsData" :key="index">
                            <ProductStatisticCard :stat="stat" />
                        </BCol>
                    </BRow>

                    <BRow>
                        <BCol xs="12">
                            <BCard no-body>
                                <BCardHeader class="border-light justify-content-between">

                                    <div class="d-flex gap-2">
                                        <div class="app-search">
                                            <input type="search" class="form-control"
                                                placeholder="Search product name..." v-model="searchQuery">
                                            <Icon  icon="lucide:search" class="app-search-icon text-muted" />
                                        </div>

                                        <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                            Delete
                                        </BButton>

                                    </div>

                                    <div class="d-flex align-items-center gap-2">

                                        <span class="me-2 fw-semibold">Filter By:</span>

                                        <div class="app-search">
                                            <select class="form-select form-control my-1 my-md-0">
                                                <option value="All">Category</option>
                                                <option value="Electronics">Electronics</option>
                                                <option value="Fashion">Fashion</option>
                                                <option value="Home">Home</option>
                                                <option value="Sports">Sports</option>
                                                <option value="Beauty">Beauty</option>
                                            </select>
                                            <Icon icon="lucide:tag"  class="app-search-icon text-muted" />
                                        </div>

                                        <div class="app-search">
                                            <select class="form-select form-control my-1 my-md-0">
                                                <option value="">Status</option>
                                                <option value="Published">Published</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Out of Stock">Out of Stock</option>
                                            </select>
                                            <Icon icon="lucide:box"  class="app-search-icon text-muted" />
                                        </div>

                                        <div class="app-search">
                                            <select class="form-select form-control my-1 my-md-0">
                                                <option value="">Price Range</option>
                                                <option value="0-50">$0 - $50</option>
                                                <option value="51-150">$51 - $150</option>
                                                <option value="151-500">$151 - $500</option>
                                                <option value="500+">$500+</option>
                                            </select>
                                            <Icon icon="lucide:dollar-sign" 
                                                class="app-search-icon text-muted" />
                                        </div>

                                        <div>
                                            <BFormSelect v-model="perPage" :options="perPageOptions"
                                                class="form-control my-1 my-md-0" />

                                        </div>

                                    </div>

                                    <div class="d-flex gap-1">
                                        <RouterLink to="/products-grid" class="btn btn-soft-primary btn-icon">
                                            <Icon icon="lucide:layout-grid" class="fs-lg" />
                                        </RouterLink>
                                        <RouterLink to="/products" class="btn btn-primary btn-icon">
                                            <Icon icon="lucide:list" class="fs-lg" />
                                        </RouterLink>
                                        <RouterLink to="/add-product" class="btn btn-danger ms-1">
                                            <Icon icon="lucide:plus" class="fs-sm me-2" /> Add Product
                                        </RouterLink>
                                    </div>
                                </BCardHeader>

                                <BTable show-empty :filter="searchQuery" empty-text="No products found."
                                    v-model:selected-rows="selected"
                                    thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover :fields="fields"
                                    :items="products" :per-page="perPage" :current-page="currentPage"
                                    @filtered="onFiltered" responsive
                                    class="table table-custom table-nowrap table-centered mb-0 w-100">
                                    <template #head()="data">
                                        <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                                    </template>
                                    <template #head(id)>
                                        <input class="form-check-input form-check-input-light fs-14 mt-0"
                                            type="checkbox" id="select-all-products" value="option"
                                            :checked="allSelected" :indeterminate="isIndeterminate"
                                            @change="toggleSelectAll" />
                                    </template>
                                    <template #head(action)>
                                        <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                                    </template>
                                    <template #cell(id)="data">
                                        <input
                                            class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                            type="checkbox" :value="data.item" :checked="selected.includes(data.item)"
                                            @change="onToggleRow(data.item, $event)" />
                                    </template>
                                    <template #cell(name)="data">
                                        <div class="d-flex">
                                            <div class="avatar-md me-3">
                                                <img :src="data.item.image" alt="Product" class="img-fluid rounded" />
                                            </div>
                                            <div>
                                                <h5 class="mb-1">
                                                    <RouterLink to="/ecommerce/product-details" class="link-reset">{{
                                                        data.item.name
                                                        }}
                                                    </RouterLink>
                                                </h5>
                                                <p class="text-muted mb-0 fs-xxs">by: {{ data.item.brand }}</p>
                                            </div>
                                        </div>
                                    </template>

                                    <template #cell(stock)="data">
                                        <h5 class="fs-base mb-0 fw-medium">{{ data.item.stock }}</h5>
                                    </template>

                                    <template #cell(price)="data">
                                        {{ currency }}{{ data.item.price }}
                                    </template>

                                    <template #cell(rating)="data">
                                        <Rating :rating="data.item.rating"
                                            class="d-inline-flex justify-content-start gap-1" />
                                        <RouterLink to="/ecommerce/reviews" class="link-reset ms-1 fw-semibold">
                                            ({{ data.item.reviews }})</RouterLink>

                                    </template>

                                    <template #cell(status)="data">
                                        <span class="badge fs-xxs"
                                            :class="data.item.status == 'Published' ? 'badge-soft-success' : data.item.status == 'Pending' ? 'badge-soft-warning' : 'badge-soft-danger'">{{
                                                data.item.status }}</span>
                                    </template>

                                    <template #cell(publishDate)="data">
                                        {{ data.item.publishedDate }} <small class="text-muted">{{
                                            data.item.publishedTime
                                            }}</small>
                                    </template>

                                    <template #cell(action)="{ item }">
                                        <div class="d-flex justify-content-center gap-1">
                                            <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                <Icon icon="tabler:eye" class="fs-lg" />
                                            </button>
                                            <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                <Icon icon="tabler:edit" class="fs-lg" />
                                            </button>
                                            <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                                <Icon icon="tabler:trash" class="fs-lg"
                                                    @click="handleDeleteItem(item)" />
                                            </button>
                                        </div>
                                    </template>
                                </BTable>

                                <BCardFooter class="border-0">
                                    <div v-if="products.length > 0"
                                        class="d-flex justify-content-between align-items-center">
                                        <span class="text-muted">Showing <span class="fw-semibold">{{ start }}</span> to
                                            <span class="fw-semibold">{{
                                                end }}</span> of <span class="fw-semibold">{{ totalItems
                                                }}</span>
                                            products</span>
                                        <BPagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage"
                                            align="end" first-number last-number class="mb-0 pagination-boxed">
                                            <template #prev-text>
                                                <Icon icon="tabler:chevron-left" />
                                            </template>
                                            <template #next-text>
                                                <Icon icon="tabler:chevron-right" />
                                            </template>
                                        </BPagination>
                                    </div>

                                </BCardFooter>

                            </BCard>

                        </BCol>
                    </BRow>

                </BContainer>
            </MainLayout>
        </template>

<script setup lang="ts">
import { BButton, BCard, BCardHeader, BCol, BContainer, BFormSelect, BPagination, BRow, BTable } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import { productData, statsData } from './components/data';
import ProductStatisticCard from './components/ProductStatisticCard.vue';
import type { ProductType } from './components/types';
import { currency } from '@/helpers';
import { computed, ref } from 'vue';
import { useTableActions } from '@/composables/useTableActions';
import { usePageMeta } from '@/composables/usePageMeta';
import MainLayout from '@/layouts/MainLayout.vue';
import { Icon } from '@iconify/vue';


const fields = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Product', sortable: true },
    { key: 'sku', label: 'SKU' },
    { key: 'category', label: 'Category' },
    { key: 'stock', label: 'Stock', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'orders', label: 'Orders', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'publishDate', label: 'Published', sortable: true },
    { key: 'action', label: 'Action', sortable: false },

]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(productData.length)
const products = ref<ProductType[]>(productData)

function onFiltered(filteredItems: ProductType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}


const totalItems = computed(() => products.value.length)

const start = computed(() =>
    totalItems.value === 0 ? 0 : (currentPage.value - 1) * perPage.value + 1
)

const end = computed(() =>
    Math.min(currentPage.value * perPage.value, totalItems.value)
)

function adjustPage() {
    const totalPages = Math.ceil(products.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: ProductType) {
    deleteItem(item)
    totalRows.value = products.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = products.value.length
    adjustPage()
}


const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } =
    useTableActions(products)

usePageMeta('Products')
</script>

<style scoped></style>