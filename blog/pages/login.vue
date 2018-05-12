<template>
  <div class="login">
    <div class="login-container">
      <h2>Welcome login admin</h2>
      <el-form>
         <el-form-item>
          <el-input placeholder="please enter your account"></el-input>
         </el-form-item>
         <el-form-item>
           <el-input placeholder="please enter your password"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" style="width: 100%;letter-spacing: 2px" >Login</el-button>
         </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data () {}
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
  }
}
</style>
