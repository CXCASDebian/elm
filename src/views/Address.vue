<template>
  <div class="address">
    <Header title="选择收货地址" v-bind:isLeft="true"/>
  </div>
</template>

<script>
import Header from "../components/Header"
export default {
  components: {
    Header
  }
}
</script>