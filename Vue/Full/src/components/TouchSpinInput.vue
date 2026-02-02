<template>
  <div :class="inputGroupClasses">
    <BButton
      :variant="props.variant"
      :class="['floating', props.buttonClassName]"
      :disabled="props.disabled"
      @click="decrement"
    >
      <Icon icon="tabler-minus" />
    </BButton>

    <BFormInput
      type="number"
      :size="props.size"
      :min="props.min"
      :max="props.max"
      v-model="localValue"
      :disabled="props.disabled"
      :readonly="props.readonly"
      :class="['border-0', props.inputClassName]"
    />

    <BButton
      :variant="props.variant"
      :class="['floating', props.buttonClassName]"
      :disabled="props.disabled"
      @click="increment"
    >
      <Icon icon="tabler-plus" />
    </BButton>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { BButton, BFormInput, type BaseButtonVariant } from 'bootstrap-vue-next'
import { Icon } from '@iconify/vue'

type Props = {
  min?: number
  max?: number
  modelValue?: number
  className?: string
  inputClassName?: string
  buttonClassName?: string
  variant?: keyof BaseButtonVariant
  size?: 'sm' | 'lg'
  disabled?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  modelValue: 0,
  variant: 'light',
  size: undefined,
  disabled: false,
  readonly: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const localValue = ref<number>(props.modelValue ?? 0)

watch(
  () => props.modelValue,
  (val: number) => {
    if (val !== undefined && val !== localValue.value) {
      localValue.value = val
    }
  }
)

watch(localValue, (val: number) => {
  emit('update:modelValue', val)
})

const increment = () => {
  if (!props.readonly && localValue.value < props.max) {
    localValue.value++
  }
}

const decrement = () => {
  if (!props.readonly && localValue.value > props.min) {
    localValue.value--
  }
}

const inputGroupClasses = computed(() => [
  'input-group',
  'touchspin',
  props.className,
  props.size === 'sm' && 'input-group-sm',
  props.size === 'lg' && 'input-group-lg'
])
</script>
