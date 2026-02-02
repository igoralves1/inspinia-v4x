<template>
  <MainLayout>
    <BContainer fluid>
      <PageBreadcrumb title="Icon View Sidebar" />

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
              To enable icon view menu scrolling and see all content, add
              <code>data-sidenav-size="condensed"</code> to the <code>&lt;html&gt;</code> tag. To
              apply this dynamically, use <code>setSideNavSize('condensed')</code> from the
              <code>useLayout</code>.
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
import { onBeforeUnmount, onMounted } from 'vue'
import { useLayout } from '@/stores/layout'
import { usePageMeta } from '@/composables/usePageMeta.ts'

const { setSideNavSize, reset } = useLayout()

usePageMeta('Icon View Sidebar')

onMounted(() => {
  setSideNavSize('condensed')
})

onBeforeUnmount(() => {
  reset()
})
</script>
