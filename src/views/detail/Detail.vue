<template>
  <div class="detail">
    <nav-bar>
        <img src="~assets/img/detail/back.svg" alt="" slot="left">
      <div slot="middle">
        <tab-control :titles="['商品', '参数', '评论', '推荐']"></tab-control>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from "components/content/tabControl/TabControl"

export default {
  name: 'Detail',
  components: {
    NavBar,
    TabControl
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐']
    }
  }
}
</script>

<style scoped>
.detail .nav-bar .left {
  height: 44px;
}
.detail .nav-bar img {
  width: 70%;
  text-align: center;
}
.detail .tab-control-item {
  flex: 1;
  width: 15px;
}
</style>