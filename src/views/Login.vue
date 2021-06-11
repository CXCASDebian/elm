<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login">
      <TheSlot>
        <div>我改变了默认值</div>
          <div slot="hello">我是具名插槽</div>
          <div slot="scope1" slot-scope="props">
          {{props.msg.b}}
        </div>
      </TheSlot>
    </div>
  </div>
</template>

<script>
import TheSlot from './TheSlot'
export default {
  name:'Login',
  components: {
    TheSlot
  }
}
</script>

<style>
  .login {
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;
  }

  .logo {
    text-align: center;
  }

  .logo img {
    width: 150px;
  }
</style>
