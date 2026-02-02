<template>
  <article class="card rounded-3 border-0 shadow-sm">
    <div class="badge text-bg-dark badge-label position-absolute top-0 start-0 m-3">
      {{ blog.category }}
    </div>

    <NuxtImg class="card-img-top rounded-top-3" :src="blog.image" :alt="blog.title" />

    <div class="card-body">
      <h6 class="card-title fs-lg lh-base mb-2">
        <NuxtLink :to="blog.url" class="link-reset">{{ blog.title }}</NuxtLink>
      </h6>
      <p class="mb-3 text-muted">{{ blog.description }}</p>

      <p class="d-flex flex-wrap gap-3 text-muted mb-0 mt-3 align-items-center fs-base">
        <span class="d-flex align-items-center gap-1">
          <Icon name="tabler:calendar" class="fs-md" /> {{ blog.date }}
        </span>
        <span class="d-flex align-items-center gap-1">
          <Icon name="tabler:message-circle" class="fs-md" />
          <a href="javascript:void(0)" class="link-reset">{{ blog.comments }}</a>
        </span>
        <span class="d-flex align-items-center gap-1">
          <Icon name="tabler:eye" class="fs-md" /> {{ blog.views }}
        </span>
      </p>
    </div>

    <div class="card-footer bg-transparent d-flex justify-content-between border-0">
      <div class="d-flex justify-content-start align-items-center gap-2">
        <div class="avatar avatar-xs">
          <img :src="blog.author.image" :alt="blog.author.name" class="img-fluid rounded-circle" />
        </div>
        <div>
          <h5 class="text-nowrap fs-sm mb-0 lh-base">
            <a href="javascript:void(0)" class="link-reset">{{ blog.author.name }}</a>
          </h5>
        </div>
      </div>
      <NuxtLink :to="blog.url" class="link-primary fw-semibold d-flex align-items-center gap-1">
        Read more <Icon name="tabler-arrow-right" />
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type {BlogType} from "~/pages/landing/components/types";

defineProps<{
  blog: BlogType
}>()
</script>
