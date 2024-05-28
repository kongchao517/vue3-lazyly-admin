<!--
 * @ description:登录页面
 * @ author: kongchao
 * @ created_at: 2023-02-27 10:36:58
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 16:59:12
-->
<template>
  <div class="login_box">
    <div class="login_name">Lazyly-Admin</div>
    <div class="logo_box_bg">
      <div class="logo_margin">
        <div class="logo_margin_icon"></div>
        <LoginForm @on-submit="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import LoginForm from './LoginForm';

const router = useRouter();
const onSubmit = (val) => {
  console.log('val', val);
  router.push('/');
};
</script>
<style scoped lang="scss">
.login_box {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(@assets/image/menu_bg.svg);
  background-size: cover;

  .login_name {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    font-family: Hannotate SC;
    animation: glowing 30s linear infinite;
    background: linear-gradient(to right, #ff6b6b, #ffa500, #ffff00, #00ff00, #00ffff, #ff00ff);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @keyframes glowing {
      0% {
        background-position: -500%;
      }
      100% {
        background-position: 500%;
      }
    }
  }
  .logo_box_bg {
    position: absolute;
    top: 35%;
    right: 0;
    left: 0;
    bottom: 0;
    width: 500px;
    height: 400px;
    margin: 0 auto;
    background: url('@assets/image/logo_form_bg.svg') no-repeat;
    background-size: 100%;

    .logo_margin {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 50px 30px;
      .logo_margin_icon {
        color: #ffffff;
        font-size: 46px;
      }
      .logo_margin_content {
        font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 32px;
        color: #ffffff;
        line-height: 36px;
        padding: 30px 20px;
      }
    }
  }
}
</style>
