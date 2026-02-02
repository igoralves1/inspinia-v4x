<template>
    <label v-if="label" :for="id" class="form-label text-muted">{{ label }}</label>
   
        <select :id="id" :value="modelValue" @change="updateValue" v-bind="$attrs">
            <slot />
            <template v-if="options">
                <option v-for="(option, idx) in options" :key="idx" :value="option.value">
                    {{ option.text }}
                </option>
            </template>
        </select>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

type ChoicesSelectPropsType = {
  id: string
  label?: string
  modelValue?: string
  options?: { value: string | number; text: string }[]
  choiceOptions?: object
}

const props = defineProps<ChoicesSelectPropsType>()
const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLSelectElement).value)
}

onMounted(async () => {
  // Dynamic import to prevent SSR issues
  const Choices = (await import('choices.js')).default
  const select = document.getElementById(props.id)
  if (select) {
    new Choices(select, { ...props.choiceOptions })
  }
})
</script>
