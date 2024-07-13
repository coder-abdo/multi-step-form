<script lang="ts" setup>
import IconThankYou from '@/assets/images/icon-thank-you.svg'
</script>

<template>
  <section
    class="bg-white flex flex-col justify-center items-center md:h-full w-[90%] md:w-auto md:gap-6 md:relative absolute top-24 md:top-auto z-10 shadow-sm md:shadow-none left-3 md:left-auto rounded-md md:rounded-none p-6 md:p-2 md:z-0"
  >
    <img :src="IconThankYou" alt="thank you image" class="w-12 h-12 md:w-24 md:h-24" />
    <h1 class="text-lg mt-3 md:mt-0 md:text-3xl text-blue-950 capitalize font-bold">Thank you!</h1>
    <p class="text-gray-400 text-sm md:text-2xl text-center">
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
      need support, please feel free to email us at support@loremgaming.com.
    </p>
  </section>
</template>
