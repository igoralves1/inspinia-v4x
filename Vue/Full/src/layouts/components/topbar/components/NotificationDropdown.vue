<template>
  <div class="topbar-item">
    <BDropdown
      placement="bottom-end"
      :variant="null"
      no-caret
      toggle-class="topbar-link py-0 px-1"
      menu-class="dropdown-menu-lg p-0"
      offset="22"
    >
      <template #button-content>
        <Icon icon="lucide:bell" class="fs-xxl" />
        <BBadge class="badge-square text-bg-warning topbar-badge">14</BBadge>
      </template>

      <div class="px-3 py-2 border-bottom">
        <BRow class="align-items-center">
          <BCol>
            <h6 class="m-0 fs-md fw-semibold">Notifications</h6>
          </BCol>
          <BCol class="text-end">
            <a href="#" class="badge text-bg-light badge-label py-1">14 Alerts</a>
          </BCol>
        </BRow>
      </div>

      <simplebar style="max-height: 300px" data-simplebar>
        <div
          v-for="notification in notifications"
          :id="notification.id"
          :key="notification.id"
          class="dropdown-item notification-item py-2 text-wrap"
        >
          <span class="d-flex gap-2">
            <span class="avatar-md flex-shrink-0">
              <span
                :class="`avatar-title bg-${notification.variant}-subtle text-${notification.variant} rounded fs-22`"
              >
                <Icon :icon="notification.icon" :class="`fs-xl fill-${notification.variant}`" />
              </span>
            </span>
            <span class="flex-grow-1 text-muted">
              <span class="fw-medium text-body">{{ notification.message }}</span>
              <br />
              <span class="fs-xs">{{ notification.timestamp }}</span>
            </span>
            <BButton variant="link" type="button" class="flex-shrink-0 text-muted p-0">
              <Icon icon="tabler:xbox-x-filled" class="fs-xxl" />
            </BButton>
          </span>
        </div>
      </simplebar>

      <BDropdownItem
        class="text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light py-2"
      >
        View All Alerts
      </BDropdownItem>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'
import { Icon } from '@iconify/vue'

type NotificationType = {
  id: string
  icon: string
  variant: 'danger' | 'warning' | 'success' | 'primary' | 'info' | 'secondary'
  message: string
  timestamp: string
}

const notifications: NotificationType[] = [
  {
    id: 'notification-1',
    icon: 'lucide:server-crash',
    variant: 'danger',
    message: 'Critical alert: Server crash detected',
    timestamp: '30 minutes ago',
  },
  {
    id: 'notification-2',
    icon: 'lucide:alert-triangle',
    variant: 'warning',
    message: 'High memory usage on Node A',
    timestamp: '10 minutes ago',
  },
  {
    id: 'notification-3',
    icon: 'lucide:check-circle',
    variant: 'success',
    message: 'Backup completed successfully',
    timestamp: '1 hour ago',
  },
  {
    id: 'notification-4',
    icon: 'lucide:user-plus',
    variant: 'primary',
    message: 'New user registration: Sarah Miles',
    timestamp: 'Just now',
  },
  {
    id: 'notification-5',
    icon: 'lucide:bug',
    variant: 'danger',
    message: 'Bug reported in payment module',
    timestamp: '20 minutes ago',
  },
  {
    id: 'notification-6',
    icon: 'lucide:message-circle',
    variant: 'info',
    message: 'New comment on Task #142',
    timestamp: '15 minutes ago',
  },
  {
    id: 'notification-7',
    icon: 'lucide:battery-warning',
    variant: 'warning',
    message: 'Low battery on Device X',
    timestamp: '45 minutes ago',
  },
  {
    id: 'notification-8',
    icon: 'lucide:cloud-upload',
    variant: 'success',
    message: 'File upload completed',
    timestamp: '1 hour ago',
  },
  {
    id: 'notification-9',
    icon: 'lucide:calendar',
    variant: 'primary',
    message: 'Team meeting scheduled at 3 PM',
    timestamp: '2 hours ago',
  },
  {
    id: 'notification-10',
    icon: 'lucide:download',
    variant: 'secondary',
    message: 'Report ready for download',
    timestamp: '3 hours ago',
  },
  {
    id: 'notification-11',
    icon: 'lucide:lock',
    variant: 'danger',
    message: 'Multiple failed login attempts',
    timestamp: '5 hours ago',
  },
  {
    id: 'notification-12',
    icon: 'lucide:bell-ring',
    variant: 'info',
    message: 'Reminder: Submit your timesheet',
    timestamp: 'Today, 9:00 AM',
  },
  {
    id: 'notification-13',
    icon: 'lucide:database-zap',
    variant: 'warning',
    message: 'Database nearing capacity',
    timestamp: 'Yesterday',
  },
  {
    id: 'notification-14',
    icon: 'lucide:check-square',
    variant: 'success',
    message: 'System check completed',
    timestamp: '2 days ago',
  },
]
</script>
