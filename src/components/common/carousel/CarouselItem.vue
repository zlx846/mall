<template>
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#carousel .carousel-item {
  width: 100%;
}
#carousel .carousel-item img {
  width: 100%;
  height: 200px;
}
</style>