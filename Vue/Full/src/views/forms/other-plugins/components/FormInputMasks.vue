<template>
    <BCard no-body>
        <BCardHeader>
            <h4 class="card-title">Form Inputmask</h4>
        </BCardHeader>

        <BCardBody>
            <p class="text-muted mb-2">
                Inputmask is a javascript library that creates an input mask. Inputmask can run against
                vanilla javascript, jQuery, and jqlite. (Hoverable Inputmask)
            </p>

            <a class="btn btn-link p-0 fw-semibold" href="https://github.com/mustafacagri/vue-mask-next"
                target="_blank">
                vue Inputmask on View Official Website
                <Icon icon="tabler:chevron-right" class="ms-1" />
            </a>
        </BCardBody>

        <BCardBody>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Date</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="date" mask="##/##/####" class="form-control" placeholder="dd/mm/yyyy" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Hour</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="hour" mask="##:##:##" class="form-control" placeholder="hh:mm:ss" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Date & Hour</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="dateHour" mask="##/##/#### ##:##:##" class="form-control"
                        placeholder="dd/mm/yyyy hh:mm:ss" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>ZIP Code</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="zip" mask="#####-###" class="form-control" placeholder="12345-678" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Crazy ZIP Code</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="crazyZip" mask="#-##-##-##" class="form-control" placeholder="1-23-45-67" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Telephone</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="phone" mask="####-####" class="form-control" placeholder="1234-5678" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>Telephone with Area Code</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="phoneWithArea" mask="(##) ####-####" class="form-control"
                        placeholder="(12) 3456-7890" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>US Telephone</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="usPhone" mask="(###) ###-####" class="form-control"
                        placeholder="(123) 456-7890" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>São Paulo Cellphones</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="spCell" mask="(##) #####-####" class="form-control"
                        placeholder="(12) 91234-5678" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>CPF</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="cpf" mask="###.###.###-##" class="form-control" placeholder="123.456.789-00" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>CNPJ</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="cnpj" mask="##.###.###/####-##" class="form-control"
                        placeholder="12.345.678/0001-99" />
                </BCol>
            </BRow>
            <div class="my-4 border-top border-dashed"></div>

            <BRow class="g-3">
                <BCol lg="6">
                    <h5>IP Address</h5>
                </BCol>
                <BCol lg="6">
                    <MaskInput v-model="ip" mask="###.###.###.###" class="form-control" placeholder="192.168.000.001" />
                </BCol>
            </BRow>

        </BCardBody>
    </BCard>

</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader } from 'bootstrap-vue-next';
import { MaskInput } from 'vue-mask-next'
import { ref } from 'vue';
import { Icon } from '@iconify/vue';


const date = ref('')
const hour = ref('')
const dateHour = ref('')
const zip = ref('')
const crazyZip = ref('')
const phone = ref('')
const phoneWithArea = ref('')
const usPhone = ref('')
const spCell = ref('')
const cpf = ref('')
const cnpj = ref('')
const ip = ref('')

</script>

<style scoped></style>