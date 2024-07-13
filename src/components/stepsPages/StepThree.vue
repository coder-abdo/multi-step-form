<script setup lang="ts">
import { computed } from 'vue'
import AddsOn from '@/components/AddsOn.vue'
import Button from '@/components/Button.vue'
import { useFormStore } from '@/stores/formStore'
import { addsOne } from '@/utils'

const store = useFormStore()

const pickedAds = computed(() => store.pickAds.length >= 1)

const handlePicksOn = () => {
  if (pickedAds.value) {
    store.handleNextStep()
  }
}
</script>

<template>
  <section
    class="flex flex-col gap-3 bg-white rounded-md md:rounded-none md:relative absolute top-24 left-3.5 z-10 md:w-full w-[90%] p-2"
  >
    <div class="flex flex-col gap-2">
      <h1 class="md:text-3xl text-lg text-blue-950 font-bold">Pick adds-ons</h1>
      <h2 class="text-sm md:text-lg text-gray-400">Add-ons help enhance your gaming experience.</h2>
    </div>
    <div class="flex flex-col md:gap-3 gap-2">
      <AddsOn
        v-for="ads in addsOne"
        :key="ads.title"
        :title="ads.title"
        :subtitle="ads.subtitle"
        :price="store.isYearly ? ads.price * 10 : ads.price"
      />
    </div>
    <div class="flex justify-between items-center">
      <Button
        title="go back"
        :isNext="false"
        v-if="store.step > 1"
        @handle-click="store.handlePreviousStep"
      />
      <Button title="next step" :isNext="true" @handle-click="handlePicksOn" />
    </div>
  </section>
</template>
