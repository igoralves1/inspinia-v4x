<template>
 <BCard no-body>
    <BCardHeader class="bg-light-subtle border-light p-3 d-flex align-items-center">
      <div class="avatar-xl me-3">
        <span class="avatar-title text-bg-light rounded-circle">
          <Icon :icon="project.icon" :class="`fs-24 text-${project.variant}`" />
        </span>
      </div>

      <div>
        <h5 class="mb-1 d-flex align-items-center">
          <RouterLink to="/projects" class="link-reset">
            {{ project.title }}
          </RouterLink>
        </h5>
        <p class="text-muted mb-2 fs-xxs">Updated {{ project.updatedTime }}</p>
        <span
          :class="clsx(
            'badge fs-xxs badge-label',
            project.status === 'delayed'
              ? 'badge-soft-danger'
              : project.status === 'pending-review'
              ? 'badge-soft-warning'
              : 'badge-soft-success'
          )"
        >
          {{ toPascalCase(project.status) }}
        </span>
      </div>

      <div class="ms-auto">
        <BDropdown placement="bottom-end" toggle-class="btn btn-icon btn-ghost-light text-muted drop-arrow-none">
          <template #button-content>
            <Icon icon="tabler:dots-vertical" class="fs-xl" />
          </template>
          <BDropdownItem>
            <Icon icon="tabler:share" class="me-2" />
            Share
          </BDropdownItem>
          <BDropdownItem>
            <Icon icon="tabler:edit" class="me-2" />
            Edit
          </BDropdownItem>
          <BDropdownItem>
            <Icon icon="tabler:ban" class="me-2" />
            Block
          </BDropdownItem>
          <BDropdownItem class="text-danger">
            <Icon icon="tabler:trash" class="me-2" />
            Delete
          </BDropdownItem>
        </BDropdown>
      </div>
    </BCardHeader>

    <BCardBody>
      <BRow>
        <BCol sm="6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <Icon icon="tabler:list-check" class="text-muted fs-lg" />
            <h5 class="fs-base mb-0 fw-medium">
              {{ project.task.completed }}/{{ project.task.total }}
              <span v-if="project.task.new" class="badge bg-secondary">+{{ project.task.new }} New</span>
            </h5>
          </div>
        </BCol>
        <BCol sm="6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <Icon icon="tabler:paperclip" class="text-muted fs-lg" />
            <h5 class="fs-base mb-0 fw-medium">{{ project.files }} Files</h5>
          </div>
        </BCol>
      </BRow>

      <BRow>
        <BCol sm="6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <Icon icon="tabler:message-2" class="text-muted fs-lg" />
            <h5 class="fs-base mb-0 fw-medium">{{ project.comments }} Comments</h5>
          </div>
        </BCol>
        <BCol sm="6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <Icon icon="tabler:calendar-time" class="text-muted fs-lg" />
            <h5 class="fs-base mb-0 fw-medium">{{ project.date }}</h5>
          </div>
        </BCol>
      </BRow>

      <p class="my-2 text-muted fw-semibold fs-xxs">Team Members:</p>
      <div class="avatar-group avatar-group-xs mb-3">
        <div v-for="(member, idx) in project.members" :key="idx" class="avatar">
          <img :src="member" alt="" class="rounded-circle avatar-xs" />
        </div>
      </div>

      <div class="mt-3">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <p class="mb-0 text-muted fw-semibold fs-xxs">Progress</p>
          <p class="fw-semibold mb-0">{{ project.progress }}%</p>
        </div>
        <BProgress :value="project.progress" :variant="project.variant" height="5px" />
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BCardHeader, BRow, BCol, BDropdown, BDropdownItem, BProgress } from 'bootstrap-vue-next';
import type { ProjectType } from '../data';
import clsx from 'clsx';
import { Icon } from '@iconify/vue';
import { toPascalCase } from '@/helpers/casing';

defineProps<{ project: ProjectType }>()
</script>

<style scoped>

</style>