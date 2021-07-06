<template>
  <div id="app">
    <!-- header -->
    <app-header :poiInfo="poiInfo"></app-header>
    <!-- navigation -->
    <app-nav :commentNum="commentNum"></app-nav>
    <!-- content -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Nav from '@/components/nav/Nav'

export default {
  name: 'App',
  data(){
    return{
      poiInfo:{},
      commentNum: 0
    }
  },
  components: {
    "app-header":Header,
    "app-nav":Nav
  },
  created(){
    // axios

    // fetch
    fetch("/api/goods")
      .then(res => {
        return res.json()
      })
      .then(res =>{
        // console.log(res)
        if(res.code == 0){
          // console.log(res.data)
          this.poiInfo = res.data.poi_info
          // console.log(this.poiInfo)
        }
      })

    // 获取rating的数据
    fetch("/api/ratings")
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.code == 0){
          this.commentNum = res.data.comment_num
        }
      })
  }
}
</script>

<style>

</style>
