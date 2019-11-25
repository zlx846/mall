<template>
  <div class="loginBar">
    <header>
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2857237103,4249004952&fm=26&gp=0.jpg" class="headImage" />
      <div @click="loginClick">登录/注册</div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    loginClick() {
      console.log("登录")
      this.$router.replace("/login")
    }
  }
};
</script>

<style scoped>
.loginBar header {
  display: flex;
  height: 80px;
  background-color: red;
  line-height: 80px;
  padding-left: 15px;
}
.loginBar .headImage {
  width: 49px;
  height: 49px;
  display: inline-block;
  border-radius: 50%;
  margin: auto 0;
  margin-right: 10px;
}
</style>