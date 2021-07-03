<template>
  <div id="app">
    <!-- header -->
    <app-header :poiInfo="poiInfo"></app-header>
    <!-- navigation -->
    <app-nav></app-nav>
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
      poiInfo:{}
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
      .then(response =>{
        // console.log(response)
        if(response.code == 0){
          // console.log(response.data)
          this.poiInfo = response.data.poi_info
          // console.log(this.poiInfo)
        }
      })
  }
}
</script>

<style>

</style>
