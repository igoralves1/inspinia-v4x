<template>
  <div class="sidenav-user">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <Link href="" class="link-reset">
          <img :src="user2" alt="user-image" class="rounded-circle mb-2 avatar-md" />
          <span class="sidenav-user-name fw-bold">Damian D.</span>
          <span class="fs-12 fw-semibold" data-lang="user-role">Art Director</span>
        </Link>
      </div>

      <BDropdown
        :variant="null"
        no-caret
        placement="bottom-end"
        toggle-class="link-reset sidenav-user-set-icon border-0 p-0"
        offset="7"
      >
        <template #button-content>
          <Icon icon="tabler:settings" class="fs-24 align-middle ms-1" />
        </template>

        <template v-for="(item, idx) in userDropdownItems" :key="idx">
          <BDropdownHeader v-if="item.isHeader" class="noti-title">
            <h6 class="text-overflow m-0">{{ item.label }}</h6>
          </BDropdownHeader>

          <BDropdownDivider v-else-if="item.isDivider" />

          <Link
            v-else
            :href="item.url ?? '#'"
            class="dropdown-item d-flex align-items-center"
            :class="item.class"
          >
            <Icon v-if="item.icon" :icon="item.icon" class="me-2 fs-17 align-middle" />
            <span class="align-middle">{{ item.label }}</span>
          </Link>
        </template>
      </BDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import user2 from '@/images/users/user-2.jpg'
import { userDropdownItems } from '@/layouts/components/data'
import { Link } from '@inertiajs/vue3';
</script>
