<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar"
};
</script>

<style>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f4;
  box-shadow: 0px -1.5px 2px rgba(0, 0, 0, 0.1);
  height: 49px;
}


</style>