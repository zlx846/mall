<template>
  <div id="carousel">
    <div class="carousel-items">
      <slot name="carousel-items"></slot>
    </div>
    <div class="carousel-indicator">
      <slot name="carousel-indicator"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      itemCount: 1,
    }
  },
  methods: {
    getItemCount() {
      let carouselItem = document.getElementsByClassName('carousel-item')
      this.itemCount = carouselItem.length
      console.log(this.itemCount)
    },
    getScreenSize() {
      return document.body.offsetWidth
    }
  },
  computed:{
    width() {
      return this.itemCount * this.getScreenSize()
    }
  },
  mounted() {
    this.getItemCount()
  }
}

</script>

<style>
  #carousel {
    overflow: hidden;
  }
  #carousel .carousel-items {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  
</style>