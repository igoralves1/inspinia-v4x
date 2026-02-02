<template>
  <div class="topbar-item">
    <BDropdown
      placement="bottom-end"
      :variant="null"
      no-caret
      toggle-class="topbar-link fw-bold py-0 px-1"
      offset="22"
    >
      <template #button-content>
        <img
          :src="currentLanguage.flag"
          :alt="currentLanguage.name"
          class="w-100 rounded me-2"
          height="18"
        />
        <span> {{ currentLanguage.code.toUpperCase() }} </span>
      </template>

      <BDropdownItem
        v-for="(language, idx) in languages"
        :key="idx"
        @click="() => setCurrentLanguage(language)"
      >
        <img :src="language.flag" :alt="language.name" class="me-1 rounded" height="18" />
        <span class="align-middle">{{ language.nativeName }}</span>
      </BDropdownItem>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import usFlag from '@/images/flags/us.svg'
import deFlag from '@/images/flags/de.svg'
import itFlag from '@/images/flags/it.svg'
import esFlag from '@/images/flags/es.svg'
import ruFlag from '@/images/flags/ru.svg'
import inFlag from '@/images/flags/in.svg'
import { BDropdown, BDropdownItem } from 'bootstrap-vue-next'

export type LanguageOptionType = {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: LanguageOptionType[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: usFlag },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: deFlag },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: itFlag },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: esFlag },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: ruFlag },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: inFlag },
]

const currentLanguage = ref<LanguageOptionType>(languages[0])

const setCurrentLanguage = (language: LanguageOptionType) => {
  currentLanguage.value = language
}
</script>
