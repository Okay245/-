<template>
  <div>
<<<<<<< HEAD
    <el-menu :default-active="activeIndex" mode="horizontal" class="myheader" router="true">
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
      <el-menu-item index="/shoppingCart">购物车</el-menu-item>
      <div class="search">
        <el-input v-model="search" placeholder="请输入关键字"
          ><el-button slot="append" icon="el-icon-search"></el-button
        ></el-input>
      </div>
=======
    <div class="nav">
      <ul>
        <li><span>首页</span></li>
        <li><span>购物车</span></li>
      </ul>
    </div>
    <div class="navtoo">
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
        <el-menu-item index="./views/ShoppingCart.vue">购物车</el-menu-item>
        <div class="search">
          <el-input v-model="search" placeholder="请输入关键字"
            ><el-button slot="append" icon="el-icon-search"></el-button
          ></el-input>
        </div>
>>>>>>> 5ac9006fe33ab2281a995f7593edaf93305a13c4

        <el-menu-item index="3" :style="{ float: 'right' }" @click="skipLogin"
          >免费注册</el-menu-item
        >

        <el-menu-item index="4" :style="{ float: 'right' }" @click="skipLogin"
          ><el-avatar size="medium" :src="circleUrl"></el-avatar
        ></el-menu-item>
      </el-menu>
    </div>
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
  methods: {
    skipLogin() {
      this.$router.push("/login");
    },
  },
  created: function () {},
};
</script>

<style scoped>
.nav {
  height: 40px;
  background-color: rgba(0, 0, 0, 0.8);
}

.nav ul {
  width: 1200px;
  margin: 0 auto;
  list-style-type: none;
}

.nav ul li {
  float: left;
  /* width: 50px; */
  height: 40px;
  margin-right: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  line-height: 40px;
  transition: all 0.3s;
  cursor: pointer;
}

.nav ul li:hover {
  /* background-color: rgba(255, 255, 255, 0.8); */
  color: rgba(255, 255, 255, 1);
}

.navtoo {
  width: 1200px;
  margin: 0 auto;
}

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