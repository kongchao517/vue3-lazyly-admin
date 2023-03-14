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
    <div class="logo_box_bg">
      <div class="logo_margin">
        <div class="logo_margin_icon">
          <el-icon><Reading /></el-icon>
        </div>
        <div class="logo_margin_content">业务管理信息系统平台</div>
        <LoginForm @on-submit="onSubmit" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Reading } from '@element-plus/icons-vue';
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
