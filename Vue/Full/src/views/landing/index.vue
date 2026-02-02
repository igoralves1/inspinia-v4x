<template>
  <div class="bg-body-secondary">
    <Navbar />
    <Hero />
    <Services />
    <Features />
    <PricingPlans />
    <CTA />
    <Testimonials />
    <Blogs />
    <Contact />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/views/landing/components/Navbar.vue'
import Hero from '@/views/landing/components/Hero.vue'
import Services from '@/views/landing/components/Services.vue'
import Features from '@/views/landing/components/Features.vue'
import PricingPlans from '@/views/landing/components/PricingPlans.vue'
import CTA from '@/views/landing/components/CTA.vue'
import Testimonials from '@/views/landing/components/Testimonials.vue'
import Blogs from '@/views/landing/components/Blogs.vue'
import Contact from '@/views/landing/components/Contact.vue'
import Footer from '@/views/landing/components/Footer.vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

usePageMeta('One Page Landing')
</script>
