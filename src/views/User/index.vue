<!--
 * @Descripttion:登录页面
 * @Author: lazyly
 * @Date: 2022-12-19 17:20:54
 * @LastEditors: lazyly
 * @LastEditTime: 2023-02-13 20:39:11
-->
<template>
  <div class="login_box">
    <div class="logo_box_bg">
      <div class="logo_margin">
        <el-button type="primary" size="default" @click="router.push({ path: '/home' })"> 登录 </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style scoped lang="scss">
.login_box {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('@assets/image/logo_bg.png') no-repeat;
  background-size: cover;

  .logo_box_bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 620px;
    margin: auto;
    background: url('@assets/image/logo_form_bg.svg') no-repeat;
    background-size: 100%;

    .logo_margin {
      margin: 50px 50px 100px;
    }
  }
}
</style>
