<template>
  <el-container class="outer-con">
    <!-- <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true" @select="handleSelect">
        <el-menu-item class="el-menu-demo-item" index="1">首页</el-menu-item>
        <el-submenu index="2">
        <template class="el-menu-demo-item" slot="title">我的</template>
          <el-menu-item index="2-1">买过</el-menu-item>
          <el-menu-item index="2-2">足迹</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">收藏</template>
              <el-menu-item index="2-4-1">宝贝</el-menu-item>
              <el-menu-item index="2-4-2">店铺</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item class="el-menu-demo-item" index="3">
           消息
        </el-menu-item>
        <el-menu-item class="el-menu-demo-item"  index="/shoppingCart">
          
          <i class="el-icon-shopping-cart-1"></i>购物车
        </el-menu-item>
      </el-menu>
    </el-header> -->


   <el-container>
      <!-- <el-aside width="200px">
        <el-row class="demo-avatar demo-basic">
        
          <div class="demo-basic--circle">
           <div class="block">
             <el-avatar class="head" :size="150" :src="circleUrl"></el-avatar>
           </div>
          </div>

          <span class="user-name">userName</span>
        </el-row>
      </el-aside> -->

      <!-- <CorrectInfo></CorrectInfo> -->
      <el-container>
       <el-main>
          <table class="el-table"  :data="tableData" stripe style="width: 100%">
          <!-- <i class="el-icon-user"></i> -->
          <div class="el-table-row" prop="userName" label="用户名" width="180">用户名 :{{userName}}
          </div>
          <div class="el-table-row" prop="account" label="账号" width="180">账号 :
          </div>
          <div class="el-table-row" prop="consignee" label="收货人" width="180">收货人 :
          </div>
          <div class="el-table-row" prop="phoneNumber" label="手机号" width="180">手机号 :
          </div>
          <div class="el-table-row" prop="address" label="收货地址" width="180">收货地址 :
          </div>
          </table>
        </el-main>
       <!-- <el-footer>
        Footer
       </el-footer> -->
      </el-container>
   </el-container>
  </el-container>
</template>

<script>
// import personalIndexVue from './personalIndex.vue'
// import CorrectInfo from './CorrectInfo'
  
  export default {
    // components:{
    //   CorrectInfo,
    // },
    
    // data () {
    //   return {
    //     circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    //     sizeList: ["large", "medium", "small"]
    //  }
    // }
    data() {
      return {
        tableData: [{ 
          userName:'Tom'
        },{ 
          account:'135135135'
        },{ 
          consignee:'TT'
        },{ 
          phoneNumber:'1122334455'}]
      }
    }
  }

</script>


<style scoped> 
  /* Lang="less" (没有less相关的loder依赖会编译失败)支持less语法格式，scoped控制组件样式生效区间，在该组件生效，去掉则在全局生效 */
  .outer-con{
    height: 100%
  }
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /* line-height: 60px; */
  }

  .el-menu-demo{
    display: flex;
    /* -ms-flex-align: center; */
  }

  .el-menu-demo-item {
    flex:auto;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* height:650px; */
  }

  .demo-basic--circle {
   text-align-last: center;
   height: 200px;
  }

  .block {
    padding:20px;
    padding-top: 50px;
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
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
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

  .user-name{
    padding-left: 55px;
  }

  /* .el-icon-user{
    size: large;
  } */

  .el-table{
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
  }

  .el-table-row{
    text-align: left;
    padding-left: 100px;
  }
</style>