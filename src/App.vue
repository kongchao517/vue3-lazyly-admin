<!--
 * @Descripttion:
 * @Author: kongchao
 * @Date: 2023-02-21 14:33:54
 * @LastEditors: kongchao
 * @LastEditTime: 2023-02-27 11:51:38
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
* {
  padding: 0;
  margin: 0;
}
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
