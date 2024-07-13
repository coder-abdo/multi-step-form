<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { Plan } from '../types'
import { useFormStore } from '../stores/formStore'

const props = defineProps<Plan>()
const store = useFormStore()
const activeClass = computed(() =>
  props.title === store.plan?.title ? 'border-violet-700' : 'border-gray-400'
)
const handleChoosingPlan = () => {
  store.choosePlan({
    title: props.title,
    price: store.isYearly ? props.pricePerMonth * 10 : props.pricePerMonth
  })
}
</script>

<template>
  <div
    class="border flex flex-col justify-between p-2 rounded-md bg-white md:min-h-40 hover:cursor-pointer"
    @click="handleChoosingPlan"
    :class="activeClass"
  >
    <img :src="icon" alt="plan icon" class="md:w-12 md:h-12 h-6 w-6 mb-2" />
    <div class="flex flex-col gap-2">
      <h4 class="text-blue-950 text-sm font-semibold">{{ title }}</h4>
      <h5 class="text-gray-400 text-xs">
        ${{ store.isYearly ? pricePerMonth * 10 : pricePerMonth }} /{{
          store.isYearly ? 'yr' : 'mo'
        }}
      </h5>
      <h5 v-if="store.isYearly" class="text-blue-950 text-xs">2 months free</h5>
    </div>
  </div>
</template>
