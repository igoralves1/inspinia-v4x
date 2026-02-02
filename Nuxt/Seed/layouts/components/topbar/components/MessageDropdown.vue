<template>
  <div class="topbar-item">
    <BDropdown
        placement="bottom-end" :variant="null" no-caret toggle-class="topbar-link py-0 px-1"
        menu-class="dropdown-menu-lg p-0 my-0" offset="22">

      <template #button-content>
        <client-only>
          <Icon name="lucide:mails" class="fs-xxl"/>
        </client-only>
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

      <simplebar style="max-height: 300px;" data-simplebar>
        <div
            v-for="message in messages"
            :id="message.id"
            :key="message.id"
            :class="['dropdown-item notification-item py-2 text-wrap', { active: message.active }]">

          <div class="d-flex gap-3">

            <template v-if="message.user.icon">
              <span class="avatar-md flex-shrink-0">
                <span :class="`avatar-title rounded-circle fs-22 ${message.user.bgClass}`">
                 <client-only>
                     <Icon :name="message.user.icon" class="fs-22 fill-white"/>
                 </client-only>
                </span>
              </span>
            </template>

            <template v-if="message.user.avatar">
              <span class="flex-shrink-0">
                <NuxtImg
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
              <span class="fw-medium text-body">{{ message.context }}</span>
              <br>
              <span class="fs-xs">{{ message.timestamp }}</span>
            </span>

            <client-only>
              <BButton variant="link" class="flex-shrink-0 text-muted p-0">
                <Icon name="tabler:xbox-x-filled" class="fs-xxl"/>
              </BButton>
            </client-only>
          </div>
        </div>
      </simplebar>

      <BDropdownItem
          class="text-center text-reset text-decoration-underline link-offset-2 fw-bold notify-item border-top border-light">
        Read All Messages
      </BDropdownItem>

    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue';

type MessageItemType = {
  id: string;
  user: {
    name: string;
    avatar?: string;
    icon?: string;
    bgClass?: string;
  };
  action: string;
  context: string;
  timestamp: string;
  active?: boolean;
};

const messages: MessageItemType[] = [
  {
    id: 'message-1',
    user: {
      name: 'Liam Carter',
      avatar: '/images/users/user-1.jpg'
    },
    action: 'uploaded a new document to',
    context: 'Project Phoenix',
    timestamp: '5 minutes ago',
    active: true
  },
  {
    id: 'message-2',
    user: {
      name: 'Ava Mitchell',
      avatar: '/images/users/user-2.jpg'
    },
    action: 'commented on',
    context: 'Marketing Campaign Q3',
    timestamp: '12 minutes ago'
  },
  {
    id: 'message-3',
    user: {
      name: 'Noah Blake',
      icon: 'lucide:shield-check',
      bgClass: 'text-bg-info'
    },
    action: 'updated the status of',
    context: 'Client Onboarding',
    timestamp: '30 minutes ago'
  },
  {
    id: 'message-4',
    user: {
      name: 'Sophia Taylor',
      avatar: '/images/users/user-4.jpg'
    },
    action: 'sent an invoice for',
    context: 'Service Renewal',
    timestamp: '1 hour ago'
  },
  {
    id: 'message-5',
    user: {
      name: 'Ethan Moore',
      avatar: '/images/users/user-5.jpg'
    },
    action: 'completed the task',
    context: 'UI Review',
    timestamp: '2 hours ago'
  },
  {
    id: 'message-6',
    user: {
      name: 'Olivia White',
      avatar: '/images/users/user-6.jpg'
    },
    action: 'assigned you a task in',
    context: 'Sales Pipeline',
    timestamp: 'Yesterday'
  }
];
</script>