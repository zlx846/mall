<template>
  <div id="home">
    <nav-bar>
      <div slot="middle">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommends :recommends="recommends"></recommends>
    <feature></feature>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>  
  </div>
</template>

<script>
import HomeSwiper from './childComponents/HomeSwiper'
import Recommends from './childComponents/HomeRecommendView'
import Feature from './childComponents/HomeFeature'

import NavBar from "components/common/navbar/NavBar"
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeMultiData} from 'network/home'


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      }
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    Feature,
    TabControl
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
  #home {
    padding-top: 44px;
    position: relative;
  }
  #home .nav-bar{
    background-color: var(--color-tint);
    font-size: 18px;
    color: #fff;
    z-index: 999;
  }
  #home .tab-control{
    position: sticky;
    top: 44px;
    background: #fff;
  }
</style>