<template>
  <MainLayout>
    <BContainer fluid>
      <PageBreadcrumb title="Scrollable" />

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
              To enable full scrolling and view all content, please add
              <code>data-layout-position="scrollable"</code> to the <code>&lt;html&gt;</code> tag.
              To apply this dynamically, use <code>setPosition('scrollable')</code> from the
              <code>useLayout</code>.
            </div>
          </BAlert>
        </BCol>
      </BRow>

      <BRow>
        <BCol cols="12">
          <BCard :style="{ height: '1000px' }" />
        </BCol>
      </BRow>
    </BContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import { Icon } from '@iconify/vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { useLayout } from '@/stores/layout'
import { usePageMeta } from '@/composables/usePageMeta.ts'

const { setPosition, reset } = useLayout()

usePageMeta('Scrollable Layout')

onMounted(() => {
  setPosition('scrollable')
})

onBeforeUnmount(() => {
  reset()
})
</script>
