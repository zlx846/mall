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
.tab-control {
    display: flex;
    flex-direction: column;
  }
.tab-control .tab-control-item{
    line-height: 40px;
    font-size: 14px;
    padding: 5px;
  }
 .tab-control .active {
    color: var(--color-high-text);
  }
 .tab-control .active span {
    border-bottom: 2px solid var(--color-tint);
    padding: 5px;
  }
  
</style>