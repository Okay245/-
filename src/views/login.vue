<template>
  <div id="box">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="用户名">
        <el-col :span="6"><el-input v-model="form.username"></el-input></el-col>
      </el-form-item>
      <el-form-item label="密码">
        <el-col :span="6"><el-input v-model="form.password"></el-input></el-col>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit">立即登录</el-button>
        <el-button>还没注册</el-button>
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
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
};
</script>

<style scoped>
#box {
  border: 1px solid black;
}
</style>