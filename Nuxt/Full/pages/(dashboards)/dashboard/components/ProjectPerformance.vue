<template>
    <UICard title="Project Performance" body-class="p-0" is-collapsable is-reloadable is-closeable>
        <BCardBody>
            <div>
                <div v-for="(stat, index) in projectStats" :key="index">
                    <div class="d-flex justify-content-between mb-2">
                        <h5 class="fs-base mb-0">{{ stat.title }}</h5>
                        <div>
                            <span>{{ stat.count }}</span>
                            <span v-if="stat.showPercentage">
                                <Icon name="tabler:circle-filled" class="text-light mx-3 fs-10" /> {{ stat.percentage }}%
                            </span>
                        </div>
                    </div>
                    <BProgress :variant="stat.variant" :value="stat.percentage" :max="100"
                        :class="{ 'mb-4': index < projectStats.length - 1 }" :style="{ height: '4px' }" />
                </div>
            </div>
        </BCardBody>
    </UICard>
</template>

<script setup>
import { BProgress } from 'bootstrap-vue-next';
import UICard from '~/components/UICard.vue';
import { projectStats } from './data';


</script>

<style lang="scss" scoped></style>