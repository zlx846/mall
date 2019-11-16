<template>
  <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
          <img :src="item.image" alt="" @load="imgLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
         this.$emit('imgLoad')
         this.isLoad = true
      }
    }
  }
}
</script>

<style>

</style>