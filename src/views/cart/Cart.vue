<template>
  <nav-bar class="cart">
    <div slot="middle">购物车</div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'Cart',
  components: {
    NavBar
  }
}
</script>

<style>
  .cart {
    background: red
  }
</style>