<template>
  <BCard no-body>
    <BCardBody class="p-0">
      <div class="p-3 bg-light-subtle border-bottom border-dashed">
        <BRow>
          <BCol>
            <h4 class="fs-sm mb-1">Would you like the full report?</h4>
            <small class="text-muted fs-xs mb-0">
              All 120 orders have been successfully delivered
            </small>
          </BCol>

          <BCol cols="auto" class="align-self-center">
            <button
              size="sm"
              class="rounded-circle btn-icon btn btn-default"
              v-b-tooltip.hover
              title="Download"
            >
              <Icon icon="tabler:download" class="fs-xl" />
            </button>
          </BCol>
        </BRow>
      </div>

      <BRow class="row-cols-xxl-2 row-cols-md-2 row-cols-1 g-1 p-1">
        <BCol v-for="(item, idx) in widget2Data" :key="idx">
          <Widget2 :item="item" />
        </BCol>
      </BRow>

      <div class="text-center my-2">
        <RouterLink
          to="#"
          class="link-reset text-decoration-underline fw-semibold link-offset-3"
        >
          View all Links <Icon icon="tabler:link" />
        </RouterLink>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BRow, BCol, BButton } from 'bootstrap-vue-next'
import { widget2Data } from './data';
import Widget2 from './Widget2.vue';
import { Icon } from '@iconify/vue';

</script>