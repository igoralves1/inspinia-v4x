
<template>
  <BCard no-body>
    <BCardHeader>
      <h4 class="card-title">Chat</h4>
    </BCardHeader>

    <simplebar class="card-body py-0 overflow-auto" style="height: 380px">
      <div
        v-for="(message, idx) in chatMessages"
        :key="idx"
        class="d-flex align-items-start gap-2 my-3 chat-item"
        :class="{ 'text-end justify-content-end': message.fromUser }"
      >
        <img
          v-if="!message.fromUser"
          :src="message.avatar"
          class="avatar-md rounded-circle"
          alt="User"
        />

        <div>
          <div
            class="chat-message py-2 px-3 rounded"
            :class="message.fromUser ? 'bg-info-subtle' : 'bg-warning-subtle'"
          >
            {{ message.message }}
          </div>
          <div class="text-muted fs-xs mt-1 d-inline-flex align-items-center gap-1">
            <Icon icon="tabler:clock" /> {{ message.time }}
          </div>
        </div>

        <img
          v-if="message.fromUser"
          :src="message.avatar"
          class="avatar-md rounded-circle"
          alt="User"
        />
      </div>
    </simplebar>

    <BCardFooter class="bg-body-secondary border-top border-dashed border-bottom-0">
      <form class="d-flex gap-2" @submit="handleSend">
        <div class="app-search flex-grow-1">
          <input
            type="text"
            v-model="input"
            class="form-control bg-light-subtle border-light"
            placeholder="Enter message..."
          />
          <Icon icon="lucide:message-square" class="app-search-icon text-muted" />
        </div>
        <button type="submit" class="btn btn-primary btn-icon">
          <Icon icon="tabler:send-2" class="fs-xl" />
        </button>
      </form>
    </BCardFooter>
  </BCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import user2 from '@/assets/images/users/user-2.jpg'
import user5 from '@/assets/images/users/user-5.jpg'

import { messages as initialMessages } from './data'
import { BCard, BCardFooter, BCardHeader } from 'bootstrap-vue-next'
import simplebar from 'simplebar-vue'
import { Icon } from '@iconify/vue'

const chatMessages = ref([...initialMessages])
const input = ref('')

const handleSend = (e: Event) => {
  e.preventDefault()
  const text = input.value.trim()
  if (!text) return

  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes()
  const ampm = h >= 12 ? 'pm' : 'am'
  const hour = h % 12 || 12
  const min = m < 10 ? `0${m}` : m
  const timeStr = `${hour}:${min} ${ampm}`

  chatMessages.value.push({
    message: text,
    time: timeStr,
    fromUser: true,
    avatar: user2,
  })

  input.value = ''

  setTimeout(() => {
    chatMessages.value.push({
      message: text,
      time: timeStr,
      fromUser: false,
      avatar: user5,
    })
  }, 1000)
}
</script>
