<template>
  <MainLayout>
    <BContainer fluid>
      <PageBreadcrumb title="Compact" />
    </BContainer>

    <BContainer xl>
      <BRow>
        <BCol cols="12">
          <BAlert
            show
            variant="info"
            class="alert-bordered border-start border-info"
            body-class="d-flex align-items-center gap-2"
          >
            <Icon icon="tabler:info-circle" class="fs-xxl" />
            <div>
              To use the compact layout, follow this structure: wrap your page title in
              <code>&lt;BContainer fluid&gt;</code> and place your main content inside
              <code>&lt;BContainer xl&gt;</code>. This ensures proper spacing and alignment.
            </div>
          </BAlert>
        </BCol>
      </BRow>
    </BContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { Icon } from '@iconify/vue'
import { usePageMeta } from '@/composables/usePageMeta.ts'

usePageMeta('Compact Layout')
</script>
