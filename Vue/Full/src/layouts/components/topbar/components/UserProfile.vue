<template>
  <div class="topbar-item nav-user">
    <BDropdown
      placement="bottom-end"
      :variant="null"
      no-caret
      toggle-class="topbar-link px-2"
      offset="9"
    >
      <template #button-content>
        <img :src="user2" width="32" class="rounded-circle me-lg-2 d-flex" alt="user-image" />
        <div class="d-lg-flex align-items-center gap-1 d-none">
          <h5 class="my-0">Damian D.</h5>
          <Icon icon="tabler:chevron-down" class="align-middle" />
        </div>
      </template>

      <template v-for="(item, idx) in userDropdownItems" :key="idx">
        <BDropdownHeader v-if="item.isHeader" class="noti-title">
          <h6 class="text-overflow m-0">{{ item.label }}</h6>
        </BDropdownHeader>

        <BDropdownDivider v-else-if="item.isDivider" />

        <RouterLink
          v-else
          :to="item.url ?? '#'"
          class="dropdown-item d-flex align-items-center"
          :class="item.class"
        >
          <Icon v-if="item.icon" :icon="item.icon" class="me-2 fs-17 align-middle" />
          <span class="align-middle">{{ item.label }}</span>
        </RouterLink>
      </template>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import user2 from '@/assets/images/users/user-2.jpg'
import { userDropdownItems } from '@/layouts/components/data'
</script>
