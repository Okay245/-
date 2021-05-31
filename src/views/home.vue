<template>
  <div class="home">
    <el-container>
      <!-- 头部导航 -->
      <el-header class="myheader">
        <my-header></my-header>
      </el-header>
      <!-- 轮播图 -->
      <el-main class="mymain1">
        <carousel></carousel>
      </el-main>
      <!-- 商品列表 -->
      <el-main class="mymain2">
        <goods-list></goods-list>
      </el-main>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
import myHeader from "@/views/header";
import carousel from "./carousel";
import goodsList from "./goodsList";
export default {
  components: {
    myHeader,
    carousel,
    goodsList,
  },
};
</script>

<style scoped>
.mymain1 {
  width: 1200px;
  background-color: rgba(38, 17, 231, 0.1);
  margin: 0 auto;
}

.mymain2 {
  background-color: #f5f5f5;
  padding: 0;
  overflow: visible;
}

.el-header {
  padding: 0;
}
</style>