<template>
  <BCard no-body :class="[blog.variant && `bg-${blog.variant} bg-gradient w-100`, 'mb-0']">
    <div
      v-if="blog.image && blog.category"
      class="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3"
    >
      {{ blog.category }}
    </div>

    <img v-if="blog.image" class="card-img-top" :src="blog.image" alt="" />

    <BCardBody v-if="blog.title && blog.description">
      <div
        v-if="!blog.image && blog.category"
        class="badge bg-white text-white bg-opacity-25 badge-label mb-3"
      >
        {{ blog.category }}
      </div>

      <BCardTitle tag="h6" class="fs-lg lh-base mb-2">
        <RouterLink :to="''" :class="blog.variant ? 'text-white' : 'link-reset'">
          {{ blog.title }}
        </RouterLink>
      </BCardTitle>

      <p :class="['mb-3', blog.variant ? 'text-white-50' : 'text-muted']">
        {{ blog.description }}
      </p>

      <div v-if="blog.tags">
        <RouterLink
          v-for="(tag, idx) in blog.tags"
          :key="idx"
          to=""
          :class="[
            'badge badge-label',
            blog.variant
              ? 'border rounded border-white border-opacity-25'
              : 'badge-default',
            idx !== blog.tags.length - 1 ? 'me-1' : ''
          ]"
        >
          {{ tag }}
        </RouterLink>
      </div>

      <p
        v-if="blog.date && blog.comments && blog.views"
        :class="[
          'd-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base',
          blog.variant ? 'text-white-50' : 'text-muted'
        ]"
      >
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:calendar" class="fs-md" />
          <span>{{ blog.date }}</span>
        </span>
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:message-circle"  class="fs-md" />
          <RouterLink to="" class="link-reset">
            {{ blog.comments }}
          </RouterLink>
        </span>
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:eye" class="fs-md" />
          <span>{{ blog.views }}</span>
        </span>
      </p>
    </BCardBody>

    <BCardFooter
      :class="[
        'bg-transparent d-flex justify-content-between',
        blog.variant ? 'border-light border-opacity-25' : ''
      ]"
    >
      <div class="d-flex justify-content-start align-items-center gap-2">
        <div class="avatar avatar-xs">
          <img
            :src="blog.user.avatar"
            height="24"
            width="24"
            alt=""
            class="img-fluid rounded-circle"
          />
        </div>
        <div>
          <h5 class="text-nowrap fs-sm mb-0 lh-base">
            <RouterLink :to="''" :class="blog.variant ? 'text-white' : 'link-reset'">
              {{ blog.user.name }}
            </RouterLink>
          </h5>
        </div>
      </div>
      <RouterLink to="" :class="['fw-semibold', blog.variant ? 'text-white' : 'text-primary']">
        Read more <Icon icon="tabler:arrow-right" />
      </RouterLink>
    </BCardFooter>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardTitle, BCardFooter } from 'bootstrap-vue-next'
import type { BlogType } from '../data';
import { Icon } from '@iconify/vue';

defineProps<{ blog: BlogType }>()
</script>
