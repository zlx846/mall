<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key=index @click="itemClick(index)" 
    :class="{'tab-control-item': true, active: index === isActive}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive : 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.isActive = index
      return this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  #home .tab-control {
    display: flex;
    text-align: center;
  }
  #home .tab-control .tab-control-item{
    flex: 1;
    height: 40px;
    width: 15px;
    line-height: 40px;
    font-size: 14px;
  }
  #home .tab-control .active {
    color: var(--color-high-text);
  }
  #home .tab-control .active span {
    border-bottom: 2px solid var(--color-tint);
    padding: 5px;
  }
  
</style>