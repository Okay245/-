<template>
  <div>
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
      <el-main>
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
  background-color: rgb(137, 185, 189);
}

.el-header {
  padding: 0;
}
</style>