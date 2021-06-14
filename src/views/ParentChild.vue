<template>
  <div class="wrapper">
    <div ref="child">
      hehehe
      <input type="number">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParentChild',
  mounted () {
    console.log(this.$refs);
  }
}
</script>

<style>
  .wrapper {
    background-color: red;
  }
</style>