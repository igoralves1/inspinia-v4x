<template>
  <BCard no-body>
    <BCardBody>
      <div class="avatar-xl mb-3">
        <span
          :class="`avatar-title bg-${item.variant}-subtle text-${item.variant} rounded-circle fs-24 d-flex`"
        >
          <Icon :icon="item.icon" class="d-flex" />
        </span>
      </div>

      <h3 class="mb-1">
         <CountUp :end-val="item.count.value"
                            :options="{ prefix: item.count.prefix || '', suffix: item.count.suffix || '', scrollSpyOnce: true, enableScrollSpy: true, duration: 1 }" />
      </h3>

      <p class="mb-0 text-muted">
        {{ item.title }}
      </p>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody } from 'bootstrap-vue-next'
import CountUp from 'vue-countup-v3'
import type { Widget7Type } from './types';
import { Icon } from '@iconify/vue';


defineProps<{ item: Widget7Type }>()
</script>

