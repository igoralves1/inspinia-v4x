<template>
  <div class="bg-body-secondary">
    <Head title="One Page Landing"/>
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
import Navbar from '@/pages/landing/components/Navbar.vue'
import Hero from '@/pages/landing/components/Hero.vue'
import Services from '@/pages/landing/components/Services.vue'
import Features from '@/pages/landing/components/Features.vue'
import PricingPlans from '@/pages/landing/components/PricingPlans.vue'
import CTA from '@/pages/landing/components/CTA.vue'
import Testimonials from '@/pages/landing/components/Testimonials.vue'
import Blogs from '@/pages/landing/components/Blogs.vue'
import Contact from '@/pages/landing/components/Contact.vue'
import Footer from '@/pages/landing/components/Footer.vue'
import { Head } from '@inertiajs/vue3'

</script>
