<template>
  <div id="home">
    <nav-bar>
      <div slot="middle">首页</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <feature></feature>
      <tab-control :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoodsItem"></goods-list>
    </scroll>
  </div>
</template>

<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import Recommends from "./childComponents/HomeRecommendView";
import Feature from "./childComponents/HomeFeature";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { getHomeMultiData, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    Feature,
    TabControl,
    GoodsList,
    Scroll
  },
  created() {
    // 请求多个数据
    this.getHomeMultiData();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    // 请求多个数据
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    }
  },
  computed: {
    showGoodsItem() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
#home .nav-bar {
  background-color: var(--color-tint);
  font-size: 18px;
  color: #fff;
  z-index: 999;
}
#home .tab-control {
  background: #fff;
  position: sticky;
  top: 44px;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  width: 100%;
}
/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
} */
</style>