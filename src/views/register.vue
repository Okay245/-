<template>
  <div>
    <h2 class="title">注册</h2>
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      @submit.native.prevent="onSubmit"
      :rules="rules"
      :style="{ paddingRight: '50px' }"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="8~16个字符"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio-button label="m">男</el-radio-button>
          <el-radio-button label="f">女</el-radio-button>
          <el-radio-button label="s">保密</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日" prop="birthday">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择日期"
          format="yyyy年MM月dd日"
          value-format="yyyy MM dd"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="6~16个字符"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pwdagain">
        <el-input v-model="form.pwdagain" placeholder="6~16个字符"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" type="primary">立即注册</el-button>
        <el-button @click="$emit('register')">马上登录</el-button>
        <el-button @click="clear">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from "../network/request";
export default {
  data() {
    let checkPwd = (rule, value, callback) => {
      // console.log(rule);
      if (!value) {
        callback(new Error("确认密码不能为空!"));
      } else if (value != this.form.password) {
        callback(new Error("两次密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      form: {
        username: "",
        sex: "",
        birthday: "",
        password: "",
        pwdagain: "",
      },
      //校验规则
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        birthday: [{ required: true, message: "请选择日期", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
        pwdagain: [{ required: true, validator: checkPwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    //提交时校验
    onSubmit() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log("成功");
          //校验成功时提交数据
          this.registerPost();
        } else {
          console.log("校验失败");
        }
      });
    },
    //清空当前表单信息
    clear() {
      let i = undefined;
      for (i in this.form) {
        this.form[i] = "";
      }
    },
    //提交表单数据的方法
    registerPost() {
      console.log(this.form);
      request({
        url: "/user/register",
        method: "post",
        data: {
          userName: this.form.username,
          birthday: this.form.birthday,
          password: this.form.password,
          pwdagain: this.form.pwdagain,
          gender: this.form.sex,
        },
      }).then(
        (value) => {
          console.log(value);
          if (value.data == "success") {
            alert("注册成功");
          } else {
            alert("注册失败");
          }
        },
        (reason) => {
          console.log(reason);
        }
      );
    },
  },
  created() {
    //取消浏览器默认行为
    document.onselectstart = function () {
      return false;
    };
  },
};
</script>

<style scoped>
.title {
  height: 40px;
  line-height: 40px;
  padding-left: 100px;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
}
</style>