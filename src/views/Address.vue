<template>
  <div class="address">
    <Header title="选择收货地址" v-bind:isLeft="true"/>
    <div class="city_search">
      <div class="search">
        <span class="city">
          {{city}}
          <i class="fa fa-angle-down"></i>
        </span>
        <i class="fa fa-search"></i>
        <input type="text" v-model="search_val">
        {{search_val}}
        <i class="fa fa-search"></i>
        <input type="text" v-bind:value="sugar" v-on:input="sugar=$event.target.value">
      </div>
      <div>{{sugar + 1}}</div>
    </div>
    <Location/>
  </div>
</template>

<script>
import Header from "../components/Header"
export default {
  components: {
    Header
  },
  data () {
    return {
      city: '深圳', //当前城市
      sugar: 1,
      search_val: "" // 搜索城市
    };
  }
}
</script>

<style scopde>
  .address {
    margin-top: 50px;
  }
</style>