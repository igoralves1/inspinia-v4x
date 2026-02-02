<template>
    <UICard title="Input Type">
        <BRow>
            <BCol lg="12">
                <BFormGroup label="Email" label-for="example-email" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-email" type="email" name="example-email" placeholder="Email" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Password" label-for="example-password" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-password" type="password" value="password" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Show/Hide Password" label-for="password" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BInputGroup>
                                <BFormInput id="password" type="password" placeholder="Enter your password" />
                                <BInputGroupText class="password-eye">
                                    <Icon icon="tabler:eye" class="d-none" />
                                    <Icon icon="tabler:eye-closed" class="d-block" />
                                </BInputGroupText>
                            </BInputGroup>
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Month" label-for="example-month" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-month" type="month" name="month" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Time" label-for="example-time" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-time" type="time" name="time" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Week" label-for="example-week" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-week" type="week" name="week" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Number" label-for="example-number" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-number" type="number" name="number" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Color" label-for="example-color" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <BFormInput id="example-color" type="color" class="w-100" name="color" v-model="color" />
                        </BCol>
                    </BRow>
                </BFormGroup>

                <div class="border-top border-dashed my-3"></div>

                <BFormGroup label="Range" label-for="example-range" class="mb-3">
                    <BRow class="g-lg-4 g-2">
                        <BCol lg="5">
                            <input type="range" id="example-range" class="form-range" min="0" max="100" v-model="range" />
                        </BCol>
                    </BRow>
                </BFormGroup>
            </BCol>
        </BRow>
    </UICard>
</template>

<script setup lang="ts">
import {    
    BRow,
    BCol,
    BFormInput,
    BFormGroup,
    BInputGroup,
    BInputGroupText,
} from 'bootstrap-vue-next'
import { ref } from 'vue'
import UICard from '@/components/UICard.vue'
import { Icon } from '@iconify/vue'

const color = ref('#1ab394')
const range = ref(50)
</script>
