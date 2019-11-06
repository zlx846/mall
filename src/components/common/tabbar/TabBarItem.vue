<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-active-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon"></slot>
    </div>
    <div :style="itemColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {}
  },
  props: {
    path: String,
    color: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      if(this.$route.path != this.path){
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    itemColor() {
      return this.isActive ? {color: this.color} : {}
    },
    isActive() {
      return !this.$route.path.indexOf(this.path)
    }
  }
}
</script>

<style>
#tabbar .tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 5px;
}

#tabbar .tabbar-item img {
  height: 28px;
  width: 28px;
  vertical-align: middle;
}

#tabbar .tabbar-item .isActive{
  color: red;
}
</style>