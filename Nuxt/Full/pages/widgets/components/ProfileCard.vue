<template>
  <div class="card border-top-0">
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
          <NuxtLink to="/pages/profile">
            <NuxtImg
              :src="user2"
              alt="User Profile"
              class="img-fluid img-thumbnail rounded-circle"
            />
          </NuxtLink>
        </div>

        <div>
          <h4 class="text-nowrap fw-bold mb-1">
            <NuxtLink
              to="/pages/profile"
              class="text-reset text-decoration-none"
            >
              Damian D.
            </NuxtLink>
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
            <Icon name="tabler:dots" size="24" />
          </template>

          <BDropdownItem>Edit Profile</BDropdownItem>
          <BDropdownItem class="text-danger">Report</BDropdownItem>
        </BDropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'

import profileBg from '/images/profile-bg.jpg'
import user2 from '/images/users/user-2.jpg'
</script>