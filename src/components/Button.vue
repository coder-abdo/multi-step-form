<template>
  <button :class="[prevBtnStyle, nextBtnStyle]" @click.prevent="$emit('handle-click')">
    {{ title }}
  </button>
</template>
<script lang="ts" setup>
import { computed, defineProps } from 'vue'
const props = defineProps<{
  title: string
  isNext: boolean
}>()
const prevBtnStyle =
  'border-none rounded cursor-pointer md:py-3 py-1 md:px-8 px-3 text-sm transition-colors'
const nextBtnStyle = computed(() =>
  props.isNext
    ? 'ml-auto bg-blue-950 text-white hover:bg-violet-400'
    : 'bg-transparent text-gray-400 hover:text-blue-950'
)
</script>
