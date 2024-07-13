<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside class="rounded-md sidebar min-h-40 sm:h-full md:max-w-60 w-full px-4 pt-8 relative">
    <div
      class="flex justify-center items-center md:flex-col md:justify-start md:items-start h-full md:gap-6 gap-4 relative"
    >
      <SidebarStep title="your info" stepNumber="1" />
      <SidebarStep title="select plan" stepNumber="2" />
      <SidebarStep title="add-ons" stepNumber="3" />
      <SidebarStep title="summary" stepNumber="4" />
    </div>
  </aside>
</template>
<script setup lang="ts">
import SidebarStep from './SidebarStep.vue'
</script>

<style lang="css" scoped>
.sidebar {
  background-image: url('../assets/images/bg-sidebar-desktop.svg');
  background-size: cover;
}
@media (max-width: 768px) {
  .sidebar {
    background-image: url('../assets/images/bg-sidebar-mobile.svg');
    background-size: cover;
  }
}
</style>
