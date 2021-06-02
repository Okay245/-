<template>
  <el-container class="outer-con">
    <el-main>
      <table class="el-table" :data="tableData" stripe style="width: 100%">
        <!-- <i class="el-icon-user"></i> -->
        <div class="el-table-row" prop="userName" label="用户名" width="180">
          用户名 :{{ userName }}
        </div>
        <div class="el-table-row" prop="account" label="账号" width="180">
          账号 :
        </div>
        <div class="el-table-row" prop="consignee" label="收货人" width="180">
          收货人 :
        </div>
        <div class="el-table-row" prop="phoneNumber" label="手机号" width="180">
          手机号 :
        </div>
        <div class="el-table-row" prop="address" label="收货地址" width="180">
          收货地址 :
        </div>
      </table>
    </el-main>
    <!-- <el-footer>
        Footer
       </el-footer> -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          userName: "Tom",
        },
        {
          account: "135135135",
        },
        {
          consignee: "TT",
        },
        {
          phoneNumber: "1122334455",
        },
      ],
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