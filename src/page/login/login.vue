<template>
  <div class="login">
    <h1>5G科技管理后台</h1>
    <div class="box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名" class="color"
          ><el-input v-model="form.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="color"
          ><el-input v-model="form.password"></el-input>
        </el-form-item>
        <div class="button">
          <el-button class="login_button" type="primary" @click="login_button"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "../../api";
import { mapMutations } from 'vuex'
export default {
  data() {
    //这里存放数据
    return {
      form: {
        user: "admin",
        password: "",
      },
    };
  },
  methods: {
   async login_button() {
      let result = await login(this.form)
      let token = result.token
      this.SET_TOKEN(token)
      this.$router.push('/')
    },
    ...mapMutations(['SET_TOKEN'])
  },
};
</script>
<style>
/*@import url(); 引入公共css类*/
h1 {
  padding: 35px;
  font-size: 40px;
  font-weight: bold;
  color: #eee;
}
.login {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login_bac.png") center no-repeat;
  background-size: 100% 100%;
}
.box {
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  right: 200px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  color: #fff;
  box-sizing: border-box;
  padding: 50px 30px;
}
.color .el-form-item__label {
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
}
.button {
  color: red;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.login_button {
  width: 50%;
}
</style>