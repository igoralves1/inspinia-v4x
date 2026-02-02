<template>
  <BCard no-body>
    <BCardBody class="p-2">
      <div class="d-flex align-items-center justify-content-between gap-2">
        <div class="flex-shrink-0 avatar-md bg-light bg-opacity-50 text-muted rounded-2">
          <span class="avatar-title">
            <Icon name="tabler:folder" class="fs-24" />
          </span>
        </div>

        <div class="flex-grow-1">
          <h5 class="mb-1 fs-sm">
            <NuxtLink to="" class="link-reset">
              {{ folder.name }}
            </NuxtLink>
          </h5>
          <p class="text-muted mb-0 fs-xs">{{ formatBytes(folder.size) }}</p>
        </div>

        <BDropdown
          variant="link"
          toggle-class="dropdown-toggle drop-arrow-none fs-xxl link-reset p-0"
          class="flex-shrink-0 text-muted"
          end
        >
          <template #button-content>
            <Icon name="tabler:dots-vertical" />
          </template>

          <BDropdownItem>
            <Icon name="tabler:share" class="me-1" /> Share
          </BDropdownItem>
          <BDropdownItem>
            <Icon name="tabler:link" class="me-1" /> Get Sharable Link
          </BDropdownItem>
          <BDropdownItem>
            <Icon name="tabler:download" class="me-1" /> Download
          </BDropdownItem>
          <BDropdownItem>
            <Icon name="tabler:pin" class="me-1" /> Pin
          </BDropdownItem>
          <BDropdownItem>
            <Icon name="tabler:edit" class="me-1" /> Edit
          </BDropdownItem>
          <BDropdownItem>
            <Icon name="tabler:trash" class="me-1" /> Delete
          </BDropdownItem>
        </BDropdown>
      </div>
    </BCardBody>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BCardBody, BDropdown, BDropdownItem } from 'bootstrap-vue-next'
import { formatBytes } from '~/helpers/file';
import type { FolderType } from '../data';



defineProps<{ folder: FolderType }>()
</script>