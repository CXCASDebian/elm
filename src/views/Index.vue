<template>
  <div class="index">
    <router-view></router-view>
    <tabbar :data="tabbarData"/>
    <TheSlot>
      <template v-slot:world>
        <div >hehe</div>
      </template>
      <template v-slot:scope1="property">
        <h1>{{property.msg.a}}</h1>
      </template>
    </TheSlot>
  </div>
</template>

<script>
import tabbar from '../components/TabBar.vue'
import TheSlot from './TheSlot.vue'
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
    tabbar,
    TheSlot
  }
}
</script>

<style scoped>
  .index {
    width: '100%';
    height: calc(100% - 45px );
  }
</style>