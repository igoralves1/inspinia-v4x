<template>
  <MainLayout>
    <Head title="Topbar with Sub Item" />
    <BContainer fluid>
      <div class="page-title-head py-2 d-flex align-items-sm-center flex-sm-row flex-column">
        <div class="flex-grow-1">
          <h4 class="fs-sm text-uppercase fw-bold mb-1">Hey Damian,</h4>
          <ol class="breadcrumb mb-0 p-0 fs-xxs">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Topbar</a></li>
            <li class="breadcrumb-item active" aria-current="page">Sub Items</li>
          </ol>
        </div>
        <div class="d-flex">
          <Link href="#" class="btn btn-primary flex-shrink-0 ms-2">
            <Icon icon="tabler:circle-dashed-plus" class="fs-lg me-1" />
            Add New
          </Link>
          <Link href="#" class="btn btn-icon btn-secondary flex-shrink-0 ms-1">
            <Icon icon="tabler:activity-heartbeat" class="fs-lg" />
          </Link>
        </div>
      </div>
    </BContainer>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { Icon } from '@iconify/vue'

import { Head, Link } from '@inertiajs/vue3'

</script>
