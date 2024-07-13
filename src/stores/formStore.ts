import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

// TODO add store

export const useFormStore = defineStore('form', () => {
  const STEPS = 4
  const step = ref(1)
  const isCompleted = ref(false)
  const isYearly = ref(false)

  const plan = reactive<{ title: string; price: number }>({
    title: '',
    price: 0
  })
  const pickAds = ref<Array<{ title: string; price: number }>>([])

  function toggleYearlyPlan() {
    isYearly.value = !isYearly.value
  }
  function handleStepNumber(stepNum: number) {
    step.value = stepNum
  }
  function handleNextStep() {
    if (step.value < STEPS && !isCompleted.value) step.value++
  }
  function handlePreviousStep() {
    if (step.value > 1) step.value--
  }
  function choosePlan(choosenPlan: { title: string; price: number }) {
    plan.title = choosenPlan.title
    plan.price = choosenPlan.price
  }
  function addPicsAdds(addson: { title: string; price: number }) {
    if (!pickAds.value.find((adds) => adds.title === addson.title)) {
      pickAds.value.push(addson)
    }
  }
  function deletePickAdd(addson: { title: string; price: number }) {
    if (pickAds.value.find((adds) => adds.title === addson.title)) {
      pickAds.value = pickAds.value.filter((adds) => adds.title !== addson.title)
    }
  }
  return {
    step,
    isCompleted,
    isYearly,
    plan,
    pickAds,
    addPicsAdds,
    handleNextStep,
    handlePreviousStep,
    handleStepNumber,
    toggleYearlyPlan,
    choosePlan,
    deletePickAdd
  }
})
