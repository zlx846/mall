<template>
  <div id="home">
    <nav-bar>
      <div slot="middle">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends :recommends="recommends"></recommends>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childComponents/HomeSwiper'
import Recommends from './childComponents/HomeRecommendView'

import {getHomeMultiData} from 'network/home'


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends
  },
  created() {
    getHomeMultiData().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
};
</script>

<style>
  #home .nav-bar{
    background-color: var(--color-tint);
    font-size: 18px;
    color: #fff;
  }
  #home #carousel{
    margin-top: 44px;
  }
</style>