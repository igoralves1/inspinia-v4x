<template>
    <BContainer fluid>
        <PageBreadcrumb title="Pricing" subtitle="Pages" />

        <BRow class="justify-content-center">
            <BCol xxl="10">
                <BCard no-body>
                    <BCardBody>
                        <div class="text-center">
                            <h3 class="fw-bold mt-4">Find the Perfect Fit</h3>

                            <div class="fs-24">
                                <Icon name="tabler:arrow-left-rhombus"  class="text-primary me-1" />
                                <Icon name="tabler:arrow-right-rhombus" class="text-primary" />
                            </div>

                            <p class="fst-italic fs-md">
                                Not sure which plan suits you best? Check out our Pricing Guide for detailed insights.
                            </p>
                        </div>

                        <div class="px-xxl-4 mt-5">
                            <BRow>
                                <BCol v-for="(plan, idx) in pricingPlans" :key="idx" lg="6" xl="4">
                                    <PricingCard :plan="plan" currency="$" />
                                </BCol>
                            </BRow>
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BContainer>
</template>

<script setup lang="ts">
import { BContainer, BRow, BCol, BCard, BCardBody } from 'bootstrap-vue-next'
import { pricingPlans } from './data';
import PageBreadcrumb from '~/components/PageBreadcrumb.vue';
import PricingCard from './components/PricingCard.vue';


usePageTitle('Pricing')
</script>
