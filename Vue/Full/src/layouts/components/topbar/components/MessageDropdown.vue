<template>
  <div class="topbar-item">
    <BDropdown
      placement="bottom-end"
      :variant="null"
      no-caret
      toggle-class="topbar-link py-0 px-1"
      menu-class="dropdown-menu-lg p-0 my-0"
      offset="22"
    >
      <template #button-content>
        <Icon icon="lucide:mails" class="fs-xxl" />
        <BBadge class="text-bg-success badge-circle topbar-badge">7</BBadge>
      </template>

      <div class="px-3 py-2 border-bottom">
        <BRow class="align-items-center">
          <BCol>
            <h6 class="m-0 fs-md fw-semibold">Messages</h6>
          </BCol>
          <BCol class="text-end">
            <a href="#" class="badge badge-soft-success badge-label py-1">09 Notifications</a>
          </BCol>
        </BRow>
      </div>

      <simplebar style="max-height: 300px" data-simplebar>
        <div
          v-for="message in messages"
          :id="message.id"
          :key="message.id"
          :class="['notification-item py-2 text-wrap dropdown-item', { active: message.active }]"
        >
          <div class="d-flex gap-3">
            <template v-if="message.user.icon">
              <span class="avatar-md flex-shrink-0">
                <span :class="`avatar-title rounded-circle fs-22 ${message.user.bgClass}`">
                  <Icon :icon="message.user.icon" class="fs-22 fill-white" />
                </span>
              </span>
            </template>

            <template v-if="message.user.avatar">
              <span class="flex-shrink-0">
                <img
                  :src="message.user.avatar"
                  height="36"
                  width="36"
                  class="avatar-md rounded-circle"
                  alt="User Avatar"
                />
              </span>
            </template>

            <span class="flex-grow-1 text-muted">
              <span class="fw-medium text-body">{{ message.user.name }}</span>
              {{ message.action }}
              <span class="fw-medium text-body text-wrap">{{ message.context }}</span>
              <br />
              <span class="fs-xs">{{ message.timestamp }}</span>
            </span>

            <BButton variant="link" class="flex-shrink-0 text-muted p-0">
              <Icon icon="tabler:xbox-x-filled" class="fs-xxl" />
            </BButton>
          </div>
        </div>
      </simplebar>

      <BDropdownItem
        class="text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light"
      >
        Read All Messages
      </BDropdownItem>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'
import { Icon } from '@iconify/vue'
import user1 from '@/assets/images/users/user-1.jpg'
import user2 from '@/assets/images/users/user-2.jpg'
import user4 from '@/assets/images/users/user-4.jpg'
import user5 from '@/assets/images/users/user-5.jpg'
import user6 from '@/assets/images/users/user-6.jpg'

type MessageItemType = {
  id: string
  user: {
    name: string
    avatar?: string
    icon?: string
    bgClass?: string
  }
  action: string
  context: string
  timestamp: string
  active?: boolean
}

const messages: MessageItemType[] = [
  {
    id: 'message-1',
    user: {
      name: 'Liam Carter',
      avatar: user1,
    },
    action: 'uploaded a new document to',
    context: 'Project Phoenix',
    timestamp: '5 minutes ago',
    active: true,
  },
  {
    id: 'message-2',
    user: {
      name: 'Ava Mitchell',
      avatar: user2,
    },
    action: 'commented on',
    context: 'Marketing Campaign Q3',
    timestamp: '12 minutes ago',
  },
  {
    id: 'message-3',
    user: {
      name: 'Noah Blake',
      icon: 'lucide:shield-check',
      bgClass: 'text-bg-info',
    },
    action: 'updated the status of',
    context: 'Client Onboarding',
    timestamp: '30 minutes ago',
  },
  {
    id: 'message-4',
    user: {
      name: 'Sophia Taylor',
      avatar: user4,
    },
    action: 'sent an invoice for',
    context: 'Service Renewal',
    timestamp: '1 hour ago',
  },
  {
    id: 'message-5',
    user: {
      name: 'Ethan Moore',
      avatar: user5,
    },
    action: 'completed the task',
    context: 'UI Review',
    timestamp: '2 hours ago',
  },
  {
    id: 'message-6',
    user: {
      name: 'Olivia White',
      avatar: user6,
    },
    action: 'assigned you a task in',
    context: 'Sales Pipeline',
    timestamp: 'Yesterday',
  },
]
</script>
