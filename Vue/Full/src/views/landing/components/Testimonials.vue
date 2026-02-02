<template>
  <section class="section-custom position-relative overflow-hidden" id="reviews">
    <div class="position-absolute top-0 start-50 translate-middle-x mt-5 opacity-50">
      <img :src="bgPattern" alt="Background pattern" />
    </div>

    <BContainer class="position-relative">
      <BRow>
        <BCol cols="12" class="text-center">
          <span class="text-muted rounded-3 d-inline-block">💬 What Our Customers Are Saying</span>
          <h2 class="mt-3 fw-bold mb-5">
            Real Feedback from
            <mark class="fst-italic">Satisfied</mark>
            Clients
          </h2>
        </BCol>
      </BRow>

      <BRow class="justify-content-center">
        <BCol lg="4" v-for="(testimonial, index) in testimonials" :key="index">
          <TestimonialCard :testimonial="testimonial" />
        </BCol>
      </BRow>

      <BRow class="row justify-content-center mt-5">
        <BCol xxl="9">
          <div class="d-flex justify-content-center align-items-center flex-wrap gap-5 mt-4">
            <div v-for="(logo, index) in clients" :key="index">
              <a href="javascript:void(0)" class="d-block">
                <img :src="logo" alt="logo" height="42" />
              </a>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '@/views/landing/components/TestimonialCard.vue'
import { testimonials } from '@/views/landing/components/data'
import { BRow } from 'bootstrap-vue-next'

import bgPattern from '@/assets/images/bg-pattern.png'

import client1 from '@/assets/images/clients/01.svg'
import client2 from '@/assets/images/clients/02.svg'
import client3 from '@/assets/images/clients/03.svg'
import client4 from '@/assets/images/clients/04.svg'
import client5 from '@/assets/images/clients/05.svg'
import client6 from '@/assets/images/clients/06.svg'
import client7 from '@/assets/images/clients/07.svg'

const clients = [client1, client2, client3, client4, client5, client6, client7]
</script>
