<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
#home .goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 1%;
  padding-bottom: 50px;
}

</style>