<template>
  <div class="login">
    <header>欢迎来到我的商城</header>
    <div class="loginItem">
      <input type="text" placeholder="请输入用户名" v-model="user.id">
    </div>
    <div class="loginItem">
      <input type="password" placeholder="请输入密码" v-model="user.password">
    </div>
    <div class="buttonItem">
      <button @click="loginClick">登录</button>
      <button>注册</button>
    </div>
  </div>
</template>

<script>
import { confirmUser } from 'network/login'
export default {
  data() {
    return {
      user: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    loginClick() {
      confirmUser(this.user.id, this.user.password).then((res) => {
        if (res.data === 'success') {
          this.isLoginSuccess = true
        }else {
          window.alert('登录失败')
        }
      })
    }
  }
}
</script>

<style scoped>
header{
  font-size: 24px;
  font-weight: 700;
  color: var(--color-high-text);
  margin-bottom: 15px;
}
.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 20%;
}
.login .loginItem {
  width: 100%;
  margin: 10px auto;
  font-size: 14px;
}
.login .loginItem input {
  width: 70%;
  height: 29px;
  border: none;
  border-bottom: 2px solid #999;
  outline: none
}
.login button{
  outline: none;
  background: none;
  border: none;
  width: 80px;
  height: 32px;
  color: #fff;
  margin-right: 15px;
  margin-top: 15px;
  background-color: var(--color-tint);
  border-radius: 8px;
}
.login button:hover{
  background-color: #ffc3ce;
}
</style>