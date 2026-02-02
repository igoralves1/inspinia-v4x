<template>
    <div>
        <ClientOnly>
            <VApexChart v-if="options?.chart?.height" :height="height ?? options.chart.height" v-bind="$attrs"
                :options="options" :series="series" :class="className" :width="width" />
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { ApexOptions } from "apexcharts";
import { getDefaultFontFamily } from "~/helpers/chart";

// Props
const props = defineProps<{
    type?: string;  
    height?: number | string;
    width?: number | string;
    getOptions: () => ApexOptions;
    series?: ApexOptions['series'];
    className?: string;
}>();

const { layout } = useLayout();

const layoutKey = computed(() =>
    `${layout.theme}-${layout.skin}`
)

const options = ref<ApexOptions>()

onMounted(() => {
    watch(layoutKey, () => {
        if (typeof window === 'undefined') return
        window.requestAnimationFrame(() => {
            const baseOptions = props.getOptions()

            options.value = {
                ...baseOptions,
                colors: [
                    ...(baseOptions.colors || []),
                    getDefaultFontFamily()
                ]
            } as ApexOptions

        })
    }, { immediate: true })
})
</script>
