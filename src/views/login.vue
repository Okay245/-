<template>
  <div id="container">
    <div id="login">
      <h2 class="title">登录</h2>
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        @submit.native.prevent="onSubmit"
        :rules="rules"
        :style="{ paddingRight: '50px' }"
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
      <div id="register" :style="{ transform: 'rotate(90deg)' }">
        <register></register>
      </div>
    </div>
  </div>
</template>

<script>
import register from "./register";
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
      this.$refs["from"].validate((valid) => {
        if (valid) {
          console.log("成功");
        } else {
          console.log("校验失败");
        }
      });
    },
    skipRegister() {},
  },
  components: {
    register,
  },
  created() {
    document.onselectstart = function () {
      return false;
    };
  },
};
</script>

<style scoped>
#container {
  position: relative;
}

#login {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 200px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.5s;
}

#login:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 -3px 5px rgba(0, 0, 0, 0.1);
}

#login {
  position: relative;
  z-index: 0;
}
#register {
  width: 100%;
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  transform-origin: left bottom;
  transition: all 0.5s;
}

.title {
  height: 40px;
  line-height: 40px;
  padding-left: 80px;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
}
</style>