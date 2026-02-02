<template>
  <BContainer fluid>

    <div class="page-title-head py-2 d-flex align-items-sm-center flex-sm-row flex-column">
      <div class="flex-grow-1">
        <h4 class="fs-sm text-uppercase fw-bold mb-1">Hey Damian,</h4>
        <p class="text-muted mb-0 fs-xs">You have 42 messages and 6 notifications.</p>
      </div>
      <div class="d-flex">
        <div class="input-group">
          <input type="text" class="form-control" style="min-width: 200px;">
          <div class="input-group-text text-bg-primary border-primary btn-icon">
            <Icon name="tabler:calendar" class="fs-lg"/>
          </div>
        </div>
        <NuxtLink to="#" class="btn btn-icon btn-primary flex-shrink-0 ms-2">
          <Icon name="tabler:circle-dashed-plus" class="fs-lg"/>
        </NuxtLink>
        <NuxtLink to="#" class="btn btn-icon btn-primary flex-shrink-0 ms-1">
          <Icon name="tabler:activity-heartbeat" class="fs-lg"/>
        </NuxtLink>
      </div>
    </div>

  </BContainer>
</template>

<script setup lang="ts">
usePageTitle('Topbar with Tools')
</script>