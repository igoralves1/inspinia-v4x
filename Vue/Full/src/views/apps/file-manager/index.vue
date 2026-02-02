    <template>
        <MainLayout>
            <BContainer fluid>
                <PageBreadcrumb title="File Manager" subtitle="Apps" />

                <div class="outlook-box outlook-box-full">
                    <BOffcanvas body-class="p-0 h-100 " no-header v-model="show" responsive="lg" size="lg"
                        placement="start" class="outlook-left-menu outlook-left-menu-md" tabindex="-1"
                        id="fileSidebaroffcanvas">
                        <Sidebar />
                    </BOffcanvas>

                    <BCard no-body class="h-100 mb-0 rounded-0 flex-grow-1 border-0">
                        <BCardHeader class="border-light justify-content-between">

                            <div class="d-flex gap-2">
                                <div class="d-lg-none d-inline-flex gap-2">
                                    <button class="btn btn-default btn-icon" type="button" @click="show = !show"
                                        aria-controls="fileSidebaroffcanvas">
                                        <Icon icon="tabler:menu-2" class="fs-lg" />
                                    </button>
                                </div>

                                <div class="app-search">
                                    <input v-model="searchQuery" type="search" class="form-control"
                                        placeholder="Search files...">
                                    <Icon icon="lucide:search"  class="app-search-icon text-muted" />
                                </div>
                                <BButton v-if="selected.length" variant="danger" @click="handleDeleteSelected">
                                    Delete
                                </BButton>
                            </div>

                            <div class="d-flex align-items-center gap-2">
                                <span class="me-2 fw-semibold">Filter By:</span>


                                <div class="app-search">
                                    <select data-table-filter="type" class="form-select form-control my-1 my-md-0">
                                        <option selected>File Type</option>
                                        <option value="Folder">Folder</option>
                                        <option value="MySQL">MySQL</option>
                                        <option value="MP4">MP4</option>
                                        <option value="Audio">Audio</option>
                                        <option value="Figma">Figma</option>
                                    </select>
                                    <Icon  icon="lucide:file" class="app-search-icon text-muted" />
                                </div>


                                <div>
                                    <BFormSelect v-model="perPage" :options="perPageOptions"
                                        class="form-control my-1 my-md-0" />
                                </div>
                            </div>
                        </BCardHeader>

                        <simplebar class="card-body" style="height: calc(100% - 100px);">
                            <BRow>
                                <BCol v-for="(item, idx) in folders" :key="idx" md="6" lg="4" xxl="3">
                                    <FolderCard :folder="item" />
                                </BCol>

                            </BRow>


                            <BTable show-empty :filter="searchQuery" empty-text="Nothing found."
                                v-model:selected-rows="selected"
                                thead-class="bg-light align-middle bg-opacity-25 thead-sm" hover :fields="fields"
                                :items="files" :per-page="perPage" :current-page="currentPage" @filtered="onFiltered"
                                responsive class="table table-custom table-nowrap table-centered mb-0 w-100">
                                <template #head()="data">
                                    <span class="text-uppercase fs-xxs">{{ data.label }}</span>
                                </template>
                                <template #head(id)>
                                    <input class="form-check-input form-check-input-light fs-14 mt-0" type="checkbox"
                                        id="select-all-products" value="option" :checked="allSelected"
                                        :indeterminate="isIndeterminate" @change="toggleSelectAll" />
                                </template>
                                <template #head(action)>
                                    <span class="text-uppercase d-flex justify-content-center fs-xxs">Actions</span>
                                </template>
                                <template #cell(id)="data">
                                    <input class="form-check-input form-check-input-light fs-14 product-item-check mt-0"
                                        type="checkbox" :value="data.item" :checked="selected.includes(data.item)"
                                        @change="onToggleRow(data.item, $event)" />
                                </template>
                                <template #cell(name)="{ item }">
                                    <div class="d-flex align-items-center gap-2">
                                        <div
                                            class="d-flex align-items-center justify-content-center flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
                                            <Icon :icon="item.icon" class="fs-xl" />
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="mb-1 fs-base">
                                                <RouterLink to="" class="link-reset">{{
                                                    item.name }}</RouterLink>
                                            </h5>
                                            <p class="text-muted mb-0 fs-xs">{{ formatBytes(item.size) }}</p>
                                        </div>
                                    </div>
                                </template>
                                <template #cell(owner)="{ item }">
                                    <div class="d-flex align-items-center gap-2">
                                        <div
                                            class="flex-shrink-0 bg-light bg-opacity-50 text-muted d-inline-flex align-items-center justify-content-center rounded-2">
                                            <img :src="item.avatar" alt="" class="avatar-xs rounded-circle" />
                                        </div>
                                        <h5 class="mb-0 fs-base">
                                            <RouterLink to="" data-sort="owner" class="link-reset">{{ item.email }}
                                            </RouterLink>
                                        </h5>
                                    </div>
                                </template>
                                <template #cell(shared)="{ item }">
                                    <div class="avatar-group avatar-group-xs">
                                        <div v-for="(user, idx) in item.sharedWith" class="avatar" :key="idx">
                                            <img :src="user.avatar" alt="" class="rounded-circle avatar-xs" />
                                        </div>

                                    </div>
                                </template>
                                <template #cell(action)="{ item }">
                                    <div class="d-flex align-items-center justify-content-end gap-2">
                                        <span @click="item.starred = !item.starred">
                                            <a href="#" v-if="item.starred">
                                                <Icon icon="tabler:star-filled" class="text-warning fs-lg" />
                                            </a>
                                            <a href="#" v-else>
                                                <Icon icon="tabler:star-filled" class="text-muted fs-lg" />
                                            </a>
                                        </span>
                                        <BDropdown variant="link" toggle-class="drop-arrow-none fs-xxl link-reset p-0"
                                            class="flex-shrink-0 text-muted">
                                            <template #button-content>
                                                <Icon icon="tabler:dots-vertical" />
                                            </template>
                                            <BDropdownItem>
                                                <Icon icon="tabler:share" class="me-1" />
                                                Share
                                            </BDropdownItem>
                                            <BDropdownItem>
                                                <Icon icon="tabler:link" class="me-1" />
                                                Get Sharable Link
                                            </BDropdownItem>
                                            <BDropdownItem>
                                                <Icon icon="tabler:download" class="me-1" />
                                                Download
                                            </BDropdownItem>
                                            <BDropdownItem>
                                                <Icon icon="tabler:pin" class="me-1" />
                                                Pin
                                            </BDropdownItem>
                                            <BDropdownItem>
                                                <Icon icon="tabler:edit" class="me-1" />
                                                Edit
                                            </BDropdownItem>
                                            <BDropdownItem @click="handleDeleteItem(item)">
                                                <Icon icon="tabler:trash" class="me-1" />
                                                Delete
                                            </BDropdownItem>
                                        </BDropdown>
                                    </div>
                                </template>


                            </BTable>

                            <div class="d-flex align-items-center justify-content-center gap-2 p-3">
                                <strong>Loading...</strong>
                                <div class="spinner-border spinner-border-sm text-danger" role="status"
                                    aria-hidden="true">
                                </div>
                            </div>

                        </simplebar>

                    </BCard>
                </div>

            </BContainer>
        </MainLayout>
    </template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta';
import { useTableActions } from '@/composables/useTableActions';
import { type TableFieldRaw } from 'bootstrap-vue-next';
import { ref } from 'vue';
import { fileRecords, type FileRecordType, type FolderType } from './data';
import { Icon } from '@iconify/vue';
import { formatBytes } from '@/helpers/file';
import MainLayout from '@/layouts/MainLayout.vue';
import Sidebar from './components/Sidebar.vue';
import FolderCard from './components/FolderCard.vue';
import simplebar from 'simplebar-vue';

const folders: FolderType[] = [{ name: 'INSPINIA Multi', size: 2300000000 }, { name: 'Material Design', size: 105300000 }, { name: 'DashPro UI Kit', size: 512000000 }, { name: 'VueStudio Pack', size: 880000000 }, { name: 'Nextify Pro', size: 1100000000 }, { name: 'Blazor Studio', size: 780000000 }, { name: 'Angular Prime', size: 940000000 }, { name: 'React Kit Pro', size: 1600000000 },]

const show = ref(false)

const fields: Exclude<TableFieldRaw<FileRecordType>, string>[] = [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'modified', label: '	Modified', sortable: true },
    { key: 'owner', label: 'Owner', sortable: true },
    { key: 'shared', label: 'Shared With', sortable: true },
    { key: 'action', label: 'Action', sortable: false },
]

const searchQuery = ref('')

const perPageOptions = [5, 8, 10, 20, 50]

const currentPage = ref(1)
const perPage = ref(8)
const totalRows = ref(fileRecords.length)
const files = ref<FileRecordType[]>(fileRecords)

function onFiltered(filteredItems: FileRecordType[]) {
    totalRows.value = filteredItems.length
    currentPage.value = 1
}

function adjustPage() {
    const totalPages = Math.ceil(files.value.length / perPage.value)
    if (currentPage.value > totalPages) {
        currentPage.value = totalPages || 1
    }
}

function handleDeleteItem(item: FileRecordType) {
    deleteItem(item)
    totalRows.value = files.value.length
    adjustPage()
}

function handleDeleteSelected() {
    deleteSelected()
    totalRows.value = files.value.length
    adjustPage()
}

const { selected, toggleSelectAll, onToggleRow, deleteSelected, deleteItem, allSelected, isIndeterminate } =
    useTableActions(files)

usePageMeta('File Manager')

</script>

<style scoped></style>