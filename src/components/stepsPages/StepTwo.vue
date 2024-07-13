<script lang="ts" setup>
import { computed } from 'vue'
import { useFormStore } from '@/stores/formStore'
import Button from '@/components/Button.vue'
import StepTwoPlan from '@/components/StepTwoPlan.vue'
import { plans } from '@/utils'

const store = useFormStore()
const isPlanChoosed = computed(() => store.plan)

const handleChoosePlan = () => {
  if (isPlanChoosed.value) {
    console.log(isPlanChoosed)
    store.handleNextStep()
  }
}
</script>

<template>
  <section
    class="px-8 py-4 rounded-md md:rounded-none shadow-sm md:shadow-none flex flex-col gap-4 bg-white md:relative absolute top-24 left-3 z-10 md:w-full w-[90%]"
  >
    <div>
      <h1 class="md:text-3xl text-lg text-blue-950 font-bold">Select your plan</h1>
      <h2 class="text-sm md:text-lg text-gray-400">
        You have the option of monthly or yearly billings
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-2">
      <StepTwoPlan
        v-for="plan in plans"
        :key="plan.title"
        :title="plan.title"
        :icon="plan.icon"
        :pricePerMonth="plan.pricePerMonth"
      />
    </div>
    <div class="flex justify-center gap-4">
      <span class="text-lg font-semibold text-blue-950" :class="{ 'text-gray-400': store.isYearly }"
        >monthly</span
      >
      <div
        @click="store.toggleYearlyPlan"
        class="md:w-16 md:h-10 w-10 h-6 flex items-center hover:cursor-pointer bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
        :class="{ 'bg-blue-950': store.isYearly }"
      >
        <div
          class="bg-white md:w-8 md:h-8 h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out"
          :class="{ 'md:translate-x-6 translate-x-4': store.isYearly }"
        ></div>
      </div>
      <span class="text-lg font-semibold text-gray-400" :class="{ 'text-blue-950': store.isYearly }"
        >yearly</span
      >
    </div>
    <div class="flex justify-between items-center">
      <Button
        title="go back"
        :isNext="false"
        @handle-click="store.handlePreviousStep"
        v-if="store.step > 1"
      />
      <Button title="next step" :isNext="true" @handle-click="handleChoosePlan" />
    </div>
  </section>
</template>
