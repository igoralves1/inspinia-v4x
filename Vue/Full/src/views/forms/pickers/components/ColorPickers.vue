<template>
    <BCard no-body>
        <BCardHeader>
            <h4 class="card-title">Colorpicker</h4>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted mb-2">
                Pickr - A simple, multi-themed, responsive and hackable Color-Picker library.
                No dependencies, no jQuery. Compatible with all CSS Frameworks e.g. Bootstrap, Materialize.
                Supports alpha channel, rgba, hsla, hsva and more!
            </p>

            <a class="btn btn-link p-0 fw-semibold" href="https://linx4200.github.io/vue-color/" target="_blank">
               Vue Colorpicker on View Official Website
                <Icon icon="tabler:chevron-right" class="ms-1" />
            </a>
        </BCardBody>

        <div class="border-top border-dashed"></div>

        <BCardBody>
            <h4 class="card-title mb-3">Example</h4>


            <BRow class="align-items-center g-4">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Sketch Demo</h5>
                    <p class="text-muted mb-0">Use <code> &lt;color-sketch v-model="color"/&gt; </code>
                        colorpicker.</p>
                </BCol>
                <BCol lg="6">
                    
                        <SketchPicker v-model="color" />
                    
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>


            <BRow class="align-items-center g-4">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Chrome Color Picker</h5>
                    <p class="text-muted mb-0">Use <code> &lt;color-chrome v-model="color"/&gt; </code>
                        colorpicker.</p>
                </BCol>
                <BCol lg="6">
                    
                        <ChromePicker v-model="color" />
                    
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="align-items-center g-4">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Slider</h5>
                    <p class="text-muted mb-0">Use <code> &lt;color-slider v-model="color"/&gt; </code>
                        colorpicker.</p>
                </BCol>
                <BCol lg="6">
                    
                        <SliderPicker v-model="color" />
                    
                </BCol>
            </BRow>

            <div class="my-4 border-top border-dashed"></div>

            <BRow class="align-items-center g-4">
                <BCol lg="6">
                    <h5 class="fw-semibold mb-1">Color Format</h5>
                    <p class="text-muted mb-0">Use <code> &lt;color-twitter v-model="color"/&gt; </code></p>
                </BCol>
                <BCol lg="6">
                    
                        <TwitterPicker v-model="color" />
                    
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { BCard, BCardBody, BCardHeader, BCol, BRow } from 'bootstrap-vue-next';
import { ref } from 'vue';
import { ChromePicker, SketchPicker, SliderPicker, TwitterPicker } from 'vue-color'
import 'vue-color/style.css';

const color = ref('#00ef20')
</script>

<style scoped></style>