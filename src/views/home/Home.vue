<template>
  <div id="home">
    <nav-bar>
      <div slot="middle">首页</div>
    </nav-bar>
    <tab-control 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick" 
        ref="tabControl1"
        class="tab-control"
        v-show="isShowTabControl"></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="pullingUp">
      <home-swiper :banners="banners" @imgLoad="swiperLoad"></home-swiper>
      <recommends :recommends="recommends"></recommends>
      <feature></feature>
      <tab-control 
        :titles="['流行', '新款', '精选']" 
        @tabClick="tabClick" 
        ref="tabControl2"></tab-control>
      <goods-list :goods="showGoodsItem"></goods-list>
    </scroll>
    <!-- 需要监听组件的原生事件时，必须对需要监听的事件加修饰符 -->
    <back-top @click.native="backClick" v-show="isShow"></back-top>
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
import BackTop from "components/content/back-top/BackTop";

import { getHomeMultiData, getHomeGoods } from "network/home";
import { debounce } from "common/utils";

export default {
  name: "Home",
  data() {
    return {
      banners: [], // 轮播图数据
      recommends: [],
      goods: {
        // 商品数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false,
      tabControlOffsetTop: 0,
      isShowTabControl: false 
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 请求多个数据
    this.getHomeMultiData();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
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
      this.$refs.tabControl1.isActive = index
      this.$refs.tabControl2.isActive = index
    },
    // 返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 控制显示返回顶部按钮
    contentScroll(position) {
      // 判断BackTop是否显示
      this.isShow = position.y < -560;
      // 决定tabcontrol是否吸顶
      this.isShowTabControl = (-position.y) > this.tabControlOffsetTop
    },
    // 上拉加载更多
    pullingUp() {
      this.getHomeGoods(this.currentType);
      setTimeout(() => {
        this.$refs.scroll.finishPullUp();
      }, 50);
    },
    // 监听轮播图加载完成并计算tabControl的offsetTop值
    swiperLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
      console.log(this.tabControlOffsetTop)
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
  /* z-index: 999; */
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
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

</style>