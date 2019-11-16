<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    box-shadow: 0px 1.5px 2px rgba(0, 0, 0, 0.3);
  }
  .left,.right {
    width: 60px;
    height: 100%;
    line-height: 44px;
  }
  .middle {
    flex: 1;
    text-align: center;
  }
</style>