<template>
  <MainLayout>
    <Head title="Image Sidebar" />
    <BContainer fluid>
      <PageBreadcrumb title="Image Sidebar" />

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
              To switch to a image sidebar, add
              <code>data-menu-color="image"</code> to the <code>&lt;html&gt;</code> tag. To apply
              this dynamically, use <code>setSideNavColor('image')</code> from the
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
import { Head } from '@inertiajs/vue3'


const { setSideNavColor, reset } = useLayout()


onMounted(() => {
  setSideNavColor('image')
})

onBeforeUnmount(() => {
  reset()
})
</script>
