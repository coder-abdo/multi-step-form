<script setup lang="ts">
import Button from '@/components/Button.vue'
import { useFormStore } from '@/stores/formStore'
import { computed } from 'vue'

const store = useFormStore()
const totalPicksAdds = computed(() => store.pickAds.reduce((acc, curr) => acc + curr.price, 0))
const pickAds = computed(() => store.pickAds)
function handleFinishedProcess() {
  store.isCompleted = true
}
</script>

<template>
  <section
    class="flex flex-col md:gap-6 gap-2 bg-white rounded-md md:rounded-none md:relative absolute top-24 left-3.5 md:left-auto z-10 md:w-full w-[90%] p-2"
  >
    <div class="flex flex-col gap-2">
      <h1 class="text-lg md:text-3xl text-blue-950 font-bold">Finishing Up</h1>
      <h2 class="text-sm md:text-lg text-gray-400">
        Double-Check everything looks OK before confirming.
      </h2>
    </div>
    <div class="flex flex-col md:gap-4 gap-2 bg-sky-200/15 md:p-3 p-1">
      <div
        class="flex justify-between items-center border-b pr-2 md:pr-0 pb-1 md:pb-3 border-gray-200"
      >
        <div class="flex flex-col gap-2">
          <h3 class="text-blue-950 text-sm md:text-xl font-bold">
            {{ store.plan.title }} ({{ store.isYearly ? 'Yearly' : 'Monthly' }})
          </h3>
          <button
            @click="store.handleStepNumber(2)"
            class="bg-transparent border-none outline-none underline text-gray-400 text-left pl-0"
          >
            change
          </button>
        </div>
        <h4 class="text-blue-950 font-semibold text-sm md:text-lg">
          {{ store.plan.price }}/{{ store.isYearly ? 'yr' : 'mo' }}
        </h4>
      </div>

      <div class="flex flex-col gap-3 p-2">
        <div v-for="adds in pickAds" :key="adds.title" class="flex justify-between items-center">
          <h5 class="text-xs md:text-smm text-gray-400 font-semibold capitalize">
            {{ adds.title }}
          </h5>
          <h6 class="text-sm md:text-lg text-blue-950 font-bold">
            +{{ adds.price }}/{{ store.isYearly ? 'yr' : 'mo' }}
          </h6>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center md:px-4 px-2">
      <h5 class="text-xs md:text-sm text-gray-400 font-semibold capitalize">
        total(per {{ store.isYearly ? 'year' : 'month' }})
      </h5>
      <h6 class="text-sm md:text-lg text-blue-950 font-bold">
        +{{ store.plan.price + totalPicksAdds }}/{{ store.isYearly ? 'yr' : 'mo' }}
      </h6>
    </div>
    <div class="flex justify-between items-center mt-2 md:mt-0">
      <Button
        title="go back"
        :isNext="false"
        v-if="store.step > 1"
        @handle-click="store.handlePreviousStep"
      />
      <Button title="confirm" :isNext="true" @handle-click="handleFinishedProcess" />
    </div>
  </section>
</template>
