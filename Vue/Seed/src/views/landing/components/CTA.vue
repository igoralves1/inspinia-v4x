<template>
  <section>
    <div
      class="section-cta position-relative card-side-img overflow-hidden"
      :style="{ backgroundImage: `url(${ctaImg})` }"
    >
      <div
        class="card-img-overlay d-flex align-items-center flex-column gap-3 justify-content-center auth-overlay text-center"
      >
        <h3 class="text-white fs-24 mb-0 fw-bold">Build Faster with Our Premium Admin Template</h3>
        <p class="text-white text-opacity-75 fs-md">
          Kickstart your project with a modern, responsive, and developer-friendly admin dashboard.
          <br />
          Try it free for 14 days — no credit card needed.
        </p>
        <a href="#!" class="btn btn-light rounded-pill">Buy Our Template</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ctaImg from '@/assets/images/landing-cta.jpg'
</script>
