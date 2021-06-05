<template>
  <div class="body">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="140px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入用户名"
          style="width: 80%"
        ></el-input>
      </el-form-item>

      <el-form-item label="性别" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="m"></el-option>
          <el-option label="女" value="f"></el-option>
          <el-option label="保密" value="s"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="生日">
        <el-col :span="11">
          <el-form-item prop="birthday">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.birthday"
              style="width: 100%"
              format="yyyy年MM月dd日"
              value-format="yyyy MM dd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="手机号" prop="phoneNumber">
        <el-input
          v-model="ruleForm.phoneNumber"
          placeholder="请输入手机号"
          style="width: 80%"
        ></el-input>
      </el-form-item>

      <!-- 父子组件通信：子传父 -->
      <el-form-item label="收货地址" prop="address">
        <position class="position" @change="setadd($event)"></position>
      </el-form-item>

      <el-form-item label="收货人" prop="consignee">
        <el-input
          v-model="ruleForm.consignee"
          style="width: 80%"
          placeholder="非必填"
        ></el-input>
      </el-form-item>

      <el-form-item label="新密码" prop="newpass">
        <el-input
          v-model="ruleForm.newpass"
          style="width: 80%"
          placeholder="非必填"
        ></el-input>
      </el-form-item>

      <el-form-item label="默认地址" prop="default">
        <el-switch v-model="ruleForm.default"></el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 父子组件通信：子传父，引入子组件
import position from "./positionChosing.vue";
import { request, reqnode } from "../network/request";
export default {
  components: {
    position,
  },
  data() {
    return {
      ruleForm: {
        name: "",
        sex: "",
        birthday: "",
        phoneNumber: "",
        default: false, //非必
        address: "",
        consignee: "",
        newpass: "",
      },
      rules: {
        newpass: [
          { required: false, message: "请输入用户名", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [{ required: true, message: "请选择日期", trigger: "blur" }],
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请填写正确手机号", trigger: "blur" },
        ],
        address: [{ required: true, message: "请选择地址" }],
        consignee: [
          { required: false, message: "请填写详细地址", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          reqnode({
            url: "/getsession",
          }).then((value) => {
            if (value.data.status == 1) {
              request({
                url: "/user/changeInfo/" + value.data.uid,
                method: "post",
                data: {
                  userName: this.ruleForm.name,
                  gender: this.ruleForm.sex,
                  birthday: this.ruleForm.birthday,
                  password: this.ruleForm.newpass,
                  consignee: this.ruleForm.consignee,
                  phoneNumber: this.ruleForm.phoneNumber,
                  address: this.ruleForm.address,
                },
              }).then((value) => {
                // console.log(value);
                if (value.data == "success") {
                  alert("修改成功,请刷新查看");
                } else {
                  alert("修改失败,请重试");
                }
              });
            } else {
              alert("未登录");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    setadd(value) {
      let address = value.join("/");
      this.ruleForm.address = address;
      // console.log(address);
    },
  },
};
</script>

<style scoped>
.body {
  padding-top: 50px;
  padding-left: 30px;
}
</style>