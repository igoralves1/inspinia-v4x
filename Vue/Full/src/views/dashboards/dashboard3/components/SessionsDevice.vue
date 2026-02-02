<template>
    <UICard title="Sessions Device" body-class="p-0" isCloseable isCollapsable isReloadable>
        <BCardBody class="pb-0">
            <CustomApexChart :getOptions="getSessionsDevicesOptions" :series="getSessionsDevicesOptions().series" />
        </BCardBody>

        <div class="table-responsive">
            <BTableSimple class="table-custom table-nowrap table-hover table-centered mb-0">
                <thead class="bg-light align-middle bg-opacity-25 thead-sm">
                    <tr class="text-uppercase fs-xxs">
                        <th class="text-muted">Device</th>
                        <th class="text-muted">Sessions</th>
                        <th class="text-muted">Change</th>
                        <th class="text-muted text-end">Traffic %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h5 class="fs-base lh-base mb-0">Mobile</h5>
                            <p class="fs-xxs mb-0 text-body-secondary">- Android / iOS</p>
                        </td>
                        <td>4620</td>
                        <td class="text-success">+3.4%</td>
                        <td class="text-end">58%</td>
                    </tr>
                    <tr>
                        <td>
                            <h5 class="fs-base lh-base mb-0">Desktop</h5>
                            <p class="fs-xxs mb-0 text-body-secondary">- Windows / Mac</p>
                        </td>
                        <td>2510</td>
                        <td class="text-success">+1.9%</td>
                        <td class="text-end">32%</td>
                    </tr>
                    <tr>
                        <td class="border-bottom-0">
                            <h5 class="fs-base lh-base mb-0">Tablet</h5>
                            <p class="fs-xxs mb-0 text-body-secondary">- iPad / Android Tabs</p>
                        </td>
                        <td class="border-bottom-0">820</td>
                        <td class="text-danger border-bottom-0">-0.8%</td>
                        <td class="text-end border-bottom-0">10%</td>
                    </tr>
                </tbody>
            </BTableSimple>
        </div>
    </UICard>
</template>

<script setup lang="ts">
import { BCardBody, BTableSimple } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';
import { getSessionsDevicesOptions } from './data';
import CustomApexChart from '@/components/CustomApexChart.vue';


</script>

<style scoped></style>