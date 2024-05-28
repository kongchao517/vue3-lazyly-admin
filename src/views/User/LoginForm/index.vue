<!--
 * @ description: 登录form表单
 * @ author: kongchao
 * @ created_at: 2023-03-13 16:38:56
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-03-13 18:44:34
-->
<template>
  <el-form :model="form" label-width="0">
    <el-form-item>
      <el-input v-model="loginForm.username" placeholder="请输入用户名" :prefix-icon="User" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" :prefix-icon="Lock" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="loginForm.verify" placeholder="请输入验证码" class="input-with-select">
        <template #prepend>
          <el-button :icon="TrophyBase" class="icon" />
        </template>
        <template #append> <SIdentify :code-list="[identifyCode]" @on-random="onRandom" /> </template>
      </el-input>
    </el-form-item>
    <el-form-item>
      <div class="login_btn">
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';
import { User, Lock, TrophyBase } from '@element-plus/icons-vue';
import SIdentify from '../SIdentify';

const loginForm = ref({
  username: '',
  password: '',
  verify: '',
});
const form = ref({});
const identifyCode = ref();
const emits = defineEmits(['on-submit']);
// 生成四位随机整数
const onRandom = () => {
  identifyCode.value = Math.floor(Math.random() * 4000 + 1000);
};
const onSubmit = () => {
  console.log('submit!');
  emits('on-submit', loginForm.value);
};
onRandom();
</script>

<style lang="scss" scoped>
.login_btn {
  .el-button {
    width: 400px;
    height: 50px;
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 18px;
    color: #ffffff;
    line-height: 20px;
  }
}
.el-form-item {
  padding: 5px 0;
}
.el-input {
  height: 50px;
  font-size: 14px;
}
:deep(.el-icon) {
  font-size: 24px !important;
}
:deep(.el-input-group__append) {
  background-color: #ffffff;
  font-size: 24px;
  box-shadow: none;
}
:deep(.el-input-group__prepend) {
  background-color: #ffffff;
  border: 0;
  padding: 0 9px;
  box-shadow: none;
  .icon {
    position: relative;
    left: 8px;
    top: -4px;
  }
}
:deep(.el-input__wrapper.is-focus) {
  border-bottom: 2px solid #409eff;
  transition: all 3s;
}
:deep(.el-input__wrapper) {
  box-shadow: none;
  border-bottom: transparent;
}
:deep(.el-input__wrapper:before) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #409eff;
  transition: width 0.3s ease-in-out;
}
:deep(.el-input__wrapper.is-focus:before) {
  width: 100%;
}
</style>
<style lang="scss">
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
  -webkit-text-fill-color: rgb(204, 204, 204) !important;
  font-family: '微软雅黑', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  letter-spacing: normal;
  transition: background-color 5000s ease-in-out 0s !important;
}
</style>
