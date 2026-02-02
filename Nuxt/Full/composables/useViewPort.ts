import { ref, onMounted, onUnmounted } from 'vue'

export function useViewport() {
const width = ref(0)
const height = ref(0)

const updateViewport = () => {
width.value = window.innerWidth
height.value = window.innerHeight
}

onMounted(() => {
updateViewport()
window.addEventListener('resize', updateViewport)
})

onUnmounted(() => {
window.removeEventListener('resize', updateViewport)
})

return { width, height }
}
