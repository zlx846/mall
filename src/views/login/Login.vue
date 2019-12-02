<template>
  <div class="login">
    <header>欢迎来到我的商城</header>
    <div class="loginItem">
      <input type="text" placeholder="请输入用户名" v-model="user.id" @focus="inputFocus">
    </div>
    <div class="loginItem">
      <input type="password" placeholder="请输入密码" v-model="user.password" @focus="inputFocus">
    </div>
    <div class="validator" v-show="isShowMessage">用户名或密码错误</div>
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
      },
      isLoginSuccess: false,
      isShowMessage: false
    }
  },
  methods: {
    loginClick() {
      confirmUser(this.user.id, this.user.password).then((res) => {
        if (res.data === 'fail') {
          this.isShowMessage = true
        }else {
          this.isLoginSuccess = true
          this.$store.state.profile.headImage = res.data.headImage
          this.$store.state.profile.isLogin = true
          this.$store.state.profile.userId = this.user.id
          this.$router.replace("/profile")
        }
      })
    },
    inputFocus() {
      this.isShowMessage = false
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
  height: 50%;
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
.login .buttonItem {
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
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
.login .validator {
  color: var(--color-high-text);
}
</style>