<template>
  <div class="topbar-item">
    <BDropdown placement="bottom-end" :variant="null" no-caret toggle-class="topbar-link fw-bold py-0 px-1" offset="22">

      <template #button-content>
        <NuxtImg :src="currentLanguage.flag" :alt="currentLanguage.name" class="w-100 rounded me-2" height="18" />
        <span> {{ (currentLanguage.code).toUpperCase() }} </span>
      </template>

      <BDropdownItem v-for="(language,idx) in languages" :key="idx" @click="() => setCurrentLanguage(language)">
        <NuxtImg :src="language.flag" :alt="language.name" class="me-1 rounded" height="18"/>
        <span class="align-middle">{{ language.nativeName }}</span>
      </BDropdownItem>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
export type LanguageOptionType = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: LanguageOptionType[] = [
  {code: 'en', name: 'English', nativeName: 'English', flag: '/images/flags/us.svg'},
  {code: 'de', name: 'German', nativeName: 'Deutsch', flag: '/images/flags/de.svg'},
  {code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '/images/flags/it.svg'},
  {code: 'es', name: 'Spanish', nativeName: 'Español', flag: '/images/flags/es.svg'},
  {code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '/images/flags/ru.svg'},
  {code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '/images/flags/in.svg'}
];

const currentLanguage = ref<LanguageOptionType>(languages[0]);

const setCurrentLanguage = (language: LanguageOptionType) => {
  currentLanguage.value = language;
}
</script>