<template>
    <div v-if="totalItems > 0" class="d-flex justify-content-between align-items-center">
        <span class="text-muted">
            Showing
            <span class="fw-semibold">{{ start }}</span>
            to
            <span class="fw-semibold">{{ end }}</span>
            of
            <span class="fw-semibold">{{ totalItems }}</span>
            {{ label }}
        </span>

        <BPagination v-model="pageProxy" :total-rows="totalItems" :per-page="perPage" align="end" first-number
            last-number class="mb-0 pagination-boxed">
            <template #prev-text>
                <Icon icon="tabler:chevron-left" />
            </template>
            <template #next-text>
                <Icon icon="tabler:chevron-right" />
            </template>
        </BPagination>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { BPagination } from "bootstrap-vue-next";
import { Icon } from "@iconify/vue";

interface Props {
    currentPage: number;
    perPage: number;
    totalItems: number;
    label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    label: "items",
});

const emit = defineEmits<{
    (e: "update:currentPage", page: number): void;
}>();

// Proxy computed for v-model
const pageProxy = computed({
    get: () => props.currentPage,
    set: (val) => emit("update:currentPage", val),
});

const start = computed(() =>
    props.totalItems === 0 ? 0 : (props.currentPage - 1) * props.perPage + 1
);
const end = computed(() =>
    Math.min(props.currentPage * props.perPage, props.totalItems)
);
</script>
