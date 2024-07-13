<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'
import Sidebar from '@/components/Sidebar.vue'
import StepOne from '@/components/stepsPages/StepOne.vue'
import StepTwo from '@/components/stepsPages/StepTwo.vue'
import StepThree from '@/components/stepsPages/StepThree.vue'
import StepFour from '@/components/stepsPages/StepFour.vue'
import LastStep from '@/components/stepsPages/LastStep.vue'
const store = useFormStore()
</script>

<template>
  <main
    class="rounded-md md:p-4 bg-transparent md:bg-white sm:flex max-w-5xl w-full mx-auto relative overflow-y-scroll md:overflow-y-auto h-screen min-w-80"
  >
    <Sidebar />
    <StepOne v-if="store.step === 1" />
    <StepTwo v-else-if="store.step === 2" />
    <StepThree v-else-if="store.step === 3" />
    <StepFour v-else-if="store.step === 4 && !store.isCompleted" />
    <LastStep v-else />
  </main>
</template>
