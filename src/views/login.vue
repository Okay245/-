<template>
  <div id="container" :style="{ height: height + 'px' }">
    <div
      ref="login"
      id="login"
      :style="{ transform: 'rotate(' + lo_deg + 'deg)' }"
    >
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
    </div>
    <div id="register" :style="{ transform: 'rotate(' + re_deg + 'deg)' }">
      <register @register="skipLogin"></register>
    </div>
  </div>
</template>

<script>
import register from "./register";
import { request } from "../network/request";
export default {
  data() {
    return {
      //一些动画旋转参数
      lo_deg: 0,
      re_deg: 90,
      height: 0,
      form: {
        username: "",
        password: "",
      },
      //校验规则
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
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log("成功");
          this.loginPost();
        } else {
          console.log("校验失败");
        }
      });
    },
    //跳转注册动画
    skipRegister() {
      let register = document.getElementById("register");
      let height = getComputedStyle(register, null)["height"];
      this.height = parseInt(height) + 2 + 6;
      this.lo_deg -= 90;
      this.re_deg -= 90;
      let login = document.getElementById("login");
      login.style.borderBottom = "none";
    },
    //跳转登录动画
    skipLogin() {
      let login = document.getElementById("login");
      login.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
      let height = getComputedStyle(login, null)["height"];
      this.height = parseInt(height) + 2 + 6;
      this.lo_deg += 90;
      this.re_deg += 90;
    },
    loginPost() {
      request({
        url: "/user/login",
        method: "post",
        data: {
          userName: this.form.username,
          password: this.form.password,
        },
      }).then(
        (value) => {
          console.log(value);
        },
        (reason) => {
          console.log(reason);
        }
      );
    },
  },
  components: {
    register,
  },
  created() {
    //清除浏览器默认行为
    document.onselectstart = function () {
      return false;
    };
  },
  mounted() {
    //通过js调整一些美化细节
    let login = this.$refs["login"];
    let height = getComputedStyle(login, null)["height"];
    this.height = parseInt(height) + 2 + 6;
  },
};
</script>

<style scoped>
#container {
  position: relative;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 100px;
}

#login {
  width: calc(100% - 6px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transform-origin: left bottom;
  transition: all 0.5s;
  box-sizing: border-box;
  margin: 3px;
}

#login:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 -3px 5px rgba(0, 0, 0, 0.1);
}

#login {
  position: absolute;
}
#register {
  position: absolute;
}
#register {
  width: calc(100% - 6px);
  position: absolute;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1;
  left: 0;
  top: 0;
  transform-origin: left bottom;
  transition: all 0.5s;
  box-sizing: border-box;
  margin: 3px;
}

#register:hover {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 -3px 5px rgba(0, 0, 0, 0.1);
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