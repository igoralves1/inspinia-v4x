<template>
  <BCard no-body :class="[item.variant && `bg-${item.variant} bg-gradient w-100`, 'mb-0']">
    <div
      v-if="item.image && item.category"
      class="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3"
    >
      {{ item.category }}
    </div>

    <img v-if="item.image" class="card-img-top" :src="item.image" alt="" />

    <BCardBody v-if="item.title && item.description">
      <div
        v-if="!item.image && item.category"
        class="badge bg-white text-white bg-opacity-25 badge-label mb-3"
      >
        {{ item.category }}
      </div>

      <BCardTitle tag="h6" class="fs-lg lh-base mb-2">
        <RouterLink :to="''" :class="item.variant ? 'text-white' : 'link-reset'">
          {{ item.title }}
        </RouterLink>
      </BCardTitle>

      <p :class="['mb-3', item.variant ? 'text-white-50' : 'text-muted']">
        {{ item.description }}
      </p>

      <div v-if="item.tags">
        <RouterLink
          v-for="(tag, idx) in item.tags"
          :key="idx"
          to=""
          :class="[
            'badge badge-label',
            item.variant
              ? 'border rounded border-white border-opacity-25'
              : 'badge-default',
            idx !== item.tags.length - 1 ? 'me-1' : ''
          ]"
        >
          {{ tag }}
        </RouterLink>
      </div>

      <p
        v-if="item.date && item.comments && item.views"
        :class="[
          'd-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base',
          item.variant ? 'text-white-50' : 'text-muted'
        ]"
      >
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:calendar" class="fs-md" />
          <span>{{ item.date }}</span>
        </span>
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:message-circle" class="fs-md" />
          <RouterLink to="" class="link-reset">
            {{ item.comments }}
          </RouterLink>
        </span>
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:eye" class="fs-md" />
          <span>{{ item.views }}</span>
        </span>
      </p>
    </BCardBody>

    <BCardFooter
      :class="[
        'bg-transparent d-flex justify-content-between',
        item.variant ? 'border-light border-opacity-25' : ''
      ]"
    >
      <div class="d-flex justify-content-start align-items-center gap-2">
        <div class="avatar avatar-xs">
          <img
            :src="item.user.avatar"
            height="24"
            width="24"
            alt=""
            class="img-fluid rounded-circle"
          />
        </div>
        <div>
          <h5 class="text-nowrap fs-sm mb-0 lh-base">
            <RouterLink :to="''" :class="item.variant ? 'text-white' : 'link-reset'">
              {{ item.user.name }}
            </RouterLink>
          </h5>
        </div>
      </div>
      <RouterLink to="" :class="['fw-semibold', item.variant ? 'text-white' : 'text-primary']">
        Read more <Icon icon="tabler:arrow-right" />
      </RouterLink>
    </BCardFooter>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardTitle } from 'bootstrap-vue-next';
import type { MasonryCardType } from '../data';
import { Icon } from '@iconify/vue';

defineProps<{ item: MasonryCardType }>()
</script>
