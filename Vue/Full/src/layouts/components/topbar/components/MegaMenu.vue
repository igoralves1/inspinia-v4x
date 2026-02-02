<template>
  <div class="topbar-item d-none d-md-flex">
    <BDropdown
      :variant="null"
      no-caret
      toggle-class="topbar-link btn fw-medium btn-link"
      offset="16"
      menu-class="dropdown-menu-xxl p-0"
    >
      <template #button-content>
        Boom Boom! 😍
        <Icon icon="tabler:chevron-down" class="ms-1" />
      </template>

      <simplebar class="h-100" style="max-height: 380px" data-simplebar>
        <BRow class="g-0">
          <BCol cols="12">
            <div class="p-3 text-center bg-light bg-opacity-50">
              <h4 class="mb-0 fs-lg fw-semibold">
                Welcome to <span class="text-primary">INSPINIA+</span> Admin Theme.
              </h4>
            </div>
          </BCol>
        </BRow>
        <BRow class="g-0">
          <BCol v-for="(item, idx) in megaMenuItems" :key="idx" md="4">
            <div class="p-3">
              <h5 class="mb-2 fw-semibold fs-sm dropdown-header">{{ item.title }}</h5>
              <ul class="list-unstyled megamenu-list">
                <li v-for="link in item.links" :key="link.url">
                  <RouterLink :to="link.url" class="dropdown-item">{{ link.label }}</RouterLink>
                </li>
              </ul>
            </div>
          </BCol>
        </BRow>
      </simplebar>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'

type MegaMenuType = {
  title: string
  links: {
    label: string
    url: string
  }[]
}

const megaMenuItems: MegaMenuType[] = [
  {
    title: 'Dashboard & Analytics',
    links: [
      { label: 'Sales Dashboard', url: '#;' },
      { label: 'Marketing Dashboard', url: '#;' },
      { label: 'Finance Overview', url: '#;' },
      { label: 'User Analytics', url: '#;' },
      { label: 'Traffic Insights', url: '#;' },
      { label: 'Performance Metrics', url: '#;' },
      { label: 'Conversion Tracking', url: '#;' },
    ],
  },
  {
    title: 'Project Management',
    links: [
      { label: 'Task Overview', url: '#;' },
      { label: 'Kanban Board', url: '#;' },
      { label: 'Gantt Chart', url: '#;' },
      { label: 'Team Collaboration', url: '#;' },
      { label: 'Project Milestones', url: '#;' },
      { label: 'Workflow Automation', url: '#;' },
      { label: 'Timesheets & Reports', url: '#;' },
    ],
  },
  {
    title: 'User Management',
    links: [
      { label: 'User Profiles', url: '#;' },
      { label: 'Access Control', url: '#;' },
      { label: 'Role Permissions', url: '#;' },
      { label: 'Activity Logs', url: '#;' },
      { label: 'Security Settings', url: '#;' },
      { label: 'User Groups', url: '#;' },
      { label: 'Authentication & Login', url: '#;' },
    ],
  },
]
</script>
