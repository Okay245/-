<template>
  <div>
    <el-menu :default-active="activeIndex" mode="horizontal" class="myheader">
      <el-image
        style="
          float: left;
          width: 50px;
          height: 50px;
          margin-top: 5px;
          margin-left: 5px;
          border-radius: 20%;
        "
        :src="url"
      ></el-image>

      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">购物车</el-menu-item>
      <div class="search">
        <el-input v-model="search" placeholder="请输入关键字"
          ><el-button slot="append" icon="el-icon-search"></el-button
        ></el-input>
      </div>

      <el-menu-item index="3" :style="{ float: 'right' }"
        >免费注册</el-menu-item
      >

      <el-menu-item index="4" :style="{ float: 'right' }"
        ><el-avatar size="medium" :src="circleUrl"></el-avatar
      ></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      url:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      search: "",
    };
  },
  methods: {},
  created: function () {},
};
</script>

<style scoped>
.floatright {
  float: right;
}
.search {
  float: left;
  height: 60px;
  min-width: 100px;
  line-height: 60px;
}
</style>