<template>
  <div class="goods-item" @click="itemClick(goodsItem.id)">
      <img :src="goodsItem.image" alt="" @load="imgLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <p class="price">{{goodsItem.price + "￥"}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
      this.$router.replace('/detail')
    }
  }
}
</script>

<style>
#home .goods-item{
  width: 40%;
  font-size: 12px;
  flex: 2;
  margin: 5px 5px;
}
#home .goods-item a{
  text-decoration: none;
  
}
#home .goods-item img{
  width: 100%;
  border: 1px solid var(--color-tint);
  border-radius: 5px;
}
#home .goods-info p{
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  color: var(--color-text);
}
#home .goods-info .price{
  color: var(--color-high-text);
  margin-bottom: 15px;
}
</style>