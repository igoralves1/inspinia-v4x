<template>
    <BCard no-body>
        <BCardHeader>
            <h4 class="card-title">Horizontal Form Label Sizing</h4>
        </BCardHeader>

        <BCardBody>
            <form>
                <div class="mb-2 row">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <BCol sm="10">
                        <BFormInput type="email" class="form-control-sm" 
                            placeholder="col-form-label-sm"/>
                    </BCol>
                </div>
                <div class="mb-2 row">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <BCol sm="10">
                        <BFormInput type="email"  placeholder="col-form-label"/>
                    </BCol>
                </div>
                <BRow>
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <BCol sm="10">
                        <BFormInput type="email" class="form-control-lg"
                            placeholder="col-form-label-lg"/>
                    </BCol>
                </BRow>
            </form>
        </BCardBody>
    </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BCol, BFormInput, BRow } from 'bootstrap-vue-next';


</script>

<style scoped></style>