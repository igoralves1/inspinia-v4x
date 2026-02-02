<template>
  <MainLayout>
    <Head title="With Lines" />
    <BContainer fluid>
      <PageBreadcrumb title="With Lines" />

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
              If you want to display a line with each menu item, add the class
              <code>"sidebar-with-line"</code> to the <code>&lt;html&gt;</code> tag. To apply this
              dynamically, use
              <code>toggleAttribute('class', 'sidebar-no-icons sidebar-with-line')</code>.
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

import { toggleAttribute } from '@/helpers/layout'
import { Head } from '@inertiajs/vue3'

onMounted(() => {
  toggleAttribute('class', 'sidebar-with-line')
})

onBeforeUnmount(() => {
  toggleAttribute('class', '')
})
</script>
