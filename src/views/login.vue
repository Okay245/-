<template>
  <div id="container">
    <el-form
      ref="login"
      :model="form"
      label-width="80px"
      @submit.native.prevent="onSubmit"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="8~16个字符"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="6~16个字符"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" type="primary">立即登录</el-button>
        <el-button @click="skipRegister">还没注册</el-button>
      </el-form-item>
    </el-form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { required: true, message: "", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs["login"].validate((valid) => {
        if (valid) {
          console.log("成功");
        } else {
          console.log("校验失败");
        }
      });
    },
    skipRegister() {},
  },
  created() {
    console.log(this);
    document.onselectstart = function () {
      return false;
    };
  },
};
</script>

<style scoped>
#container {
  max-width: 500px;
  padding-right: 50px;
  padding-top: 20px;
  margin: 0 auto;
  margin-top: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
}

#container:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 -3px 5px rgba(0, 0, 0, 0.1);
}
</style>