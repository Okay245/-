<template>
  <div>
    <h2 class="title">注册</h2>
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
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio-button label="f">男</el-radio-button>
          <el-radio-button label="m">女</el-radio-button>
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
      <el-form-item>
        <el-button native-type="submit" type="primary">立即注册</el-button>
        <el-button @click="$emit('register')">马上登录</el-button>
        <el-button @click="clear">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        sex: "",
        birthday: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { required: true, message: "", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        birthday: [{ required: true, message: "请选择日期", trigger: "blur" }],
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
          console.log(this.form);
        } else {
          console.log("校验失败");
        }
      });
    },
    clear() {
      let i = undefined;
      for (i in this.form) {
        this.form[i] = "";
      }
    },
  },
  created() {
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
  padding-left: 80px;
  padding-bottom: 20px;
  padding-top: 20px;
  font-weight: 300;
}
</style>