<template>
  <BCard no-body class="rounded-3">
    <BBadge class="badge-label position-absolute top-0 start-0 m-3" variant="dark">
      {{ blog.category }}
    </BBadge>

    <NuxtImg class="card-img-top" :src="blog.image" alt="" />

    <BCardBody>
      <BCardTitle as="h6" class="fs-lg lh-base mb-2">
        <NuxtLink to="" class="link-reset">
          {{ blog.title }}
        </NuxtLink>
      </BCardTitle>

      <p class="mb-3 text-muted">{{ blog.description }}</p>

      <div>
        <NuxtLink
          v-for="(tag, idx) in blog.tags"
          :key="idx"
          to="#"
          class="badge badge-label badge-default"
          :class="{ 'me-1': idx !== blog.tags.length - 1 }"
        >
          {{ tag }}
        </NuxtLink>
      </div>

      <p class="d-flex flex-wrap gap-3 mb-0 mt-3 align-items-center fs-base text-muted">
        <span class="d-flex align-items-center gap-1">
          <Icon name="tabler:calendar" class="fs-md" />
          <span>{{ blog.date }}</span>
        </span>

        <span class="d-flex align-items-center gap-1">
          <Icon name="tabler:message-circle" class="fs-md" />
          <NuxtLink to="" class="link-reset">
            {{ blog.comments }}
          </NuxtLink>
        </span>

        <span class="d-flex align-items-center gap-1">
          <Icon name="tabler:eye" class="fs-md" />
          <span>{{ blog.views }}</span>
        </span>
      </p>
    </BCardBody>

    <BCardFooter class="bg-transparent d-flex justify-content-between">
      <div class="d-flex justify-content-start align-items-center gap-2">
        <div class="avatar avatar-xs">
          <NuxtImg
            :src="blog.author.image"
            height="24"
            width="24"
            alt=""
            class="img-fluid rounded-circle"
          />
        </div>
        <div>
          <h5 class="text-nowrap fs-sm mb-0 lh-base">
            <NuxtLink to="#" class="link-reset">
              {{ blog.author.name }}
            </NuxtLink>
          </h5>
        </div>
      </div>

      <NuxtLink to="" class="fw-semibold link-primary">
        Read more <Icon name="tabler:arrow-right" />
      </NuxtLink>
    </BCardFooter>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardTitle, BCardFooter, BBadge } from 'bootstrap-vue-next'
import type { BlogType } from './types';

defineProps<{ blog: BlogType }>()
</script>