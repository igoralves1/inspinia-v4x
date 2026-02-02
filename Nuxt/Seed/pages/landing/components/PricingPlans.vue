<template>
  <section id="plans" class="section-custom">
    <BContainer>
      <BRow>
        <BCol cols="12" class="text-center">
          <span class="text-muted rounded-3 d-inline-block"
          >💰 Transparent and flexible pricing</span
          >
          <h2 class="mt-3 fw-bold mb-5">
            Choose the
            <mark class="fst-italic">License</mark>
            That Fits Your Needs
          </h2>
        </BCol>
      </BRow>

      <BRow class="justify-content-center">
        <BCol xxl="10">
          <BRow>
            <BCol
                v-for="(plan, i) in pricingPlans"
                :key="i"
                lg="4"
                :class="{ 'my-4 my-lg-0': plan.isPopular }"
            >
              <PricingCard :plan="plan"/>
            </BCol>
          </BRow>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script setup lang="ts">
import PricingCard from '~/pages/landing/components/PricingCard.vue'
import {pricingPlans} from '~/pages/landing/components/data'
import {BCol, BContainer, BRow} from 'bootstrap-vue-next'
</script>
