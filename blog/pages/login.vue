<template>
  <div class="login">
    <div class="login-container">
      <h2>Welcome login admin</h2>
      <el-form :form="loginForm">
         <el-form-item>
          <el-input v-model="loginForm.user" placeholder="please enter your account"></el-input>
         </el-form-item>
         <el-form-item>
           <el-input v-model="loginForm.password" placeholder="please enter your password" type="password"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button @click="login" type="primary" style="width: 100%;letter-spacing: 2px" >Login</el-button>
         </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="text/javascript">
  import login from '~/api/login'
  export default {
    data () {
      return {
        loginForm: {
          user: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        this.$store.dispatch('LOGIN', this.loginForm)
      }
    }
  }
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  position: relative;
  background: url(~assets/images/login_bg.jpg) no-repeat center/cover;
  h2 { margin: 20px auto; text-align: center; }
  &-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 260px;
    input {
      caret-color: #409EFF;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
      -webkit-text-fill-color: #000 !important;
      background-color: #fff;
    }
  }
}
</style>
