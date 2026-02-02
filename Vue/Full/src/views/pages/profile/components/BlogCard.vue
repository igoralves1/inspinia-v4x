<template>
  <BCard no-body class="rounded-3">
    <BBadge class="badge-label position-absolute top-0 start-0 m-3" variant="dark">
      {{ blog.category }}
    </BBadge>

    <img class="card-img-top" :src="blog.image" alt="" />

    <BCardBody>
      <BCardTitle as="h6" class="fs-lg lh-base mb-2">
        <RouterLink to="" class="link-reset">
          {{ blog.title }}
        </RouterLink>
      </BCardTitle>

      <p class="mb-3 text-muted">{{ blog.description }}</p>

      <div>
        <RouterLink
          v-for="(tag, idx) in blog.tags"
          :key="idx"
          to="#"
          class="badge badge-label badge-default"
          :class="{ 'me-1': idx !== blog.tags.length - 1 }"
        >
          {{ tag }}
        </RouterLink>
      </div>

      <p class="d-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base text-muted">
        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:calendar" class="fs-md" />
          <span>{{ blog.date }}</span>
        </span>

        <span class="d-flex align-items-center gap-1">
          <Icon icon="tabler:message-circle" class="fs-md" />
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

    <BCardFooter class="bg-transparent d-flex justify-content-between">
      <div class="d-flex justify-content-start align-items-center gap-2">
        <div class="avatar avatar-xs">
          <img
            :src="blog.author.image"
            height="24"
            width="24"
            alt=""
            class="img-fluid rounded-circle"
          />
        </div>
        <div>
          <h5 class="text-nowrap fs-sm mb-0 lh-base">
            <RouterLink to="#" class="link-reset">
              {{ blog.author.name }}
            </RouterLink>
          </h5>
        </div>
      </div>

      <RouterLink to="" class="fw-semibold link-primary">
        Read more <Icon icon="tabler:arrow-right" />
      </RouterLink>
    </BCardFooter>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardTitle, BCardFooter, BBadge } from 'bootstrap-vue-next'
import type { BlogType } from './types';
import { Icon } from '@iconify/vue';

defineProps<{ blog: BlogType }>()
</script>