<template>
  <section class="section-custom pb-5" id="services">
    <BContainer>
      <BRow>
        <BCol cols="12" class="text-center">
          <span class="text-muted rounded-3 d-inline-block"
            >🚀 Empowering your digital journey</span
          >
          <h2 class="mt-3 fw-bold mb-5">
            Discover Our
            <mark class="fst-italic">Core Services</mark>
            and Capabilities
          </h2>
        </BCol>
      </BRow>

      <BRow>
        <BCol v-for="(service, index) in services" :key="index" xl="3" md="6">
          <div class="card border-0 p-2 card-h-100">
            <div class="card-body pb-0">
              <div class="avatar-xl mb-3">
                <span class="avatar-title text-bg-secondary rounded-circle fs-22">
                  <Icon :icon="service.icon" />
                </span>
              </div>
              <h4 class="mb-2">{{ service.name }}</h4>
              <p class="text-muted mb-3">{{ service.description }}</p>
            </div>
            <div class="card-footer border-0 pt-0">
              <a
                href="javascript:void(0)"
                class="link-primary fw-semibold d-flex align-items-center gap-1"
              >
                Know more
                <Icon icon="tabler:arrow-right" />
              </a>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { services } from '@/views/landing/components/data'
</script>
