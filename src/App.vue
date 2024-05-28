<!--
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 21:14:23
-->
<template>
  <router-view v-slot="{ Component }">
    <transition name="scale-slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup></script>

<style lang="scss" scoped>
// .scale-slide-enter-active,
// .scale-slide-leave-active {
//   position: absolute;
//   transition: all 0.85s ease;
// }

// .scale-slide-enter-from {
//   left: -100%;
// }

// .scale-slide-enter-to {
//   left: 0%;
// }

// .scale-slide-leave-from {
//   transform: scale(1);
// }

// .scale-slide-leave-to {
//   transform: scale(0.9);
// }
</style>
