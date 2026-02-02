<template>
    <BCard no-body class="mb-1">
        <BCardBody no-body>
            <div class="d-flex align-items-center gap-2 mb-3">
                <div class="avatar-md flex-shrink-0">
                    <span :class="['avatar-title', `text-bg-${item.variant}`, 'rounded-circle', 'fs-22']">
                        <Icon :icon="item.icon" />
                    </span>
                </div>
                <h3 class="mb-0">{{ item.count }}</h3>
            </div>
            <p class="mb-0">
                {{ item.title }}
                <span :class="['float-end', 'badge', `badge-soft-${item.variant}`]">
                    {{ item.change }}%
                </span>
            </p>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from "bootstrap-vue-next"
import type { OrderStatisticsType } from "../data";
import { Icon } from "@iconify/vue";


defineProps<{
    item: OrderStatisticsType
}>()
</script>
