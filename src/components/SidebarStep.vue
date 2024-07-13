<template>
  <div class="flex items-center gap-3">
    <div
      class="flex justify-center items-center rounded-full w-8 h-8 border border-blue-300 text-white text-lg"
      :class="activeClass"
    >
      {{ stepNumber }}
    </div>
    <div class="hidden md:flex md:flex-col md:gap-1">
      <h4 class="text-gray-400 uppercase text-sm">step {{ stepNumber }}</h4>
      <h3 class="text-white uppercase text-lg font-bold">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useFormStore } from '@/stores/formStore'

const props = defineProps<{
  stepNumber: string
  title: string
}>()
const store = useFormStore()
const activeClass = computed(() =>
  +props.stepNumber === store.step ? 'bg-blue-300 text-blue-800' : ''
)
</script>
