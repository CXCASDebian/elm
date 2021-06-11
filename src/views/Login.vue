<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login">
    </div>
    <InputGroup
      type="number"
      v-model="phone"
      placeholder="手机号"
      :btnTitle="btnTitle"
      :disabled="disabled"
      :error="errors.phone"
      @btnClick="getVerifyCode"
    />
    <!-- 验证码 -->
    <InputGroup
    type="number"
    v-model="verifyCode"
    placeholder="验证码"
    :error="errors.code"/>
    <!-- 用户服务协议 -->
    <div class="login_des">
      <p>
        新用户登录自动注册，表示已同意
        <span>《用户服务协议》</span>
      </p>
    </div>
    <!-- 登录按钮 -->
    <div class="login_btn" @click="handleLogIn">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup"
export default {
  name:'Login',
  data () {
    return {
      phone: "",
      verifyCode: "",
      errors: {},
      btnTitle: "获取验证码",
      disabled: false
    }
  },
  components: {
    InputGroup
  },
  mounted () {
    console.log(this.phone);
  },
  updated () {
    console.log(this.phone);
  },
  methods: {
    getVerifyCode () {
      if(this.validatePhone()){
        // 发送网络请求
        this.$axios.post('/api/post/sms_send',{
          sid:"70e9281073fe5e1546b7f657cae73897",
          token: "d1a5431e19d2005c3286794786111d79",
          appid: "099alaedcf1940a9eb83d857eb7b845",
          templateid: "522016",
          phone: this.phone
        }).then(res => {
          console.log(res);
          this.validateBtn();
        })
        
      }
    },
    validatePhone () {
      // 验证手机号码
      if(!this.phone){
        this.errors = {
          phone: "手机号码不能为空"
        }
        return false;
      }else if(!/^1[345678]\d{9}$/.test(this.phone)){
        this.errors = {
          phone: "请填写正确的手机号码"
        }
        return false;
      }else {
        this.errors = {}
        return true;
      }
      
    },
    validateBtn () {
      let time = 60;
      let timer = setInterval(() => {
        if(time ==0) {
          clearInterval(timer);
          this.btnTitle = "再次获取验证码";
          this.disabled = false;
        }else {
          this.btnTitle = time + "秒后重试";
          this.disabled = true;
          time--;
        }
      },1000)
    },
    handleLogIn () {
      if(this.verifyCode === '123456'){
        this.$router.push('/TheSlot')
      }else {
        this.errors = {
          code: '验证码错误'
        }
      }
    }
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
  .text_group,
  .login_des,
  .login_btn {
    margin-top: 20px;
  }

  .login_des {
    color: #aaa;
    line-height: 22px;
  }

  .login_des span {
    color: #4d90fe;
  }

  .login_btn button {
    width: 100%;
    height: 40px;
    background-color: #48ca38;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;

  }
</style>
