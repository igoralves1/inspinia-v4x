<template>
    <MainLayout>
        <BContainer fluid>
            <PageBreadcrumb title="Orders" subTitle="Ecommerce" />

            <BRow class="row-cols-xxl-5 row-cols-md-3 row-cols-1 align-items-center g-1">
                <BCol v-for="(item, idx) in orderStats" :key="idx">
                    <OrderStatisticWidget :item="item" />
                </BCol>
            </BRow>

            <BRow>
                <BCol xs="12">
                    <BCard no-body>
                        <BCardHeader class="border-light justify-content-between">

                            <div class="d-flex gap-2">
                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search order...">
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
                                        <option value="All">Payment Status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Failed">Failed</option>
                                        <option value="Refunded">Refunded</option>
                                    </select>
                                    <Icon  icon="lucide:credit-card" class="app-search-icon text-muted" />
                                </div>


                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option value="All">Delivery Status</option>
                                        <option value="Processing">Processing</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                    <Icon  icon="lucide:truck" class="app-search-icon text-muted" />
                                </div>


                                <div class="app-search">
                                    <select class="form-select form-control my-1 my-md-0">
                                        <option value="All">Date Range</option>
                                        <option value="Today">Today</option>
                                        <option value="Last 7 Days">Last 7 Days</option>
                                        <option value="Last 30 Days">Last 30 Days</option>
                                        <option value="This Year">This Year</option>
                                    </select>
                                    <Icon  icon="lucide:calendar" class="app-search-icon text-muted" />
                                </div>


                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>

                            </div>

                            <div class="d-flex gap-1">
                                <RouterLink to="" class="btn btn-danger ms-1">
                                    <Icon icon="lucide:plus" class="fs-sm me-2" /> Add Order
                                </RouterLink>
                            </div>
                        </BCardHeader>

                        <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                            v-model:selected-rows="selected" thead-class="bg-light align-middle bg-opacity-25 thead-sm"
                            hover :fields="fields" :items="orders" :per-page="perPage" :current-page="currentPage"
                            @filtered="onFiltered" responsive
                            class="table table-custom table-nowrap table-centered mb-0 w-100">
                            <template #head()="data">
                                <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                            </template>
                            <template #head(checkbox)>
                                <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                                    id="select-all-products" value="option" :checked="allSelected"
                                    :indeterminate="isIndeterminate" @change="toggleSelectAll" />
                            </template>
                            <template #head(action)>
                                <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                            </template>
                            <template #cell(checkbox)="data">
                                <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                    type="checkbox" :value="data.item" :checked="selected.includes(data.item)"
                                    @change="onToggleRow(data.item, $event)" />
                            </template>
                            <template #cell(id)="{ item }">
                                <h5 class="fs-sm mb-0 fw-medium">
                                    <RouterLink to="/orders/{{ item.id }}" class="link-reset">#{{ item.id }}
                                    </RouterLink>
                                </h5>
                            </template>
                            <template #cell(date)="{ item }">
                                {{ item.date }} <small class="text-muted">{{ item.time }}</small>
                            </template>
                            <template #cell(customer)="{ item }">
                                <div class="d-flex justify-content-start align-items-center gap-2">
                                    <div class="avatar avatar-sm">
                                        <img :src="item.customer.avatar" alt="avatar-2"
                                            class="img-fluid rounded-circle" />
                                    </div>
                                    <div>
                                        <h5 class="text-nowrap fs-base mb-0 lh-base">{{ item.customer.name }}</h5>
                                        <p class="text-muted fs-xs mb-0">{{ item.customer.email }}</p>
                                    </div>
                                </div>
                            </template>
                            <template #cell(amount)="{ item }">
                                {{ currency }}{{ item.amount }}
                            </template>
                            <template #cell(paymentStatus)="{ item }">
                                <span class="fw-semibold"
                                    :class="item.paymentStatus === 'paid' ? 'text-success' : item.paymentStatus === 'pending' ? 'text-warning' : 'text-danger'">
                                    <Icon icon="tabler:point-filled" class="fs-sm" /> {{
                                        toPascalCase(item.paymentStatus) }}
                                </span>
                            </template>
                            <template #cell(orderStatus)="{ item }">
                                <span class="badge fs-xxs"
                                    :class="item.orderStatus === 'cancelled' ? 'badge-soft-danger' : item.orderStatus === 'processing' ? 'badge-soft-warning' : 'badge-soft-success'">Delivered</span>
                            </template>
                            <template #cell(paymentMethod)="{ item }">
                                <img :src="item.paymentMethod.image" alt="" class="me-2" height="28" />
                                {{ item.paymentMethod.type === 'card'
                                    ? item.paymentMethod.cardNumber
                                    : item.paymentMethod.type === 'upi'
                                        ? item.paymentMethod.upiId
                                        : item.paymentMethod.email }}
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
                                        <Icon icon="tabler:trash" class="fs-lg" @click="handleDeleteItem(item)" />
                                    </button>
                                </div>
                            </template>

                        </BTable>

                        <BCardFooter class="border-0">
                            <TablePagination v-model:currentPage="currentPage" :per-page="perPage"
                                :total-items="totalRows" label="categories" />
                        </BCardFooter>
                    </BCard>

                </BCol>
            </BRow>

        </BContainer>
    </MainLayout>
</template>

<script setup lang="ts">
import { BCard, BCardFooter, BCardHeader, BCol, BContainer, BRow, type TableFieldRaw } from 'bootstrap-vue-next';
import PageBreadcrumb from '@/components/PageBreadcrumb.vue';
import OrderStatisticWidget from './components/OrderStatisticWidget.vue';
import { orders as totalOrders, orderStats, type OrderType } from './data';
import { currency } from '@/helpers';
import TablePagination from '@/components/TablePagination.vue';
import { toPascalCase } from '@/helpers/casing';
import { ref } from 'vue';
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import { Icon } from '@iconify/vue';
import MainLayout from '@/layouts/MainLayout.vue';

const fields: Exclude<TableFieldRaw<OrderType>, string>[] = [
    { key: 'checkbox', label: '' },
    { key: 'id', label: 'Order Id', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    { key: 'customer', label: 'Customer', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'paymentStatus', label: 'Payment Status', sortable: true },
    { key: 'orderStatus', label: 'Order Status', sortable: true },
    { key: 'paymentMethod', label: 'Payment Method' },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const orders = ref<OrderType[]>(totalOrders)
const totalRows = ref(orders.value.length)

function onFiltered(filteredItems: OrderType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(orders.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: OrderType) {
    deleteItem(item)
    totalRows.value = orders.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = orders.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } = useTableActions(orders)

usePageMeta('Orders')

</script>

<style scoped></style>