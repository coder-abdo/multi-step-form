<script setup lang="ts">
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, numeric } from '@vuelidate/validators'
import { useFormStore } from '@/stores/formStore'
import Button from '@/components/Button.vue'

const store = useFormStore()
const form = reactive({
  name: '',
  email: '',
  phone: ''
})

const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  phone: { required, numeric }
}

const v$ = useVuelidate(rules, form)
const handleSubmit = async () => {
  const isValidate = await v$.value.$validate()
  if (isValidate) {
    store.handleNextStep()
  } else {
    return
  }
}
</script>
<template>
  <section
    class="flex flex-col gap-2 p-4 w-[90%] rounded-md md:rounded-none shadow-md md:shadow-none md:w-full md:h-full md:relative absolute top-24 left-3 z-10 bg-white"
  >
    <h1 class="md:text-3xl text-blue-950 capitalize font-bold md:mb-3">personal info</h1>
    <h2 class="md:text-xl text-sm text-gray-400 md:mb-6 mb-2">
      Please provide your name, email address, and phone number.
    </h2>
    <form class="flex flex-col md:gap-4 gap-2">
      <div class="flex flex-col gap-2 md:mb-6">
        <label for="name" class="text-blue-950">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="border border-gray-300 rounded py-3 px-8 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          :class="{ 'border-red-500': v$.name.$error }"
          placeholder="e.g.Stephen King"
          v-model="form.name"
        />
        <p v-if="v$.name.$error" class="text-red-500 text-sm">{{ v$.name.$errors[0].$message }}</p>
      </div>
      <div class="flex flex-col gap-2 md:mb-6">
        <label for="email" class="text-blue-950">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="border border-gray-300 rounded py-3 px-8 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          :class="{ 'border-red-500': v$.email.$error }"
          placeholder="e.g.stephenking@lorem.com"
          v-model="form.email"
        />
        <p v-if="v$.email.$error" class="text-red-500 text-sm">
          {{ v$.email.$errors[0].$message }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <label for="phone" class="text-blue-950">Phone Number</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          class="border border-gray-300 rounded py-3 px-8 placeholder:text-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
          :class="{ 'border-red-500': v$.phone.$error }"
          placeholder="e.g.+12345678890"
          v-model="form.phone"
        />
        <p v-if="v$.phone.$error" class="text-red-500 text-sm">
          {{ v$.phone.$errors[0].$message }}
        </p>
      </div>
      <div class="flex justify-between items-center">
        <Button
          v-if="store.step > 1"
          title="Go Back"
          :isNext="false"
          @handle-click="store.handlePreviousStep"
        />
        <Button title="Next Step" :isNext="true" @handle-click="handleSubmit" />
      </div>
    </form>
  </section>
</template>
