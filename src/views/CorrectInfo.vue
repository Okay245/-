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
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="保密" value="unknown"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="生日">
        <el-col :span="11">
          <el-form-item prop="birthday" :required="false">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.birthday"
              style="width: 100%"
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

      <!-- <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item> -->

      <!-- 父子组件通信：子传父 -->
      <el-form-item label="收货地址" prop="address" required>
        <position class="position"></position>
      </el-form-item>

      <el-form-item label="详细地址" prop="DEaddress">
        <el-input
          type="textarea"
          v-model="ruleForm.DEaddress"
          style="width: 80%"
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
        default: false,
        address: "",
        DEaddress: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: false, message: "请选择性别", trigger: "change" }],
        birthday: [
          {
            type: "date",
            required: false,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        phoneNumber: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请填写正确手机号", trigger: "blur" },
        ],
        address: [{ type: "Arry", required: true, message: "请选择地址" }],
        DEaddress: [
          { required: true, message: "请填写详细地址", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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