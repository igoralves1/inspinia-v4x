<template>
    <Multiselect v-model="internalValue" :options="options" :multiple="multiple"
        :close-on-select="closeOnSelect" :clear-on-select="clearOnSelect" :preserve-search="preserveSearch"
        :placeholder="placeholder" track-by="value" label="label" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Multiselect from 'vue-multiselect'

interface Option {
    value: string | number
    label: string
}

const props = defineProps<{
    modelValue?: string | number | Array<string | number>
    options: Option[]
    multiple?: boolean
    closeOnSelect?: boolean
    clearOnSelect?: boolean
    preserveSearch?: boolean
    placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)

watch(internalValue, (val) => {
    emit('update:modelValue', val)
})
</script>
