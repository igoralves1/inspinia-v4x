<template>
  <BCard no-body class="border-top-0">
    <div
      class="position-relative card-side-img overflow-hidden rounded-top"
      :style="{
        height: '180px',
        backgroundImage: `url(${profileBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <div
        class="p-4 card-img-overlay rounded-start-0 auth-overlay d-flex rounded-top align-items-center justify-content-center"
      >
        <h5 class="text-white m-0 fst-italic">"Welcome!"</h5>
      </div>
    </div>

    <div class="card-body position-relative">
      <div class="d-flex justify-content-start gap-3">
        <div class="avatar avatar-xxl" style="margin-top: -60px">
          <RouterLink to="/pages/profile">
            <img
              :src="user2"
              alt="User Profile"
              class="img-fluid img-thumbnail rounded-circle"
            />
          </RouterLink>
        </div>

        <div>
          <h4 class="text-nowrap fw-bold mb-1">
            <RouterLink
              to="/pages/profile"
              class="text-reset text-decoration-none"
            >
              Damian D.
            </RouterLink>
          </h4>
          <p class="text-muted mb-0">Member since Jan 2021</p>
        </div>

        <BDropdown
          class="ms-auto"
          menu-class="dropdown-menu-end"
          toggle-class="btn btn-icon btn-primary rounded-circle drop-arrow-none"
          style="margin-top: -40px"
          end
        >
          <template #button-content>
            <Icon icon="tabler:dots" class="fs-2" />
          </template>

          <BDropdownItem>Edit Profile</BDropdownItem>
          <BDropdownItem class="text-danger">Report</BDropdownItem>
        </BDropdown>
      </div>
    </div>
  </BCard>
</template>

<script setup lang="ts">
import { BCard, BDropdown, BDropdownItem } from 'bootstrap-vue-next'

import profileBg from '@/assets/images/profile-bg.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import { Icon } from '@iconify/vue';
</script>