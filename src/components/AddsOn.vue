<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
import type { AddOnsType } from '@/types'
import { useFormStore } from '@/stores/formStore'
const props = defineProps<AddOnsType>()
const store = useFormStore()
const isChecked = ref(false)

watch(isChecked, (newVal) => {
  if (newVal) {
    store.addPicsAdds({
      title: props.title,
      price: props.price
    })
  } else if (!newVal) {
    store.deletePickAdd({
      title: props.title,
      price: props.price
    })
  }
})
</script>
<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-2 items-center">
      <input type="checkbox" v-model="isChecked" class="md:w-6 md:h-6" />
      <div class="flex flex-col gap-2">
        <h2 class="text-sm md:text-xl text-blue-950 font-semibold">{{ title }}</h2>
        <p class="text-xs md:text-sm text-gray-400">{{ subtitle }}</p>
      </div>
    </div>
    <div class="text-sm md:text-lg text-violet-400 font-semibold">
      ${{ price }} /{{ store.isYearly ? 'yr' : 'mo' }}
    </div>
  </div>
</template>
