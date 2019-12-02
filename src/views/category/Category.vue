<template>
  <div class="category">
    <div class="left">
      <tab-control-column :titles="['分类一','分类二']"></tab-control-column>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import TabControlColumn from "components/content/tabControlColumn/TabControlColumn"

import {getAllCategory} from "network/category"

export default {
  name: "Category",
  data() {
    return {
    }
  },
  components: {
    TabControlColumn
  },
  created() {
    this.getAllCategories()
  },
  methods: {
    getAllCategories() {
      getAllCategory().then(res => {
        console.log(res)
      })
    }
  }
};
</script>

<style scoped>
  .category {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 49px;
  }
  .category .left {
    width: 30%;
  }
  .category .right {
    background-color: blue;
    width: 70%;
  }
</style>