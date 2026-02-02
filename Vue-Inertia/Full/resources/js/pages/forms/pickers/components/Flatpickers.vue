<template>
    <BCard no-body>
        <BCardHeader>
            <BCardTitle>Vue Flatpickr</BCardTitle>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted mb-2">
                Lightweight, powerful javascript datetimepicker with no dependencies
            </p>
            <a class="btn btn-link p-0 fw-semibold" href="https://github.com/ankurk91/vue-flatpickr-component"
                target="_blank">
                Vue Flatpickr
                <Icon icon="tabler:chevron-right" class="ms-1" />
            </a>
        </BCardBody>

        <div class="border-top border-dashed"></div>

        <BCardBody>
            <BCardTitle class="fs-sm fw-bold mb-4">Examples</BCardTitle>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>Basic</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; dateFormat: "d M, Y" &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr :model-value="new Date()" class="form-control"
                        :config="{ dateFormat: 'd M, Y', defaultDate: 'today' }" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>DateTime</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; dateFormat: "d.m.y", enableTime: true &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr :model-value="new Date()" class="form-control"
                        :config="{ dateFormat: 'd.m.y', enableTime: true, defaultDate: 'today' }" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>Human-Friendly Dates</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; altFormat: "F j, Y", dateFormat: "Y-m-d" &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr :model-value="new Date()" class="form-control" :config="{
                        altInput: true,
                        altFormat: 'F j, Y',
                        dateFormat: 'Y-m-d',
                        defaultDate: 'today'
                    }" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>MinDate and MaxDate</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; minDate: "25 12, 2021", maxDate: "29 12, 2021" &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr :model-value="new Date()" class="form-control" placeholder="Select Date" :config="{
                        dateFormat: 'd M, Y',
                        minDate: '25 12, 2021',
                        maxDate: '29 12, 2021'
                    }" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>Selecting Multiple Dates</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; mode: "multiple" &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr :model-value="new Date()" class="form-control" :config="{
                        dateFormat: 'd M, Y',
                        defaultDate: 'today',
                        mode: 'multiple'
                    }" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>Range</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; mode: "range" &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr  :model-value="new Date()" class="form-control" :config="{ dateFormat: 'd M, Y', mode: 'range' }" />
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-4">
                <BCol lg="6">
                    <h5>Timepicker</h5>
                    <p class="text-muted mb-0">
                        Set options <code>&#123; enableTime: true, noCalendar: true, dateFormat: "H:i" &#125;</code>
                    </p>
                </BCol>
                <BCol lg="6">
                    <flatPickr :model-value="new Date()" class="form-control" placeholder="Select Time"
                        :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }" />
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BCard, BCardBody, BCardHeader, BCardTitle, BRow, BCol } from 'bootstrap-vue-next'
import flatPickr from 'vue-flatpickr-component'
</script>