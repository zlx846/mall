<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
      message: "hhhh"
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // Better-Scroll 的应用
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动距离
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        // console.log(position)
        this.$emit("scroll", position);
      });
    }

    // 监听是否滚到底部
    this.pullUpLoad && this.scroll.on("pullingUp", () => {
      // console.log('已经滚动到底部了')
      this.$emit("pullingUp");
    });
  },
  methods: {
    // 滚动到某个位置
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 完成滚动
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 刷新滚动高度
    refresh() {
      console.log("图片加载完成");
      this.scroll && this.scroll.refresh();
    },
  }
};
</script>

<style>
</style>