import { shallowRef, computed, type Ref, type ShallowRef } from 'vue'

export function useTableActions<T>(items: Ref<T[]>) {
  const selected: ShallowRef<T[]> = shallowRef([])

  const allSelected = computed(() => selected.value.length === items.value.length && items.value.length > 0)
  const isIndeterminate = computed(() => selected.value.length > 0 && selected.value.length < items.value.length)

function toggleSelectAll(e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  selected.value = checked ? [...items.value] : []
}

  function toggleRow(item: T, checked: boolean) {
    if (checked) {
      if (!selected.value.includes(item)) selected.value = [...selected.value, item]
    } else {
      selected.value = selected.value.filter(i => i !== item)
    }
  }


  function onToggleRow(item: T, e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  toggleRow(item, checked)
}

  function deleteSelected() {
    items.value = items.value.filter(i => !selected.value.includes(i))
    selected.value = []
  }

  function deleteItem(item: T) {
    items.value = items.value.filter(i => i !== item)
    selected.value = selected.value.filter(i => i !== item)
  }

  function clearSelection() {
    selected.value = []
  }

  return {
    selected,
    allSelected,
    isIndeterminate,
    toggleSelectAll,
    toggleRow,
    deleteSelected,
    deleteItem,
    clearSelection,
    onToggleRow
  }
}
