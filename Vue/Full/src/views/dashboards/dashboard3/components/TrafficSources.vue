<template>
    <UICard title="Traffic Sources" isCloseable isCollapsable isReloadable>
        <BRow class="mb-2">
            <BCol lg>
                <h3 class="mb-2 fw-bold" id="live-visitors">
                    {{ currentVisitors.toLocaleString() }}
                </h3>
                <p class="mb-2 fw-semibold text-muted">Right Now</p>
            </BCol>
            <BCol lg="auto" class="align-self-center">
                <ul class="list-unstyled mb-0 lh-lg">
                    <li>
                        <Icon icon="tabler:caret-right-filled" class="align-middle text-primary me-1" />
                        <span class="text-muted">Organic</span>
                    </li>
                    <li>
                        <Icon icon="tabler:caret-right-filled" class="align-middle text-success me-1" />
                        <span class="text-muted">Direct</span>
                    </li>
                    <li>
                        <Icon icon="tabler:caret-right-filled" class="align-middle me-1" />
                        <span class="text-muted">Campaign</span>
                    </li>
                </ul>
            </BCol>
        </BRow>

        <BProgress height="20px" class="mb-3">
            <BProgressBar :value="25" />
            <BProgressBar :value="50" variant="success" />
            <BProgressBar :value="15" variant="info" />
        </BProgress>

        <div class="table-responsive">
            <BTableSimple small class="table-custom table-nowrap table-hover table-centered mb-0">
                <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th class="text-muted">URL</th>
                        <th class="text-muted text-end">Views</th>
                        <th class="text-muted text-end">Uniques</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(source, index) in trafficSources" :key="index">
                        <td class="text-decoration-underline">{{ source.url }}</td>
                        <td class="text-end">{{ source.views }}</td>
                        <td class="text-end">{{ source.uniques }}</td>
                    </tr>
                </tbody>
            </BTableSimple>
        </div>

        <div class="text-end mt-3">
            <RouterLink to="/chat" class="link-reset text-decoration-underline fw-semibold link-offset-3">
                View all Links
                <Icon icon="tabler:link" size="13" />
            </RouterLink>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import { BProgress, BTableSimple } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

type TrafficSource = {
    url: string;
    views: string;
    uniques: string;
};

const trafficSources: TrafficSource[] = [
    { url: "/dashboard", views: "9.8k", uniques: "8.5k" },
    { url: "/ecommerce-index", views: "8.2k", uniques: "7.1k" },
    { url: "/apps/projects-overview", views: "7.6k", uniques: "6.2k" },
    { url: "/pages/contact", views: "5.9k", uniques: "4.8k" },
    { url: "/support/faq", views: "5.2k", uniques: "4.3k" },
    { url: "/login", views: "4.7k", uniques: "3.9k" },
];

const currentVisitors = ref(getRandomNumber(500, 800));

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateLiveVisitors() {
    const change = getRandomNumber(-20, 20);
    currentVisitors.value = Math.max(100, currentVisitors.value + change);
}

let interval: any;
onMounted(() => {
    interval = setInterval(updateLiveVisitors, 1000);
});
onUnmounted(() => clearInterval(interval));

</script>
