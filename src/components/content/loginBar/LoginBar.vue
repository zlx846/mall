<template>
  <div class="loginBar">
    <header>
      <img :src="$store.state.profile.headImage" class="headImage" />
      <div @click="loginClick">{{$store.state.profile.userId}}</div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    loginClick() {
      if (this.$store.state.profile.isLogin === false) {
        this.$router.replace("/login")
      }
      // this.$router.replace("/login")
    }
  }
};
</script>

<style scoped>
.loginBar header {
  display: flex;
  height: 80px;
  background-color: var(--color-tint);
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