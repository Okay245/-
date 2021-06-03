<template>
  <el-container class="outer-con">
    <el-main>
      <table class="el-table" :data="tableData" stripe style="width: 100%">
        <!-- <i class="el-icon-user"></i> -->
        <div class="el-table-row" label="用户名">用户名 : {{ userName }}</div>
        <div class="el-table-row" label="账号">账号 : {{ account }}</div>
        <div class="el-table-row" label="收货人">收货人 : {{ consignee }}</div>
        <div class="el-table-row" label="手机号">
          手机号 : {{ phoneNumber }}
        </div>
        <div class="el-table-row" label="收货地址">
          收货地址 : {{ address }}
        </div>
      </table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      userName: "Tom",
      account: "135135135",
      consignee: "TT",
      phoneNumber: "1122334455",
      address: "...",
    };
  },
};
</script>


<style scoped>
/* Lang="less" (没有less相关的loder依赖会编译失败)支持less语法格式，scoped控制组件样式生效区间，在该组件生效，去掉则在全局生效 */
.outer-con {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  /* line-height: 60px; */
}

.el-menu-demo {
  display: flex;
  /* -ms-flex-align: center; */
}

.el-menu-demo-item {
  flex: auto;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  /* height:650px; */
}

.demo-basic--circle {
  text-align-last: center;
  height: 200px;
}

.block {
  /* padding:20px; */
  /* padding-top: 50px; */
  margin: 0px;
  height: 150px;
}

/* .user-name{
    
  } */

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 120px;
}

/* .el-table {
    background-color: #E9EEF3; */
/* width: 500px; */
/* height: 800px; */

/* .el-table-row :nth-child(2n){
    background-color: #FFFFFF;
  }

  .el-table-row :nth-child(2n+1){
    background-color: #D3DCE6;
  } */

.user-name {
  padding-left: 55px;
}

/* .el-icon-user{
    size: large;
  } */

.el-table {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}

.el-table-row {
  text-align: left;
  padding-left: 100px;
}
</style>