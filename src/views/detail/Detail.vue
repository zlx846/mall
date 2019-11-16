<template>
  <div class="detail">
    <nav-bar>
        <img src="~assets/img/detail/back.svg" alt="" slot="left" @click="backClick">
      <div slot="middle">
        <tab-control :titles="['商品', '参数', '评论', '推荐']"></tab-control>
      </div>
    </nav-bar>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from "components/content/tabControl/TabControl"
import Swiper from "./childComponents/DetailSwiper"

import {getDetail} from "network/detail"

export default {
  name: 'Detail',
  components: {
    NavBar,
    TabControl,
    Swiper
  },
  data() {
    return {
      banners: [],
    }
  },
  methods: {
    backClick() {
      history.back()
    },
    getDetail() {
      getDetail(this.$route.query.id).then(res => {
        this.banners = res.data.data.banners
      })
    }
    
  },
  created() {
    this.getDetail()
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