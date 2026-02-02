import { onMounted, ref } from 'vue'

export const useSystemTheme = () => {
  const systemTheme = ref<'light' | 'dark'>('light')

  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemTheme.value = mediaQuery.matches ? 'dark' : 'light'

    mediaQuery.addEventListener('change', (e) => {
      systemTheme.value = e.matches ? 'dark' : 'light'
    })
  })

  return systemTheme
}
