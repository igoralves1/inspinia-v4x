<template>
    <UICard title="Input Sizes">
        <BRow>
            <BCol lg="12">
                <BRow class="g-lg-4 g-2">
                    <BCol lg="2">
                        <label for="example-input-small" class="form-label">Small</label>
                    </BCol>
                    <BCol lg="5">
                        <BFormInput id="example-input-small" name="example-input-small" type="text" size="sm"
                            placeholder=".input-sm" />
                    </BCol>
                </BRow>

                <div class="border-top border-dashed my-3"></div>

                <BRow class="g-lg-4 g-2">
                    <BCol lg="2">
                        <label for="example-input-normal" class="form-label">Normal</label>
                    </BCol>
                    <BCol lg="5">
                        <BFormInput id="example-input-normal" name="example-input-normal" type="text"
                            placeholder="Normal" />
                    </BCol>
                </BRow>

                <div class="border-top border-dashed my-3"></div>

                <BRow class="g-lg-4 g-2">
                    <BCol lg="2">
                        <label for="example-input-large" class="form-label">Large</label>
                    </BCol>
                    <BCol lg="5">
                        <BFormInput id="example-input-large" name="example-input-large" type="text" size="lg"
                            placeholder=".input-lg" />
                    </BCol>
                </BRow>

                <div class="border-top border-dashed my-3"></div>

                <BRow class="g-lg-4 g-2">
                    <BCol lg="2">
                        <label for="example-gridsize" class="form-label">Grid Sizes</label>
                    </BCol>
                    <BCol lg="5">
                        <BRow>
                            <BCol sm="4">
                                <BFormInput id="example-gridsize" type="text" placeholder=".col-sm-4" />
                            </BCol>
                        </BRow>
                    </BCol>
                </BRow>

                <div class="border-top border-dashed my-3"></div>

                <BRow class="g-lg-4 g-2">
                    <BCol lg="2">
                        <label class="form-label">Large Select</label>
                    </BCol>
                    <BCol lg="5">
                        <BFormSelect size="lg">
                            <BFormSelectOption value="">Open this select menu</BFormSelectOption>
                            <BFormSelectOption value="1">One</BFormSelectOption>
                            <BFormSelectOption value="2">Two</BFormSelectOption>
                            <BFormSelectOption value="3">Three</BFormSelectOption>
                        </BFormSelect>
                    </BCol>
                </BRow>

                <div class="border-top border-dashed my-3"></div>

                <BRow class="g-lg-4 g-2">
                    <BCol lg="2">
                        <label class="form-label">Small Select</label>
                    </BCol>
                    <BCol lg="5">
                        <BFormSelect size="sm">
                            <BFormSelectOption value="">Open this select menu</BFormSelectOption>
                            <BFormSelectOption value="1">One</BFormSelectOption>
                            <BFormSelectOption value="2">Two</BFormSelectOption>
                            <BFormSelectOption value="3">Three</BFormSelectOption>
                        </BFormSelect>
                    </BCol>
                </BRow>
            </BCol>
        </BRow>
    </UICard>
</template>
<script setup lang="ts">
import { BCol, BRow } from 'bootstrap-vue-next';
import UICard from '@/components/UICard.vue';

</script>