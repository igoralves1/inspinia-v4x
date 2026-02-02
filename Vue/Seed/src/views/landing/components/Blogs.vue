<template>
  <section
    class="section-custom bg-light bg-opacity-30 border-top border-bottom border-light"
    id="blog"
  >
    <BContainer>
      <BRow>
        <BCol cols="12" class="text-center">
          <span class="text-muted rounded-3 d-inline-block">📝 Insights & Resources</span>
          <h2 class="mt-3 fw-bold mb-5">
            Explore Our
            <mark class="fst-italic">Latest</mark>
            Articles and Updates
          </h2>
        </BCol>
      </BRow>

      <BRow class="g-4">
        <BCol lg="4" v-for="(blog, index) in blogs" :key="index">
          <BlogCard :blog="blog" />
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script setup lang="ts">
import BlogCard from '@/views/landing/components/BlogCard.vue'
import { blogs } from '@/views/landing/components/data'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
</script>
