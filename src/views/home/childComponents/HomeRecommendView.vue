<template>
  <div id="home-recommends">
    <div v-for="item in recommends" class="home-recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
     }
  }
}
</script>

<style>
  #home-recommends {
    display: flex;
    width: 100%;
    padding: 8px 0 20px 0;
    border-bottom: 10px solid #eee;
  }
  #home-recommends .home-recommends-item{
    flex: 1;
    text-align: center;
  }
  #home-recommends .home-recommends-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
  #home-recommends .home-recommends-item a {
    text-decoration: none;
    color: var(--color-text);
    font-size: 12px;
  }
</style>