<template>
  <div>
    3中插槽
    <slot>这是默认值</slot>
    <slot name="hello"></slot>
    <slot name="scope1" :msg="msg"></slot>
  </div>
</template>

<script>
export default {
  name: 'TheSlot',
  data () {
    return {
      msg: {
        a:'the test for props',
        b:'hhh'
      }
    }
  }
}
</script>

<style>
  div {
    background-color: aqua;
  }
</style>