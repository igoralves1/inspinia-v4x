<template>
  <MainLayout>
    <BContainer fluid>
      <PageBreadcrumb title="Dark Topbar" />

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
              To switch to a dark topbar, add
              <code>data-topbar-color="dark"</code> to the <code>&lt;html&gt;</code> tag. To apply
              this dynamically, use <code>setTopBarColor('dark')</code> from the
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

const { setTopBarColor, reset } = useLayout()

usePageMeta('Dark Topbar')

onMounted(() => {
  setTopBarColor('dark')
})

onBeforeUnmount(() => {
  reset()
})
</script>
