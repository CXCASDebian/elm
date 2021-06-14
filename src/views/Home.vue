<template>
  <div class="home">
    <div class="header">
      <div class="address_map">
        <i class="fa fa-map-marker"></i>
        <span>收货地址</span>
        <i class="fa fa-sort-desc"></i>
      </div>
      <div class="shop_search">
        <i class="fa fa-search"></i>
        搜索商家 商家名称
      </div>
    </div>
  </div>
</template>

<script>
import ParentChild from './ParentChild'
export default {
  name: 'home',
  components: {
    ParentChild
  },
  mounted () {
    console.log('this',this);
    console.log('this.$parent',this.$parent);
    console.log('this.$children',this.$children);
    console.log('child',this.$children[$refs]);
  }
}
</script>

<style>
  
</style>