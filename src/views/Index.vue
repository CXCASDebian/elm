<template>
  <div class="index">
    <router-view></router-view>
    <tabbar :data="tabbarData"/>
  </div>
</template>

<script>
import tabbar from '../components/TabBar.vue'
export default {
  name: 'index',
  data () {
    return {
      tabbarData: [
        {title: '首页',icon:"home",path:"/home"},
        {title: '订单',icon:"file-text-o",path:"/order"},
        {title: '我都',icon:"user",path:"/me"},
      ]
    }
  },
  components: {
    tabbar
  }
}
</script>

<style>
  .index {
    width: '100%';
    height: calc(100% - 45px );
  }
</style>